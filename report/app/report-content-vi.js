export const sections = [
  { id: "overview", label: "Tổng quan" },
  { id: "pestel", label: "PESTEL" },
  { id: "porter", label: "Porter" },
  { id: "competitors", label: "Đối thủ" },
  { id: "consumer", label: "Khách hàng" },
  { id: "journey", label: "Hành trình mua" },
  { id: "strategy", label: "Chiến lược" },
  { id: "glossary", label: "Thuật ngữ" },
];

export const hero = {
  eyebrow: "Báo cáo nghiên cứu ngành · Hoa Kỳ · 2026",
  title: "Thị trường Nail Salon Hoa Kỳ — Phân tích toàn diện",
  subtitle:
    "Báo cáo tương tác về quy mô ngành, lực lượng cạnh tranh, hành vi người tiêu dùng và hành trình mua dịch vụ nail trên toàn quốc — tổng hợp từ báo cáo nghiên cứu thương mại, dữ liệu lao động và nguồn web bổ sung.",
  verifiedLine: "Dữ liệu đối chiếu từ Statista/IBISWorld, GMI, UCLA Labor Center, BLS, Boulevard và BrightLocal",
};

export const footerMeta = {
  generated: "06/2026",
  publisher: "Wato.one Research",
  note: "Báo cáo ngành quốc gia — không gắn với salon cụ thể",
};

export const sectionIntros = {
  pestel: "Yếu tố vĩ mô ảnh hưởng toàn ngành nail salon tại Hoa Kỳ.",
  porter: "Năm lực lượng cạnh tranh trong ngành nail salon Mỹ.",
  competitors: "Chuỗi quốc gia, franchise và phân khúc salon độc lập chiếm đa số thị trường.",
  consumer:
    "Chân dung người tiêu dùng Mỹ: demographic, psychographic, hành vi media và phân khúc salon — tổng hợp Statista (n=1.092), GMI, BrightLocal và Boulevard.",
  journey: "Từ kích hoạt nhu cầu đến tái mua dịch vụ nail trên toàn quốc.",
  strategy: "Đề xuất chiến lược cho nhà đầu tư, chuỗi và salon độc lập tại Mỹ.",
  valueChain: "Chuỗi giá trị ngành nail tại Hoa Kỳ",
};

export const consumerLabels = {
  demographicsTitle: "Demographic — Chân dung dân số học",
  demographicsIntro:
    "Khảo sát Statista Consumer Insights (Mỹ, 07/2023, n=1.092). Tỷ lệ % là người trả lời trong từng nhóm demographic cũng dùng sản phẩm nail (proxy cho nhu cầu dịch vụ salon).",
  psychographicsTitle: "Psychographic — Động cơ & giá trị",
  psychographicsIntro:
    "Suy luận từ tiêu chí mua hàng, chi tiêu và xu hướng ngành — phản ánh kỳ vọng khi chọn salon, không chỉ sản phẩm retail.",
  mediaTitle: "Hành vi media & discovery",
  mediaIntro:
    "Kênh tìm kiếm, đánh giá và đặt lịch — ảnh hưởng trực tiếp marketing salon tại Mỹ.",
  segmentsTitle: "Phân khúc khách salon",
  infoSourcesTitle: "Nguồn thông tin khi chọn salon",
};

export const valueChain = [
  "Nhà sản xuất & phân phối sản phẩm nail",
  "Thương hiệu OPI, Gelish, CND",
  "Salon độc lập & franchise",
  "Khách hàng Mỹ (retail + dịch vụ)",
  "Đánh giá & giới thiệu (Google/Yelp/TikTok)",
];
export const valueChainHighlight = 2;

export const overviewSourceIds = [
  "gmi-nail-salon-2025",
  "statista-nail-salons-us",
  "blvd-salon-stats-2025",
  "ucla-nail-files-2024",
];

export const statCards = [
  { n: "USD 6,1B", l: "Doanh thu nail salon Mỹ", s: "2025 · GMI Insights" },
  { n: "~62%", l: "Salon độc lập", s: "Không thuộc chuỗi lớn · GMI" },
  { n: "~56.000", l: "Cơ sở nail salon", s: "2018 · Statista/IBISWorld" },
  { n: "USD 22,75", l: "Manicure cơ bản", s: "Giá trung bình 2019 · NAILS/Statista" },
];

