const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const vocabularyUpdates = {
    'セロテープ': [
        { jp: 'セロテープで貼ります。', vn: 'Dán bằng băng dính.', furigana: [{ kanji: '貼', reading: 'は' }] },
        { jp: 'セロテープを使います。', vn: 'Dùng băng dính.', furigana: [{ kanji: '使', reading: 'つか' }] },
        { jp: 'セロテープを切ります。', vn: 'Cắt băng dính.', furigana: [{ kanji: '切', reading: 'き' }] },
        { jp: 'セロテープをください。', vn: 'Cho tôi băng dính.', furigana: [] },
        { jp: '透明なセロテープ', vn: 'Băng dính trong suốt.', furigana: [{ kanji: '透明', reading: 'とうめい' }] },
        { jp: 'セロテープがありません。', vn: 'Không có băng dính.', furigana: [] }
    ],
    'けしゴム': [
        { jp: '消しゴムで消します。', vn: 'Tẩy bằng cục tẩy.', furigana: [{ kanji: '消', reading: 'け' }, { kanji: '消', reading: 'け' }] },
        { jp: '消しゴムを使います。', vn: 'Dùng cục tẩy.', furigana: [{ kanji: '消', reading: 'け' }, { kanji: '使', reading: 'つか' }] },
        { jp: '消しゴムを貸してください。', vn: 'Cho tôi mượn cục tẩy.', furigana: [{ kanji: '消', reading: 'け' }, { kanji: '貸', reading: 'か' }] },
        { jp: '白い消しゴム', vn: 'Cục tẩy màu trắng.', furigana: [{ kanji: '白', reading: 'しろ' }, { kanji: '消', reading: 'け' }] },
        { jp: 'よく消える消しゴム', vn: 'Cục tẩy tẩy sạch.', furigana: [{ kanji: '消', reading: 'き' }, { kanji: '消', reading: 'け' }] },
        { jp: '消しゴムを忘れました。', vn: 'Tôi quên cục tẩy.', furigana: [{ kanji: '消', reading: 'け' }, { kanji: '忘', reading: 'わす' }] }
    ],
    'かみ': [
        { jp: '紙を切ります。', vn: 'Cắt giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '切', reading: 'き' }] },
        { jp: '紙に書きます。', vn: 'Viết vào giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '書', reading: 'か' }] },
        { jp: '白い紙', vn: 'Giấy trắng.', furigana: [{ kanji: '白', reading: 'しろ' }, { kanji: '紙', reading: 'かみ' }] },
        { jp: '紙を折ります。', vn: 'Gấp giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '折', reading: 'お' }] },
        { jp: '紙飛行機', vn: 'Máy bay giấy.', furigana: [{ kanji: '紙', reading: 'かみ' }, { kanji: '飛行機', reading: 'ひこうき' }] },
        { jp: '手紙を書きます。', vn: 'Viết thư.', furigana: [{ kanji: '手紙', reading: 'てがみ' }, { kanji: '書', reading: 'か' }] }
    ],
    'はな': [
        { jp: '花をあげます。', vn: 'Tặng hoa.', furigana: [{ kanji: '花', reading: 'はな' }] },
        { jp: '花をもらいました。', vn: 'Đã nhận hoa.', furigana: [{ kanji: '花', reading: 'はな' }] },
        { jp: '綺麗な花', vn: 'Hoa đẹp.', furigana: [{ kanji: '綺麗', reading: 'きれい' }, { kanji: '花', reading: 'はな' }] },
        { jp: '桜の花', vn: 'Hoa anh đào.', furigana: [{ kanji: '桜', reading: 'さくら' }, { kanji: '花', reading: 'はな' }] },
        { jp: '花屋', vn: 'Cửa hàng hoa.', furigana: [{ kanji: '花屋', reading: 'はなや' }] },
        { jp: '花を飾ります。', vn: 'Trang trí hoa.', furigana: [{ kanji: '花', reading: 'はな' }, { kanji: '飾', reading: 'かざ' }] }
    ],
    'シャツ': [
        { jp: 'シャツを着ます。', vn: 'Mặc áo sơ mi.', furigana: [{ kanji: '着', reading: 'き' }] },
        { jp: '白いシャツ', vn: 'Áo sơ mi trắng.', furigana: [{ kanji: '白', reading: 'しろ' }] },
        { jp: 'シャツを洗います。', vn: 'Giặt áo sơ mi.', furigana: [{ kanji: '洗', reading: 'あら' }] },
        { jp: 'シャツをアイロンします。', vn: 'Là áo sơ mi.', furigana: [] },
        { jp: '新しいシャツ', vn: 'Áo sơ mi mới.', furigana: [{ kanji: '新', reading: 'あたら' }] },
        { jp: 'シャツを買いました。', vn: 'Đã mua áo sơ mi.', furigana: [{ kanji: '買', reading: 'か' }] }
    ],
    'プレゼント': [
        { jp: 'プレゼントをあげます。', vn: 'Tặng quà.', furigana: [] },
        { jp: 'プレゼントをもらいます。', vn: 'Nhận quà.', furigana: [] },
        { jp: '誕生日のプレゼント', vn: 'Quà sinh nhật.', furigana: [{ kanji: '誕生日', reading: 'たんじょうび' }] },
        { jp: '素敵なプレゼント', vn: 'Món quà tuyệt vời.', furigana: [{ kanji: '素敵', reading: 'すてき' }] },
        { jp: 'プレゼントを選びます。', vn: 'Chọn quà.', furigana: [{ kanji: '選', reading: 'えら' }] },
        { jp: 'プレゼントを開けます。', vn: 'Mở quà.', furigana: [{ kanji: '開', reading: 'あ' }] }
    ],
    'にもつ': [
        { jp: '荷物を送ります。', vn: 'Gửi hành lý.', furigana: [{ kanji: '荷物', reading: 'にもつ' }, { kanji: '送', reading: 'おく' }] },
        { jp: '荷物を持ちます。', vn: 'Mang hành lý.', furigana: [{ kanji: '荷物', reading: 'にもつ' }, { kanji: '持', reading: 'も' }] },
        { jp: '重い荷物', vn: 'Hành lý nặng.', furigana: [{ kanji: '重', reading: 'おも' }, { kanji: '荷物', reading: 'にもつ' }] },
        { jp: '荷物が届きました。', vn: 'Hành lý đã đến.', furigana: [{ kanji: '荷物', reading: 'にもつ' }, { kanji: '届', reading: 'とど' }] },
        { jp: '荷物を整理します。', vn: 'Sắp xếp hành lý.', furigana: [{ kanji: '荷物', reading: 'にもつ' }, { kanji: '整理', reading: 'せいり' }] },
        { jp: '手荷物', vn: 'Hành lý xách tay.', furigana: [{ kanji: '手荷物', reading: 'てにもつ' }] }
    ],
    'おかね': [
        { jp: 'お金がありません。', vn: 'Không có tiền.', furigana: [{ kanji: '金', reading: 'かね' }] },
        { jp: 'お金を払います。', vn: 'Trả tiền.', furigana: [{ kanji: '金', reading: 'かね' }, { kanji: '払', reading: 'はら' }] },
        { jp: 'お金を借ります。', vn: 'Vay tiền.', furigana: [{ kanji: '金', reading: 'かね' }, { kanji: '借', reading: 'か' }] },
        { jp: 'お金を貸します。', vn: 'Cho vay tiền.', furigana: [{ kanji: '金', reading: 'かね' }, { kanji: '貸', reading: 'か' }] },
        { jp: 'お金をおろします。', vn: 'Rút tiền.', furigana: [{ kanji: '金', reading: 'かね' }] },
        { jp: 'お金を貯めます。', vn: 'Tiết kiệm tiền.', furigana: [{ kanji: '金', reading: 'かね' }, { kanji: '貯', reading: 'た' }] }
    ],
    'きっぷ': [
        { jp: '切符を買います。', vn: 'Mua vé.', furigana: [{ kanji: '切符', reading: 'きっぷ' }, { kanji: '買', reading: 'か' }] },
        { jp: '電車の切符', vn: 'Vé tàu.', furigana: [{ kanji: '電車', reading: 'でんしゃ' }, { kanji: '切符', reading: 'きっぷ' }] },
        { jp: '切符をなくしました。', vn: 'Làm mất vé.', furigana: [{ kanji: '切符', reading: 'きっぷ' }] },
        { jp: '切符を見せます。', vn: 'Cho xem vé.', furigana: [{ kanji: '切符', reading: 'きっぷ' }, { kanji: '見', reading: 'み' }] },
        { jp: '往復切符', vn: 'Vé khứ hồi.', furigana: [{ kanji: '往復', reading: 'おうふく' }, { kanji: '切符', reading: 'きっぷ' }] },
        { jp: '片道切符', vn: 'Vé một chiều.', furigana: [{ kanji: '片道', reading: 'かたみち' }, { kanji: '切符', reading: 'きっぷ' }] }
    ],
    'クリスマス': [
        { jp: 'クリスマスにパーティーをします。', vn: 'Tổ chức tiệc vào lễ Giáng sinh.', furigana: [] },
        { jp: 'クリスマスプレゼント', vn: 'Quà Giáng sinh.', furigana: [] },
        { jp: 'クリスマスのケーキ', vn: 'Bánh kem Giáng sinh.', furigana: [] },
        { jp: 'メリークリスマス', vn: 'Chúc mừng Giáng sinh.', furigana: [] },
        { jp: 'クリスマスの飾り', vn: 'Trang trí Giáng sinh.', furigana: [{ kanji: '飾', reading: 'かざ' }] },
        { jp: '今年はクリスマスに何をしますか。', vn: 'Giáng sinh năm nay bạn làm gì?', furigana: [{ kanji: '今年', reading: 'ことし' }, { kanji: '何', reading: 'なに' }] }
    ],
    'ちち': [
        { jp: '父は会社員です。', vn: 'Bố tôi là nhân viên công ty.', furigana: [{ kanji: '父', reading: 'ちち' }, { kanji: '会社員', reading: 'かいしゃいん' }] },
        { jp: '父にシャツをあげます。', vn: 'Tôi tặng bố áo sơ mi.', furigana: [{ kanji: '父', reading: 'ちち' }] },
        { jp: '父は元気です。', vn: 'Bố tôi khỏe.', furigana: [{ kanji: '父', reading: 'ちち' }, { kanji: '元気', reading: 'げんき' }] },
        { jp: '父の誕生日', vn: 'Sinh nhật bố.', furigana: [{ kanji: '父', reading: 'ちち' }, { kanji: '誕生日', reading: 'たんじょうび' }] },
        { jp: '父と母', vn: 'Bố và mẹ.', furigana: [{ kanji: '父', reading: 'ちち' }, { kanji: '母', reading: 'はは' }] },
        { jp: '父に電話をかけます。', vn: 'Gọi điện cho bố.', furigana: [{ kanji: '父', reading: 'ちち' }, { kanji: '電話', reading: 'でんわ' }] }
    ],
    'はは': [
        { jp: '母は料理が上手です。', vn: 'Mẹ tôi nấu ăn giỏi.', furigana: [{ kanji: '母', reading: 'はは' }, { kanji: '料理', reading: 'りょうり' }, { kanji: '上手', reading: 'じょうず' }] },
        { jp: '母に花をあげます。', vn: 'Tặng hoa cho mẹ.', furigana: [{ kanji: '母', reading: 'はは' }, { kanji: '花', reading: 'はな' }] },
        { jp: '母の手紙', vn: 'Thư của mẹ.', furigana: [{ kanji: '母', reading: 'はは' }, { kanji: '手紙', reading: 'てがみ' }] },
        { jp: '母の日', vn: 'Ngày của mẹ.', furigana: [{ kanji: '母', reading: 'はは' }, { kanji: '日', reading: 'ひ' }] },
        { jp: '母は先生です。', vn: 'Mẹ tôi là giáo viên.', furigana: [{ kanji: '母', reading: 'はは' }, { kanji: '先生', reading: 'せんせい' }] },
        { jp: '母に習います。', vn: 'Học từ mẹ.', furigana: [{ kanji: '母', reading: 'はは' }, { kanji: '習', reading: 'なら' }] }
    ],
    'おとうさん': [
        { jp: 'お父さんはお元気ですか。', vn: 'Bố bạn có khỏe không?', furigana: [{ kanji: '父', reading: 'とう' }, { kanji: '元気', reading: 'げんき' }] },
        { jp: '田中さんのお父さん', vn: 'Bố của anh Tanaka.', furigana: [{ kanji: '父', reading: 'とう' }] },
        { jp: 'お父さんは何歳ですか。', vn: 'Bố bạn bao nhiêu tuổi?', furigana: [{ kanji: '父', reading: 'とう' }, { kanji: '何歳', reading: 'なんさい' }] },
        { jp: 'お父さんと一緒に', vn: 'Cùng với bố.', furigana: [{ kanji: '父', reading: 'とう' }, { kanji: '一緒', reading: 'いっしょ' }] },
        { jp: '優しいお父さん', vn: 'Ông bố hiền lành.', furigana: [{ kanji: '優', reading: 'やさ' }, { kanji: '父', reading: 'とう' }] },
        { jp: 'お父さんの仕事', vn: 'Công việc của bố.', furigana: [{ kanji: '父', reading: 'とう' }, { kanji: '仕事', reading: 'しごと' }] }
    ],
    'おかあさん': [
        { jp: 'お母さんはいますか。', vn: 'Mẹ bạn có nhà không?', furigana: [{ kanji: '母', reading: 'かあ' }] },
        { jp: '山田さんのお母さん', vn: 'Mẹ của chị Yamada.', furigana: [{ kanji: '母', reading: 'かあ' }] },
        { jp: 'きれいなお母さん', vn: 'Mẹ (bạn) đẹp.', furigana: [{ kanji: '母', reading: 'かあ' }] },
        { jp: 'お母さんと買い物に行きます。', vn: 'Đi mua sắm với mẹ.', furigana: [{ kanji: '母', reading: 'かあ' }, { kanji: '買', reading: 'か' }, { kanji: '物', reading: 'もの' }, { kanji: '行', reading: 'い' }] },
        { jp: 'お母さんの料理', vn: 'Món ăn mẹ nấu.', furigana: [{ kanji: '母', reading: 'かあ' }, { kanji: '料理', reading: 'りょうり' }] },
        { jp: 'お母さんを手伝います。', vn: 'Giúp đỡ mẹ.', furigana: [{ kanji: '母', reading: 'かあ' }, { kanji: '手伝', reading: 'てつだ' }] }
    ],
    'もう': [
        { jp: 'もう昼ごはんを食べましたか。', vn: 'Bạn đã ăn trưa chưa?', furigana: [{ kanji: '昼', reading: 'ひる' }, { kanji: '飯', reading: 'はん' }, { kanji: '食', reading: 'た' }] },
        { jp: 'はい、もう食べました。', vn: 'Vâng, tôi ăn rồi.', furigana: [{ kanji: '食', reading: 'た' }] },
        { jp: 'もう帰ります。', vn: 'Tôi về đây (đã đến lúc về).', furigana: [{ kanji: '帰', reading: 'かえ' }] },
        { jp: 'もう12時です。', vn: 'Đã 12 giờ rồi.', furigana: [{ kanji: '時', reading: 'じ' }] },
        { jp: 'もう一度お願いします。', vn: 'Xin nhắc lại một lần nữa.', furigana: [{ kanji: '一度', reading: 'いちど' }, { kanji: '願', reading: 'ねが' }] },
        { jp: 'もう寝ます。', vn: 'Tôi đi ngủ đây.', furigana: [{ kanji: '寝', reading: 'ね' }] }
    ],
    'まだ': [
        { jp: 'いいえ、まだです。', vn: 'Không, chưa.', furigana: [] },
        { jp: 'まだ食べていません。', vn: 'Tôi chưa ăn.', furigana: [{ kanji: '食', reading: 'た' }] },
        { jp: 'まだわかりません。', vn: 'Tôi vẫn chưa hiểu.', furigana: [] },
        { jp: 'まだ子供です。', vn: 'Vẫn còn là trẻ con.', furigana: [{ kanji: '子供', reading: 'こども' }] },
        { jp: 'まだ終わっていません。', vn: 'Vẫn chưa xong.', furigana: [{ kanji: '終', reading: 'お' }] },
        { jp: 'まだ時間があります。', vn: 'Vẫn còn thời gian.', furigana: [{ kanji: '時間', reading: 'じかん' }] }
    ],
    'これから': [
        { jp: 'これから食べます。', vn: 'Bây giờ tôi sẽ ăn.', furigana: [{ kanji: '食', reading: 'た' }] },
        { jp: 'これから行きます。', vn: 'Bây giờ tôi sẽ đi.', furigana: [{ kanji: '行', reading: 'い' }] },
        { jp: 'これから勉強します。', vn: 'Bây giờ tôi sẽ học.', furigana: [{ kanji: '勉強', reading: 'べんきょう' }] },
        { jp: 'これから寒くなります。', vn: 'Từ bây giờ trời sẽ lạnh hơn.', furigana: [{ kanji: '寒', reading: 'さむ' }] },
        { jp: 'これからどうしますか。', vn: 'Từ bây giờ bạn sẽ làm gì?', furigana: [] },
        { jp: 'これからお世話になります。', vn: 'Mong được giúp đỡ từ bây giờ.', furigana: [{ kanji: '世話', reading: 'せわ' }] }
    ],
    'すてきですね': [
        { jp: 'そのシャツ、すてきですね。', vn: 'Cái áo sơ mi đó đẹp nhỉ.', furigana: [] },
        { jp: 'すてきですね。', vn: 'Tuyệt nhỉ.', furigana: [] },
        { jp: '素敵な家ですね。', vn: 'Ngôi nhà đẹp nhỉ.', furigana: [{ kanji: '素敵', reading: 'すてき' }, { kanji: '家', reading: 'いえ' }] },
        { jp: '素敵なプレゼントですね。', vn: 'Món quà tuyệt vời nhỉ.', furigana: [{ kanji: '素敵', reading: 'すてき' }] },
        { jp: '素敵な方ですね。', vn: 'Người tuyệt vời nhỉ.', furigana: [{ kanji: '素敵', reading: 'すてき' }, { kanji: '方', reading: 'かた' }] },
        { jp: 'その鞄、すてきですね。', vn: 'Cái cặp đó đẹp nhỉ.', furigana: [{ kanji: '鞄', reading: 'かばん' }] }
    ],
    'ごめんください': [
        { jp: 'ごめんください。', vn: 'Xin lỗi, có ai ở nhà không?', furigana: [] },
        { jp: '玄関で「ごめんください」と言います。', vn: 'Nói "Gomen kudasai" ở cửa ra vào.', furigana: [{ kanji: '玄関', reading: 'げんかん' }, { kanji: '言', reading: 'い' }] },
        { jp: 'ごめんください、どなたかいらっしゃいますか。', vn: 'Xin lỗi, có ai ở đó không?', furigana: [] },
        { jp: '夜遅くに「ごめんください」。', vn: 'Nói "Xin lỗi..." vào đêm muộn.', furigana: [{ kanji: '夜', reading: 'よる' }, { kanji: '遅', reading: 'おそ' }] },
        { jp: '店で「ごめんください」。', vn: 'Gọi ở cửa hàng.', furigana: [{ kanji: '店', reading: 'みせ' }] },
        { jp: '大きな声で「ごめんください」。', vn: 'Nói to "Gomen kudasai".', furigana: [{ kanji: '大', reading: 'おお' }, { kanji: '声', reading: 'こえ' }] }
    ],
    'いらっしゃい': [
        { jp: 'いらっしゃい。', vn: 'Chào mừng.', furigana: [] },
        { jp: 'ようこそ、いらっしゃい。', vn: 'Chào mừng bạn đã đến.', furigana: [] },
        { jp: 'さあ、いらっしゃい。', vn: 'Nào, mời vào.', furigana: [] },
        { jp: '皆さん、いらっしゃい。', vn: 'Chào mừng mọi người.', furigana: [{ kanji: '皆', reading: 'みな' }] },
        { jp: 'いつでもいらっしゃい。', vn: 'Hãy đến bất cứ lúc nào.', furigana: [] },
        { jp: 'またいらっしゃい。', vn: 'Lần sau lại đến nhé.', furigana: [] }
    ],
    'どうぞ おあがり ください': [
        { jp: 'どうぞお上がりください。', vn: 'Xin mời vào.', furigana: [{ kanji: '上', reading: 'あ' }] },
        { jp: 'どうぞ。', vn: 'Xin mời.', furigana: [] },
        { jp: '靴を脱いで、どうぞお上がりください。', vn: 'Cởi giày ra và mời vào.', furigana: [{ kanji: '靴', reading: 'くつ' }, { kanji: '脱', reading: 'ぬ' }, { kanji: '上', reading: 'あ' }] },
        { jp: '遠慮しないで、どうぞお上がりください。', vn: 'Đừng ngại, mời vào.', furigana: [{ kanji: '遠慮', reading: 'えんりょ' }, { kanji: '上', reading: 'あ' }] },
        { jp: 'さあ、どうぞお上がりください。', vn: 'Nào, xin mời vào.', furigana: [{ kanji: '上', reading: 'あ' }] },
        { jp: '奥へどうぞお上がりください。', vn: 'Mời vào bên trong.', furigana: [{ kanji: '奥', reading: 'おく' }, { kanji: '上', reading: 'あ' }] }
    ],
    'しつれいします': [
        { jp: '失礼します。', vn: 'Xin phép.', furigana: [{ kanji: '失礼', reading: 'しつれい' }] },
        { jp: 'お先に失礼します。', vn: 'Tôi xin phép về trước.', furigana: [{ kanji: '先', reading: 'さき' }, { kanji: '失礼', reading: 'しつれい' }] },
        { jp: '部屋に入るとき、「失礼します」と言います。', vn: 'Khi vào phòng, nói "Shitsureishimasu".', furigana: [{ kanji: '部屋', reading: 'へや' }, { kanji: '入', reading: 'はい' }, { kanji: '失礼', reading: 'しつれい' }, { kanji: '言', reading: 'い' }] },
        { jp: 'では、失礼します。', vn: 'Vậy, tôi xin phép.', furigana: [{ kanji: '失礼', reading: 'しつれい' }] },
        { jp: 'そろそろ失礼します。', vn: 'Đã đến lúc tôi phải về.', furigana: [{ kanji: '失礼', reading: 'しつれい' }] },
        { jp: 'ちょっと失礼します。', vn: 'Xin lỗi một chút.', furigana: [{ kanji: '失礼', reading: 'しつれい' }] }
    ],
    'いただきます': [
        { jp: 'いただきます。', vn: 'Mời cả nhà ăn cơm (câu nói trước khi ăn).', furigana: [] },
        { jp: 'ご飯を食べる前に、「いただきます」と言います。', vn: 'Trước khi ăn cơm, nói "Itadakimasu".', furigana: [{ kanji: '飯', reading: 'はん' }, { kanji: '食', reading: 'た' }, { kanji: '前', reading: 'まえ' }, { kanji: '言', reading: 'い' }] },
        { jp: '手を合わせて、「いただきます」。', vn: 'Chắp tay lại và nói "Itadakimasu".', furigana: [{ kanji: '手', reading: 'て' }, { kanji: '合', reading: 'あ' }] },
        { jp: 'みんなで「いただきます」。', vn: 'Mọi người cùng nói "Itadakimasu".', furigana: [] },
        { jp: '大きな声で「いただきます」。', vn: 'Nói to "Itadakimasu".', furigana: [{ kanji: '大', reading: 'おお' }, { kanji: '声', reading: 'こえ' }] },
        { jp: 'おいしい料理を、いただきます。', vn: 'Tôi xin phép ăn món ngon này.', furigana: [{ kanji: '料理', reading: 'りょうり' }] }
    ],
    'りょこう': [
        { jp: '旅行に行きます。', vn: 'Đi du lịch.', furigana: [{ kanji: '旅行', reading: 'りょこう' }, { kanji: '行', reading: 'い' }] },
        { jp: '旅行が好きです。', vn: 'Thích đi du lịch.', furigana: [{ kanji: '旅行', reading: 'りょこう' }, { kanji: '好', reading: 'す' }] },
        { jp: '海外旅行', vn: 'Du lịch nước ngoài.', furigana: [{ kanji: '海外', reading: 'かいがい' }, { kanji: '旅行', reading: 'りょこう' }] },
        { jp: '修学旅行', vn: 'Du lịch trường học.', furigana: [{ kanji: '修学', reading: 'しゅうがく' }, { kanji: '旅行', reading: 'りょこう' }] },
        { jp: '旅行のお土産', vn: 'Quà du lịch.', furigana: [{ kanji: '旅行', reading: 'りょこう' }, { kanji: '土産', reading: 'みやげ' }] },
        { jp: '日本へ旅行に来ました。', vn: 'Đến Nhật Bản du lịch.', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '旅行', reading: 'りょこう' }, { kanji: '来', reading: 'き' }] }
    ],
    'おみやげ': [
        { jp: 'お土産を買います。', vn: 'Mua quà lưu niệm.', furigana: [{ kanji: '土産', reading: 'みやげ' }, { kanji: '買', reading: 'か' }] },
        { jp: 'お土産をあげます。', vn: 'Tặng quà lưu niệm.', furigana: [{ kanji: '土産', reading: 'みやげ' }] },
        { jp: '旅行のお土産', vn: 'Quà đi du lịch.', furigana: [{ kanji: '旅行', reading: 'りょこう' }, { kanji: '土産', reading: 'みやげ' }] },
        { jp: '有名なお土産', vn: 'Quà lưu niệm nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }, { kanji: '土産', reading: 'みやげ' }] },
        { jp: 'お土産は何がいいですか。', vn: 'Quà lưu niệm gì thì tốt?', furigana: [{ kanji: '土産', reading: 'みやげ' }, { kanji: '何', reading: 'なに' }] },
        { jp: '日本のお土産', vn: 'Quà lưu niệm Nhật Bản.', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '土産', reading: 'みやげ' }] }
    ]
};

