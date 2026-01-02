export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Mẹo Học Kanji Hiệu Quả Cho Người Mới Bắt Đầu",
    slug: "5-meo-hoc-kanji-hieu-qua",
    excerpt: "Khám phá những phương pháp học Kanji đã được chứng minh hiệu quả, giúp bạn ghi nhớ nhanh và lâu hơn.",
    category: "Học tập",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
    author: "Nguyễn Văn A",
    date: "2024-01-15",
    readTime: "5 phút",
    content: `
      <h2>1. Học theo bộ thủ (Radical)</h2>
      <p>Mỗi chữ Kanji được cấu tạo từ các bộ phận nhỏ gọi là bộ thủ. Việc nắm vững các bộ thủ cơ bản sẽ giúp bạn dễ dàng phân tích và ghi nhớ Kanji mới.</p>
      <p>Ví dụ: Bộ 人 (người) xuất hiện trong nhiều chữ như 休 (nghỉ ngơi), 体 (cơ thể), 住 (sống).</p>
      
      <h2>2. Sử dụng phương pháp liên tưởng</h2>
      <p>Tạo ra những câu chuyện hoặc hình ảnh liên quan đến hình dạng của Kanji. Não bộ ghi nhớ hình ảnh và câu chuyện tốt hơn nhiều so với việc học thuộc lòng.</p>
      <p>Ví dụ: Chữ 森 (rừng) được tạo thành từ 3 chữ 木 (cây) - một khu rừng có nhiều cây!</p>
      
      <h2>3. Viết tay thường xuyên</h2>
      <p>Việc viết tay giúp tăng cường trí nhớ cơ bắp. Hãy dành ít nhất 15 phút mỗi ngày để luyện viết Kanji.</p>
      
      <h2>4. Học trong ngữ cảnh</h2>
      <p>Thay vì học từng chữ riêng lẻ, hãy học Kanji trong các từ vựng và câu văn. Điều này giúp bạn hiểu cách sử dụng thực tế.</p>
      
      <h2>5. Ôn tập theo phương pháp Spaced Repetition</h2>
      <p>Sử dụng các ứng dụng flashcard như Anki để ôn tập định kỳ. Phương pháp này giúp chuyển kiến thức từ trí nhớ ngắn hạn sang dài hạn.</p>
    `
  },
  {
    id: 2,
    title: "Sự Khác Biệt Giữa は (wa) và が (ga) Trong Tiếng Nhật",
    slug: "su-khac-biet-wa-ga",
    excerpt: "Hai trợ từ này thường gây nhầm lẫn cho người học. Bài viết này sẽ giải thích rõ ràng cách sử dụng của chúng.",
    category: "Ngữ pháp",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800",
    author: "Trần Thị B",
    date: "2024-01-10",
    readTime: "7 phút",
    content: `
      <h2>Giới thiệu</h2>
      <p>Trợ từ は (wa) và が (ga) là hai trong những trợ từ quan trọng nhất trong tiếng Nhật, nhưng cũng là nguồn gây nhầm lẫn lớn nhất cho người học.</p>
      
      <h2>Khi nào dùng は (wa)?</h2>
      <p><strong>1. Đánh dấu chủ đề của câu:</strong></p>
      <p>私は学生です。(Watashi wa gakusei desu.) - Tôi là học sinh.</p>
      <p>Ở đây, "tôi" là chủ đề mà người nói muốn đề cập đến.</p>
      
      <p><strong>2. Thông tin đã biết:</strong></p>
      <p>Khi nói về điều gì đó mà cả người nói và người nghe đều biết.</p>
      
      <h2>Khi nào dùng が (ga)?</h2>
      <p><strong>1. Đánh dấu chủ ngữ của câu:</strong></p>
      <p>雨が降っています。(Ame ga futte imasu.) - Trời đang mưa.</p>
      
      <p><strong>2. Thông tin mới:</strong></p>
      <p>誰が来ましたか？田中さんが来ました。</p>
      <p>(Ai đã đến? Tanaka đã đến.)</p>
      
      <h2>Mẹo phân biệt</h2>
      <p>Hãy nghĩ về は như "nói về" và が như "làm gì". Nếu bạn muốn giới thiệu một chủ đề, dùng は. Nếu bạn muốn nhấn mạnh ai/cái gì thực hiện hành động, dùng が.</p>
    `
  },
  {
    id: 3,
    title: "Top 10 Anime Hay Nhất Để Học Tiếng Nhật",
    slug: "top-10-anime-hoc-tieng-nhat",
    excerpt: "Học tiếng Nhật qua anime không chỉ thú vị mà còn rất hiệu quả. Đây là danh sách những anime phù hợp nhất.",
    category: "Giải trí",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    author: "Lê Văn C",
    date: "2024-01-05",
    readTime: "6 phút",
    content: `
      <h2>Tại sao học tiếng Nhật qua Anime?</h2>
      <p>Anime cung cấp ngữ cảnh thực tế, giúp bạn làm quen với cách phát âm tự nhiên và các biểu hiện thông dụng trong cuộc sống hàng ngày.</p>
      
      <h2>1. Shirokuma Cafe (しろくまカフェ)</h2>
      <p>Anime nhẹ nhàng về quán cafe của gấu trắng. Hội thoại đơn giản, tốc độ chậm - hoàn hảo cho người mới.</p>
      
      <h2>2. Chi's Sweet Home (チーズスイートホーム)</h2>
      <p>Câu chuyện về chú mèo con Chi. Tập phim ngắn, ngôn ngữ cơ bản, rất dễ theo dõi.</p>
      
      <h2>3. Doraemon (ドラえもん)</h2>
      <p>Anime kinh điển dành cho trẻ em, sử dụng tiếng Nhật chuẩn và dễ hiểu.</p>
      
      <h2>4. Crayon Shin-chan (クレヨンしんちゃん)</h2>
      <p>Hài hước và đời thường. Chú ý: có một số ngôn ngữ không chính thức!</p>
      
      <h2>5. K-On! (けいおん!)</h2>
      <p>Về nhóm nữ sinh chơi nhạc. Hội thoại tự nhiên giữa các bạn học.</p>
      
      <h2>Mẹo học qua Anime</h2>
      <ul>
        <li>Xem lần đầu với phụ đề tiếng Việt</li>
        <li>Xem lần hai với phụ đề tiếng Nhật</li>
        <li>Xem lần ba không phụ đề</li>
        <li>Ghi chú các từ/cụm từ mới</li>
      </ul>
    `
  }
];

export const blogCategories = ["Tất cả", "Học tập", "Ngữ pháp", "Giải trí", "Văn hóa"];
