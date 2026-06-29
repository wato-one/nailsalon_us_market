import { competitorMarkets, consumerMarkets } from "./regional-markets";

export const sections = [
  { id: "overview", label: "Tổng quan" },
  { id: "pestel", label: "PESTEL" },
  { id: "porter", label: "Porter" },
  { id: "competitors", label: "Đối thủ" },
  { id: "consumer", label: "Khách hàng" },
  { id: "journey", label: "Hành trình mua/Sử dụng dịch vụ" },
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
  competitors:
    "Phân tích đối thủ riêng cho California (bang) và San Diego (thị trường địa phương) — mô hình, mức đe dọa và khác biệt vị trí địa lý.",
  consumer:
    "Chân dung khách dịch vụ nail theo từng thị trường: California và San Diego — mỗi thị trường có Demographic và Psychographic riêng.",
  journey:
    "Hành trình mua và sử dụng dịch vụ nail — từ kích hoạt nhu cầu đến tái mua, áp dụng cho khách CA/SD.",
  strategy: "Đề xuất chiến lược cho nhà đầu tư, chuỗi và salon độc lập tại Mỹ.",
  valueChain: "Chuỗi giá trị ngành nail tại Hoa Kỳ",
};

export const consumerLabels = {
  marketHeading: "Thị trường",
  demographicsTitle: "Demographic",
  psychographicsTitle: "Psychographic",
  segmentsTitle: "Customer Segmentation",
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

export { competitorMarkets, consumerMarkets };

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
    { term: "Demographic", def: "Đặc điểm dân số khách dịch vụ: tuổi, giới, thu nhập, hộ gia đình — theo vùng CA/SD." },
    { term: "Psychographic", def: "Tâm lý khi book và trải nghiệm salon: vệ sinh, trust, loyalty thợ, chờ đợi." },
    { term: "Khách dịch vụ", def: "Người trả tiền manicure/pedicure/spa nail — khác với lao động/thợ (workforce data)." },
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