export const pestelData = [
  {
    letter: "P",
    title: "Chính trị",
    color: "#C62828",
    sourceIds: ["ca-bbc-art12", "ucla-nail-files-2024"],
    items: [
      {
        headline: "Giám sát y tế bang — tiêu chuẩn khác nhau theo tiểu bang",
        detail:
          "Salon nail tại Mỹ chịu quy định của board cosmetology từng bang (ví dụ California BBC). Yêu cầu khử trùng pedicure, thông gió và nhật ký vệ sinh tạo rào cản nhập cuộc nhưng cũng là lợi thế cho salon tuân thủ tốt.",
        impact: "high",
        sourceIds: ["ca-bbc-art12", "ucla-nail-files-2024"],
      },
      {
        headline: "Chính sách lao động nhập cư ảnh hưởng lực lượng lao động",
        detail:
          "UCLA ghi nhận ~79% lao động nail tại California sinh ra ngoài Mỹ, đa số người Việt. Chính sách visa, cấp phép thợ và giám sát lao động ảnh hưởng trực tiếp nguồn cung kỹ thuật viên toàn quốc.",
        impact: "critical",
        sourceIds: ["ucla-nail-files-2024"],
      },
    ],
  },
  {
    letter: "E",
    title: "Kinh tế",
    color: "#1565C0",
    sourceIds: ["gmi-nail-salon-2025", "statista-nail-salons-us", "bls-manicurists"],
    items: [
      {
        headline: "Thị trường nail salon Mỹ ~USD 6,1 tỷ (2025)",
        detail:
          "GMI ước tính Mỹ chiếm ~77,9% doanh thu Bắc Mỹ; phân khúc mid-range (giá vừa phải) là lớn nhất. Chi tiêu làm đẹp được xem là định kỳ, ít bị cắt mạnh trong suy thoái ngắn.",
        impact: "opportunity",
        sourceIds: ["gmi-nail-salon-2025"],
      },
      {
        headline: "Ngành làm đẹt tổng thể phục hồi sau COVID",
        detail:
          "Statista/IBISWorld: thị trường salon làm đẹt (tóc + da + nail) đạt ~USD 69 tỷ (2023), sau mức ~USD 58,65 tỷ (2020). Chi tiêu dịch vụ nail riêng ~USD 8,36 tỷ (2018).",
        impact: "insight",
        sourceIds: ["statista-nail-salons-us"],
      },
      {
        headline: "Áp lực chi phí lao động & thiếu thợ",
        detail:
          "BLS dự báo việc làm manicurist/pedicurist tăng ~9% (2024–2034), nhanh hơn trung bình. ~62% salon độc lập phụ thuộc kỹ năng thợ; cạnh tranh tuyển dụng và lương tối thiểu tăng margin.",
        impact: "high",
        sourceIds: ["bls-manicurists", "gmi-nail-salon-2025", "ucla-nail-files-2024"],
      },
    ],
  },
  {
    letter: "S",
    title: "Xã hội",
    color: "#2E7D32",
    sourceIds: ["gmi-nail-salon-2025", "statista-consumer-csv-2023"],
    items: [
      {
        headline: "Self-care & nail art lan rộng qua mạng xã hội",
        detail:
          "Xu hướng gel, dipping powder, nail art và 'sơn tại nhà' đồng thời thúc đẩy cả dịch vụ salon và bán lẻ sản phẩm. TikTok/Instagram là kênh discovery chính cho Gen Z và Millennials.",
        impact: "opportunity",
        sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
      },
      {
        headline: "67% người Mỹ dùng sản phẩm nail polish",
        detail:
          "Khảo sát Statista (n=1.092, 07/2023): 33% không dùng; tiêu chí mua hàng đầu là bền màu (42%), giá (41%) và đa dạng màu (38%). Miền Tây có tỷ lệ sử dụng cao nhất.",
        impact: "insight",
        sourceIds: ["statista-consumer-csv-2023"],
      },
      {
        headline: "Nhu cầu vệ sinh & sản phẩm 'sạch' tăng",
        detail:
          "Khách ưu tiên salon sạch, ít mùi hóa chất. Báo cáo WVE và quy định bang về thông gió tạo kỳ vọng cao về an toàn sức khỏe nghề nghiệp và khách hàng.",
        impact: "critical",
        sourceIds: ["wve-exposed-report", "ca-bbc-art12"],
      },
    ],
  },
  {
    letter: "T",
    title: "Công nghệ",
    color: "#6A1B9A",
    sourceIds: ["blvd-salon-stats-2025", "brightlocal-reviews-2024"],
    items: [
      {
        headline: "Đặt lịch online chiếm tỷ trọng lớn và tăng retention",
        detail:
          "Boulevard: ~46–50% booking diễn ra ngoài giờ mở cửa. Khách lần đầu đặt online có tỷ lệ quay lại lần 2 ~78% so với ~39% walk-in (Salon Today/Boulevard).",
        impact: "critical",
        sourceIds: ["blvd-salon-stats-2025", "salon-today-retention"],
      },
      {
        headline: "Google Maps & đánh giá quyết định discovery",
        detail:
          "BrightLocal 2024: 71% người tiêu dùng không cân nhắc doanh nghiệp dưới 3★. Rating và số review là tài sản digital quan trọng nhất cho salon độc lập.",
        impact: "opportunity",
        sourceIds: ["brightlocal-reviews-2024"],
      },
      {
        headline: "POS, thanh toán không tiền mặt & CRM salon",
        detail:
          "Nền tảng như Boulevard, Mindbody, NailSoft giúp quản lý lịch, tip và marketing. Salon chậm số hóa mất lead đặt lịch ngoài giờ và dữ liệu khách hàng.",
        impact: "high",
        sourceIds: ["blvd-salon-stats-2025"],
      },
    ],
  },
  {
    letter: "E",
    title: "Môi trường",
    color: "#00695C",
    sourceIds: ["wve-exposed-report", "gmi-nail-salon-2025"],
    items: [
      {
        headline: "Rủi ro hóa chất trong salon",
        detail:
          "Báo cáo WVE 'Exposed' ghi nhận hóa chất độc hại trong sản phẩm làm móng. Áp lực chuyển sang sản phẩm ít VOC, thông gió đạt chuẩn và bảo vệ sức khỏe thợ.",
        impact: "high",
        sourceIds: ["wve-exposed-report"],
      },
      {
        headline: "Xu hướng vegan / clean beauty trong nail",
        detail:
          "GMI ghi nhận cơ hội từ dịch vụ 'health-focused nails' và sản phẩm ít độc tố — phù hợp khách trung-cao cấp và storytelling thương hiệu salon.",
        impact: "opportunity",
        sourceIds: ["gmi-nail-salon-2025"],
      },
    ],
  },
  {
    letter: "L",
    title: "Pháp lý",
    color: "#E65100",
    sourceIds: ["ca-bbc-art12", "ucla-nail-files-2024"],
    items: [
      {
        headline: "Quy định khử trùng pedicure và giấy phép establishment",
        detail:
          "BBC California (mẫu cho nhiều bang): nhật ký làm sạch footspa sau mỗi khách, cuối ngày và hàng tuần. Vi phạm có thể dẫn đến phạt và đình chỉ giấy phép.",
        impact: "critical",
        sourceIds: ["ca-bbc-art12"],
      },
      {
        headline: "Phân loại lao động & lương tối thiểu",
        detail:
          "UCLA: phần lớn thợ nail thuộc nhóm lương thấp; tranh chấp tip pooling, phân loại nhân viên vs contractor và tuân thủ OSHA trong salon là rủi ro pháp lý liên tục.",
        impact: "high",
        sourceIds: ["ucla-nail-files-2024"],
      },
    ],
  },
];

