
const fs = require('fs');

const filePath = String.raw`c:\Users\ADMIN\Desktop\Vibe\nihongo-chiyou-lab-main\nihongo-chiyou-lab-main\src\data\kanjiData.ts`;

const updates = {
    13: { radicals: "一 (nhất) + 刀 (đao)", mnemonic: "Một (一) nhát dao (刀) cắt đứt vạn (万) mối sầu." }, // Common mnemonic variation
    14: { radicals: "冂 (khuynh)", mnemonic: "Cái mũ (冂) hình tròn như đồng Yên (円)." },
    27: { radicals: "人 (nhân) + ラ (ra?)", mnemonic: "Bây giờ (今) người (人) đang ở dưới mái nhà." },
    28: { radicals: "土 (thổ) + 寸 (thốn)", mnemonic: "Đất (土) ở chùa (寺) tấc (寸) đất tấc vàng." },
    29: { radicals: "日 (nhật) + 寺 (tự)", mnemonic: "Mặt trời (日) chiếu lên ngôi chùa (寺) để báo giờ (時)." },
    31: { radicals: "刀 (đao)", mnemonic: "Hình dáng thanh đao sắc bén." },
    36: { radicals: "夕 (tịch) + ト (bốc)", mnemonic: "Buổi chiều (夕) bói (ト) xem có nên ra ngoài (外) không." },
    37: { radicals: "ナ (bất) + 口 (khẩu)", mnemonic: "Tay phải cầm thìa đưa vào miệng (口) ăn cơm." },
    38: { radicals: "工 (công)", mnemonic: "Hình cái thước của người thợ (công nhân)." },
    39: { radicals: "ナ (bất) + 工 (công)", mnemonic: "Tay trái giữ thước (工) để làm việc." },
    40: { radicals: "䒑 (thảo) + 月 (nguyệt) + 刂 (đao)", mnemonic: "Cắt (刂) cỏ (䒑) dưới ánh trăng (月) trước nhà." }, // "Tiền"
    41: { radicals: "彳 (xích) + 幺 (yêu) + 夂 (truy)", mnemonic: "Bước chân (彳) nhỏ (幺) đi chậm (夂) ở phía sau (hậu)." },
    42: { radicals: "干 (can)", mnemonic: "Nhìn giống con trâu (牛) nhưng đầu không thò lên (Ngọ - trưa)." },
    45: { radicals: "木 (mộc) + 日 (nhật)", mnemonic: "Mặt trời (日) mọc sau cái cây (木) là hướng Đông." },
    46: { radicals: "西 (tây)", mnemonic: "Mặt trời lặn hướng Tây trông như tổ chim." },
    60: { radicals: "父 (phụ)", mnemonic: "Hình ảnh người cha cầm gậy (hai nét trên)." }
};

try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updatedCount = 0;

    for (const [id, data] of Object.entries(updates)) {
        // Find the block for this ID
        // Regex: id: {id}, followed by content, then radicals: "..." or radicals: "",
        const idRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?radicals:\\s*")(".*?)(".*?,[\\s\\S]*?mnemonic:\\s*")(".*?)(")`);

        // If we find empty or filled strings, we replace them.
        // Wait, simplistic regex above assumes a specific order.
        // Safer: replace `radicals: "..."` inside the ID block.

        // Let's find the block indices first
        const blockStartMatch = content.match(new RegExp(`id:\\s*${id},`));
        if (!blockStartMatch) {
            console.log(`ID ${id} not found.`);
            continue;
        }

        const startIndex = blockStartMatch.index;
        // Find end of block (start of next ID or end of array)
        const afterStart = content.slice(startIndex + 1);
        const nextIdMatch = afterStart.match(/id:\s*\d+,/);
        const endIndex = nextIdMatch ? startIndex + 1 + nextIdMatch.index : content.length;

        let block = content.slice(startIndex, endIndex);

        // Replace radicals
        if (block.includes('radicals:')) {
            block = block.replace(/radicals:\s*".*?"/, `radicals: "${data.radicals}"`);
            block = block.replace(/radicals:\s*`.*?`/, `radicals: "${data.radicals}"`); // Handle backticks just in case
        }

        // Replace mnemonic
        if (block.includes('mnemonic:')) {
            block = block.replace(/mnemonic:\s*".*?"/, `mnemonic: "${data.mnemonic}"`);
            block = block.replace(/mnemonic:\s*`.*?`/, `mnemonic: "${data.mnemonic}"`);
        }

        content = content.slice(0, startIndex) + block + content.slice(endIndex);
        updatedCount++;
        console.log(`Prepared update for ID ${id}`);
    }

    if (updatedCount > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully updated ${updatedCount} kanji entries.`);
    } else {
        console.log("No updates performed.");
    }

} catch (err) {
    console.error(err);
}
