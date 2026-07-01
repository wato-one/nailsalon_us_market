"""LK Nail Salon digital plan — July 2026 only."""

from __future__ import annotations

from datetime import date

from digital_plan_sheets_common import TabSpec, append_section, section_title

LK_SHEET_ID_DEFAULT = "1GFAaXlY1U2dioQexrx8LyjlEzdcF6Dk3cvaafHk8pBI"

LK_WEEKLY_TASKS = [
    {
        "week": "W1",
        "dates": "2026-06-29 — 2026-07-03",
        "theme": "Pre–July 4 (CLOSED Jul 4)",
        "tasks": [
            ("Patriotic Gel-X / nail art showcase", "Instagram, Google Post", "Book Jul 1–3 online — we're closed Jul 4", "WATO", "Post EN copy + creative"),
            ("Google Post: Open Jul 1–3, closed Independence Day Jul 4", "Google Business", "Reserve your spot before the holiday", "WATO", "Schedule post"),
            ("Foot spa hygiene photos + family-safe message", "Google, Yelp", "See why Santee families trust us", "Tiệm", "Shoot 3 photos"),
            ("Launch Google Local ads — pre-holiday push (40% monthly budget)", "Google Ads", "Book online at lknailsalonsantee.com", "WATO", "Ads live"),
            ("SMS/email: Book before Jul 4 — salon closed Saturday", "SMS", "Book Jul 1–3 online", "Tiệm", "Send to recent clients"),
        ],
    },
    {
        "week": "W2",
        "dates": "2026-07-06 — 2026-07-12",
        "theme": "Post-holiday + summer pedicure",
        "tasks": [
            ("Summer pedicure + kid-friendly services post", "Instagram, Facebook", "Book Sunday early — skip the wait", "WATO", "Post"),
            ("Review request after happy clients (QR at desk)", "In-store, Google", "Leave us a Google review", "Tiệm", "QR visible"),
            ("Yelp photo refresh — match Google hygiene set", "Yelp", "View our menu & reviews", "WATO", "Upload 5 photos"),
            ("Facebook group (SD East): helpful tip — not spam", "Facebook nhóm", "Visit website for hours & booking", "WATO", "1 helpful comment"),
            ("Google Local ads — summer pedicure keywords", "Google Ads", "Pedicure near Santee — book online", "WATO", "Optimize ads"),
        ],
    },
    {
        "week": "W3",
        "dates": "2026-07-13 — 2026-07-19",
        "theme": "Gel-X / Signature upsell",
        "tasks": [
            ("Before/after Gel-X or Signature Volcano (consent)", "Instagram", "Book your Gel-X appointment", "Tiệm", "2 photos"),
            ("Website + Google: highlight Signature / 24K services", "Website, Google", "View premium services menu", "WATO", "Update GBP services"),
            ("Sunday booking reminder post", "Facebook, SMS", "Book Sunday online — avoid walk-in wait", "WATO", "Post + SMS draft"),
            ("Referral card refresh at front desk", "In-store", "Refer a friend — both save 10%", "Tiệm", "Cards stocked"),
            ("Respond to all Google/Yelp reviews <24h", "Google, Yelp", "—", "Tiệm", "Daily check"),
        ],
    },
    {
        "week": "W4",
        "dates": "2026-07-20 — 2026-07-31",
        "theme": "Retention + referral + Yelp volume",
        "tasks": [
            ("SMS fill reminder (2-week gel maintenance)", "SMS", "Rebook with your favorite tech", "Tiệm", "Send batch"),
            ("Neighbor referral push — Santee / El Cajon", "In-store, Facebook", "Refer a friend — both save 10%", "Tiệm", "Ask at checkout"),
            ("Yelp review campaign (target +5 reviews in July)", "Yelp, in-store", "Share your experience on Yelp", "Tiệm", "Track count"),
            ("Google Post: month-end thank you + hygiene", "Google", "Book your August appointment", "WATO", "Post"),
            ("July KPI check + adjust August plan", "Internal", "—", "WATO", "Fill checklist tab"),
        ],
    },
]

PROMO_SUGGESTIONS = [
    ("Referral −10%", "Both clients save 10% on next visit", "Report SD comm strategy", "Chưa duyệt"),
    ("Patriotic nail art Jul 1–3", "No deep discount — art add-on", "Pre–July 4 pipeline", "Chưa duyệt"),
    ("Family weekend combo", "Mani + pedi bundle — price TBD", "East County families", "Chưa duyệt"),
    ("Sunday book-ahead", "No discount — emphasize online booking", "Reduce walk-in wait", "Chưa duyệt"),
]


