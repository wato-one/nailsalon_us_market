/** Parallel CA | SD rows — cùng tiêu đề chủ đề, thuật ngữ tiếng Việt thống nhất */

export const demographicsCompareRows = [
  {
    rowLabel: "Quy mô dân số",
    california: {
      metric: "~39,4 triệu",
      value: "Bang lớn nhất nước",
      detail:
        "Thị trường nail lớn nhất Mỹ — nhiều thành phố lớn (LA, SF, SD, Sacramento) và vùng ngoại ô.",
      sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
    },
    sanDiego: {
      metric: "3,3 triệu",
      value: "Quận San Diego",
      detail:
        "Thành phố San Diego ~1,4 triệu dân. Mật độ tiệm nail cao; có khu đô thị, ngoại ô East County, North County và khu quân sự.",
      sourceIds: ["census-sd-county-2024", "census-sd-city-2024"],
    },
  },
  {
    rowLabel: "Tuổi trung bình",
    california: {
      metric: "~38,4",
      value: "Lõi khách 25–55 tuổi",
      detail:
        "Nhóm 25–55 tuổi đi tiệm thường xuyên nhất. Người từ 65 tuổi hay chọn pedicure/spa ở ven biển và ngoại ô.",
      sourceIds: ["census-sd-county-2024"],
    },
    sanDiego: {
      metric: "36,6",
      value: "Thành phố San Diego",
      detail:
        "Chủ yếu Millennials và Gen X. Khách thường chọn tiệm gần nhà hoặc gần chỗ làm.",
      sourceIds: ["census-sd-city-2024"],
    },
  },
  {
    rowLabel: "Giới tính",
    california: {
      metric: "~90%+ nữ",
      value: "Khách tiệm nail",
      detail:
        "Phần lớn khách manicure/pedicure là phụ nữ. Nam giới và khách không phân biệt giới đang tăng ở thành phố lớn.",
      sourceIds: ["statista-nail-salons-us", "gmi-nail-salon-2025"],
    },
    sanDiego: {
      metric: "~90%+ nữ",
      value: "Khách tiệm nail",
      detail:
        "Tương tự California. Thêm nhóm quân nhân nam và khách nam ở khu căn cứ — cần menu và không gian phù hợp.",
      sourceIds: ["statista-nail-salons-us", "gmi-nail-salon-2025", "census-sd-county-2024"],
    },
  },
  {
    rowLabel: "Đa dạng sắc tộc",
    california: {
      metric: "Đa sắc tộc",
      value: "Hispanic · Asian · White",
      detail:
        "Bang đa dạng nhất nước. Nail art và giá trung bình mạnh ở cộng đồng Hispanic/Asian; giá cao hơn ở ven biển.",
      sourceIds: ["ucla-nail-files-2024", "statista-consumer-csv-2023"],
    },
    sanDiego: {
      metric: "35% Hispanic",
      value: "Quận — đa dạng",
      detail: "41% White, 13% Asian, 35% Hispanic — cả nail art và dịch vụ giá trung bình đều phổ biến.",
      sourceIds: ["census-sd-county-2024", "census-sd-city-2024"],
    },
  },
  {
    rowLabel: "Thu nhập (hộ gia đình)",
    california: {
      metric: "~USD 100K",
      value: "Thu nhập giữa (bang)",
      detail:
        "Chênh lệch lớn: ven biển chi USD 60–120+ cho spa; vùng nội địa nhạy giá, thường USD 20–35 cho dịch vụ cơ bản.",
      sourceIds: ["census-sd-county-2024", "cpi-east-county-income"],
    },
    sanDiego: {
      metric: "USD 109–113K",
      value: "Quận · Santee",
      detail:
        "32–38% hộ thu USD 100–200K. Đủ chi manicure USD 25–45 và pedicure cao cấp USD 60–80 định kỳ.",
      sourceIds: ["census-sd-county-2024", "census-santee-2024", "cpi-east-county-income"],
    },
  },
  {
    rowLabel: "Mức độ dùng dịch vụ nail",
    california: {
      metric: "62%",
      value: "Vùng Tây (khảo sát)",
      detail:
        "Khảo sát sản phẩm nail Mỹ: 62% người trả lời vùng West — tham chiếu cho California, không thay số liệu từng tiệm.",
      sourceIds: ["statista-consumer-csv-2023"],
    },
    sanDiego: {
      metric: "Cao",
      value: "Mật độ tiệm dày",
      detail:
        "Nhiều tiệm trong bán kính 5–15 dặm. Khách so sánh kỹ trước khi chọn — cạnh tranh gay gắt theo từng khu.",
      sourceIds: ["census-sd-county-2024", "brightlocal-reviews-2024"],
    },
  },
];

