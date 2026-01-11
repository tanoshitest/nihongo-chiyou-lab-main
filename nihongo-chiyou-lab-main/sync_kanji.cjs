
const fs = require('fs');
const path = require('path');

const kanjiDataPath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;

// Master List from User
// Format: Lesson Number -> String of Kanji
const masterListRaw = {
    1: "一 二 三 四 五 六 七 八 九 十 百 千 万 円 口 目",
    2: "日 月 火 水 木 金 土 曜 本 人 今 寺 時 半 刀 分",
    3: "上 下 中 外 右 工 左 前 後 午 門 間 東 西 南 北",
    4: "田 力 男 女 子 学 生 先 何 父 母 年 去 毎 王 国",
    5: "見 行 米 来 良 食 飲 会 耳 聞 言 話 立 待 周 週",
    6: "大 小 高 安 新 古 元 気 多 少 広 早 長 明 好 友",
    7: "入 出 市 町 村 雨 電 車 馬 駅 社 校 店 銀 病 院",
    8: "休 走 起 貝 買 売 読 書 帰 勉 弓 虫 強 持 名 語",
    9: "春 夏 秋 冬 朝 昼 夕 方 晩 夜 心 手 足 体 首 道",
    10: "山 川 林 森 空 海 化 花 天 赤 青 白 黒 色 魚 犬",
    11: "料 理 反 飯 牛 豚 鳥 肉 茶 予 野 菜 切 作 未 味",
    12: "音 楽 歌 自 転 乗 写 真 台 央 映 画 羊 洋 服 着",
    13: "家 矢 族 親 兄 姉 弟 妹 私 夫 妻 主 住 糸 氏 紙",
    14: "教 室 羽 習 漢 字 式 試 験 宿 題 文 英 質 問 説",
    15: "通 近 者 暑 寒 重 軽 低 弱 悪 暗 太 豆 短 光 風",
    16: "運 動 止 歩 使 送 洗 急 開 閉 押 引 思 知 考 死",
    17: "医 始 終 石 研 究 留 有 産 業 薬 働 員 資 仕 事",
    18: "図 官 館 昔 借 代 貸 地 世 界 度 回 用 民 注 意",
    19: "頭 顔 声 特 別 竹 金 答 正 同 計 京 集 不 便 以",
    20: "場 戸 所 屋 堂 都 県 区 池 発 建 物 品 旅 通 進", // Note: '通' appears here again in User list, but was in Lesson 15. We will handle duplicates.
    21: "丸 熱 冷 甘 汚 果 卵 皿 酒 塩 付 片 焼 消 固 個",
    22: "笑 泣 怒 幸 悲 苦 痛 恥 配 困 辛 眠 残 念 感 情",
    23: "覚 忘 決 定 比 受 技 徒 練 復 表 卒 違 役 皆 彼",
    24: "全 部 必 要 荷 由 届 利 払 濯 寝 踊 活 末 宅 祭",
    25: "平 和 戦 争 政 治 経 済 法 律 際 関 係 義 議 党",
    26: "遊 泳 疲 暖 涼 静 公 園 込 連 窓 側 葉 景 記 形",
    27: "吉 結 婚 共 供 両 若 老 息 娘 奥 将 祖 育 性 招",
    28: "取 最 初 番 歳 枚 冊 億 点 階 段 号 倍 次 々 他",
    29: "勝 負 賛 成 絶 対 続 辞 投 選 約 束 守 過 夢 的", // Changed 統 -> 続 based on context
    30: "飛 機 失 鉄 速 運 駐 治 船 座 席 島 陸 港 橋 交",
    31: "申 神 様 信 調 査 相 談 案 内 君 達 星 雪 降 直",
    32: "危 険 拾 捨 戻 吸 放 変 街 髪 絵 横 当 伝 細 無"
};