def build_overview() -> list[list[str]]:
    today = date.today().isoformat()
    return [
        ["LK Nail Salon Digital Plan — Tháng 7/2026"],
        [f"Cập nhật: {today} | Nguồn: nailsalon-us-market.vercel.app (San Diego) + bang-phan-tich-lk-nail-salon.md"],
        ["Copy public: English | Sheet nội bộ: Tiếng Việt + thuật ngữ Anh"],
        [""],
        *section_title("THÔNG TIN TIỆM"),
        ["Hạng mục", "Chi tiết"],
        ["Địa chỉ", "10769 Woodside Ave Suite 107, Santee, CA 92071"],
        ["Điện thoại", "(619) 579-8738"],
        ["Website / booking", "https://lknailsalonsantee.com — NailSoft online booking"],
        ["Kênh active", "Google Business, Yelp, Facebook, Instagram, Website"],
        ["Định vị", "Nail & spa sạch, gần nhà East County; đồ uống miễn phí; kid services"],
        ["Google", "5.0★ · 276 reviews (SWOT LK)"],
        ["Yelp", "4.5★ · 80 reviews — tăng volume vs Sunny/Polish"],
        [""],
        *section_title("ĐỐI THỦ TRỰC TIẾP (Santee · crawl 06/2026)"),
        ["Salon", "Yelp", "Google", "Mức cạnh tranh", "Ghi chú"],
        ["LK Nail Salon", "4.5★ / 80", "5.0★ / 276", "—", "Baseline · discovery Google mạnh"],
        ["Sunny Nails & Spa", "4.7★ / 523", "—", "Cao", "Rating Yelp cao nhất cụm"],
        ["Polish Nails Spa LLC", "4.5★ / 660", "—", "Cao", "Volume review Yelp lớn nhất"],
        ["La Vie Nails & Spa", "4.0★ / 106", "—", "TB–Cao", "Loyalty theo thợ"],
        [""],
        *section_title("MỤC TIÊU THÁNG 7 (từ report SD)"),
        ["#", "Mục tiêu", "Chỉ số / hành động"],
        ["1", "Vệ sinh & tin cậy gia đình", "Ảnh bồn ngâm chân; message an toàn cho trẻ"],
        ["2", "Gần nhà + đặt lịch online", "Tăng NailSoft bookings; nhấn Santee / El Cajon / Lakeside"],
        ["3", "Pipeline July 4", "CLOSED Jul 4 — lấp lịch Jul 1–3 và sau lễ"],
        ["4", "Giới thiệu hàng xóm + review", "Referral −10%; +5 Yelp reviews; trả review <24h"],
        ["5", "Upsell Gel-X / Signature", "IG before/after; menu premium trên Google/web"],
        [""],
        *section_title("LỊCH NGHỈ & PEAK"),
        ["Ngày / khung", "Ghi chú"],
        ["July 4, 2026 (Thứ 7)", "ĐÓNG CỬA — campaign book Jul 1–3"],
        ["Peak", "Thứ 6–Thứ 7 chiều; Chủ nhật East County đông — book trước"],
        ["Ads", "Google Local $100–300/th · radius 5–10 dặm"],
        [""],
        *section_title("PHÂN CÔNG"),
        ["Vai trò", "Trách nhiệm"],
        ["WATO", "Content EN, Google Local ads, lịch post, báo cáo"],
        ["Tiệm", "Ảnh tiệm, SMS, nhờ review, trả Messenger/review, referral tại quầy"],
    ]


