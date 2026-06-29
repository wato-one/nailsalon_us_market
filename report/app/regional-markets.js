/** California & San Diego — competitors, consumer profile, segmentation, info sources */

export const competitorMarkets = [
  {
    marketId: "california",
    label: "California",
    intro:
      "Bang có mật độ salon nail cao nhất nước, giám sát BBC chặt và đa dạng đô thị (LA, Bay Area, SD, Central Valley). Cạnh tranh chủ yếu giữa salon độc lập, chuỗi khu vực và franchise.",
    competitors: [
      {
        name: "Salon độc lập — toàn bang",
        type: "Độc lập · ~62% thị trường Mỹ, dày tại CA",
        rating: "3,5–5★ · đa dạng theo khu",
        threat: 5,
        strengths:
          "Mật độ cao tại strip mall/suburb; quan hệ thợ–khách; linh hoạt giá; không phí franchise. UCLA: ~79% lao động nail CA sinh ngoài Mỹ — cộng đồng salon mạnh.",
        weaknesses:
          "Chất lượng không đồng đều; tuân thủ BBC/OSHA không đều; marketing và booking online yếu ở quy mô nhỏ.",
        sourceIds: ["gmi-nail-salon-2025", "ucla-nail-files-2024", "ca-bbc-art12"],
      },
      {
        name: "Happy Nails & Spa",
        type: "Chuỗi khu vực · Southern CA",
        rating: "Multi-location · full-service spa",
        threat: 4,
        strengths:
          "Menu nail + spa rộng, marketing khu vực, vị trí premium strip mall tại LA/OC/IE và một số điểm SD.",
        weaknesses:
          "Không phủ toàn bang; cạnh tranh giá với độc lập; áp lực lao động và chi phí mặt bằng CA.",
        sourceIds: ["happy-nails-spa", "ucla-nail-files-2024"],
      },
      {
        name: "Pro Nails",
        type: "Franchise · có mặt tại CA",
        rating: "Hàng trăm điểm · mid-range",
        threat: 3,
        strengths:
          "Playbook vận hành, đào tạo thợ, mở rộng suburb Inland Empire và Central Valley.",
        weaknesses:
          "Phí franchise; chất lượng theo franchisee; khó cạnh premium LA/SF spa.",
        sourceIds: ["pro-nails-franchise", "gmi-nail-salon-2025"],
      },
      {
        name: "Regal Nails (Walmart CA)",
        type: "Salon-in-retail",
        rating: "Entry price · foot traffic",
        threat: 3,
        strengths:
          "Lượng khách Walmart/Sam's Club; tiện lợi; giá manicure entry thấp tại nhiều thành phố CA.",
        weaknesses:
          "Trải nghiệm premium hạn chế; review không đồng đều; không cạnh tranh nail art cao cấp.",
        sourceIds: ["regal-nails", "gmi-nail-salon-2025"],
      },
      {
        name: "Spa / med-spa tích hợp nail",
        type: "Full-service · LA / Bay Area / coastal",
        rating: "Premium USD 80–150+",
        threat: 3,
        strengths:
          "Gói wellness, không gian sang, khách thu nhập cao coastal và urban.",
        weaknesses:
          "Giá cao; không scale mass mid-range; cạnh tranh salon nail chuyên biệt về giá.",
        sourceIds: ["gmi-nail-salon-2025", "statista-nail-salons-us"],
      },
    ],
  },
  {
    marketId: "san-diego",
    label: "San Diego",
    intro:
      "Thị trường quận ~3,3 triệu dân: đô thị San Diego, suburb East County (Santee, El Cajon), North County và căn cứ quân sự. Cạnh tranh hyper-local — Google/Yelp quyết định discovery trong bán kính 5–15 dặm.",
    competitors: [
      {
        name: "Salon độc lập — SD County",
        type: "Độc lập · strip mall & plaza",
        rating: "4,0–5★ Yelp/Google · đa dạng",
        threat: 5,
        strengths:
          "Mật độ cao mỗi khu; thợ quen khách; giá mid-range USD 25–55; walk-in cuối tuần mạnh tại East County.",
        weaknesses:
          "Chờ lâu cuối tuần; turnover thợ; booking online không đồng đều.",
        sourceIds: ["census-sd-county-2024", "brightlocal-reviews-2024", "gmi-nail-salon-2025"],
      },
      {
        name: "Happy Nails & Spa (San Diego)",
        type: "Chuỗi khu vực · điểm tại SD",
        rating: "Full-service · multi-location",
        threat: 4,
        strengths:
          "Nhận diện thương hiệu khu vực; menu spa rộng; marketing tập trung hơn độc lập đơn lẻ.",
        weaknesses:
          "Ít điểm hơn độc lập; khó personalization như salon nhỏ; giá cao hơn entry independents.",
        sourceIds: ["happy-nails-spa", "census-sd-county-2024"],
      },
      {
        name: "Regal Nails — Walmart SD",
        type: "Salon-in-retail",
        rating: "Entry · convenience",
        threat: 2,
        strengths:
          "Foot traffic Walmart; giá thấp; phù hợp khách cần nhanh khi mua sắm.",
        weaknesses:
          "Review trung bình; không nail art phức tạp; loyalty thấp.",
        sourceIds: ["regal-nails", "gmi-nail-salon-2025"],
      },
      {
        name: "Salon premium — urban & coastal SD",
        type: "Spa nail · La Jolla / downtown / Del Mar",
        rating: "USD 70–120+ pedicure",
        threat: 3,
        strengths:
          "Khách thu nhập cao (23% hộ county >USD 200K); trải nghiệm yên tĩnh, sản phẩm premium.",
        weaknesses:
          "Không scale suburb East County; cạnh tranh hotel spa và med-spa.",
        sourceIds: ["census-sd-county-2024", "gmi-nail-salon-2025"],
      },
      {
        name: "DIY / press-on / home gel",
        type: "Thay thế",
        rating: "Giá rẻ · Amazon/Ulta",
        threat: 2,
        strengths:
          "Tiết kiệm; tiện tại nhà; Gen Z thử trend nhanh.",
        weaknesses:
          "Không pedicure chuyên sâu; thiếu social experience; khó nail art phức tạp.",
        sourceIds: ["gmi-nail-salon-2025", "statista-consumer-csv-2023"],
      },
    ],
  },
];