export const porterData = [
  {
    force: "Đe dọa từ đối thủ mới",
    level: 4,
    levelLabel: "CAO",
    color: "#1565C0",
    sourceIds: ["gmi-nail-salon-2025", "statista-nail-salons-us"],
    points: [
      "Rào cản vốn thấp: mở salon nail không cần đầu tư công nghệ lớn.",
      "~62% thị trường là salon độc lập — mô hình dễ nhân bản tại strip mall và khu dân cư.",
      "Franchise và kiosk trong Walmart (Regal Nails) mở rộng điểm tiếp cận với chi phí franchise thấp hơn F&B.",
    ],
  },
  {
    force: "Quyền lực nhà cung cấp",
    level: 2,
    levelLabel: "THẤP",
    color: "#2E7D32",
    sourceIds: ["statista-nail-salons-us", "nails-magazine-industry"],
    points: [
      "Thương hiệu sản phẩm (OPI, CND, Gelish) mạnh nhưng salon có nhiều lựa chọn thay thế.",
      "Salon mua sản phẩm qua distributor; không phụ thuộc một nhà cung cấp duy nhất.",
      "Xu hướng private label và bulk buying giảm quyền lực nhà cung cấp đơn lẻ.",
    ],
  },
  {
    force: "Quyền lực khách hàng",
    level: 4,
    levelLabel: "CAO",
    color: "#C62828",
    sourceIds: ["brightlocal-reviews-2024", "statista-consumer-csv-2023"],
    points: [
      "Chuyển salon chi phí thấp — khách so sánh giá manicure ~USD 20–40 và rating online.",
      "41% người dùng sản phẩm nail ưu tiên giá; 42% ưu tiên độ bền — kỳ vọng tương tự với dịch vụ.",
      "Review công khai (Google/Yelp) tăng quyền lực đàm phán của khách.",
    ],
  },
  {
    force: "Đe dọa thay thế",
    level: 3,
    levelLabel: "TRUNG BÌNH",
    color: "#E65100",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
    points: [
      "DIY tại nhà (gel kit, press-on) cạnh tranh với dịch vụ salon, đặc biệt sau COVID.",
      "Spa tổng hợp và med-spa gom manicure/pedicure vào gói cao cấp.",
      "Tuy nhiên nail art phức tạp và pedicure chuyên sâu khó thay thế hoàn toàn tại nhà.",
    ],
  },
  {
    force: "Cạnh tranh nội bộ ngành",
    level: 5,
    levelLabel: "RẤT CAO",
    color: "#6A1B9A",
    sourceIds: ["gmi-nail-salon-2025", "blvd-salon-stats-2025", "statista-nail-salons-us"],
    points: [
      "Hàng chục nghìn cơ sở cạnh tranh tại Mỹ; mật độ cao tại đô thị và vùng suburb.",
      "Chuỗi franchise, salon-in-retail và độc lập cùng tranh khách mid-range.",
      "Khác biệt hóa qua vệ sinh, thợ giỏi, đặt lịch và social proof là then chốt.",
    ],
  },
];

export const competitorData = [
  {
    name: "Salon độc lập (phân khúc đa số)",
    type: "Độc lập · ~62% thị trường",
    rating: "Đa dạng 3,5–5★",
    threat: 4,
    strengths:
      "Linh hoạt giá, gần khách hàng, quan hệ thợ–khách lâu dài, chi phí franchise = 0.",
    weaknesses:
      "Thiếu marketing tập trung, công nghệ đặt lịch yếu, phụ thuộc reputation địa phương.",
    sourceIds: ["gmi-nail-salon-2025", "ucla-nail-files-2024"],
  },
  {
    name: "Regal Nails",
    type: "Salon-in-retail · Walmart/Sam's Club",
    rating: "Quy mô quốc gia · giá entry",
    threat: 3,
    strengths:
      "Lượng khách Walmart, vị trí thuận tiện, nhận diện thương hiệu, chi phí mặt bằng thấp.",
    weaknesses:
      "Trải nghiệm premium hạn chế, phụ thuộc foot traffic retail, review không đồng đều theo điểm.",
    sourceIds: ["regal-nails", "gmi-nail-salon-2025"],
  },
  {
    name: "Pro Nails",
    type: "Franchise quốc gia",
    rating: "Hàng trăm điểm · mid-range",
    threat: 3,
    strengths:
      "Playbook vận hành, đào tạo thợ, marketing thương hiệu, mở rộng nhanh tại suburb.",
    weaknesses:
      "Phí franchise, kiểm soát chất lượng đa điểm, cạnh tranh với độc lập giá rẻ hơn.",
    sourceIds: ["pro-nails-franchise", "gmi-nail-salon-2025"],
  },
  {
    name: "Happy Nails & Spa",
    type: "Chuỗi khu vực · Tây Coast",
    rating: "Multi-location · full-service spa",
    threat: 4,
    strengths:
      "Menu dịch vụ rộng (nail + spa), quy mô marketing khu vực, vị trí premium strip mall.",
    weaknesses:
      "Tập trung địa lý hạn chế so với quốc gia, áp lực lao động tại CA.",
    sourceIds: ["happy-nails-spa", "ucla-nail-files-2024"],
  },
  {
    name: "Nails of America",
    type: "Franchise · kiosk & storefront",
    rating: "Quốc gia · mid-range",
    threat: 2,
    strengths:
      "Mô hình kiosk linh hoạt, brand nhượng quyền, hỗ trợ setup.",
    weaknesses:
      "Nhận diện thương hiệu yếu hơn Regal/Pro Nails, phụ thuộc franchisee.",
    sourceIds: ["nails-of-america", "gmi-nail-salon-2025"],
  },
];