// Data for MISSING Kanji (approx 140)
// Populated with basic correct data. Verification recommended later.
const missingKanjiData = {
    // Lesson 1
    "万": { onyomi: "マン, バン", kunyomi: "-", meaning: "Vạn, Mười nghìn", sino: "VẠN" },
    "円": { onyomi: "エン", kunyomi: "まる.い", meaning: "Yên (tiền Nhật), Tròn", sino: "VIÊN" },
    // Lesson 2
    "今": { onyomi: "コン, キン", kunyomi: "いま", meaning: "Bây giờ, Kim", sino: "KIM" },
    "寺": { onyomi: "ジ", kunyomi: "てら", meaning: "Chùa", sino: "TỰ" },
    "時": { onyomi: "ジ", kunyomi: "とき", meaning: "Thời gian, Giờ", sino: "THỜI" },
    "刀": { onyomi: "トウ", kunyomi: "かたな", meaning: "Kiếm, Đao", sino: "ĐAO" },
    // Lesson 3
    "外": { onyomi: "ガイ, ゲ", kunyomi: "そと, ほか", meaning: "Ngoài", sino: "NGOẠI" },
    "右": { onyomi: "ウ, ユウ", kunyomi: "みぎ", meaning: "Phải", sino: "HỮU" },
    "工": { onyomi: "コウ, ク", kunyomi: "-", meaning: "Công (công trường)", sino: "CÔNG" },
    "左": { onyomi: "サ", kunyomi: "ひだり", meaning: "Trái", sino: "TẢ" },
    "前": { onyomi: "ゼン", kunyomi: "まえ", meaning: "Trước", sino: "TIỀN" },
    "後": { onyomi: "ゴ, コウ", kunyomi: "うし.ろ, あと", meaning: "Sau", sino: "HẬU" },
    "午": { onyomi: "ゴ", kunyomi: "-", meaning: "Ngọ (trưa)", sino: "NGỌ" },
    "東": { onyomi: "トウ", kunyomi: "ひがし", meaning: "Đông", sino: "ĐÔNG" },
    "西": { onyomi: "セイ, サイ", kunyomi: "にし", meaning: "Tây", sino: "TÂY" },
    // Lesson 4
    "年": { onyomi: "ネン", kunyomi: "とし", meaning: "Năm", sino: "NIÊN" },
    "去": { onyomi: "キョ, コ", kunyomi: "さ.る", meaning: "Quá khứ, Rời đi", sino: "KHỨ" },
    "毎": { onyomi: "マイ", kunyomi: "-", meaning: "Mỗi", sino: "MỖI" },
    "王": { onyomi: "オウ", kunyomi: "-", meaning: "Vua", sino: "VƯƠNG" },
    "国": { onyomi: "コク", kunyomi: "くに", meaning: "Quốc gia, Nước", sino: "QUỐC" },
    // Lesson 9
    "道": { onyomi: "ドウ", kunyomi: "みち", meaning: "Đường, Đạo", sino: "ĐẠO" },
    // Lesson 10
    "海": { onyomi: "カイ", kunyomi: "うみ", meaning: "Biển", sino: "HẢI" },
    // Lesson 11
    "豚": { onyomi: "トン", kunyomi: "ぶた", meaning: "Lợn (Heo)", sino: "ĐỒN" },
    "切": { onyomi: "セツ, サイ", kunyomi: "き.る", meaning: "Cắt", sino: "THIẾT" },
    "未": { onyomi: "ミ", kunyomi: "いま.だ", meaning: "Chưa, Vị lai", sino: "VỊ" },
    // Lesson 15
    "通": { onyomi: "ツウ", kunyomi: "とお.る, かよ.う", meaning: "Thông qua, Đi lại", sino: "THÔNG" }, // Also in 20?
    "光": { onyomi: "コウ", kunyomi: "ひかり, ひか.る", meaning: "Ánh sáng", sino: "QUANG" },
    // Lesson 17
    "資": { onyomi: "シ", kunyomi: "-", meaning: "Tài sản, Tư bản", sino: "TƯ" },
    // Lesson 18
    "官": { onyomi: "カン", kunyomi: "-", meaning: "Quan chức", sino: "QUAN" },
    "館": { onyomi: "カン", kunyomi: "やかた", meaning: "Tòa nhà, Quán", sino: "QUÁN" },
    "昔": { onyomi: "セキ, シャク", kunyomi: "むかし", meaning: "Ngày xưa", sino: "TÍCH" },
    "借": { onyomi: "シャク", kunyomi: "か.りる", meaning: "Mượn", sino: "TÁ" },
    "代": { onyomi: "ダイ, タイ", kunyomi: "か.わる", meaning: "Thay thế, Thời đại", sino: "ĐẠI" },
    "貸": { onyomi: "タイ", kunyomi: "か.す", meaning: "Cho mượn", sino: "THẢI" },
    "地": { onyomi: "チ, ジ", kunyomi: "-", meaning: "Đất, Địa", sino: "ĐỊA" },
    "世": { onyomi: "セイ, セ", kunyomi: "よ", meaning: "Thế giới, Đời", sino: "THẾ" },
    "界": { onyomi: "カイ", kunyomi: "-", meaning: "Giới (thế giới)", sino: "GIỚI" },
    "度": { onyomi: "ド, ト, タク", kunyomi: "たび", meaning: "Độ, Lần", sino: "ĐỘ" },
    "回": { onyomi: "カイ, エ", kunyomi: "まわ.る", meaning: "Lần, Vòng quanh", sino: "HỒI" },
    "用": { onyomi: "ヨウ", kunyomi: "もち.いる", meaning: "Sử dụng", sino: "DỤNG" },
    "民": { onyomi: "ミン", kunyomi: "たみ", meaning: "Dân", sino: "DÂN" },
    "注": { onyomi: "チュウ", kunyomi: "そそ.ぐ", meaning: "Chú ý, Rót", sino: "CHÚ" },
    "意": { onyomi: "イ", kunyomi: "-", meaning: "Ý nghĩa, Ý kiến", sino: "Ý" },
    // Lesson 19
    "以": { onyomi: "イ", kunyomi: "-", meaning: "Dĩ (Lấy làm mốc)", sino: "DĨ" },
    // Lesson 20
    "池": { onyomi: "チ", kunyomi: "いけ", meaning: "Cái ao", sino: "TRÌ" },
    "発": { onyomi: "ハツ, ホツ", kunyomi: "-", meaning: "Phát (xuất phát)", sino: "PHÁT" },
    "建": { onyomi: "ケン, コン", kunyomi: "た.てる", meaning: "Xây dựng", sino: "KIẾN" },
    "品": { onyomi: "ヒン", kunyomi: "しな", meaning: "Sản phẩm, Hàng hóa", sino: "PHẨM" },
    "旅": { onyomi: "リョ", kunyomi: "たび", meaning: "Du lịch", sino: "LỮ" },
    "進": { onyomi: "シン", kunyomi: "すす.む", meaning: "Tiến lên", sino: "TIẾN" },
    // Lesson 21
    "丸": { onyomi: "ガン", kunyomi: "まる, まる.い", meaning: "Tròn", sino: "HOÀN" },
    "熱": { onyomi: "ネツ", kunyomi: "あつ.い", meaning: "Nóng (nhiệt độ)", sino: "NHIỆT" },
    "冷": { onyomi: "レイ", kunyomi: "つめ.たい, ひ.える", meaning: "Lạnh, Nguội", sino: "LÃNH" },
    "甘": { onyomi: "カン", kunyomi: "あま.い", meaning: "Ngọt", sino: "CAM" },
    "汚": { onyomi: "オ", kunyomi: "きたな.い, よご.れる", meaning: "Bẩn", sino: "Ô" },
    "果": { onyomi: "カ", kunyomi: "は.たす", meaning: "Qủa, Kết quả", sino: "QUẢ" },
    "卵": { onyomi: "ラン", kunyomi: "たまご", meaning: "Trứng", sino: "NOÃN" },
    "皿": { onyomi: "ベイ", kunyomi: "さら", meaning: "Cái đĩa", sino: "MÃNH" }, // Duplication check: 皿 might be in file but unassigned? check_kanji said present was 皿 is "Present" in file. Wait, in L21 present was "皿 酒 塩 消". Wait, user said "皿" is present. My data has it.
    "塩": { onyomi: "エン", kunyomi: "しお", meaning: "Muối", sino: "DIÊM" }, // Present
    "付": { onyomi: "フ", kunyomi: "つ.く", meaning: "Gắn vào", sino: "PHÓ" },
    "片": { onyomi: "ヘン", kunyomi: "かた", meaning: "Một bên, Mảnh", sino: "PHIẾN" },
    "焼": { onyomi: "ショウ", kunyomi: "や.く", meaning: "Nướng", sino: "THIÊU" },
    "固": { onyomi: "コ", kunyomi: "かた.い", meaning: "Cứng", sino: "CỐ" },
    "個": { onyomi: "コ", kunyomi: "-", meaning: "Cá nhân, Cái", sino: "CÁ" },
    // Lesson 22
    "笑": { onyomi: "ショウ", kunyomi: "わら.う", meaning: "Cười", sino: "TIẾU" },
    "泣": { onyomi: "キュウ", kunyomi: "な.く", meaning: "Khóc", sino: "KHẤP" },
    "怒": { onyomi: "ド", kunyomi: "おこ.る", meaning: "Giận", sino: "NỘ" },
    "悲": { onyomi: "ヒ", kunyomi: "かな.しい", meaning: "Buồn", sino: "BI" },
    "苦": { onyomi: "ク", kunyomi: "くる.しい, にが.い", meaning: "Khổ, Đắng", sino: "KHỔ" },
    "痛": { onyomi: "ツウ", kunyomi: "いた.い", meaning: "Đau", sino: "THỐNG" }, // Present? No, user report says missing. "THIẾU: ... 痛 ..."
    "恥": { onyomi: "チ", kunyomi: "は.ずかしい", meaning: "Xấu hổ", sino: "SỈ" },
    "配": { onyomi: "ハイ", kunyomi: "くば.る", meaning: "Phân phối", sino: "PHỐI" }, // Missing? Report says present: "Có sẵn: ... 配 ..."
    "困": { onyomi: "コン", kunyomi: "こま.る", meaning: "Khó khăn", sino: "KHỐN" }, // Report says present
    "辛": { onyomi: "シン", kunyomi: "から.い", meaning: "Cay", sino: "TÂN" },
    "眠": { onyomi: "ミン", kunyomi: "ねむ.い", meaning: "Buồn ngủ", sino: "MIÊN" },
    "残": { onyomi: "ザン", kunyomi: "のこ.る", meaning: "Còn lại", sino: "TÀN" },
    "念": { onyomi: "ネン", kunyomi: "-", meaning: "Ý niệm", sino: "NIỆM" }, // Present
    "感": { onyomi: "カン", kunyomi: "-", meaning: "Cảm giác", sino: "CẢM" },
    "情": { onyomi: "ジョウ", kunyomi: "なさ.け", meaning: "Tình cảm", sino: "TÌNH" },
    // Lesson 23
    "技": { onyomi: "ギ", kunyomi: "わざ", meaning: "Kỹ thuật", sino: "KỸ" },
    // Lesson 25
    "和": { onyomi: "ワ, オ", kunyomi: "やわ.らぐ", meaning: "Hòa bình, Nhật", sino: "HÒA" },
    "関": { onyomi: "カン", kunyomi: "せき", meaning: "Liên quan", sino: "QUAN" },
    "義": { onyomi: "ギ", kunyomi: "-", meaning: "Nghĩa", sino: "NGHĨA" },
    "議": { onyomi: "ギ", kunyomi: "-", meaning: "Nghị luận", sino: "NGHỊ" },
    "党": { onyomi: "トウ", kunyomi: "-", meaning: "Đảng", sino: "ĐẢNG" },
    // Lesson 26
    "記": { onyomi: "キ", kunyomi: "しる.す", meaning: "Ghi chép", sino: "KÝ" },
    "形": { onyomi: "ケイ, ギョウ", kunyomi: "かたち", meaning: "Hình dáng", sino: "HÌNH" },
    // Lesson 27
    "共": { onyomi: "キョウ", kunyomi: "とも", meaning: "Cùng nhau", sino: "CỘNG" },
    "性": { onyomi: "セイ, ショウ", kunyomi: "-", meaning: "Tính chất, Giới tính", sino: "TÍNH" },
    // Lesson 28
    "歳": { onyomi: "サイ", kunyomi: "-", meaning: "Tuổi", sino: "TUẾ" },
    "枚": { onyomi: "マイ", kunyomi: "-", meaning: "Tờ, Tấm", sino: "MAI" },
    "冊": { onyomi: "サツ", kunyomi: "-", meaning: "Quyển (sách)", sino: "SÁCH" },
    "億": { onyomi: "オク", kunyomi: "-", meaning: "Trăm triệu", sino: "ỨC" },
    "点": { onyomi: "テン", kunyomi: "-", meaning: "Điểm", sino: "ĐIỂM" },
    "階": { onyomi: "カイ", kunyomi: "-", meaning: "Giai, Tầng", sino: "GIAI" },
    "段": { onyomi: "ダン", kunyomi: "-", meaning: "Giai đoạn, Bậc", sino: "ĐOẠN" },
    "号": { onyomi: "ゴウ", kunyomi: "-", meaning: "Số, Hiệu", sino: "HIỆU" },
    "倍": { onyomi: "バイ", kunyomi: "-", meaning: "Gấp đôi", sino: "BỘI" },
    "次": { onyomi: "ジ", kunyomi: "つぎ", meaning: "Tiếp theo", sino: "THỨ" },
    "他": { onyomi: "タ", kunyomi: "ほか", meaning: "Khác", sino: "THA" },
    // Lesson 29
    "続": { onyomi: "ゾク", kunyomi: "つづ.く", meaning: "Tiếp tục", sino: "TỤC" }, // Using 続 as determined
    // Lesson 31
    "査": { onyomi: "サ", kunyomi: "-", meaning: "Kiểm tra", sino: "TRA" },
    "相": { onyomi: "ソウ, ショウ", kunyomi: "あい", meaning: "Tương", sino: "TƯƠNG" },
    "星": { onyomi: "セイ", kunyomi: "ほし", meaning: "Ngôi sao", sino: "TINH" },
    "直": { onyomi: "チョク, ジキ", kunyomi: "なお.す", meaning: "Sửa chữa, Trực tiếp", sino: "TRỰC" },
    // Lesson 32
    "放": { onyomi: "ホウ", kunyomi: "はな.す", meaning: "Phóng, Buông", sino: "PHÓNG" },
    "変": { onyomi: "ヘン", kunyomi: "か.わる", meaning: "Biến đổi, Lạ", sino: "BIẾN" },
    "街": { onyomi: "ガイ", kunyomi: "まち", meaning: "Phố", sino: "NHA" },
    "髪": { onyomi: "ハツ", kunyomi: "かみ", meaning: "Tóc", sino: "PHÁT" },
    "絵": { onyomi: "カイ, エ", kunyomi: "-", meaning: "Tranh", sino: "HỘI" },
    "横": { onyomi: "オウ", kunyomi: "よこ", meaning: "Ngang", sino: "HOÀNH" },
    "当": { onyomi: "トウ", kunyomi: "あ.たる", meaning: "Đương, Trúng", sino: "ĐƯƠNG" },
    "細": { onyomi: "サイ", kunyomi: "ほそ.い", meaning: "Nhỏ, Mịn", sino: "TẾ" },
    "無": { onyomi: "ム, ブ", kunyomi: "な.い", meaning: "Vô, Không có", sino: "VÔ" }
};