// Function to find lesson 7 and update vocab
const lesson7StartPattern = /const lesson7Data: LessonDetail = \{/;
const vocabStartPattern = /vocabulary: \[/;
const vocabEndPattern = /^\s{2}\],?$/;

const lines = content.split('\n');
let inLesson7 = false;
let inVocab = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (lesson7StartPattern.test(line)) {
        inLesson7 = true;
    }

    if (inLesson7 && vocabStartPattern.test(line)) {
        inVocab = true;
        continue;
    }

    if (inVocab && vocabEndPattern.test(line)) {
        inVocab = false;
        inLesson7 = false;
    }

    if (inVocab) {
        const match = line.match(/word: '([^']+)'/);
        if (match) {
            const word = match[1];
            if (line.includes('examples:')) {
                continue;
            }
            if (vocabularyUpdates[word]) {
                const examples = vocabularyUpdates[word];
                const examplesStr = 'examples: ' + JSON.stringify(examples, null, 2).replace(/\n/g, '\n      ');
                const lineWithoutClosing = line.trim().replace(/},?$/, '').replace(/\}$/, '');
                const newLine = lineWithoutClosing + `, ${examplesStr} },`;
                lines[i] = newLine;
                console.log(`Updated ${word}`);
            }
        }
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Update complete.');