export const consumerDemographics = [
  {
    category: "Quy mô mẫu",
    metric: "n = 1.092",
    value: "Toàn quốc Mỹ",
    detail: "Statista Beauty & Cosmetics US 2023 — cơ sở cho các breakdown bên dưới.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Penetration",
    metric: "67%",
    value: "Dùng nail polish / sản phẩm nail",
    detail: "732/1.092 người trả lời; 33% non-user — nhu cầu dịch vụ salon đã phổ biến nhưng chưa universal.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Giới tính",
    metric: "Nữ chiếm đa số",
    value: "Khách salon & thợ",
    detail: "Khảo sát sản phẩm thiên nữ; ngành dịch vụ salon Mỹ ước tính ~90%+ khách nữ (NAILS/IBISWorld). UCLA: 81% lao động nữ tại CA.",
    sourceIds: ["statista-consumer-csv-2023", "statista-nail-salons-us", "ucla-nail-files-2024"],
  },
  {
    category: "Tuổi — Gen Z",
    metric: "71%",
    value: "Dùng sản phẩm nail trong nhóm",
    detail: "220/311 người Gen Z (1995–2012) — nhóm adoption cao nhất theo thế hệ.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Tuổi — Millennials",
    metric: "70%",
    value: "Dùng sản phẩm nail",
    detail: "115/165 — lõi doanh thu mid-range salon; thói quen maintenance 2–4 tuần.",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
  },
  {
    category: "Tuổi — Gen X",
    metric: "67%",
    value: "Dùng sản phẩm nail",
    detail: "271/405 — chi tiêu ổn định, ưu tiên độ bền và giá.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Tuổi — Baby Boomer",
    metric: "59%",
    value: "Dùng sản phẩm nail",
    detail: "117/199 — thấp hơn Gen trẻ nhưng pedicure/spa premium vẫn quan trọng.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Nhóm tuổi 16–29",
    metric: "76%",
    value: "Penetration cao",
    detail: "205/268 — nail art, gel, social sharing; driver tăng trưởng GMI.",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
  },
  {
    category: "Khu vực — South",
    metric: "73%",
    value: "Penetration cao nhất",
    detail: "289/396 người trả lời tại South — mật độ salon và thói quen self-care mạnh.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Khu vực — Northeast",
    metric: "69%",
    value: "Penetration",
    detail: "141/203 — đô thị dày, cạnh tranh giá và review gay gắt.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Khu vực — West",
    metric: "62%",
    value: "Penetration",
    detail: "150/242 — CA chiếm phần lớn salon nail nước; lao động Việt Nam đông (UCLA).",
    sourceIds: ["statista-consumer-csv-2023", "ucla-nail-files-2024"],
  },
  {
    category: "Khu vực — Midwest",
    metric: "61%",
    value: "Penetration",
    detail: "152/251 — thấp nhất vùng; cơ hội mở rộng chuỗi/suburb.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Sắc tộc — Black",
    metric: "87%",
    value: "Dùng sản phẩm nail trong nhóm",
    detail: "103/118 — adoption rất cao; nail art & design culture mạnh.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Sắc tộc — Asian",
    metric: "71%",
    value: "Penetration",
    detail: "30/42 — liên quan cộng đồng salon và thói quen chăm sóc móng.",
    sourceIds: ["statista-consumer-csv-2023", "ucla-nail-files-2024"],
  },
  {
    category: "Sắc tộc — White",
    metric: "63%",
    value: "Penetration",
    detail: "528/842 — nhóm đông nhất về quy mô tuyệt đối.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Hôn nhân — Độc thân",
    metric: "71%",
    value: "Dùng sản phẩm nail",
    detail: "96/135 — self-care & sự kiện xã hội là trigger chính.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Hôn nhân — Đã kết hôn",
    metric: "67%",
    value: "Penetration",
    detail: "620/931 — khách maintenance định kỳ, gia đình cuối tuần.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Chi tiêu sản phẩm/năm",
    metric: "29%",
    value: "≤ USD 30",
    detail: "321/1.092 — nhạy giá; salon entry manicure ~USD 22,75 (2019) tương thích.",
    sourceIds: ["statista-consumer-csv-2023", "statista-nail-salons-us"],
  },
  {
    category: "Chi tiêu sản phẩm/năm",
    metric: "17%",
    value: "USD 31–60",
    detail: "190/1.092 — sẵn sàng trả premium cho gel/art.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    category: "Sản phẩm — Artificial nails",
    metric: "26%",
    value: "Người dùng",
    detail: "282/1.092 — proxy nhu cầu gel/acrylic tại salon, không DIY.",
    sourceIds: ["statista-consumer-csv-2023"],
  },
];