export const consumerMarkets = [
  {
    marketId: "california",
    label: "California",
    demographics: [
      {
        category: "Quy mô dân số",
        metric: "~39,4 triệu",
        value: "Bang lớn nhất nước",
        detail:
          "Thị trường tiêu thụ dịch vụ nail lớn nhất Hoa Kỳ — đa metro (LA, SF, SD, Sacramento) và suburb.",
        sourceIds: ["statista-consumer-csv-2023", "gmi-nail-salon-2025"],
      },
      {
        category: "Tuổi trung vị",
        metric: "~38,4",
        value: "Lõi khách 25–55",
        detail:
          "Millennials/Gen X là nhóm maintenance chính; Boomers 65+ tập trung pedicure/spa tại coastal và suburban.",
        sourceIds: ["census-sd-county-2024"],
      },
      {
        category: "Giới — khách dịch vụ",
        metric: "~90%+ nữ",
        value: "Ngành nail salon",
        detail:
          "Khách manicure/pedicure chủ yếu phụ nữ (IBISWorld/NAILS); segment nam & gender-neutral đang tăng tại urban CA.",
        sourceIds: ["statista-nail-salons-us", "gmi-nail-salon-2025"],
      },
      {
        category: "Đa dạng sắc tộc",
        metric: "Đa sắc tộc",
        value: "Hispanic · Asian · White",
        detail:
          "CA đa dạng nhất nước — nail art và giá mid-range mạnh ở cộng đồng Hispanic/Asian; premium ở coastal White/Asian.",
        sourceIds: ["ucla-nail-files-2024", "statista-consumer-csv-2023"],
      },
      {
        category: "Thu nhập hộ",
        metric: "~USD 100K",
        value: "Median HH (bang)",
        detail:
          "Chênh lệch lớn LA/SF vs Central Valley — khách coastal chi USD 60–120+ spa; inland nhạy giá entry USD 20–35.",
        sourceIds: ["census-sd-county-2024", "cpi-east-county-income"],
      },
      {
        category: "Nhu cầu nail — West",
        metric: "62%",
        value: "Penetration (Statista West)",
        detail:
          "Khảo sát sản phẩm nail US (n=1.092): 62% người trả lời vùng West — proxy adoption CA, không thay dữ liệu salon địa phương.",
        sourceIds: ["statista-consumer-csv-2023"],
      },
    ],
    psychographics: [
      {
        headline: "BBC California — kỳ vọng vệ sinh cao",
        detail:
          "Khách CA quen tiêu chuẩn BBC (nhật ký pedicure, khử trùng) — salon tuân thủ tốt được coi là 'an toàn'; vi phạm lan truyền nhanh qua review.",
        impact: "critical",
        sourceIds: ["ca-bbc-art12", "brightlocal-reviews-2024"],
      },
      {
        headline: "Self-care định kỳ — mid-range là chuẩn",
        detail:
          "Manicure/pedicure 2–4 tuần/lần; GMI mid-range chiếm thị phần lớn. Gel grown-out tạo áp lực 'phải đi sớm' — không chỉ trước sự kiện.",
        impact: "opportunity",
        sourceIds: ["gmi-nail-salon-2025", "blvd-salon-stats-2025"],
      },
      {
        headline: "Premium hóa tại coastal · nhạy giá tại inland",
        detail:
          "LA/SF/SD coastal: upsell signature pedicure, clean beauty. Inland/Central Valley: ưu tiên giá entry và walk-in nhanh.",
        impact: "insight",
        sourceIds: ["gmi-nail-salon-2025", "statista-nail-salons-us"],
      },
      {
        headline: "Eco-conscious & ít VOC",
        detail:
          "WVE và xu hướng 'health-focused nails' — khách urban CA sẵn sàng trả premium cho không gian thông gió tốt, sản phẩm ít độc.",
        impact: "opportunity",
        sourceIds: ["wve-exposed-report", "gmi-nail-salon-2025"],
      },
      {
        headline: "Trust qua rating online",
        detail:
          "~71% không cân nhắc salon dưới 3★ (BrightLocal). CA mật độ salon cao — Google/Yelp là bước lọc bắt buộc trước khi thử mới.",
        impact: "critical",
        sourceIds: ["brightlocal-reviews-2024"],
      },
    ],
    segments: [
      {
        name: "Khách maintenance — suburb & inland",
        tag: "CORE",
        tagColor: "#C0001E",
        pct: "~45–50%",
        sizeMarket: "Inland Empire · Central Valley · suburb",
        profile: "Manicure/pedicure 2–4 tuần; giá USD 25–45; tip 15–20%.",
        psychographics: "Giá ổn định, thợ quen, ít thử salon mới",
        channel: "Google Maps, giới thiệu, walk-in",
        barrier: "Chờ cuối tuần, lo vệ sinh BBC",
        sourceIds: ["gmi-nail-salon-2025", "ca-bbc-art12"],
      },
      {
        name: "Nail art & trend — urban CA",
        tag: "GROWTH",
        tagColor: "#1565C0",
        pct: "~20–25%",
        sizeMarket: "LA · SF · SD urban · Gen Z/Millennials",
        profile: "Gel, dipping, nail art; chi USD 45–80+; social sharing.",
        psychographics: "Biểu đạt cá tính; theo TikTok/Instagram trend",
        channel: "TikTok, Instagram, portfolio thợ",
        barrier: "Giá premium; thời gian làm lâu",
        sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
      },
      {
        name: "Wellness & spa premium — coastal",
        tag: "PREMIUM",
        tagColor: "#2E7D32",
        pct: "~15–20%",
        sizeMarket: "Coastal · thu nhập cao",
        profile: "Pedicure spa USD 80–150+; clean products; không gian yên tĩnh.",
        psychographics: "Stress relief, self-care ritual, ít nhạy giá",
        channel: "Spa website, hotel referral, Yelp premium",
        barrier: "Kỳ vọng sang trọng; cạnh tranh med-spa",
        sourceIds: ["gmi-nail-salon-2025", "wve-exposed-report"],
      },
      {
        name: "Nam giới & gender-neutral",
        tag: "MỚI",
        tagColor: "#6A1B9A",
        pct: "~8–12%",
        sizeMarket: "Urban CA · đang tăng",
        profile: "Basic manicure/pedicure USD 20–35; pedicure thể thao.",
        psychographics: "E ngại salon 'chỉ cho nữ'; cần menu & décor trung tính",
        channel: "Google near me, partner referral",
        barrier: "Social anxiety lần đầu",
        sourceIds: ["gmi-nail-salon-2025"],
      },
    ],
    infoSources: [
      {
        rank: 1,
        name: "Google Maps / Search",
        importance: 5,
        detail: "'Nail salon near me' + filter rating — 71% bỏ qua dưới 3★",
        sourceIds: ["brightlocal-reviews-2024"],
      },
      {
        rank: 2,
        name: "Yelp",
        importance: 4,
        detail: "Review chi tiết LA/SF/SD; ảnh thực tế quyết định thử salon mới",
        sourceIds: ["brightlocal-reviews-2024"],
      },
      {
        rank: 3,
        name: "TikTok / Instagram",
        importance: 4,
        detail: "Nail art trend, ASMR salon — discovery Gen Z/Millennials urban CA",
        sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
      },
      {
        rank: 4,
        name: "Giới thiệu cộng đồng",
        importance: 4,
        detail: "Word-of-mouth mạnh trong cộng đồng Á/Việt — bổ sung review online",
        sourceIds: ["gmi-nail-salon-2025"],
      },
      {
        rank: 5,
        name: "Website / app đặt lịch",
        importance: 4,
        detail: "~46–50% booking ngoài giờ; menu giá minh bạch",
        sourceIds: ["blvd-salon-stats-2025"],
      },
    ],
  },
  {
    marketId: "san-diego",
    label: "San Diego",
    demographics: [
      {
        category: "San Diego County",
        metric: "3,3 triệu",
        value: "Quận · thị trường chính",
        detail: "Mật độ salon cao; đa phân khúc — urban, suburb East County, North County, military.",
        sourceIds: ["census-sd-county-2024"],
      },
      {
        category: "Thành phố San Diego",
        metric: "1,4 triệu",
        value: "Đô thị · renter 54%",
        detail: "Median age 36,6; Millennials/Gen X lõi demand; salon gần nhà/làm việc.",
        sourceIds: ["census-sd-city-2024"],
      },
      {
        category: "East County — Santee",
        metric: "~59.000",
        value: "Suburb gia đình",
        detail: "70% married-couple HH; median HH USD 113K; walk-in cuối tuần + kid services.",
        sourceIds: ["census-santee-2024", "santee-city-demographics"],
      },
      {
        category: "Quân nhân & gia đình",
        metric: "Lớn tại SD",
        value: "Căn cứ Navy/Marine",
        detail:
          "Khách chuyển trú thường xuyên; ưu tiên salon có review cao, giá rõ, gần base/housing — loyalty ngắn hạn nhưng volume ổn.",
        sourceIds: ["census-sd-county-2024", "gmi-nail-salon-2025"],
      },
      {
        category: "Sắc tộc / ethnicity",
        metric: "35% Hispanic",
        value: "County đa dạng",
        detail: "41% White, 13% Asian, 35% Hispanic — nail art và mid-range đều cao.",
        sourceIds: ["census-sd-county-2024", "census-sd-city-2024"],
      },
      {
        category: "Thu nhập hộ",
        metric: "USD 109–113K",
        value: "County · Santee",
        detail: "32–38% hộ USD 100–200K; đủ chi manicure USD 25–45 và pedicure premium USD 60–80 định kỳ.",
        sourceIds: ["census-sd-county-2024", "census-santee-2024", "cpi-east-county-income"],
      },
    ],
    psychographics: [
      {
        headline: "Hyper-local discovery — bán kính 5–15 dặm",
        detail:
          "Khách SD so sánh salon trong khu trước khi lái xa; Google/Yelp filter khoảng cách quan trọng hơn brand quốc gia.",
        impact: "critical",
        sourceIds: ["brightlocal-reviews-2024", "census-sd-county-2024"],
      },
      {
        headline: "Vệ sinh BBC — deal-breaker tại East County",
        detail:
          "Review nhấn footspa sạch, không mùi mạnh. Khách sẵn sàng đổi salon trong cùng strip mall nếu thấy dụng cụ không sạch.",
        impact: "critical",
        sourceIds: ["ca-bbc-art12", "brightlocal-reviews-2024", "wve-exposed-report"],
      },
      {
        headline: "Gắn bó thợ — switching cost cảm xúc",
        detail:
          "Nhiều lựa chọn SD nhưng khách quay lại cùng thợ khi hài lòng gel/độ bền — turnover thợ làm gián đoạn loyalty.",
        impact: "high",
        sourceIds: ["gmi-nail-salon-2025", "blvd-salon-stats-2025"],
      },
      {
        headline: "Salon gia đình — cuối tuần East County",
        detail:
          "Phụ huynh Santee cần kid manicure, không gian sạch, ghế đủ cho cả hộ — 'salon an toàn cho con?' là rào cản tâm lý.",
        impact: "insight",
        sourceIds: ["santee-city-demographics", "ca-bbc-art12"],
      },
      {
        headline: "Chờ walk-in cuối tuần · booking online",
        detail:
          "Pain point suburb: thời gian chờ Chủ nhật. ~46–50% booking ngoài giờ — khách muốn kiểm soát lịch.",
        impact: "high",
        sourceIds: ["blvd-salon-stats-2025", "salon-today-retention"],
      },
    ],
    segments: [
      {
        name: "Phụ nữ làm việc East County",
        tag: "CHÍNH",
        tagColor: "#C0001E",
        pct: "35–40%",
        sizeMarket: "Santee · El Cajon · Lakeside",
        profile: "Manicure/pedicure 2–4 tuần; tip 15–20%; lái xe 72%.",
        psychographics: "Self-care gọn; ghét chờ walk-in; loyalty thợ quen",
        channel: "Google Maps, Yelp, SMS nhắc fill",
        barrier: "Parking strip mall, lo vệ sinh pedicure",
        sourceIds: ["census-santee-2024", "cpi-east-county-income", "brightlocal-reviews-2024"],
      },
      {
        name: "Gia đình & phụ huynh Santee",
        tag: "TĂNG TRƯỞNG",
        tagColor: "#2575FC",
        pct: "25–30%",
        sizeMarket: "~21.000 hộ",
        profile: "Combo phụ huynh + kid service; walk-in Chủ nhật.",
        psychographics: "Self-care gia đình; cần salon sạch cho trẻ",
        channel: "Walk-in, Facebook group SD East",
        barrier: "Mùi hóa chất, thiếu ghế cả gia đình",
        sourceIds: ["census-santee-2024", "santee-city-demographics", "ca-bbc-art12"],
      },
      {
        name: "Khách premium — urban & coastal SD",
        tag: "GIÁ TRỊ CAO",
        tagColor: "#2E7D32",
        pct: "15–20%",
        sizeMarket: "23% hộ >USD 200K",
        profile: "Signature pedicure USD 60–120+; trigger stress, quà tặng.",
        psychographics: "Trải nghiệm yên tính, sạch, ít nhạy giá",
        channel: "Yelp ảnh thật, website booking",
        barrier: "Kỳ vọng sang trọng; med-spa",
        sourceIds: ["census-sd-county-2024", "gmi-nail-salon-2025"],
      },
      {
        name: "Nam giới & military-adjacent",
        tag: "MỚI",
        tagColor: "#6A1B9A",
        pct: "8–12%",
        sizeMarket: "SD city + bases",
        profile: "Basic manicure USD 20–25; pedicure thể thao.",
        psychographics: "E ngại salon feminine; cần menu nam rõ",
        channel: "Google near me, referral đồng nghiệp",
        barrier: "Social anxiety; chuyển trú tìm salon mới",
        sourceIds: ["gmi-nail-salon-2025", "census-sd-city-2024"],
      },
    ],
    infoSources: [
      {
        rank: 1,
        name: "Google Maps / Search",
        importance: 5,
        detail: "'Nail salon San Diego' / East County — filter rating & khoảng cách",
        sourceIds: ["brightlocal-reviews-2024"],
      },
      {
        rank: 2,
        name: "Yelp",
        importance: 4,
        detail: "Review SD East County; ảnh pedicure station quyết định thử mới",
        sourceIds: ["brightlocal-reviews-2024"],
      },
      {
        rank: 3,
        name: "Giới thiệu trực tiếp",
        importance: 4,
        detail: "Bạn bè, hàng xóm Santee, đồng nghiệp base — trust cao",
        sourceIds: ["gmi-nail-salon-2025"],
      },
      {
        rank: 4,
        name: "Facebook group cộng đồng",
        importance: 4,
        detail: "SD East Happenings — hỏi salon uy tín; phụ huynh 35+",
        sourceIds: ["gmi-nail-salon-2025"],
      },
      {
        rank: 5,
        name: "Instagram / TikTok",
        importance: 3,
        detail: "Nail art Reels, before/after — Gen Z/Millennials SD",
        sourceIds: ["gmi-nail-salon-2025", "nails-magazine-industry"],
      },
      {
        rank: 6,
        name: "Website / app đặt lịch",
        importance: 4,
        detail: "Menu giá minh bạch; booking ngoài giờ",
        sourceIds: ["blvd-salon-stats-2025"],
      },
    ],
  },
];