async function syncKanji() {
    let rawData = fs.readFileSync(kanjiDataPath, 'utf8');

    // 1. Extract existing data
    // We need to preserve mnemonics/examples if possible, so parsing loosely
    // This is a TS file, so we can't just JSON.parse.
    // We have to use regex to find objects.

    // Strategy: Read all objects into a Map based on 'kanji' key.
    const existingMap = new Map();
    const objectRegex = /{\s*id:[\s\S]*?kanji:\s*"(.+?)"[\s\S]*?},/g;
    let match;
    while ((match = objectRegex.exec(rawData)) !== null) {
        const fullBlock = match[0];
        const kanjiChar = match[1];
        existingMap.set(kanjiChar, fullBlock);
    }

    console.log(`Loaded ${existingMap.size} existing kanji entries.`);

    // 2. Build the new list
    const newEntries = [];
    let globalIdDetails = 1;

    for (let lesson = 1; lesson <= 32; lesson++) {
        const kanjiString = masterListRaw[lesson];
        if (!kanjiString) continue;
        const kanjis = kanjiString.split(' ');

        for (const k of kanjis) {
            let entryBlock = '';

            if (existingMap.has(k)) {
                // Reuse existing block, but UPDATE ID and LESSON
                let block = existingMap.get(k);
                // Regex replace id
                block = block.replace(/id:\s*\d+/, `id: ${globalIdDetails}`);
                // Regex replace lesson or add if missing
                if (block.match(/lesson:\s*\d+/)) {
                    block = block.replace(/lesson:\s*\d+/, `lesson: ${lesson}`);
                } else {
                    // insert lesson after kanji
                    block = block.replace(/(kanji:\s*".+?",)/, `$1\n    lesson: ${lesson},`);
                }
                entryBlock = block;
            } else {
                // Create NEW block from missingKanjiData
                const info = missingKanjiData[k];
                if (!info) {
                    console.warn(`WARNING: Kanji ${k} in Lesson ${lesson} has no data!`);
                    // Create placeholder
                    entryBlock = `
  {
    id: ${globalIdDetails},
    kanji: "${k}",
    lesson: ${lesson},
    imageUrl: "/images/kanji/placeholder.png",
    onyomi: "",
    onyomiRomaji: "",
    kunyomi: "",
    kunyomiRomaji: "",
    meaning: "TODO",
    sinoVietnamese: "TODO",
    radicals: "",
    mnemonic: "",
    examples: [],
  },`;
                } else {
                    entryBlock = `
  {
    id: ${globalIdDetails},
    kanji: "${k}",
    lesson: ${lesson},
    imageUrl: "/images/kanji/${globalIdDetails}_${k}_3d.png",
    onyomi: "${info.onyomi}",
    onyomiRomaji: "",
    kunyomi: "${info.kunyomi}",
    kunyomiRomaji: "",
    meaning: "${info.meaning}",
    sinoVietnamese: "${info.sino}",
    radicals: "",
    mnemonic: "",
    examples: [],
  },`;
                }
            }
            newEntries.push(entryBlock.trim());
            globalIdDetails++;
        }
    }

    // 3. Reconstruct file content
    const header = `export interface KanjiExample {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface KanjiCard {
  id: number;
  kanji: string;
  onyomi: string;
  onyomiRomaji?: string;
  kunyomi: string;
  kunyomiRomaji?: string;
  meaning: string;
  sinoVietnamese: string;
  imageUrl?: string;
  lesson?: number;
  radicals?: string;
  mnemonic?: string;
  examples: KanjiExample[];
}

export const kanjiData: KanjiCard[] = [
`;

    const footer = `
];
`;

    const newContent = header + newEntries.join('\n') + footer;

    fs.writeFileSync(kanjiDataPath, newContent, 'utf8');
    console.log(`Successfully synced ${newEntries.length} Kanji to kanjiData.ts`);
}

syncKanji();