export const consumerPsychographics = [
  {
    headline: "Self-care đã chuẩn hóa — không còn xa xỉ",
    detail:
      "67% người Mỹ dùng sản phẩm nail; GMI ghi nhận chi tiêu làm đẹt ít bị cắt mạnh trong suy thoái ngắn. Manicure/pedicure là ritual định kỳ, đặc biệt phụ nữ 25–55.",
    impact: "opportunity",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
  },
  {
    headline: "Độ bền + giá — tiêu chí mua hàng đầu",
    detail:
      "42% ưu tiên 'long lasting', 41% giá, 38% đa dạng màu (Statista). Kỳ vọng tương tự với dịch vụ salon: gel bền, giá minh bạch, menu tier rõ.",
    impact: "insight",
    sourceIds: ["statista-consumer-csv-2023"],
  },
  {
    headline: "Thẩm mỹ & biểu đạt bản thân qua nail art",
    detail:
      "21% ưu tiên thiết kế đẹp; 26% dùng artificial nails. Gen Z/Millennials chia sẻ look trên social — salon là 'canvas' thể hiện cá tính.",
    impact: "opportunity",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025", "nails-magazine-industry"],
  },
  {
    headline: "Vệ sinh & an toàn — kỳ vọng sau COVID",
    detail:
      "Review salon nhấn mạnh sạch sẽ, footspa log, mùi hóa chất. WVE và BBC tăng nhận thức hóa chất — khách sẵn sàng trả premium cho 'clean nails'.",
    impact: "critical",
    sourceIds: ["wve-exposed-report", "ca-bbc-art12", "brightlocal-reviews-2024"],
  },
  {
    headline: "Đạo đức & sản phẩm 'sạch' — phân khúc đang nổi",
    detail:
      "16% ưu tiên cruelty-free, 7% sustainability, 5% vegan (Statista). Psychographic 'conscious consumer' — salon storytelling sản phẩm ít độc tố.",
    impact: "opportunity",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
  },
  {
    headline: "Tiện lợi vs trải nghiệm — polarized",
    detail:
      "Một nhóm ưu tiên walk-in/Walmart/Regal (giá, gần); nhóm khác trả USD 60–120+ cho spa premium. Mid-range GMI là 'sweet spot' đa số.",
    impact: "insight",
    sourceIds: ["gmi-nail-salon-2025", "regal-nails"],
  },
  {
    headline: "Cộng đồng & word-of-mouth",
    detail:
      "Giới thiệu bạn bè/đồng nghiệp mạnh trong cộng đồng nhập cư (UCLA). Psychographic 'trust network' — salon phụ thuộc reputation cộng đồng địa phương.",
    impact: "high",
    sourceIds: ["ucla-nail-files-2024"],
  },
];

export const consumerMediaBehavior = [
  {
    platform: "Google Search / Maps",
    role: "Discovery #1",
    behavior: "'Nails near me', filter rating & khoảng cách",
    detail: "71% không cân nhắc doanh nghiệp <3★. Google Business Profile là kênh bắt buộc.",
    importance: 5,
    sourceIds: ["brightlocal-reviews-2024"],
  },
  {
    platform: "Yelp",
    role: "Xác minh chất lượng",
    behavior: "Đọc review chi tiết, xem ảnh thực tế, so giá khu vực",
    detail: "Đặc biệt mạnh tại đô thị; ảnh pedicure station & vệ sinh quyết định.",
    importance: 4,
    sourceIds: ["brightlocal-reviews-2024"],
  },
  {
    platform: "TikTok",
    role: "Inspiration & trend",
    behavior: "Nail art viral, ASMR salon, before/after",
    detail: "Gen Z/Millennials discovery thiết kế trước khi book; salon cần clip ngắn portfolio thợ.",
    importance: 4,
    sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
  },
  {
    platform: "Instagram",
    role: "Portfolio & brand",
    behavior: "Feed thiết kế, Stories check-in, Reels",
    detail: "Mid/premium salon showcase; hashtag địa phương + tag thợ.",
    importance: 4,
    sourceIds: ["gmi-nail-salon-2025"],
  },
  {
    platform: "Giới thiệu trực tiếp",
    role: "Trust cao",
    behavior: "Bạn bè, gia đình, đồng nghiệp, cộng đồng ngôn ngữ",
    detail: "Mạnh trong cộng đồng Á/Việt; bổ sung cho review online.",
    importance: 4,
    sourceIds: ["ucla-nail-files-2024"],
  },
  {
    platform: "Website / app đặt lịch",
    role: "Conversion",
    behavior: "~46–50% booking ngoài giờ mở cửa",
    detail: "Boulevard/Mindbody/NailSoft; khách online retention ~78% vs walk-in ~39%.",
    importance: 4,
    sourceIds: ["blvd-salon-stats-2025", "salon-today-retention"],
  },
  {
    platform: "Facebook",
    role: "Local community",
    behavior: "Group địa phương, event, voucher",
    detail: "Phổ biến khách 35+ và salon độc lập suburb; ít viral hơn TikTok.",
    importance: 3,
    sourceIds: ["gmi-nail-salon-2025"],
  },
  {
    platform: "Groupon / deal sites",
    role: "Trial — retention thấp",
    behavior: "Khách lần đầu giá rẻ",
    detail: "Hiệu quả fill ghế trống nhưng cần CRM follow-up; không thay retention.",
    importance: 2,
    sourceIds: ["blvd-salon-stats-2025"],
  },
  {
    platform: "SMS / email salon",
    role: "Retention",
    behavior: "Nhắc fill 2 tuần, birthday offer, review prompt",
    detail: "Chuyển walk-in sang pre-book — đòn bẩy LTV lớn nhất.",
    importance: 4,
    sourceIds: ["salon-today-retention", "blvd-salon-stats-2025"],
  },
];