def build_strategy() -> list[list[str]]:
    rows: list[list[str]] = [
        ["LK | Chiến lược truyền thông — T7/2026"],
        [""],
        *section_title("THÔNG ĐIỆP CỐT LÕI (San Diego)"),
        ["Chủ đề", "Tagline EN", "Triển khai"],
        ["Sạch & an toàn", "Clean, safe nails for the whole family.", "Ảnh bồn ngâm chân; BBC hygiene; kid-safe"],
        ["Gần & tiện", "Your neighborhood nail spa in Santee.", "Cách Santee / El Cajon X phút trên Maps & post"],
        ["Dễ đặt lịch", "Book Sunday online — skip the wait.", "NailSoft link mọi kênh; SMS nhắc Chủ nhật"],
        [""],
        *section_title("KÊNH ƯU TIÊN"),
        ["Kênh", "Mức", "Hành động T7"],
        ["Google Maps / Search", "Bắt buộc", "Ảnh sạch, menu giá, Posts, trả review 24h; ads local"],
        ["Yelp", "Bắt buộc", "Đồng bộ ảnh Google; target +5 review/tháng; benchmark Sunny 523 & Polish 660"],
        ["Website / NailSoft", "Bắt buộc", "CTA book nổi bật mobile"],
        ["Facebook nhóm SD East", "Quan trọng", "1–2 lần/tháng hữu ích — không spam"],
        ["Instagram", "Bổ sung", "Patriotic art, Gel-X, hygiene Reels/stories"],
        ["Google Local Ads", "Paid", "$100–300 — W1 40% pre-July 4"],
        [""],
        *section_title("NHÓM KHÁCH (East County)"),
        ["Nhóm", "Cách tiếp cận"],
        ["Gia đình Santee", "Kid services, cuối tuần cả nhà, tiệm sạch"],
        ["Khách quen", "SMS fill; đặt lại cùng thợ"],
        ["Hàng xóm / quân nhân", "Referral −10%; Google review"],
        ["Khách mới Maps", "Ảnh thật + giá rõ trước khi đến"],
        [""],
        *section_title("PROMO — WATO ĐỀ XUẤT (Chủ tiệm duyệt)"),
        ["Offer", "Chi tiết", "Nguồn", "Trạng thái"],
    ]
    for offer, detail, source, status in PROMO_SUGGESTIONS:
        rows.append([offer, detail, source, status])
    append_section(rows, "NÊN LÀM & KHÔNG NÊN")
    rows.append(["Nên làm"])
    for item in [
        "Ảnh thật + giá rõ trên web/Google",
        "Trả lời review <24h",
        "Book Jul 1–3 trước khi nghỉ Jul 4",
        "Nhấn sạch sẽ hơn rẻ nhất",
        "Tham gia nhóm FB hữu ích — không spam",
    ]:
        rows.append([f"✓ {item}"])
    rows.append([""])
    rows.append(["Không nên"])
    for item in [
        "Quảng cáo xa East County",
        "Fake reviews",
        "Chỉ nail art — thiếu ảnh vệ sinh",
        "Giảm giá sâu liên tục",
        "Bỏ qua Google Maps",
    ]:
        rows.append([f"✗ {item}"])
    return rows


def build_calendar() -> list[list[str]]:
    rows: list[list[str]] = [
        ["LK | Lịch 4 tuần — Tháng 7/2026"],
        ["July 4 CLOSED — book Jul 1–3 | Copy public: English"],
        [""],
        ["Tuần", "Ngày", "Chủ đề", "Task", "Kênh", "Copy EN / CTA", "Owner", "Status"],
    ]
    for block in LK_WEEKLY_TASKS:
        for task, channel, cta, owner, status in block["tasks"]:
            rows.append([
                block["week"],
                block["dates"],
                block["theme"],
                task,
                channel,
                cta,
                owner,
                status,
            ])
    return rows


def build_ads_checklist() -> list[list[str]]:
    rows: list[list[str]] = [
        ["LK | Ads & Checklist — T7/2026"],
        [""],
        *section_title("GOOGLE LOCAL ADS — $100–300/th"),
        ["Hạng mục", "Chi tiết"],
        ["Platform", "Google Local / Search only"],
        ["Budget split", "W1 (pre-July 4): ~40% · W2–W4: ~60%"],
        ["Radius", "5–10 miles — Santee, El Cajon, Lakeside, East County"],
        ["Keywords", "nail salon Santee, nail salon East County, pedicure Santee CA"],
        ["Landing", "lknailsalonsantee.com booking"],
        ["Creative", "Hygiene + near you + book Jul 1–3 before Jul 4 closed"],
        [""],
        *section_title("CHECKLIST HÀNG TUẦN"),
        ["Tuần", "Post social", "Google Post", "Trả review", "Ảnh tiệm", "Ads on", "SMS/referral"],
        ["W1", "", "", "", "", "", ""],
        ["W2", "", "", "", "", "", ""],
        ["W3", "", "", "", "", "", ""],
        ["W4", "", "", "", "", "", ""],
        [""],
        *section_title("KPI NHẸ (điền cuối tháng)"),
        ["Chỉ số", "Target gợi ý", "Thực tế", "Ghi chú"],
        ["NailSoft bookings online", "Tăng vs T6", "", ""],
        ["Google reviews mới", "≥ 5", "", ""],
        ["Yelp reviews mới", "≥ 5", "", ""],
        ["Google Ads spend", "$100–300", "", ""],
        ["Referral mentions", "≥ 5", "", "Hỏi khách checkout"],
    ]
    return rows


def get_tab_specs() -> list[TabSpec]:
    return [
        ("LK | Tổng quan", build_overview),
        ("LK | Chiến lược T7", build_strategy),
        ("LK | Lịch 4 tuần", build_calendar),
        ("LK | Ads & Checklist", build_ads_checklist),
    ]
