export interface SubtitleSegment {
  id: number;
  startTime: number; // seconds
  endTime: number;
  japanese: string;
  vietnameseMeaning: string;
  words: {
    text: string;
    reading?: string;
    meaning?: string;
  }[];
}

export interface Article {
  id: number;
  title: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  category: string;
  image: string;
  videoUrl: string;
  date: string;
  subtitles: SubtitleSegment[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: "日本の春 (Mùa xuân Nhật Bản)",
    level: "N4",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "2024-03-15",
    subtitles: [
      {
        id: 1,
        startTime: 0,
        endTime: 4,
        japanese: "日本の春は美しいです。",
        vietnameseMeaning: "Mùa xuân của Nhật Bản rất đẹp.",
        words: [
          { text: "日本", reading: "にほん", meaning: "Nhật Bản" },
          { text: "の", meaning: "của" },
          { text: "春", reading: "はる", meaning: "mùa xuân" },
          { text: "は", meaning: "thì" },
          { text: "美しい", reading: "うつくしい", meaning: "đẹp" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      },
      {
        id: 2,
        startTime: 4,
        endTime: 8,
        japanese: "桜の花が咲きます。",
        vietnameseMeaning: "Hoa anh đào nở.",
        words: [
          { text: "桜", reading: "さくら", meaning: "hoa anh đào" },
          { text: "の", meaning: "của" },
          { text: "花", reading: "はな", meaning: "hoa" },
          { text: "が", meaning: "là" },
          { text: "咲きます", reading: "さきます", meaning: "nở" },
          { text: "。" }
        ]
      },
      {
        id: 3,
        startTime: 8,
        endTime: 14,
        japanese: "多くの人が花見を楽しみます。",
        vietnameseMeaning: "Nhiều người thích ngắm hoa.",
        words: [
          { text: "多く", reading: "おおく", meaning: "nhiều" },
          { text: "の", meaning: "của" },
          { text: "人", reading: "ひと", meaning: "người" },
          { text: "が", meaning: "là" },
          { text: "花見", reading: "はなみ", meaning: "ngắm hoa" },
          { text: "を", meaning: "(trợ từ)" },
          { text: "楽しみます", reading: "たのしみます", meaning: "thưởng thức" },
          { text: "。" }
        ]
      },
      {
        id: 4,
        startTime: 14,
        endTime: 20,
        japanese: "公園や川の近くで、家族や友達と一緒にお弁当を食べます。",
        vietnameseMeaning: "Ở công viên hoặc gần sông, họ ăn cơm hộp cùng gia đình và bạn bè.",
        words: [
          { text: "公園", reading: "こうえん", meaning: "công viên" },
          { text: "や", meaning: "và" },
          { text: "川", reading: "かわ", meaning: "sông" },
          { text: "の", meaning: "của" },
          { text: "近く", reading: "ちかく", meaning: "gần" },
          { text: "で", meaning: "ở" },
          { text: "、" },
          { text: "家族", reading: "かぞく", meaning: "gia đình" },
          { text: "や", meaning: "và" },
          { text: "友達", reading: "ともだち", meaning: "bạn bè" },
          { text: "と", meaning: "cùng" },
          { text: "一緒に", reading: "いっしょに", meaning: "cùng nhau" },
          { text: "お弁当", reading: "おべんとう", meaning: "cơm hộp" },
          { text: "を", meaning: "(trợ từ)" },
          { text: "食べます", reading: "たべます", meaning: "ăn" },
          { text: "。" }
        ]
      },
      {
        id: 5,
        startTime: 20,
        endTime: 26,
        japanese: "春は本当に素晴らしい季節です。",
        vietnameseMeaning: "Mùa xuân thực sự là một mùa tuyệt vời.",
        words: [
          { text: "春", reading: "はる", meaning: "mùa xuân" },
          { text: "は", meaning: "thì" },
          { text: "本当に", reading: "ほんとうに", meaning: "thực sự" },
          { text: "素晴らしい", reading: "すばらしい", meaning: "tuyệt vời" },
          { text: "季節", reading: "きせつ", meaning: "mùa" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "日本の食べ物 (Ẩm thực Nhật Bản)",
    level: "N5",
    category: "Food",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    date: "2024-03-10",
    subtitles: [
      {
        id: 1,
        startTime: 0,
        endTime: 4,
        japanese: "日本の食べ物はとてもおいしいです。",
        vietnameseMeaning: "Thức ăn Nhật Bản rất ngon.",
        words: [
          { text: "日本", reading: "にほん", meaning: "Nhật Bản" },
          { text: "の", meaning: "của" },
          { text: "食べ物", reading: "たべもの", meaning: "thức ăn" },
          { text: "は", meaning: "thì" },
          { text: "とても", meaning: "rất" },
          { text: "おいしい", meaning: "ngon" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      },
      {
        id: 2,
        startTime: 4,
        endTime: 8,
        japanese: "寿司とラーメンは有名です。",
        vietnameseMeaning: "Sushi và ramen rất nổi tiếng.",
        words: [
          { text: "寿司", reading: "すし", meaning: "sushi" },
          { text: "と", meaning: "và" },
          { text: "ラーメン", meaning: "mì ramen" },
          { text: "は", meaning: "thì" },
          { text: "有名", reading: "ゆうめい", meaning: "nổi tiếng" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      },
      {
        id: 3,
        startTime: 8,
        endTime: 12,
        japanese: "私は毎日ご飯を食べます。",
        vietnameseMeaning: "Tôi ăn cơm mỗi ngày.",
        words: [
          { text: "私", reading: "わたし", meaning: "tôi" },
          { text: "は", meaning: "thì" },
          { text: "毎日", reading: "まいにち", meaning: "mỗi ngày" },
          { text: "ご飯", reading: "ごはん", meaning: "cơm" },
          { text: "を", meaning: "(trợ từ)" },
          { text: "食べます", reading: "たべます", meaning: "ăn" },
          { text: "。" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "東京の生活 (Cuộc sống ở Tokyo)",
    level: "N3",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    date: "2024-03-08",
    subtitles: [
      {
        id: 1,
        startTime: 0,
        endTime: 4,
        japanese: "東京は日本の首都です。",
        vietnameseMeaning: "Tokyo là thủ đô của Nhật Bản.",
        words: [
          { text: "東京", reading: "とうきょう", meaning: "Tokyo" },
          { text: "は", meaning: "thì" },
          { text: "日本", reading: "にほん", meaning: "Nhật Bản" },
          { text: "の", meaning: "của" },
          { text: "首都", reading: "しゅと", meaning: "thủ đô" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      },
      {
        id: 2,
        startTime: 4,
        endTime: 8,
        japanese: "人口は約1400万人です。",
        vietnameseMeaning: "Dân số khoảng 14 triệu người.",
        words: [
          { text: "人口", reading: "じんこう", meaning: "dân số" },
          { text: "は", meaning: "thì" },
          { text: "約", reading: "やく", meaning: "khoảng" },
          { text: "1400万人", reading: "せんよんひゃくまんにん", meaning: "14 triệu người" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      },
      {
        id: 3,
        startTime: 8,
        endTime: 14,
        japanese: "電車はとても便利ですが、朝は混雑しています。",
        vietnameseMeaning: "Tàu điện rất tiện lợi nhưng buổi sáng rất đông đúc.",
        words: [
          { text: "電車", reading: "でんしゃ", meaning: "tàu điện" },
          { text: "は", meaning: "thì" },
          { text: "とても", meaning: "rất" },
          { text: "便利", reading: "べんり", meaning: "tiện lợi" },
          { text: "ですが", meaning: "nhưng" },
          { text: "、" },
          { text: "朝", reading: "あさ", meaning: "buổi sáng" },
          { text: "は", meaning: "thì" },
          { text: "混雑", reading: "こんざつ", meaning: "đông đúc" },
          { text: "しています", meaning: "đang" },
          { text: "。" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "日本語の勉強 (Học tiếng Nhật)",
    level: "N5",
    category: "Education",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    date: "2024-03-05",
    subtitles: [
      {
        id: 1,
        startTime: 0,
        endTime: 4,
        japanese: "日本語を勉強します。",
        vietnameseMeaning: "Tôi học tiếng Nhật.",
        words: [
          { text: "日本語", reading: "にほんご", meaning: "tiếng Nhật" },
          { text: "を", meaning: "(trợ từ)" },
          { text: "勉強します", reading: "べんきょうします", meaning: "học" },
          { text: "。" }
        ]
      },
      {
        id: 2,
        startTime: 4,
        endTime: 8,
        japanese: "毎日漢字を覚えます。",
        vietnameseMeaning: "Mỗi ngày tôi học kanji.",
        words: [
          { text: "毎日", reading: "まいにち", meaning: "mỗi ngày" },
          { text: "漢字", reading: "かんじ", meaning: "chữ Hán" },
          { text: "を", meaning: "(trợ từ)" },
          { text: "覚えます", reading: "おぼえます", meaning: "nhớ/học" },
          { text: "。" }
        ]
      },
      {
        id: 3,
        startTime: 8,
        endTime: 12,
        japanese: "難しいですが、楽しいです。",
        vietnameseMeaning: "Khó nhưng vui.",
        words: [
          { text: "難しい", reading: "むずかしい", meaning: "khó" },
          { text: "ですが", meaning: "nhưng" },
          { text: "、" },
          { text: "楽しい", reading: "たのしい", meaning: "vui" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "日本のビジネス文化 (Văn hóa kinh doanh Nhật Bản)",
    level: "N2",
    category: "Business",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    date: "2024-03-01",
    subtitles: [
      {
        id: 1,
        startTime: 0,
        endTime: 5,
        japanese: "日本のビジネス文化は独特です。",
        vietnameseMeaning: "Văn hóa kinh doanh Nhật Bản rất đặc biệt.",
        words: [
          { text: "日本", reading: "にほん", meaning: "Nhật Bản" },
          { text: "の", meaning: "của" },
          { text: "ビジネス", meaning: "kinh doanh" },
          { text: "文化", reading: "ぶんか", meaning: "văn hóa" },
          { text: "は", meaning: "thì" },
          { text: "独特", reading: "どくとく", meaning: "đặc biệt" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      },
      {
        id: 2,
        startTime: 5,
        endTime: 10,
        japanese: "敬語を使うことが重要です。",
        vietnameseMeaning: "Sử dụng kính ngữ là rất quan trọng.",
        words: [
          { text: "敬語", reading: "けいご", meaning: "kính ngữ" },
          { text: "を", meaning: "(trợ từ)" },
          { text: "使う", reading: "つかう", meaning: "sử dụng" },
          { text: "こと", meaning: "việc" },
          { text: "が", meaning: "là" },
          { text: "重要", reading: "じゅうよう", meaning: "quan trọng" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "日本の伝統芸術 (Nghệ thuật truyền thống Nhật Bản)",
    level: "N1",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    date: "2024-02-28",
    subtitles: [
      {
        id: 1,
        startTime: 0,
        endTime: 5,
        japanese: "日本には多くの伝統芸術があります。",
        vietnameseMeaning: "Nhật Bản có nhiều loại nghệ thuật truyền thống.",
        words: [
          { text: "日本", reading: "にほん", meaning: "Nhật Bản" },
          { text: "には", meaning: "ở/có" },
          { text: "多く", reading: "おおく", meaning: "nhiều" },
          { text: "の", meaning: "của" },
          { text: "伝統芸術", reading: "でんとうげいじゅつ", meaning: "nghệ thuật truyền thống" },
          { text: "が", meaning: "là" },
          { text: "あります", meaning: "có" },
          { text: "。" }
        ]
      },
      {
        id: 2,
        startTime: 5,
        endTime: 10,
        japanese: "歌舞伎や能は世界的に有名です。",
        vietnameseMeaning: "Kabuki và Noh nổi tiếng trên thế giới.",
        words: [
          { text: "歌舞伎", reading: "かぶき", meaning: "kịch Kabuki" },
          { text: "や", meaning: "và" },
          { text: "能", reading: "のう", meaning: "kịch Noh" },
          { text: "は", meaning: "thì" },
          { text: "世界的に", reading: "せかいてきに", meaning: "trên thế giới" },
          { text: "有名", reading: "ゆうめい", meaning: "nổi tiếng" },
          { text: "です", meaning: "là" },
          { text: "。" }
        ]
      }
    ]
  }
];

export const categories = ["All", "Culture", "Food", "Lifestyle", "Education", "Business"];
export const levels = ["All", "N5", "N4", "N3", "N2", "N1"] as const;

export const levelColors: Record<string, string> = {
  N5: "bg-green-500",
  N4: "bg-blue-500",
  N3: "bg-yellow-500",
  N2: "bg-orange-500",
  N1: "bg-red-500"
};
