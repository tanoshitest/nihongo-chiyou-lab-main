const fs = require('fs');
const path = require('path');

const filePath = path.join('c:/Users/ADMIN/Desktop/Vibe/nihongo-chiyou-lab-main/nihongo-chiyou-lab-main/src/data/minnaData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const vocabularyUpdates = {
    'さくら': [
        { jp: '桜が咲きました。', vn: 'Hoa anh đào đã nở.', furigana: [{ kanji: '桜', reading: 'さくら' }, { kanji: '咲', reading: 'さ' }] },
        { jp: '桜を見ます。', vn: 'Ngắm hoa anh đào.', furigana: [{ kanji: '桜', reading: 'さくら' }, { kanji: '見', reading: 'み' }] },
        { jp: 'きれいな桜', vn: 'Hoa anh đào đẹp.', furigana: [{ kanji: '桜', reading: 'さくら' }] },
        { jp: '桜の木', vn: 'Cây anh đào.', furigana: [{ kanji: '桜', reading: 'さくら' }, { kanji: '木', reading: 'き' }] },
        { jp: '桜祭り', vn: 'Lễ hội hoa anh đào.', furigana: [{ kanji: '桜', reading: 'さくら' }, { kanji: '祭', reading: 'まつ' }] },
        { jp: '桜の花', vn: 'Bông hoa anh đào.', furigana: [{ kanji: '桜', reading: 'さくら' }, { kanji: '花', reading: 'はな' }] }
    ],
    'やま': [
        { jp: '山に登ります。', vn: 'Leo núi.', furigana: [{ kanji: '山', reading: 'やま' }, { kanji: '登', reading: 'のぼ' }] },
        { jp: '高い山', vn: 'Núi cao.', furigana: [{ kanji: '高', reading: 'たか' }, { kanji: '山', reading: 'やま' }] },
        { jp: '富士山は山です。', vn: 'Phú Sĩ là một ngọn núi.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }, { kanji: '山', reading: 'やま' }] },
        { jp: '山の写真', vn: 'Ảnh núi.', furigana: [{ kanji: '山', reading: 'やま' }, { kanji: '写真', reading: 'しゃしん' }] },
        { jp: '山へ行きます。', vn: 'Đi lên núi.', furigana: [{ kanji: '山', reading: 'やま' }, { kanji: '行', reading: 'い' }] },
        { jp: '緑の山', vn: 'Núi xanh.', furigana: [{ kanji: '緑', reading: 'みどり' }, { kanji: '山', reading: 'やま' }] }
    ],
    'まち': [
        { jp: 'にぎやかな町', vn: 'Thành phố náo nhiệt.', furigana: [{ kanji: '町', reading: 'まち' }] },
        { jp: '静かな町', vn: 'Thị trấn yên tĩnh.', furigana: [{ kanji: '静', reading: 'しず' }, { kanji: '町', reading: 'まち' }] },
        { jp: '私の町', vn: 'Thành phố của tôi.', furigana: [{ kanji: '私', reading: 'わたし' }, { kanji: '町', reading: 'まち' }] },
        { jp: '町へ行きます。', vn: 'Đi ra phố.', furigana: [{ kanji: '町', reading: 'まち' }, { kanji: '行', reading: 'い' }] },
        { jp: 'きれいな町', vn: 'Thành phố đẹp/sạch.', furigana: [{ kanji: '町', reading: 'まち' }] },
        { jp: '古い町', vn: 'Phố cổ.', furigana: [{ kanji: '古', reading: 'ふる' }, { kanji: '町', reading: 'まち' }] }
    ],
    'たべもの': [
        { jp: 'おいしい食べ物', vn: 'Đồ ăn ngon.', furigana: [{ kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }] },
        { jp: '日本の食べ物', vn: 'Đồ ăn Nhật.', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }] },
        { jp: '好きな食べ物', vn: 'Đồ ăn yêu thích.', furigana: [{ kanji: '好', reading: 'す' }, { kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }] },
        { jp: '食べ物を買います。', vn: 'Mua đồ ăn.', furigana: [{ kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }, { kanji: '買', reading: 'か' }] },
        { jp: '辛い食べ物', vn: 'Đồ ăn cay.', furigana: [{ kanji: '辛', reading: 'から' }, { kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }] },
        { jp: '食べ物屋', vn: 'Cửa hàng đồ ăn.', furigana: [{ kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }, { kanji: '屋', reading: 'や' }] }
    ],
    'くるま': [
        { jp: '車を運転します。', vn: 'Lái xe ô tô.', furigana: [{ kanji: '車', reading: 'くるま' }, { kanji: '運転', reading: 'うんてん' }] },
        { jp: '新しい車', vn: 'Xe ô tô mới.', furigana: [{ kanji: '新', reading: 'あたら' }, { kanji: '車', reading: 'くるま' }] },
        { jp: '赤い車', vn: 'Xe ô tô đỏ.', furigana: [{ kanji: '赤', reading: 'あか' }, { kanji: '車', reading: 'くるま' }] },
        { jp: '車で行きます。', vn: 'Đi bằng ô tô.', furigana: [{ kanji: '車', reading: 'くるま' }, { kanji: '行', reading: 'い' }] },
        { jp: '日本の車', vn: 'Xe Nhật.', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '車', reading: 'くるま' }] },
        { jp: '大きい車', vn: 'Xe to.', furigana: [{ kanji: '大', reading: 'おお' }, { kanji: '車', reading: 'くるま' }] }
    ],
    'ところ': [
        { jp: '静かな所', vn: 'Nơi yên tĩnh.', furigana: [{ kanji: '静', reading: 'しず' }, { kanji: '所', reading: 'ところ' }] },
        { jp: 'きれいな所', vn: 'Nơi đẹp đẽ.', furigana: [{ kanji: '所', reading: 'ところ' }] },
        { jp: '有名な所', vn: 'Nơi nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }, { kanji: '所', reading: 'ところ' }] },
        { jp: 'どんな所ですか。', vn: 'Là nơi như thế nào?', furigana: [{ kanji: '所', reading: 'ところ' }] },
        { jp: 'いい所', vn: 'Nơi tốt.', furigana: [{ kanji: '所', reading: 'ところ' }] },
        { jp: '所が変われば品変わる', vn: 'Mỗi nơi mỗi khác (tục ngữ).', furigana: [{ kanji: '所', reading: 'ところ' }, { kanji: '変', reading: 'か' }, { kanji: '品', reading: 'しな' }, { kanji: '変', reading: 'か' }] }
    ],
    'りょう': [
        { jp: '寮に住んでいます。', vn: 'Đang sống ở ký túc xá.', furigana: [{ kanji: '寮', reading: 'りょう' }, { kanji: '住', reading: 'す' }] },
        { jp: '会社の寮', vn: 'Ký túc xá công ty.', furigana: [{ kanji: '会社', reading: 'かいしゃ' }, { kanji: '寮', reading: 'りょう' }] },
        { jp: '寮の生活', vn: 'Cuộc sống ký túc xá.', furigana: [{ kanji: '寮', reading: 'りょう' }, { kanji: '生活', reading: 'せいかつ' }] },
        { jp: '新しい寮', vn: 'Ký túc xá mới.', furigana: [{ kanji: '新', reading: 'あたら' }, { kanji: '寮', reading: 'りょう' }] },
        { jp: '寮へ帰ります。', vn: 'Về ký túc xá.', furigana: [{ kanji: '寮', reading: 'りょう' }, { kanji: '帰', reading: 'かえ' }] },
        { jp: '独身寮', vn: 'Ký túc xá độc thân.', furigana: [{ kanji: '独身', reading: 'どくしん' }, { kanji: '寮', reading: 'りょう' }] }
    ],
    'べんきょう': [
        { jp: '日本語の勉強', vn: 'Việc học tiếng Nhật.', furigana: [{ kanji: '日本語', reading: 'にほんご' }, { kanji: '勉強', reading: 'べんきょう' }] },
        { jp: '勉強が好きです。', vn: 'Thích việc học.', furigana: [{ kanji: '勉強', reading: 'べんきょう' }, { kanji: '好', reading: 'す' }] },
        { jp: '勉強は楽しいです。', vn: 'Việc học rất vui.', furigana: [{ kanji: '勉強', reading: 'べんきょう' }, { kanji: '楽', reading: 'たの' }] },
        { jp: '勉強します。', vn: 'Học.', furigana: [{ kanji: '勉強', reading: 'べんきょう' }] },
        { jp: '勉強部屋', vn: 'Phòng học.', furigana: [{ kanji: '勉強', reading: 'べんきょう' }, { kanji: '部屋', reading: 'へや' }] },
        { jp: '毎日勉強します。', vn: 'Học mỗi ngày.', furigana: [{ kanji: '毎日', reading: 'まいにち' }, { kanji: '勉強', reading: 'べんきょう' }] }
    ],
    'せいかつ': [
        { jp: '日本の生活', vn: 'Cuộc sống ở Nhật.', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '生活', reading: 'せいかつ' }] },
        { jp: '楽しい生活', vn: 'Cuộc sống vui vẻ.', furigana: [{ kanji: '楽', reading: 'たの' }, { kanji: '生活', reading: 'せいかつ' }] },
        { jp: '生活に慣れます。', vn: 'Quen với cuộc sống.', furigana: [{ kanji: '生活', reading: 'せいかつ' }, { kanji: '慣', reading: 'な' }] },
        { jp: '忙しい生活', vn: 'Cuộc sống bận rộn.', furigana: [{ kanji: '忙', reading: 'いそが' }, { kanji: '生活', reading: 'せいかつ' }] },
        { jp: 'ひとり暮らしの生活', vn: 'Cuộc sống độc thân (sống một mình).', furigana: [{ kanji: '暮', reading: 'ぐ' }, { kanji: '生活', reading: 'せいかつ' }] },
        { jp: '生活費', vn: 'Phí sinh hoạt.', furigana: [{ kanji: '生活費', reading: 'せいかつひ' }] }
    ],
    'おしごと': [
        { jp: 'お仕事はなんですか。', vn: 'Công việc của bạn là gì?', furigana: [{ kanji: '仕事', reading: 'しごと' }, { kanji: '何', reading: 'なん' }] },
        { jp: 'お仕事、頑張ってください。', vn: 'Hãy cố gắng trong công việc nhé.', furigana: [{ kanji: '仕事', reading: 'しごと' }, { kanji: '頑張', reading: 'がんば' }] },
        { jp: 'お仕事は忙しいですか。', vn: 'Công việc có bận không?', furigana: [{ kanji: '仕事', reading: 'しごと' }, { kanji: '忙', reading: 'いそが' }] },
        { jp: 'お仕事をします。', vn: 'Làm việc.', furigana: [{ kanji: '仕事', reading: 'しごと' }] },
        { jp: '新しいお仕事', vn: 'Công việc mới.', furigana: [{ kanji: '新', reading: 'あたら' }, { kanji: '仕事', reading: 'しごと' }] },
        { jp: 'お仕事が終わります。', vn: 'Công việc kết thúc.', furigana: [{ kanji: '仕事', reading: 'しごと' }, { kanji: '終', reading: 'お' }] }
    ],
    'どう': [
        { jp: '日本の生活はどうですか。', vn: 'Cuộc sống ở Nhật thế nào?', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '生活', reading: 'せいかつ' }] },
        { jp: 'どうですか。', vn: 'Thế nào?', furigana: [] },
        { jp: 'この靴はどうですか。', vn: 'Đôi giày này thế nào?', furigana: [{ kanji: '靴', reading: 'くつ' }] },
        { jp: '調子はどうですか。', vn: 'Tình hình thế nào?', furigana: [{ kanji: '調子', reading: 'ちょうし' }] },
        { jp: '味はどうですか。', vn: 'Vị thế nào?', furigana: [{ kanji: '味', reading: 'あじ' }] },
        { jp: '最近どうですか。', vn: 'Gần đây thế nào?', furigana: [{ kanji: '最近', reading: 'さいきん' }] }
    ],
    'どんな': [
        { jp: 'どんな人ですか。', vn: 'Là người như thế nào?', furigana: [{ kanji: '人', reading: 'ひと' }] },
        { jp: 'どんな町ですか。', vn: 'Là thành phố như thế nào?', furigana: [{ kanji: '町', reading: 'まち' }] },
        { jp: 'どんな料理ですか。', vn: 'Là món ăn như thế nào?', furigana: [{ kanji: '料理', reading: 'りょうり' }] },
        { jp: 'どんなスポーツが好きですか。', vn: 'Bạn thích môn thể thao nào?', furigana: [{ kanji: '好', reading: 'す' }] },
        { jp: 'どんな所ですか。', vn: 'Là nơi như thế nào?', furigana: [{ kanji: '所', reading: 'ところ' }] },
        { jp: 'どんな本ですか。', vn: 'Là sách gì (như thế nào)?', furigana: [{ kanji: '本', reading: 'ほん' }] }
    ],
    'どれ': [
        { jp: 'あなたの傘はどれですか。', vn: 'Ô của bạn là cái nào?', furigana: [{ kanji: '傘', reading: 'かさ' }] },
        { jp: 'どれですか。', vn: 'Là cái nào?', furigana: [] },
        { jp: 'どれが好きですか。', vn: 'Bạn thích cái nào?', furigana: [{ kanji: '好', reading: 'す' }] },
        { jp: 'どれがいいですか。', vn: 'Cái nào thì tốt?', furigana: [] },
        { jp: 'どれを食べますか。', vn: 'Bạn ăn cái nào?', furigana: [{ kanji: '食', reading: 'た' }] },
        { jp: 'どれもおいしいです。', vn: 'Cái nào cũng ngon.', furigana: [] }
    ],
    'とても': [
        { jp: 'とてもおいしいです。', vn: 'Rất ngon.', furigana: [] },
        { jp: 'とても寒いです。', vn: 'Rất lạnh.', furigana: [{ kanji: '寒', reading: 'さむ' }] },
        { jp: 'とてもきれいです。', vn: 'Rất đẹp.', furigana: [] },
        { jp: 'とても元気です。', vn: 'Rất khỏe.', furigana: [{ kanji: '元気', reading: 'げんき' }] },
        { jp: 'とても有名です。', vn: 'Rất nổi tiếng.', furigana: [{ kanji: '有名', reading: 'ゆうめい' }] },
        { jp: 'とても忙しいです。', vn: 'Rất bận.', furigana: [{ kanji: '忙', reading: 'いそが' }] }
    ],
    'あまり': [
        { jp: 'あまり元気じゃありません。', vn: 'Không khỏe lắm.', furigana: [{ kanji: '元気', reading: 'げんき' }] },
        { jp: 'あまり大きくないです。', vn: 'Không to lắm.', furigana: [{ kanji: '大', reading: 'おお' }] },
        { jp: 'あまり好きじゃありません。', vn: 'Không thích lắm.', furigana: [{ kanji: '好', reading: 'す' }] },
        { jp: 'あまり難しくないです。', vn: 'Không khó lắm.', furigana: [{ kanji: '難', reading: 'むずか' }] },
        { jp: 'あまり食べません。', vn: 'Tôi không ăn nhiều lắm.', furigana: [{ kanji: '食', reading: 'た' }] },
        { jp: '時間がありませんから、あまり見ません。', vn: 'Vì không có thời gian nên tôi không xem mấy.', furigana: [{ kanji: '時間', reading: 'じかん' }, { kanji: '見', reading: 'み' }] }
    ],
    'そして': [
        { jp: 'そして、寝ました。', vn: 'Và sau đó tôi đã ngủ.', furigana: [{ kanji: '寝', reading: 'ね' }] },
        { jp: 'きれいです。そして、親切です。', vn: 'Đẹp. Và còn tốt bụng nữa.', furigana: [{ kanji: '親切', reading: 'しんせつ' }] },
        { jp: 'おいしいです。そして、安いです。', vn: 'Ngon. Và còn rẻ nữa.', furigana: [{ kanji: '安', reading: 'やす' }] },
        { jp: 'ご飯を食べました。そして、映画を見ました。', vn: 'Tôi ăn cơm. Và sau đó xem phim.', furigana: [{ kanji: '飯', reading: 'はん' }, { kanji: '食', reading: 'た' }, { kanji: '映画', reading: 'えいが' }, { kanji: '見', reading: 'み' }] },
        { jp: '8時です。そして、彼はまだ来ません。', vn: '8 giờ rồi. Và anh ấy vẫn chưa đến.', furigana: [{ kanji: '時', reading: 'じ' }, { kanji: '彼', reading: 'かれ' }, { kanji: '来', reading: 'き' }] },
        { jp: '東京へ行きました。そして、京都へ行きました。', vn: 'Tôi đã đi Tokyo. Và sau đó đi Kyoto.', furigana: [{ kanji: '東京', reading: 'とうきょう' }, { kanji: '行', reading: 'い' }, { kanji: '京都', reading: 'きょうと' }, { kanji: '行', reading: 'い' }] }
    ],
    'が': [
        { jp: '日本の食べ物は美味しいですが、高いです。', vn: 'Đồ ăn Nhật ngon nhưng đắt.', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '食', reading: 'た' }, { kanji: '物', reading: 'もの' }, { kanji: '美味', reading: 'おい' }, { kanji: '高', reading: 'たか' }] },
        { jp: '雨ですが、行きます。', vn: 'Trời mưa nhưng tôi vẫn đi.', furigana: [{ kanji: '雨', reading: 'あめ' }, { kanji: '行', reading: 'い' }] },
        { jp: '便利ですが、車が多すぎます。', vn: 'Tiện lợi nhưng nhiều xe quá.', furigana: [{ kanji: '便利', reading: 'べんり' }, { kanji: '車', reading: 'くるま' }, { kanji: '多', reading: 'おお' }] },
        { jp: '古いですが、きれいな家です。', vn: 'Cũ nhưng là ngôi nhà đẹp/sạch.', furigana: [{ kanji: '古', reading: 'ふる' }, { kanji: '家', reading: 'いえ' }] },
        { jp: '高いですが、いい靴です。', vn: 'Đắt nhưng là đôi giày tốt.', furigana: [{ kanji: '高', reading: 'たか' }, { kanji: '靴', reading: 'くつ' }] },
        { jp: 'すみませんが、塩を取ってください。', vn: 'Xin lỗi nhưng hãy lấy giúp tôi muối.', furigana: [{ kanji: '塩', reading: 'しお' }, { kanji: '取', reading: 'と' }] }
    ],
    'おげんきですか': [
        { jp: 'お元気ですか。', vn: 'Bạn có khỏe không?', furigana: [{ kanji: '元気', reading: 'げんき' }] },
        { jp: 'みなさん、お元気ですか。', vn: 'Mọi người có khỏe không?', furigana: [] },
        { jp: 'ご家族はお元気ですか。', vn: 'Gia đình bạn có khỏe không?', furigana: [{ kanji: '家族', reading: 'かぞく' }, { kanji: '元気', reading: 'げんき' }] },
        { jp: '先生、お元気ですか。', vn: 'Thầy ơi, thầy có khỏe không?', furigana: [{ kanji: '先生', reading: 'せんせい' }, { kanji: '元気', reading: 'げんき' }] },
        { jp: 'はい、元気です。', vn: 'Vâng, tôi khỏe.', furigana: [{ kanji: '元気', reading: 'げんき' }] },
        { jp: 'お変わりなく、お元気ですか。', vn: 'Không có gì thay đổi chứ, bạn khỏe không?', furigana: [{ kanji: '変', reading: 'か' }, { kanji: '元気', reading: 'げんき' }] }
    ],
    'そうですね': [
        { jp: 'そうですね。', vn: 'Thế à / Để tôi xem.', furigana: [] },
        { jp: 'あ、そうですね。', vn: 'À, đúng vậy nhỉ.', furigana: [] },
        { jp: 'うーん、そうですね。', vn: 'Ừm, để xem nào.', furigana: [] },
        { jp: '東京はにぎやかですね。…そうですね。', vn: 'Tokyo náo nhiệt nhỉ... Đúng vậy nhỉ.', furigana: [{ kanji: '東京', reading: 'とうきょう' }] },
        { jp: 'いい天気ですね。…そうですね。', vn: 'Thời tiết đẹp nhỉ... Đúng vậy nhỉ.', furigana: [{ kanji: '天気', reading: 'てんき' }] },
        { jp: '便利ですね。…そうですね。', vn: 'Tiện lợi nhỉ... Đúng vậy.', furigana: [{ kanji: '便利', reading: 'べんり' }] }
    ],
    'なれましたか': [
        { jp: '日本の生活に慣れましたか。', vn: 'Bạn đã quen với cuộc sống ở Nhật chưa?', furigana: [{ kanji: '日本', reading: 'にほん' }, { kanji: '生活', reading: 'せいかつ' }, { kanji: '慣', reading: 'な' }] },
        { jp: 'はい、もう慣れました。', vn: 'Vâng, tôi quen rồi.', furigana: [{ kanji: '慣', reading: 'な' }] },
        { jp: '仕事に慣れましたか。', vn: 'Bạn đã quen việc chưa?', furigana: [{ kanji: '仕事', reading: 'しごと' }, { kanji: '慣', reading: 'な' }] },
        { jp: 'まだ慣れていません。', vn: 'Tôi vẫn chưa quen.', furigana: [{ kanji: '慣', reading: 'な' }] },
        { jp: '運転に慣れましたか。', vn: 'Bạn đã quen lái xe chưa?', furigana: [{ kanji: '運転', reading: 'うんてん' }, { kanji: '慣', reading: 'な' }] },
        { jp: '学校に慣れましたか。', vn: 'Bạn đã quen với trường học chưa?', furigana: [{ kanji: '学校', reading: 'がっこう' }, { kanji: '慣', reading: 'な' }] }
    ],
    'いかがですか': [
        { jp: 'もう一杯いかがですか。', vn: 'Thêm một chén nữa nhé?', furigana: [{ kanji: '杯', reading: 'ぱい' }] },
        { jp: 'コーヒーはいかがですか。', vn: 'Dùng cà phê nhé?', furigana: [] },
        { jp: 'お茶はいかがですか。', vn: 'Dùng trà nhé?', furigana: [{ kanji: '茶', reading: 'ちゃ' }] },
        { jp: 'デザートはいかがですか。', vn: 'Dùng tráng miệng nhé?', furigana: [] },
        { jp: '調子はいかがですか。', vn: 'Tình hình thế nào?', furigana: [{ kanji: '調子', reading: 'ちょうし' }] },
        { jp: 'いかがですか。', vn: 'Thế nào ạ?', furigana: [] }
    ],
    'けっこうです': [
        { jp: 'いいえ、けっこうです。', vn: 'Không, tôi đủ rồi.', furigana: [] },
        { jp: 'もういいです、けっこうです。', vn: 'Được rồi, đủ rồi ạ.', furigana: [] },
        { jp: 'それでけっこうです。', vn: 'Như vậy là được rồi.', furigana: [] },
        { jp: 'お味はいかがですか。…けっこうです。', vn: 'Vị thế nào? ...Rất ngon (được).', furigana: [{ kanji: '味', reading: 'あじ' }] },
        { jp: 'けっこうなお手前で。', vn: 'Trà rất ngon (trong trà đạo).', furigana: [{ kanji: '手前', reading: 'てまえ' }] },
        { jp: 'けっこうな品', vn: 'Món đồ tuyệt vời.', furigana: [{ kanji: '品', reading: 'しな' }] }
    ],
    'もう～ですね': [
        { jp: 'もう12時ですね。', vn: 'Đã 12 giờ rồi nhỉ.', furigana: [{ kanji: '時', reading: 'じ' }] },
        { jp: 'もう春ですね。', vn: 'Đã mùa xuân rồi nhỉ.', furigana: [{ kanji: '春', reading: 'はる' }] },
        { jp: 'もう金曜日ですね。', vn: 'Đã thứ sáu rồi nhỉ.', furigana: [{ kanji: '金曜日', reading: 'きんようび' }] },
        { jp: 'もう、時間ですね。', vn: 'Đã đến giờ rồi.', furigana: [{ kanji: '時間', reading: 'じかん' }] },
        { jp: 'もう終わりましたね。', vn: 'Đã xong rồi nhỉ.', furigana: [{ kanji: '終', reading: 'お' }] },
        { jp: 'もう9月ですね。', vn: 'Đã tháng 9 rồi nhỉ.', furigana: [{ kanji: '月', reading: 'がつ' }] }
    ],
    'しつれいします': [
        { jp: 'そろそろ失礼します。', vn: 'Tôi sắp phải về rồi.', furigana: [{ kanji: '失礼', reading: 'しつれい' }] },
        { jp: 'お先に失礼します。', vn: 'Tôi xin phép về trước.', furigana: [{ kanji: '先', reading: 'さき' }, { kanji: '失礼', reading: 'しつれい' }] },
        { jp: '失礼します。', vn: 'Xin phép.', furigana: [{ kanji: '失礼', reading: 'しつれい' }] },
        { jp: 'では、失礼します。', vn: 'Vậy, tôi xin phép.', furigana: [{ kanji: '失礼', reading: 'しつれい' }] },
        { jp: 'ちょっと失礼します。', vn: 'Xin lỗi một chút.', furigana: [{ kanji: '失礼', reading: 'しつれい' }] },
        { jp: '失礼しました。', vn: 'Tôi đã thất lễ (xin lỗi vì chuyện đã qua).', furigana: [{ kanji: '失礼', reading: 'しつれい' }] }
    ],
    'いらっしゃってください': [
        { jp: 'また、いらっしゃってください。', vn: 'Lần sau lại đến chơi nhé.', furigana: [] },
        { jp: '是非、いらっしゃってください。', vn: 'Nhất định hãy đến nhé.', furigana: [{ kanji: '是非', reading: 'ぜひ' }] },
        { jp: 'いつでもいらっしゃってください。', vn: 'Hãy đến bất cứ lúc nào.', furigana: [] },
        { jp: '遊びにいらっしゃってください。', vn: 'Hãy đến chơi nhé.', furigana: [{ kanji: '遊', reading: 'あそ' }] },
        { jp: '明日、いらっしゃってください。', vn: 'Ngày mai hãy đến nhé.', furigana: [{ kanji: '明日', reading: 'あした' }] },
        { jp: '皆さんでいらっしゃってください。', vn: 'Mọi người hãy cùng đến nhé.', furigana: [{ kanji: '皆', reading: 'みな' }] }
    ],
    'ふじさん': [
        { jp: '富士山は高いです。', vn: 'Núi Phú Sĩ cao.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }, { kanji: '高', reading: 'たか' }] },
        { jp: '富士山に登ります。', vn: 'Leo núi Phú Sĩ.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }, { kanji: '登', reading: 'のぼ' }] },
        { jp: 'きれいな富士山', vn: 'Núi Phú Sĩ đẹp.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }] },
        { jp: '冬の富士山', vn: 'Núi Phú Sĩ mùa đông.', furigana: [{ kanji: '冬', reading: 'ふゆ' }, { kanji: '富士山', reading: 'ふじさん' }] },
        { jp: '富士山が見えます。', vn: 'Nhìn thấy núi Phú Sĩ.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }, { kanji: '見', reading: 'み' }] },
        { jp: '富士山は日本にあります。', vn: 'Núi Phú Sĩ ở Nhật Bản.', furigana: [{ kanji: '富士山', reading: 'ふじさん' }, { kanji: '日本', reading: 'にほん' }] }
    ],
    'びわこ': [
        { jp: '琵琶湖は大きいです。', vn: 'Hồ Biwa lớn.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }, { kanji: '大', reading: 'おお' }] },
        { jp: '滋賀県に琵琶湖があります。', vn: 'Hồ Biwa ở tỉnh Shiga.', furigana: [{ kanji: '滋賀県', reading: 'しがけん' }, { kanji: '琵琶湖', reading: 'びわこ' }] },
        { jp: '琵琶湖へ行きます。', vn: 'Đi hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }, { kanji: '行', reading: 'い' }] },
        { jp: 'きれいな琵琶湖', vn: 'Hồ Biwa đẹp.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }] },
        { jp: '琵琶湖の水', vn: 'Nước hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }, { kanji: '水', reading: 'みず' }] },
        { jp: '琵琶湖一周', vn: 'Một vòng hồ Biwa.', furigana: [{ kanji: '琵琶湖', reading: 'びわこ' }, { kanji: '一周', reading: 'いっしゅう' }] }
    ],
    'シャンハイ': [
        { jp: 'シャンハイに行きます。', vn: 'Đi Thượng Hải.', furigana: [{ kanji: '行', reading: 'い' }] },
        { jp: 'シャンハイはにぎやかです。', vn: 'Thượng Hải rất náo nhiệt.', furigana: [] },
        { jp: 'シャンハイの人口', vn: 'Dân số Thượng Hải.', furigana: [{ kanji: '人口', reading: 'じんこう' }] },
        { jp: 'シャンハイの料理', vn: 'Món ăn Thượng Hải.', furigana: [{ kanji: '料理', reading: 'りょうり' }] },
        { jp: 'シャンハイは中国にあります。', vn: 'Thượng Hải ở Trung Quốc.', furigana: [{ kanji: '中国', reading: 'ちゅうごく' }] },
        { jp: '夜のシャンハイ', vn: 'Thượng Hải về đêm.', furigana: [{ kanji: '夜', reading: 'よる' }] }
    ],
    'しちにんのさむらい': [
        { jp: '「七人の侍」を見ましたか。', vn: 'Bạn đã xem "7 chàng võ sĩ Samurai" chưa?', furigana: [{ kanji: '七人', reading: 'しちにん' }, { kanji: '侍', reading: 'さむらい' }, { kanji: '見', reading: 'み' }] },
        { jp: '「七人の侍」は映画です。', vn: '"7 chàng võ sĩ Samurai" là phim.', furigana: [{ kanji: '七人', reading: 'しちにん' }, { kanji: '侍', reading: 'さむらい' }, { kanji: '映画', reading: 'えいが' }] },
        { jp: '「七人の侍」は有名です。', vn: '"7 chàng võ sĩ Samurai" rất nổi tiếng.', furigana: [{ kanji: '七人', reading: 'しちにん' }, { kanji: '侍', reading: 'さむらい' }, { kanji: '有名', reading: 'ゆうめい' }] },
        { jp: '「七人の侍」はおもしろいです。', vn: '"7 chàng võ sĩ Samurai" rất hay.', furigana: [{ kanji: '七人', reading: 'しちにん' }, { kanji: '侍', reading: 'さむらい' }, { kanji: '面白', reading: 'おもしろ' }] },
        { jp: '黒澤明の「七人の侍」', vn: '"7 chàng võ sĩ Samurai" của Kurosawa Akira.', furigana: [{ kanji: '黒澤明', reading: 'くろさわあきら' }, { kanji: '七人', reading: 'しちにん' }, { kanji: '侍', reading: 'さむらい' }] },
        { jp: '昔の映画、「七人の侍」', vn: 'Phim ngày xưa, "7 chàng võ sĩ Samurai".', furigana: [{ kanji: '昔', reading: 'むかし' }, { kanji: '映画', reading: 'えいが' }, { kanji: '七人', reading: 'しちにん' }, { kanji: '侍', reading: 'さむらい' }] }
    ],
    'きんかくじ': [
        { jp: '金閣寺はきれいです。', vn: 'Chùa Vàng rất đẹp.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }] },
        { jp: '金閣寺へ行きました。', vn: 'Tôi đã đi Chùa Vàng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }, { kanji: '行', reading: 'い' }] },
        { jp: '金閣寺は京都にあります。', vn: 'Chùa Vàng ở Kyoto.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }, { kanji: '京都', reading: 'きょうと' }] },
        { jp: '金閣寺の庭', vn: 'Vườn của Chùa Vàng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }, { kanji: '庭', reading: 'にわ' }] },
        { jp: '金閣寺を見ます。', vn: 'Ngắm Chùa Vàng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }, { kanji: '見', reading: 'み' }] },
        { jp: '金閣寺は有名です。', vn: 'Chùa Vàng rất nổi tiếng.', furigana: [{ kanji: '金閣寺', reading: 'きんかくじ' }, { kanji: '有名', reading: 'ゆうめい' }] }
    ]
};

// Function to find lesson 8 and update vocab
const lesson8StartPattern = /const lesson8Data: LessonDetail = \{/;
const vocabStartPattern = /vocabulary: \[/;
const vocabEndPattern = /^\s{2}\],?$/;

const lines = content.split('\n');
let inLesson8 = false;
let inVocab = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (lesson8StartPattern.test(line)) {
        inLesson8 = true;
    }

    if (inLesson8 && vocabStartPattern.test(line)) {
        inVocab = true;
        continue;
    }

    if (inVocab && vocabEndPattern.test(line)) {
        inVocab = false;
        inLesson8 = false;
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