export const psychographicsCompareRows = [
  {
    rowLabel: "Vệ sinh & an toàn",
    california: {
      detail:
        "Khách quen tiệm phải sạch, có sổ ghi bồn ngâm chân (luật vệ sinh BBC California). Tiệm vi phạm hoặc đánh giá xấu lan nhanh.",
      impact: "critical",
      sourceIds: ["ca-bbc-art12", "brightlocal-reviews-2024"],
    },
    sanDiego: {
      detail:
        "Đánh giá online hay nhắc bồn ngâm chân sạch, không mùi nồng. Khách đổi sang tiệm khác cùng khu nếu thấy dụng cụ không sạch.",
      impact: "critical",
      sourceIds: ["ca-bbc-art12", "brightlocal-reviews-2024", "wve-exposed-report"],
    },
  },
  {
    rowLabel: "Tần suất sử dụng dịch vụ",
    california: {
      detail:
        "Nhiều khách đi 2–4 tuần một lần. Móng gel dài ra khiến họ muốn đi sớm — không chỉ trước dịp lễ.",
      impact: "opportunity",
      sourceIds: ["gmi-nail-salon-2025", "blvd-salon-stats-2025"],
    },
    sanDiego: {
      detail:
        "Tương tự 2–4 tuần/lần. Cuối tuần ở East County (Santee) nhiều gia đình đi cùng — hay phải chờ lâu.",
      impact: "high",
      sourceIds: ["blvd-salon-stats-2025", "census-santee-2024", "salon-today-retention"],
    },
  },
  {
    rowLabel: "Chọn tiệm theo khu & giá",
    california: {
      detail:
        "Ven biển (LA, SF, SD): khách chấp nhận trả nhiều. Vùng nội địa: ưu tiên giá rẻ, đi thẳng không cần đặt lịch.",
      impact: "insight",
      sourceIds: ["gmi-nail-salon-2025", "statista-nail-salons-us"],
    },
    sanDiego: {
      detail:
        "Khách so tiệm trong bán kính 5–15 dặm trước khi lái xa. Google và Yelp lọc theo khoảng cách quan trọng hơn tên thương hiệu lớn.",
      impact: "critical",
      sourceIds: ["brightlocal-reviews-2024", "census-sd-county-2024"],
    },
  },
  {
    rowLabel: "Không gian & sản phẩm",
    california: {
      detail:
        "Khách thành phố sẵn sàng trả thêm cho tiệm thông thoáng, dùng sản phẩm ít mùi và ít độc hại.",
      impact: "opportunity",
      sourceIds: ["wve-exposed-report", "gmi-nail-salon-2025"],
    },
    sanDiego: {
      detail:
        "Phụ huynh Santee cần tiệm sạch, có dịch vụ cho trẻ. Câu hỏi thường gặp: \"Tiệm này an toàn cho con không?\"",
      impact: "insight",
      sourceIds: ["santee-city-demographics", "ca-bbc-art12", "wve-exposed-report"],
    },
  },
  {
    rowLabel: "Tin đánh giá online",
    california: {
      detail:
        "Khoảng 71% khách không chọn tiệm dưới 3 sao. Google và Yelp là bước lọc đầu tiên vì có rất nhiều tiệm.",
      impact: "critical",
      sourceIds: ["brightlocal-reviews-2024"],
    },
    sanDiego: {
      detail:
        "Tương tự — đánh giá online và ảnh thật quyết định thử tiệm mới. Bạn bè và hàng xóm (đặc biệt Santee) cũng hay giới thiệu.",
      impact: "critical",
      sourceIds: ["brightlocal-reviews-2024", "gmi-nail-salon-2025"],
    },
  },
];

