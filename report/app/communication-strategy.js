/** Đề xuất truyền thông — California | San Diego, song song từng hàng */

export const commSectionLabels = {
  coreMessages: "Thông điệp cốt lõi",
  channels: "Kênh truyền thông ưu tiên",
  segments: "Truyền thông theo nhóm khách",
  journey: "Truyền thông theo hành trình khách",
  calendar: "Lịch nội dung gợi ý (1 tháng)",
  guidelines: "Nên làm & không nên",
  metrics: "Theo dõi kết quả (hàng tháng)",
};

export const commIntroCompare = {
  california:
    "Bang lớn, nhiều khu và nhiều phân khúc — truyền thông cần rõ vệ sinh, giá minh bạch và nội dung phù hợp từng khu (ven biển vs nội địa).",
  sanDiego:
    "Khách chọn tiệm gần nhà (5–15 dặm). East County (Santee) mạnh gia đình cuối tuần — ưu tiên Google, nhóm Facebook địa phương và giới thiệu hàng xóm.",
  sourceIds: ["brightlocal-reviews-2024", "gmi-nail-salon-2025", "census-sd-county-2024", "blvd-salon-stats-2025"],
};

export const commCoreMessageRows = [
  {
    rowLabel: "Sạch & an toàn",
    california: {
      detail:
        "Nhấn bồn ngâm chân sạch, sổ ghi vệ sinh BBC, dụng cụ khử trùng. ~71% khách bỏ qua tiệm dưới 3 sao — ảnh và đánh giá về vệ sinh là ưu tiên số 1.",
      tagline: "Gợi ý: “Nail đẹp, không lo vệ sinh.”",
      sourceIds: ["ca-bbc-art12", "brightlocal-reviews-2024"],
    },
    sanDiego: {
      detail:
        "Cùng thông điệp vệ sinh; thêm ảnh bồn ngâm chân thật tại tiệm. Phụ huynh Santee hay hỏi: tiệm có an toàn cho con không?",
      tagline: "Gợi ý: “Tiệm sạch, an toàn cho cả gia đình.”",
      sourceIds: ["ca-bbc-art12", "brightlocal-reviews-2024", "santee-city-demographics"],
    },
  },
  {
    rowLabel: "Gần & tiện",
    california: {
      detail:
        "Ven biển: nhấn trải nghiệm cao cấp, yên tĩnh. Nội địa: giá rõ ràng, đi thẳng được, không cần đặt trước.",
      tagline: "Gợi ý ven biển: “Spa nail cao cấp ven biển.”",
      sourceIds: ["gmi-nail-salon-2025", "statista-nail-salons-us"],
    },
    sanDiego: {
      detail:
        "Luôn ghi khoảng cách: “Cách Santee / El Cajon X phút.” Khách SD ít lái xa chỉ vì thương hiệu lớn.",
      tagline: "Gợi ý: “Tiệm sạch, gần nhà — đặt lịch 2 phút.”",
      sourceIds: ["brightlocal-reviews-2024", "census-sd-county-2024"],
    },
  },
  {
    rowLabel: "Dễ đặt lịch",
    california: {
      detail:
        "Khoảng 46–50% khách đặt ban đêm. Quảng đặt lịch online 24/7; menu giá trên web/Google.",
      tagline: "Gợi ý: “Đặt lịch online — không chờ cuối tuần.”",
      sourceIds: ["blvd-salon-stats-2025"],
    },
    sanDiego: {
      detail:
        "Chủ nhật East County hay đông — nhắn tin/SMS: “Đặt Chủ nhật trước, không chờ.” Hotline và link đặt lịch trên mọi kênh.",
      tagline: "Gợi ý: “Đặt lịch Chủ nhật online — tránh chờ.”",
      sourceIds: ["blvd-salon-stats-2025", "salon-today-retention"],
    },
  },
];