export const segments = [
  {
    name: "Khách định kỳ — 'Maintenance'",
    tag: "CORE",
    tagColor: "#C0001E",
    pct: "~45–55%",
    sizeMarket: "Phân khúc lớn nhất · GMI mid-range",
    demographics: "Nữ 25–55 · Millennials/Gen X · Married 67% · South/Midwest suburb",
    psychographics: "Self-care định kỳ, ưu tiên giá ổn định & thợ quen, ít thử salon mới",
    media: "Google Maps, giới thiệu bạn bè, SMS nhắc lịch, Yelp xác minh",
    profile:
      "Manicure/pedicure 2–4 tuần/lần; chi tiêu sản phẩm thường ≤USD 30/năm (29% mẫu Statista).",
    channel: "Google Maps, Yelp, giới thiệu bạn bè, đặt lịch quen",
    barrier: "Thời gian chờ, parking, lo vệ sinh pedicure",
    sourceIds: ["gmi-nail-salon-2025", "statista-consumer-csv-2023"],
  },
  {
    name: "Khách trải nghiệm — Nail art & gel",
    tag: "GROWTH",
    tagColor: "#1565C0",
    pct: "~20–25%",
    sizeMarket: "Gen Z / Millennials · social-driven",
    demographics: "16–39 tuổi · Gen Z 71% penetration · urban/suburb · đa sắc tộc",
    psychographics: "Biểu đạt cá tính, theo trend TikTok, sẵn sàng trả premium cho design",
    media: "TikTok, Instagram Reels, portfolio thợ, influencer micro",
    profile:
      "Gel, dipping, nail art; 26% dùng artificial nails (Statista); chi tiêu USD 31–60+.",
    channel: "TikTok, Instagram, influencer, portfolio thợ",
    barrier: "Giá premium, thời gian làm lâu, chất lượng không đồng đều",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
  },
  {
    name: "Khách tiện lợi — Retail & walk-in",
    tag: "VOLUME",
    tagColor: "#2E7D32",
    pct: "~15–20%",
    sizeMarket: "Salon-in-retail, strip mall",
    demographics: "Đa tuổi · gia đình · Midwest/South · nhạy giá",
    psychographics: "Cần nhanh, gần, giá entry; loyalty thấp, chấp nhận quality trade-off",
    media: "Foot traffic Walmart/mall, Google rating nhanh, ít follow social",
    profile:
      "Đi kèm mua sắm; manicure cơ bản ~USD 22,75; walk-in cuối tuần.",
    channel: "Foot traffic, Regal trong Walmart, walk-in",
    barrier: "Chất lượng không ổn định, xếp hàng, review thấp",
    sourceIds: ["regal-nails", "statista-nail-salons-us", "statista-consumer-csv-2023"],
  },
  {
    name: "Khách cao cấp — Spa & wellness",
    tag: "PREMIUM",
    tagColor: "#C9A535",
    pct: "~10–15%",
    sizeMarket: "Đô thị lớn · thu nhập cao",
    demographics: "35+ · Boomer/Gen X · Northeast/West urban · White/Asian skew",
    psychographics: "Clean beauty, spa experience, cruelty-free/vegan ưu tiên (16%/5%)",
    media: "Spa website, hotel referral, membership email, Yelp premium reviews",
    profile:
      "Pedicure spa USD 60–120+; ưu tiên sản phẩm sạch, không gian yên tĩnh.",
    channel: "Spa brand, hotel, referral, membership",
    barrier: "Cạnh tranh med-spa và salon tóc full-service",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025", "wve-exposed-report"],
  },
];

export const infoSources = [
  {
    rank: 1,
    name: "Google Maps / Reviews",
    importance: 5,
    detail: "71% bỏ qua dưới 3★ · discovery + xác minh vệ sinh",
    sourceIds: ["brightlocal-reviews-2024"],
  },
  {
    rank: 2,
    name: "Yelp",
    importance: 4,
    detail: "Review chi tiết dịch vụ nail, ảnh thực tế, so sánh giá khu vực",
    sourceIds: ["brightlocal-reviews-2024"],
  },
  {
    rank: 3,
    name: "Giới thiệu trực tiếp",
    importance: 4,
    detail: "Bạn bè, đồng nghiệp — đặc biệt mạnh trong cộng đồng nhập cư",
    sourceIds: ["ucla-nail-files-2024"],
  },
  {
    rank: 4,
    name: "TikTok / Instagram",
    importance: 4,
    detail: "Nail art trends, portfolio thợ, before/after",
    sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
  },
  {
    rank: 5,
    name: "Website / đặt lịch online",
    importance: 3,
    detail: "~46–50% booking ngoài giờ · menu giá minh bạch",
    sourceIds: ["blvd-salon-stats-2025"],
  },
  {
    rank: 6,
    name: "Voucher / Groupon",
    importance: 2,
    detail: "Kéo khách lần đầu nhưng retention thấp nếu không có follow-up",
    sourceIds: ["blvd-salon-stats-2025"],
  },
];