export const segmentsCompareRows = [
  {
    rowLabel: "Khách đi thường xuyên",
    california: {
      tag: "CHÍNH",
      tagColor: "#C0001E",
      name: "Khách ngoại ô & nội địa",
      pct: "~45–50%",
      sizeMarket: "Inland Empire · Central Valley · ngoại ô",
      profile: "Manicure/pedicure 2–4 tuần; giá USD 25–45; tip 15–20%.",
      mindset: "Giá ổn định, thợ quen, ít thử tiệm mới",
      channel: "Google Maps, giới thiệu, đi thẳng",
      barrier: "Chờ cuối tuần, lo vệ sinh bồn ngâm chân",
      sourceIds: ["gmi-nail-salon-2025", "ca-bbc-art12"],
    },
    sanDiego: {
      tag: "CHÍNH",
      tagColor: "#C0001E",
      name: "Phụ nữ làm việc East County",
      pct: "35–40%",
      sizeMarket: "Santee · El Cajon · Lakeside",
      profile: "Manicure/pedicure 2–4 tuần; tip 15–20%; lái xe 72%.",
      mindset: "Chăm sóc bản thân gọn; ghét chờ; trung thành thợ quen",
      channel: "Google Maps, Yelp, tin nhắn nhắc lịch",
      barrier: "Chỗ đậu xe, lo vệ sinh bồn ngâm chân",
      sourceIds: ["census-santee-2024", "cpi-east-county-income", "brightlocal-reviews-2024"],
    },
  },
  {
    rowLabel: "Nhóm đang tăng",
    california: {
      tag: "TĂNG TRƯỞNG",
      tagColor: "#1565C0",
      name: "Nail art & xu hướng — khu đô thị",
      pct: "~20–25%",
      sizeMarket: "LA · SF · SD khu đô thị · Gen Z/Millennials",
      profile: "Gel, dipping, nail art; chi USD 45–80+; chia sẻ lên mạng.",
      mindset: "Thể hiện cá tính; theo xu hướng TikTok/Instagram",
      channel: "TikTok, Instagram, ảnh mẫu của thợ",
      barrier: "Giá cao; thời gian làm lâu",
      sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
    },
    sanDiego: {
      tag: "TĂNG TRƯỞNG",
      tagColor: "#2575FC",
      name: "Gia đình & phụ huynh Santee",
      pct: "25–30%",
      sizeMarket: "~21.000 hộ",
      profile: "Phụ huynh + dịch vụ cho trẻ; đi Chủ nhật.",
      mindset: "Chăm sóc cả gia đình; cần tiệm sạch cho trẻ",
      channel: "Đi thẳng, nhóm Facebook SD East",
      barrier: "Mùi hóa chất, thiếu ghế cho cả gia đình",
      sourceIds: ["census-santee-2024", "santee-city-demographics", "ca-bbc-art12"],
    },
  },
  {
    rowLabel: "Khách trả giá cao",
    california: {
      tag: "GIÁ CAO",
      tagColor: "#2E7D32",
      name: "Spa cao cấp — ven biển",
      pct: "~15–20%",
      sizeMarket: "Ven biển · thu nhập cao",
      profile: "Pedicure spa USD 80–150+; sản phẩm sạch; không gian yên tĩnh.",
      mindset: "Giảm stress, chăm bản thân; ít quan tâm giá",
      channel: "Website spa, khách sạn giới thiệu, Yelp",
      barrier: "Kỳ vọng sang trọng; cạnh spa y khoa",
      sourceIds: ["gmi-nail-salon-2025", "wve-exposed-report"],
    },
    sanDiego: {
      tag: "GIÁ CAO",
      tagColor: "#2E7D32",
      name: "Khách cao cấp — khu đô thị & ven biển",
      pct: "15–20%",
      sizeMarket: "23% hộ >USD 200K",
      profile: "Pedicure đặc biệt USD 60–120+; đi khi stress hoặc làm quà.",
      mindset: "Trải nghiệm yên tính, sạch; ít nhạy giá",
      channel: "Yelp ảnh thật, website đặt lịch",
      barrier: "Kỳ vọng sang trọng; cạnh spa y khoa",
      sourceIds: ["census-sd-county-2024", "gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "Nam giới & khách mới",
    california: {
      tag: "MỚI",
      tagColor: "#6A1B9A",
      name: "Nam giới & không phân biệt giới",
      pct: "~8–12%",
      sizeMarket: "Thành phố lớn · đang tăng",
      profile: "Manicure/pedicure cơ bản USD 20–35; pedicure thể thao.",
      mindset: "Ngại tiệm \"chỉ cho nữ\"; cần menu và trang trí trung tính",
      channel: "Google Maps gần đây, bạn giới thiệu",
      barrier: "Ngại lần đầu đến tiệm",
      sourceIds: ["gmi-nail-salon-2025"],
    },
    sanDiego: {
      tag: "MỚI",
      tagColor: "#6A1B9A",
      name: "Nam giới & gia đình quân nhân",
      pct: "8–12%",
      sizeMarket: "Thành phố SD + căn cứ quân sự",
      profile: "Manicure cơ bản USD 20–25; pedicure thể thao.",
      mindset: "Ngại tiệm quá \"nữ tính\"; cần menu nam rõ ràng",
      channel: "Google Maps gần đây, đồng nghiệp giới thiệu",
      barrier: "Ngại lần đầu; chuyển trú phải tìm tiệm mới",
      sourceIds: ["gmi-nail-salon-2025", "census-sd-city-2024"],
    },
  },
];

export const competitorsCompareRows = [
  {
    rowLabel: "Tiệm độc lập",
    california: {
      name: "Tiệm độc lập — toàn bang",
      type: "Độc lập · ~62% thị trường Mỹ",
      rating: "3,5–5 sao · đa dạng theo khu",
      threat: 5,
      strengths:
        "Nhiều tiệm ở khu mua sắm và ngoại ô; thợ quen khách; linh hoạt giá; cộng đồng tiệm nail mạnh.",
      weaknesses: "Chất lượng không đều; vệ sinh BBC chưa đều; đặt lịch online còn yếu.",
      sourceIds: ["gmi-nail-salon-2025", "ucla-nail-files-2024", "ca-bbc-art12"],
    },
    sanDiego: {
      name: "Tiệm độc lập — Quận SD",
      type: "Độc lập · khu mua sắm & plaza",
      rating: "4,0–5 sao · đa dạng",
      threat: 5,
      strengths:
        "Nhiều tiệm mỗi khu (vd. Santee: LK, Sunny, Polish, La Vie); thợ quen khách; giá USD 25–55; cuối tuần East County đông.",
      weaknesses: "Chờ lâu cuối tuần; thợ nghỉ việc; đặt lịch online không đều.",
      sourceIds: ["census-sd-county-2024", "brightlocal-reviews-2024", "gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "Chuỗi khu vực",
    california: {
      name: "Happy Nails & Spa",
      type: "Chuỗi · Southern CA",
      rating: "Nhiều điểm · nail + spa",
      threat: 4,
      strengths: "Menu rộng, marketing khu vực, vị trí tốt ở LA/OC/IE và một số điểm SD.",
      weaknesses: "Không phủ toàn bang; cạnh tranh giá với tiệm độc lập.",
      sourceIds: ["happy-nails-spa", "ucla-nail-files-2024"],
    },
    sanDiego: {
      name: "Happy Nails & Spa (San Diego)",
      type: "Chuỗi · có điểm tại SD",
      rating: "Nail + spa · nhiều điểm",
      threat: 4,
      strengths: "Nhận diện thương hiệu khu vực; menu spa rộng; marketing tốt hơn tiệm nhỏ lẻ.",
      weaknesses: "Ít điểm hơn tiệm độc lập; giá cao hơn tiệm giá rẻ.",
      sourceIds: ["happy-nails-spa", "census-sd-county-2024"],
    },
  },
  {
    rowLabel: "Chuỗi nhượng quyền",
    california: {
      name: "Pro Nails",
      type: "Nhượng quyền · có mặt tại CA",
      rating: "Hàng trăm điểm · giá trung bình",
      threat: 3,
      strengths: "Quy trình chuẩn, đào tạo thợ, mở rộng ở ngoại ô Inland Empire và Central Valley.",
      weaknesses: "Phí nhượng quyền; chất lượng theo từng chủ; khó cạnh tiệm cao cấp LA/SF.",
      sourceIds: ["pro-nails-franchise", "gmi-nail-salon-2025"],
    },
    sanDiego: {
      name: "Pro Nails",
      type: "Nhượng quyền · vài điểm tại SD County",
      rating: "Giá trung bình · ít điểm hơn tiệm độc lập",
      threat: 2,
      strengths:
        "Quy trình chuẩn, đào tạo thợ; có mặt tại SD County và vùng lân cận (Chula Vista, National City).",
      weaknesses:
        "Ít điểm hơn tiệm độc lập; khó cạnh tiệm cao cấp ven biển La Jolla, Del Mar.",
      sourceIds: ["pro-nails-franchise", "gmi-nail-salon-2025", "census-sd-county-2024"],
    },
  },
  {
    rowLabel: "Tiệm trong siêu thị",
    california: {
      name: "Regal Nails (Walmart CA)",
      type: "Tiệm trong Walmart",
      rating: "Giá rẻ · nhiều khách qua lại",
      threat: 3,
      strengths: "Khách Walmart/Sam's Club; tiện; giá manicure thấp.",
      weaknesses: "Trải nghiệm cao cấp hạn chế; đánh giá không đều; không làm nail art phức tạp.",
      sourceIds: ["regal-nails", "gmi-nail-salon-2025"],
    },
    sanDiego: {
      name: "Regal Nails — Walmart SD",
      type: "Tiệm trong Walmart",
      rating: "Giá rẻ · tiện lợi",
      threat: 2,
      strengths: "Khách Walmart; giá thấp; nhanh khi đi mua sắm.",
      weaknesses: "Đánh giá trung bình; không nail art phức tạp; khách quay lại ít.",
      sourceIds: ["regal-nails", "gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "Tiệm cao cấp / spa",
    california: {
      name: "Spa / spa y khoa có nail",
      type: "Dịch vụ đầy đủ · LA / Bay Area / ven biển",
      rating: "Cao cấp USD 80–150+",
      threat: 3,
      strengths: "Gói chăm sóc sức khỏe, không gian sang, khách thu nhập cao ven biển và đô thị.",
      weaknesses: "Giá cao; không phục vụ khách giá rẻ; cạnh tiệm nail chuyên biệt.",
      sourceIds: ["gmi-nail-salon-2025", "statista-nail-salons-us"],
    },
    sanDiego: {
      name: "Tiệm cao cấp — khu đô thị & ven biển SD",
      type: "Spa nail · La Jolla / trung tâm / Del Mar",
      rating: "USD 70–120+ pedicure",
      threat: 3,
      strengths: "Khách thu nhập cao (23% hộ >USD 200K); yên tĩnh, sản phẩm cao cấp.",
      weaknesses: "Không phù hợp ngoại ô East County; cạnh spa khách sạn và spa y khoa.",
      sourceIds: ["census-sd-county-2024", "gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "Làm nail tại nhà (thay thế)",
    california: {
      name: "Tự làm / press-on / gel tại nhà",
      type: "Thay thế · giá rẻ",
      rating: "Amazon / Ulta",
      threat: 2,
      strengths: "Tiết kiệm; tiện tại nhà; Gen Z thử xu hướng nhanh.",
      weaknesses: "Không có pedicure chuyên sâu; thiếu trải nghiệm tại tiệm.",
      sourceIds: ["gmi-nail-salon-2025", "statista-consumer-csv-2023"],
    },
    sanDiego: {
      name: "Tự làm / press-on / gel tại nhà",
      type: "Thay thế · giá rẻ",
      rating: "Amazon / Ulta",
      threat: 2,
      strengths: "Tiết kiệm; tiện tại nhà; Gen Z thử xu hướng nhanh.",
      weaknesses: "Không pedicure chuyên sâu; khó nail art phức tạp.",
      sourceIds: ["gmi-nail-salon-2025", "statista-consumer-csv-2023"],
    },
  },
];

export const infoSourcesCompareRows = [
  {
    rowLabel: "Google Maps / Search",
    california: {
      importance: 5,
      detail: "'Nail salon near me' + lọc sao — 71% bỏ qua dưới 3 sao",
      sourceIds: ["brightlocal-reviews-2024"],
    },
    sanDiego: {
      importance: 5,
      detail: "'Nail salon San Diego' / East County — lọc sao và khoảng cách",
      sourceIds: ["brightlocal-reviews-2024"],
    },
  },
  {
    rowLabel: "Yelp",
    california: {
      importance: 4,
      detail: "Đánh giá chi tiết LA/SF/SD; ảnh thật quyết định thử tiệm mới",
      sourceIds: ["brightlocal-reviews-2024"],
    },
    sanDiego: {
      importance: 4,
      detail: "Đánh giá East County; ảnh bồn ngâm chân quyết định thử tiệm mới",
      sourceIds: ["brightlocal-reviews-2024"],
    },
  },
  {
    rowLabel: "Giới thiệu trực tiếp",
    california: {
      importance: 4,
      detail: "Giới thiệu trong cộng đồng Á/Việt — bổ sung cho đánh giá online",
      sourceIds: ["gmi-nail-salon-2025"],
    },
    sanDiego: {
      importance: 4,
      detail: "Bạn bè, hàng xóm Santee, đồng nghiệp căn cứ — tin tưởng cao",
      sourceIds: ["gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "TikTok / Instagram",
    california: {
      importance: 4,
      detail: "Nail art, video ASMR tiệm — Gen Z/Millennials thành phố",
      sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
    },
    sanDiego: {
      importance: 3,
      detail: "Reels nail art, ảnh trước/sau — Gen Z/Millennials SD",
      sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
    },
  },
  {
    rowLabel: "Facebook / nhóm cộng đồng",
    california: {
      importance: 3,
      detail: "Nhóm địa phương, cộng đồng Việt — hỏi tiệm uy tín",
      sourceIds: ["gmi-nail-salon-2025"],
    },
    sanDiego: {
      importance: 4,
      detail: "SD East Happenings — hỏi tiệm uy tín; phụ huynh 35+",
      sourceIds: ["gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "Website / app đặt lịch",
    california: {
      importance: 4,
      detail: "~46–50% đặt lịch ban đêm; menu giá rõ ràng",
      sourceIds: ["blvd-salon-stats-2025"],
    },
    sanDiego: {
      importance: 4,
      detail: "Menu giá rõ ràng; đặt lịch ban đêm qua web hoặc app",
      sourceIds: ["blvd-salon-stats-2025"],
    },
  },
];