export const commChannelRows = [
  {
    rowLabel: "Google Maps / Search",
    california: {
      priority: "Bắt buộc",
      detail:
        "Ảnh thật: bồn ngâm chân, dụng cụ, mặt tiền. Menu giá đầy đủ. Trả lời đánh giá trong 24 giờ. Từ khóa: nail salon near me + tên khu.",
      sourceIds: ["brightlocal-reviews-2024"],
    },
    sanDiego: {
      priority: "Bắt buộc",
      detail:
        "Thêm từ khóa: nail salon San Diego, East County, Santee. Lọc khoảng cách quan trọng — ghi rõ địa chỉ và giờ mở cửa.",
      sourceIds: ["brightlocal-reviews-2024"],
    },
  },
  {
    rowLabel: "Yelp",
    california: {
      priority: "Bắt buộc",
      detail: "Cùng bộ ảnh với Google. Nhờ khách hài lòng đánh giá ngay sau dịch vụ (tin nhắn kèm link).",
      sourceIds: ["brightlocal-reviews-2024"],
    },
    sanDiego: {
      priority: "Bắt buộc",
      detail: "Ảnh bồn ngâm chân quyết định khách East County thử tiệm mới — cập nhật thường xuyên.",
      sourceIds: ["brightlocal-reviews-2024"],
    },
  },
  {
    rowLabel: "Website / app đặt lịch",
    california: {
      priority: "Bắt buộc",
      detail: "Đặt lịch 24/7; giá manicure, pedicure, gel hiển thị rõ trước khi khách đến.",
      sourceIds: ["blvd-salon-stats-2025"],
    },
    sanDiego: {
      priority: "Bắt buộc",
      detail: "Nút đặt lịch nổi bật trên điện thoại; xác nhận qua tin nhắn sau khi book.",
      sourceIds: ["blvd-salon-stats-2025"],
    },
  },
  {
    rowLabel: "Giới thiệu trực tiếp",
    california: {
      priority: "Quan trọng",
      detail:
        "Chương trình giới thiệu bạn trong cộng đồng Á/Việt. Thẻ giới thiệu hoặc mã giảm nhỏ cho lần quay lại.",
      sourceIds: ["gmi-nail-salon-2025"],
    },
    sanDiego: {
      priority: "Quan trọng",
      detail:
        "Hàng xóm Santee, đồng nghiệp căn cứ quân sự — tin tưởng cao. “Giới thiệu bạn — cả hai giảm 10% lần sau.”",
      sourceIds: ["gmi-nail-salon-2025", "census-sd-county-2024"],
    },
  },
  {
    rowLabel: "Facebook / nhóm cộng đồng",
    california: {
      priority: "Bổ sung",
      detail: "Nhóm địa phương, cộng đồng Việt — trả lời hữu ích khi được hỏi tiệm uy tín (không spam).",
      sourceIds: ["gmi-nail-salon-2025"],
    },
    sanDiego: {
      priority: "Quan trọng",
      detail: "SD East Happenings và nhóm phụ huynh 35+ — tham gia 1–2 lần/tháng; chia sẻ ảnh tiệm sạch, dịch vụ gia đình.",
      sourceIds: ["gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "TikTok / Instagram",
    california: {
      priority: "Quan trọng (khu đô thị)",
      detail: "Nail art, video ngắn quy trình sạch sẽ, before/after. Gen Z/Millennials LA, SF, SD urban.",
      sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
    },
    sanDiego: {
      priority: "Bổ sung",
      detail: "Reels nail art, ảnh trước/sau — ít ưu tiên hơn Google/Facebook nhưng hữu ích với Gen Z SD.",
      sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
    },
  },
];

export const commSegmentRows = [
  {
    rowLabel: "Khách đi thường xuyên",
    california: {
      detail:
        "Tin nhắn nhắc fill gel trước 2 tuần. Google Maps + giá ổn định. Tránh chỉ chạy khuyến mãi một lần.",
      sourceIds: ["gmi-nail-salon-2025", "blvd-salon-stats-2025"],
    },
    sanDiego: {
      detail:
        "SMS nhắc lịch; “Đặt lại cùng thợ [tên].” East County: nhấn không phải chờ cuối tuần nếu book trước.",
      sourceIds: ["blvd-salon-stats-2025", "census-santee-2024"],
    },
  },
  {
    rowLabel: "Nhóm đang tăng",
    california: {
      detail:
        "TikTok/Instagram: nail art, xu hướng mùa. Portfolio từng thợ. Không hứa giá quá thấp so với thời gian làm.",
      sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
    },
    sanDiego: {
      detail:
        "Facebook nhóm + ảnh tiệm sạch, ghế trẻ em, dịch vụ kid manicure. Thông điệp gia đình cuối tuần.",
      sourceIds: ["santee-city-demographics", "ca-bbc-art12"],
    },
  },
  {
    rowLabel: "Khách trả giá cao",
    california: {
      detail: "Yelp ảnh thật không gian yên tĩnh; website sang trọng. Tránh poster giảm giá 50%.",
      sourceIds: ["gmi-nail-salon-2025", "wve-exposed-report"],
    },
    sanDiego: {
      detail: "La Jolla, Del Mar, trung tâm — pedicure cao cấp, quà tặng, trải nghiệm yên tĩnh trên social và Yelp.",
      sourceIds: ["census-sd-county-2024", "gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "Nam giới & khách mới",
    california: {
      detail: "Menu “Manicure nam / Pedicure thể thao”; ảnh tiệm trung tính trên Google.",
      sourceIds: ["gmi-nail-salon-2025"],
    },
    sanDiego: {
      detail:
        "Google Maps + đồng nghiệp căn cứ giới thiệu. Thông điệp: “Không ngại bước vào lần đầu.”",
      sourceIds: ["gmi-nail-salon-2025", "census-sd-city-2024"],
    },
  },
];

export const commJourneyRows = [
  {
    rowLabel: "1 · Cần làm nail",
    california: {
      detail: "Post mùa: Tết, Valentine, hè, lễ. Ảnh móng before/after trên Facebook, Instagram.",
      sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
    },
    sanDiego: {
      detail: "Thêm nội dung “cả gia đình cuối tuần”; tiệm gần Santee / El Cajon.",
      sourceIds: ["census-santee-2024", "gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "2 · Tìm tiệm",
    california: {
      detail: "Google + Yelp đầy đủ; đánh giá nhắc “sạch sẽ, bồn ngâm chân.” So giá trên web.",
      sourceIds: ["brightlocal-reviews-2024"],
    },
    sanDiego: {
      detail: "Ghi “cách nhà X phút”; ảnh thật quan trọng hơn tên thương hiệu lớn.",
      sourceIds: ["brightlocal-reviews-2024"],
    },
  },
  {
    rowLabel: "3 · Đặt lịch",
    california: {
      detail: "Quảng đặt lịch ban đêm; link trên bio Instagram và Google.",
      sourceIds: ["blvd-salon-stats-2025"],
    },
    sanDiego: {
      detail: "“Đặt Chủ nhật online — không chờ”; số điện thoại rõ trên Facebook nhóm.",
      sourceIds: ["blvd-salon-stats-2025"],
    },
  },
  {
    rowLabel: "4 · Trong tiệm",
    california: {
      detail: "Không quảng cáo thêm — chất lượng phục vụ và vệ sinh là truyền thông tốt nhất.",
      sourceIds: ["ca-bbc-art12"],
    },
    sanDiego: {
      detail: "Tương tự — thợ quen, tiệm sạch được khách kể lại cho hàng xóm.",
      sourceIds: ["gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "5 · Trả tiền & tip",
    california: {
      detail: "Biển gợi ý tip 15–25%; minh bạch, không ép qua máy thanh toán.",
      sourceIds: ["ucla-nail-files-2024"],
    },
    sanDiego: {
      detail: "Giống California — tip ổn định nếu dịch vụ tốt.",
      sourceIds: ["ucla-nail-files-2024"],
    },
  },
  {
    rowLabel: "6 · Đánh giá & kể lại",
    california: {
      detail: "Tin nhắn sau 24h: “Cảm ơn — đánh giá Google giúp tiệm.” Khách hài lòng đăng ảnh nail.",
      sourceIds: ["brightlocal-reviews-2024"],
    },
    sanDiego: {
      detail: "Cùng quy trình; thêm nhờ giới thiệu bạn hàng xóm nếu hài lòng.",
      sourceIds: ["brightlocal-reviews-2024", "gmi-nail-salon-2025"],
    },
  },
  {
    rowLabel: "7 · Quay lại",
    california: {
      detail: "Nhắc fill SMS trước 2 tuần; “Đặt lại cùng thợ.” Gói prepaid tháng cho khách đi đều.",
      sourceIds: ["salon-today-retention", "blvd-salon-stats-2025"],
    },
    sanDiego: {
      detail: "Gia đình quay lại tiệm sạch; quân nhân chuyển trú — Google + đánh giá cao thu hút khách mới.",
      sourceIds: ["salon-today-retention", "census-sd-county-2024"],
    },
  },
];

export const commCalendarRow = {
  rowLabel: "4 tuần / 1 tháng",
  california: {
    bullets: [
      "Tuần 1: Ảnh vệ sinh — bồn ngâm chân, khử trùng (Google, Yelp, Instagram)",
      "Tuần 2: Nail art / xu hướng mùa (TikTok, Instagram)",
      "Tuần 3: Giá rõ ràng + đặt lịch online 24/7",
      "Tuần 4: Nhắc khách cũ + xin đánh giá Google",
    ],
    sourceIds: ["brightlocal-reviews-2024", "blvd-salon-stats-2025"],
  },
  sanDiego: {
    bullets: [
      "Tuần 1: Ảnh vệ sinh + “cách Santee X phút” trên Google",
      "Tuần 2: Tiệm cho gia đình — ghế trẻ, kid service (Facebook nhóm)",
      "Tuần 3: “Đặt Chủ nhật trước — không chờ”",
      "Tuần 4: Giới thiệu bạn + nhắc fill SMS",
    ],
    sourceIds: ["gmi-nail-salon-2025", "census-santee-2024", "blvd-salon-stats-2025"],
  },
};

export const commGuidelineRows = [
  {
    rowLabel: "Nên làm",
    california: {
      bullets: [
        "Ảnh thật tại tiệm; giá rõ trên web và Google",
        "Trả lời mọi đánh giá trong 24 giờ",
        "Nhắc lịch fill + xin đánh giá sau dịch vụ tốt",
        "Nói về sạch sẽ nhiều hơn “rẻ nhất”",
      ],
      sourceIds: ["brightlocal-reviews-2024", "blvd-salon-stats-2025"],
    },
    sanDiego: {
      bullets: [
        "Tham gia nhóm Facebook địa phương (hữu ích, không spam)",
        "Nhấn gần nhà, gia đình, đặt lịch Chủ nhật",
        "Giới thiệu bạn / hàng xóm",
        "Cùng tiêu chuẩn ảnh sạch như CA",
      ],
      sourceIds: ["gmi-nail-salon-2025", "brightlocal-reviews-2024"],
    },
  },
  {
    rowLabel: "Không nên",
    california: {
      bullets: [
        "Mua sao giả / đánh giá fake",
        "Chỉ đăng nail art, không có ảnh vệ sinh",
        "Giảm giá sâu liên tục — khách chỉ đến một lần",
        "Im lặng khi có đánh giá xấu",
      ],
      sourceIds: ["brightlocal-reviews-2024"],
    },
    sanDiego: {
      bullets: [
        "Quảng cáo xa East County khi tiệm ở Santee",
        "Hứa giá thấp nhất mà không minh bạch menu",
        "Bỏ qua Google Maps — kênh số 1 tại SD",
        "Spam nhóm Facebook",
      ],
      sourceIds: ["brightlocal-reviews-2024", "census-sd-county-2024"],
    },
  },
];

export const commMetricsRow = {
  rowLabel: "Chỉ số theo dõi",
  california: {
    bullets: [
      "Sao Google: mục tiêu ≥ 4,0 (dưới 3 sao mất ~71% khách mới)",
      "Số đánh giá mới / tháng",
      "% đặt lịch qua web hoặc app",
      "Khách quay lại lần 2 (theo sổ tiệm)",
    ],
    sourceIds: ["brightlocal-reviews-2024", "blvd-salon-stats-2025", "salon-today-retention"],
  },
  sanDiego: {
    bullets: [
      "Cùng chỉ số Google/Yelp + khoảng cách hiển thị trên Maps",
      "Lượt đặt lịch Chủ nhật online",
      "Giới thiệu từ nhóm Facebook / hàng xóm (hỏi khách “biết tiệm qua đâu?”)",
      "Khách quay lại cùng thợ",
    ],
    sourceIds: ["brightlocal-reviews-2024", "blvd-salon-stats-2025"],
  },
};