export const journeyStages = [
  {
    num: 1,
    icon: "💡",
    title: "Kích hoạt nhu cầu",
    subtitle: "Sự kiện, mùa, social media",
    duration: "1–7 ngày",
    color: "#1565C0",
    bgColor: "rgba(21, 101, 192, 0.06)",
    triggers: [
      { label: "Sự kiện / lễ hội", pct: "cao", desc: "Đám cưới, Tết, holiday party" },
      { label: "Social trend", pct: "", desc: "Nail art viral trên TikTok" },
      { label: "Bảo trì định kỳ", pct: "2–4 tuần", desc: "Móng grown-out, gel cần fill" },
    ],
    behaviorLabel: "Ngành",
    industryBehavior:
      "Salon và chuỗi cần nội dung mùa vụ và portfolio thợ trên social; 67% người Mỹ đã quen sản phẩm nail — nhu cầu dịch vụ được 'chuẩn hóa' như self-care.",
    sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
  },
  {
    num: 2,
    icon: "🔍",
    title: "Tìm kiếm & so sánh",
    subtitle: "Google, Yelp, giá menu",
    duration: "Vài phút – 2 ngày",
    color: "#6A1B9A",
    bgColor: "rgba(106, 27, 154, 0.06)",
    triggers: [
      { label: "Google 'nails near me'", pct: "cao", desc: "Filter theo rating & khoảng cách" },
      { label: "So giá menu", pct: "", desc: "Manicure ~USD 22,75 trung bình (2019)" },
      { label: "Đọc review vệ sinh", pct: "", desc: "Pedicure log, sạch sẽ footspa" },
    ],
    behaviorLabel: "Ngành",
    industryBehavior:
      "Salon dưới 3★ mất ~71% khách tiềm năng. Đầu tư Google Business Profile, ảnh thật và phản hồi review là chi phí marketing hiệu quả nhất cho độc lập.",
    sourceIds: ["brightlocal-reviews-2024", "statista-nail-salons-us"],
  },
  {
    num: 3,
    icon: "📅",
    title: "Đặt lịch / walk-in",
    subtitle: "Online vs quầy",
    duration: "Ngay lập tức",
    color: "#2E7D32",
    bgColor: "rgba(46, 125, 50, 0.06)",
    triggers: [
      { label: "Đặt online", pct: "~50% ngoài giờ", desc: "App, website, text booking" },
      { label: "Walk-in", pct: "cao cuối tuần", desc: "Chấp nhận chờ hoặc quay lại" },
      { label: "Gọi điện", pct: "", desc: "Vẫn phổ biến tại salon độc lập" },
    ],
    behaviorLabel: "Ngành",
    industryBehavior:
      "Salon không có booking 24/7 mất lead ngoài giờ. Pre-book tại quầy và nhắc SMS tăng fill rate ghế — top salon giữ chân khách mới tốt hơn ~56% (Boulevard).",
    sourceIds: ["blvd-salon-stats-2025", "salon-today-retention"],
  },
  {
    num: 4,
    icon: "💅",
    title: "Trải nghiệm dịch vụ",
    subtitle: "Thợ, vệ sinh, không gian",
    duration: "30–90 phút",
    color: "#C0001E",
    bgColor: "rgba(192, 0, 30, 0.06)",
    triggers: [
      { label: "Chất lượng thợ", pct: "", desc: "Kỹ thuật gel, độ bền, nail art" },
      { label: "Vệ sinh", pct: "critical", desc: "Khử trùng dụng cụ, footspa log" },
      { label: "Upsell", pct: "", desc: "Pedicure upgrade, paraffin, design" },
    ],
    behaviorLabel: "Ngành",
    industryBehavior:
      "88% salon cung cấp manicure — khác biệt nằm ở vệ sinh BBC/OSHA và thợ ổn định. UCLA: ~8/10 thợ thu nhập thấp — turnover cao ảnh hưởng chất lượng đồng đều.",
    sourceIds: ["statista-nail-salons-us", "ucla-nail-files-2024", "ca-bbc-art12"],
  },
  {
    num: 5,
    icon: "💳",
    title: "Thanh toán & tip",
    subtitle: "Cash, card, tip culture",
    duration: "5 phút",
    color: "#E65100",
    bgColor: "rgba(230, 81, 0, 0.06)",
    triggers: [
      { label: "Tip 15–25%", pct: "chuẩn Mỹ", desc: "Phần thu nhập quan trọng của thợ" },
      { label: "Thanh toán không tiền mặt", pct: "", desc: "POS tích hợp tip trên màn hình" },
      { label: "Membership / package", pct: "", desc: "Chuỗi và spa premium" },
    ],
    behaviorLabel: "Ngành",
    industryBehavior:
      "Mô hình tip và phân chia doanh thu là tranh chấp pháp lý phổ biến. Minh bạch tip và lương cạnh tranh giúp giữ thợ — giảm chi phí tuyển dụng.",
    sourceIds: ["ucla-nail-files-2024", "bls-manicurists"],
  },
  {
    num: 6,
    icon: "⭐",
    title: "Đánh giá & chia sẻ",
    subtitle: "Google, Yelp, social",
    duration: "1–48 giờ sau",
    color: "#C9A535",
    bgColor: "rgba(201, 165, 53, 0.1)",
    triggers: [
      { label: "Review Google", pct: "", desc: "Prompt sau dịch vụ qua SMS" },
      { label: "Ảnh nail art", pct: "", desc: "Instagram story, TikTok" },
      { label: "Review tiêu cực", pct: "", desc: "Vệ sinh, chờ lâu, thợ thiếu kinh nghiệm" },
    ],
    behaviorLabel: "Ngành",
    industryBehavior:
      "Vòng lặp reputation: review tốt → discovery cao hơn → foot traffic. Salon cần quy trình xử lý review xấu trong 24h và showcase thiết kế thật.",
    sourceIds: ["brightlocal-reviews-2024"],
  },
  {
    num: 7,
    icon: "🔄",
    title: "Tái mua & trung thành",
    subtitle: "Retention & LTV",
    duration: "2–4 tuần",
    color: "#00695C",
    bgColor: "rgba(0, 105, 92, 0.06)",
    triggers: [
      { label: "Nhắc lịch fill", pct: "", desc: "SMS/email trước 2 tuần" },
      { label: "Thợ yêu thích", pct: "", desc: "Request same technician" },
      { label: "Khách online vs walk-in", pct: "78% vs 39%", desc: "Retention lần 2 (Boulevard)" },
    ],
    behaviorLabel: "Ngành",
    industryBehavior:
      "Chuyển walk-in sang pre-book và CRM là đòn bẩy LTV lớn nhất. Mid-range salon nên ưu tiên retention hơn voucher một lần.",
    sourceIds: ["salon-today-retention", "blvd-salon-stats-2025"],
  },
];

