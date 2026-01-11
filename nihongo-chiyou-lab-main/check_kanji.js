
const fs = require('fs');
const path = require('path');

const kanjiDataPath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;

// User's provided list
const userListRaw = `
Bài 1 (第1課): 一 二 三 四 五 六 七 八 九 十 百 千 万 円 口 目
Bài 2 (第2課): 日 月 火 水 木 金 土 曜 本 人 今 寺 時 半 刀 分
Bài 3 (第3課): 上 下 中 外 右 工 左 前 後 午 門 間 東 西 南 北
Bài 4 (第4課): 田 力 男 女 子 学 生 先 何 父 母 年 去 毎 王 国
Bài 5 (第5課): 見 行 米 来 良 食 飲 会 耳 聞 言 話 立 待 周 週
Bài 6 (第6課): 大 小 高 安 新 古 元 気 多 少 広 早 長 明 好 友
Bài 7 (第7課): 入 出 市 町 村 雨 電 車 馬 駅 社 校 店 銀 病 院
Bài 8 (第8課): 休 走 起 貝 買 売 読 書 帰 勉 弓 虫 強 持 名 語
Bài 9 (第9課): 春 夏 秋 冬 朝 昼 夕 方 晩 夜 心 手 足 体 首 道
Bài 10 (第10課): 山 川 林 森 空 海 化 花 天 赤 青 白 黒 色 魚 犬
Part 2
Bài 11 (第11課): 料 理 反 飯 牛 豚 鳥 肉 茶 予 野 菜 切 作 未 味
Bài 12 (第12課): 音 楽 歌 自 転 乗 写 真 台 央 映 画 羊 洋 服 着
Bài 13 (第13課): 家 矢 族 親 兄 姉 弟 妹 私 夫 妻 主 住 糸 氏 紙
Bài 14 (第14課): 教 室 羽 習 漢 字 式 試 験 宿 題 文 英 質 問 説
Bài 15 (第15課): 通 近 者 暑 寒 重 軽 低 弱 悪 暗 太 豆 短 光 風
Bài 16 (第16課): 運 動 止 歩 使 送 洗 急 開 閉 押 引 思 知 考 死
Bài 17 (第17課): 医 始 終 石 研 究 留 有 産 業 薬 働 員 資 仕 事
Bài 18 (第18課): 図 官 館 昔 借 代 貸 地 世 界 度 回 用 民 注 意
Bài 19 (第19課): 頭 顔 声 特 別 竹 金 答 正 同 計 京 集 不 便 以
Bài 20 (第20課): 場 戸 所 屋 堂 都 県 区 池 発 建 物 品 旅 通 進
Bài 21 (第21課): 丸 熱 冷 甘 汚 果 卵 皿 酒 塩 付 片 焼 消 固 個
Bài 22 (第22課): 笑 泣 怒 幸 悲 苦 痛 恥 配 困 辛 眠 残 念 感 情
Bài 23 (第23課): 覚 忘 決 定 比 受 技 徒 練 復 表 卒 違 役 皆 彼
Part 3
Bài 24 (第24課): 全 部 必 要 荷 由 届 利 払 濯 寝 踊 活 末 宅 祭
Bài 25 (第25課): 平 和 戦 争 政 治 経 済 法 律 際 関 係 義 議 党
Bài 26 (第26課): 遊 泳 疲 暖 涼 静 公 園 込 連 窓 側 葉 景 記 形
Bài 27 (第27課): 吉 結 婚 共 供 両 若 老 息 娘 奥 将 祖 育 性 招
Bài 28 (第28課): 取 最 初 番 歳 枚 冊 億 点 階 段 号 倍 次 々 他
Bài 29 (第29課): 勝 負 賛 成 絶 対 統 辞 投 選 約 束 守 過 夢 的
Bài 30 (第30課): 飛 機 失 鉄 速 運 駐 治 船 座 席 島 陸 港 橋 交
Bài 31 (第31課): 申 神 様 信 調 査 相 談 案 内 君 達 星 雪 降 直
Bài 32 (第32課): 危 険 拾 捨 戻 吸 放 変 街 髪 絵 横 当 伝 細 無
`;

// Parse user list into a Map: Lesson -> [Kanji]
const userLessons = {};
let currentLesson = 0;
const lines = userListRaw.split('\n');

for (const line of lines) {
    const match = line.match(/Bài (\d+)/);
    if (match) {
        currentLesson = parseInt(match[1]);
        // Extract kanji from the part after the colon or just the whole line?
        // The format is "Bài 1 ...: Kanji Kanji..."
        // Or sometimes just split by spaces and filter for Kanji characters.
        // A simple regex for kanji range: [\u4e00-\u9faf]
        const kanjis = line.match(/[\u4e00-\u9faf]/g);
        if (kanjis) {
            userLessons[currentLesson] = kanjis;
        }
    }
}

// Read kanjiData.ts
try {
    const content = fs.readFileSync(kanjiDataPath, 'utf8');
    // Extract kanji using regex
    const existingKanjiSet = new Set();
    const regex = /kanji:\s*"(.+?)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        existingKanjiSet.add(match[1]);
    }

    console.log(`Total Existing Kanji in file: ${existingKanjiSet.size}`);

    // Check overlaps
    let missingCount = 0;
    let presentCount = 0;
    const report = [];

    for (let i = 1; i <= 32; i++) {
        const lessonKanjis = userLessons[i] || [];
        const missing = [];
        const present = [];

        for (const k of lessonKanjis) {
            if (existingKanjiSet.has(k)) {
                present.push(k);
                presentCount++;
            } else {
                missing.push(k);
                missingCount++;
            }
        }

        report.push(`## Bài ${i}`);
        report.push(`- **Có sẵn (${present.length})**: ${present.join(' ')}`);
        if (missing.length > 0) {
            report.push(`- **HIẾU (${missing.length})**: ${missing.join(' ')}`);
        } else {
            report.push(`- **Đủ**`);
        }
        report.push('');
    }

    console.log(`\n=== KẾT QUẢ SO SÁNH ===`);
    console.log(`Tổng số Kanji trong file hiện tại: ${existingKanjiSet.size}`);
    console.log(`Tổng số Kanji trong danh sách check (Bài 1-32): ${presentCount + missingCount}`);
    console.log(`Số Kanji đẫ có: ${presentCount}`);
    console.log(`Số Kanji còn thiếu: ${missingCount}`);
    console.log(`\nCHI TIẾT:`);
    console.log(report.join('\n'));

} catch (err) {
    console.error("Error:", err);
}