export const strategyData = [
  {
    priority: 1,
    title: "Số hóa đặt lịch & reputation online",
    rationale:
      "Porter + PESTEL (công nghệ): quyền lực khách cao, discovery qua Google. Booking 24/7 và rating ≥4★ là điều kiện tồn tại cho salon độc lập.",
    actions: [
      "Triển khai POS/booking (Boulevard, Mindbody, NailSoft) với nhắc lịch SMS.",
      "Tối ưu Google Business Profile: ảnh vệ sinh, menu giá, phản hồi review <24h.",
      "Pre-book tại quầy cho walk-in — mục tiêu retention lần 2 theo benchmark Boulevard.",
    ],
    sourceIds: ["blvd-salon-stats-2025", "brightlocal-reviews-2024", "salon-today-retention"],
  },
  {
    priority: 2,
    title: "Tuân thủ vệ sinh & positioning 'sạch'",
    rationale:
      "PESTEL pháp lý + xã hội: BBC/OSHA, WVE và kỳ vọng khách sau COVID. Vệ sinh là differentiator có thể đo lường qua review.",
    actions: [
      "Nhật ký pedicure/footspa công khai; đào tạo khử trùng theo chuẩn bang.",
      "Thông gió đạt chuẩn; ưu tiên sản phẩm ít VOC cho khách và thợ.",
      "Storytelling 'clean nails' trên web và social — GMI xác nhận xu hướng.",
    ],
    sourceIds: ["ca-bbc-art12", "wve-exposed-report", "gmi-nail-salon-2025"],
  },
  {
    priority: 3,
    title: "Giữ chân thợ & quản lý lao động",
    rationale:
      "UCLA + BLS: lao động nhập cư, lương thấp, turnover cao. Thiếu thợ = mất khách đã book.",
    actions: [
      "Lương + tip minh bạch; lộ trình thợ senior và đào tạo nội bộ.",
      "Theo dõi turnover và NPS nội bộ; giảm phụ thuộc một 'star technician'.",
      "Tuân thủ phân loại lao động và OSHA — giảm rủi ro phạt.",
    ],
    sourceIds: ["ucla-nail-files-2024", "bls-manicurists"],
  },
  {
    priority: 4,
    title: "Phân khúc mid-range + nail art premium",
    rationale:
      "GMI: mid-range lớn nhất; Statista: 42% ưu tiên độ bền. Kết hợp menu giá ổn định và upsell thiết kế.",
    actions: [
      "Menu tier rõ: basic / gel / art premium với thời gian và giá minh bạch.",
      "Portfolio thợ trên TikTok/Instagram — thu hút phân khúc growth.",
      "Gói membership hoặc prepaid cho khách maintenance 2–4 tuần.",
    ],
    sourceIds: ["gmi-nail-salon-2025", "statista-consumer-csv-2023"],
  },
  {
    priority: 5,
    title: "M&A / franchise vs độc lập",
    rationale:
      "Cạnh tranh nội bộ rất cao; ~62% độc lập. Nhà đầu tư cân nhắc rollup khu vực hoặc franchise playbook.",
    actions: [
      "Đánh giá Pro Nails / Regal / regional chain cho expansion có vốn.",
      "Salon độc lập: liên minh marketing khu vực thay vì cạnh tranh giá race-to-bottom.",
      "Theo dõi GMI CAGR ~8% toàn cầu — Mỹ vẫn là thị trường trọng tâm Bắc Mỹ.",
    ],
    sourceIds: ["gmi-nail-salon-2025", "pro-nails-franchise", "regal-nails"],
  },
];

export const sectionHints = {
  overview: [
    { term: "NAICS 812112", def: "Mã ngành salon làm đẹt (tóc, da, nail) tại Mỹ." },
    { term: "Mid-range", def: "Phân khúc giá trung bình — chiếm thị phần lớn nhất theo GMI." },
    { term: "Salon độc lập", def: "~62% cơ sở không thuộc chuỗi franchise lớn." },
  ],
  pestel: [
    { term: "BBC", def: "California Board of Barbering and Cosmetology — mẫu giám sát y tế salon." },
    { term: "OSHA", def: "Cơ quan an toàn lao động liên bang — hóa chất và thông gió salon." },
    { term: "VOC", def: "Hợp chất hữu cơ bay hơi — mùi hóa chất trong salon nail." },
  ],
  porter: [
    { term: "Rào cản gia nhập", def: "Chi phí mở salon nail tương đối thấp → đe dọa đối thủ mới cao." },
    { term: "Salon-in-retail", def: "Mô hình kiosk/quầy trong siêu thị (vd. Regal Nails tại Walmart)." },
    { term: "Switching cost", def: "Khách chuyển salon dễ — quyền lực khách hàng cao." },
  ],
  competitors: [
    { term: "Franchise", def: "Nhượng quyền thương hiệu và quy trình vận hành (Pro Nails, Nails of America)." },
    { term: "Foot traffic", def: "Lượng khách tự nhiên từ vị trí (Walmart, mall)." },
    { term: "Full-service spa", def: "Salon kết hợp nail + massage + facial — phân khúc premium." },
  ],
  consumer: [
    { term: "Demographic", def: "Đặc điểm dân số học: tuổi, giới, vùng, sắc tộc, thu nhập/chi tiêu." },
    { term: "Psychographic", def: "Động cơ, giá trị, lifestyle — self-care, giá, vệ sinh, đạo đức." },
    { term: "Penetration", def: "Tỷ lệ người trong nhóm demographic cũng dùng sản phẩm/dịch vụ nail." },
  ],
  journey: [
    { term: "Walk-in", def: "Khách không đặt trước — retention thấp hơn booking online." },
    { term: "Pre-book", def: "Đặt lịch lần sau ngay tại quầy — tăng fill rate." },
    { term: "LTV", def: "Giá trị vòng đời khách — retention quan trọng hơn voucher một lần." },
  ],
  strategy: [
    { term: "CRM salon", def: "Hệ thống lưu lịch sử khách, nhắc lịch, marketing." },
    { term: "Rollup", def: "Mua gom nhiều salon độc lập thành chuỗi khu vực." },
    { term: "Race-to-bottom", def: "Cạnh tranh chỉ bằng hạ giá — phá margin ngành." },
  ],
};
