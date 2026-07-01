"""Iris Nail digital plan — July through December 2026."""

from __future__ import annotations

from datetime import date, timedelta

from digital_plan_sheets_common import TabSpec, append_section, section_title

IRIS_SHEET_ID_DEFAULT = "1gwHjVvAOgNgSv4pJ5TeTLuaielH6Rc1TgAcAbbOQ5WU"

PLAN_START = date(2026, 6, 29)  # Monday — week 1
REELS_PER_WEEK = 2

MONTH_THEMES = {
    7: ("July — Patriotic / Pre–July 4", "Gel-X patriotic art · book Jul 1–3 · CLOSED Jul 4"),
    8: ("August — Back to School", "Quick mani · mom & teen · Gel-X maintenance"),
    9: ("September — Labor Day + Q4 prep", "The Pedi · Hard Gel upsell · holiday prep starts"),
    10: ("October — Halloween", "Custom Gel-X art · party nails · Reels focus"),
    11: ("November — Thanksgiving + Black Friday", "Gift card · combo · calm luxury gifting"),
    12: ("December — Christmas + NYE", "Party nails · book before Dec 25 closed · NYE glitter"),
}

WEEKLY_TASKS_BY_MONTH: dict[int, list[tuple[str, str, str, str, str]]] = {
    7: [
        ("Pre-July 4 Google Post: open Jul 1–3, closed Jul 4", "Google Business", "Book Jul 1–3 — closed Independence Day", "WATO", "Post"),
        ("Patriotic Gel-X Reels #1", "Instagram Reels", "Book online — irisnailsfountainvalley.com", "WATO", "Reel 1/2"),
        ("Foot spa hygiene carousel", "Google, Yelp", "Calm, clean, premium — see our space", "Tiệm", "Photos"),
        ("Patriotic nail art static post", "Instagram", "Message us to book", "WATO", "Post"),
        ("Win-back SMS draft (5-week lapsed)", "SMS", "We miss you — book this week", "Tiệm", "List from POS"),
    ],
    8: [
        ("Back-to-school quick mani offer (WATO suggest)", "Instagram, Google", "Quick mani before school starts", "WATO", "Post EN"),
        ("Reels: Gel-X durability Week 1 vs Week 4", "Instagram Reels", "Nails that last — book Hard Gel", "WATO", "Reel 1/2"),
        ("Meet the tech — Lexi/Hannah spotlight", "Instagram", "Book with [name]", "Tiệm", "Photo + quote"),
        ("Google: kid-friendly / gentle service message", "Google Post", "Sensitive clients welcome", "WATO", "Post"),
        ("Reels: La Minthe pedicure ritual B-roll", "Instagram Reels", "Experience The Pedi — book now", "WATO", "Reel 2/2"),
    ],
    9: [
        ("Labor Day weekend: open — book ahead post", "Google, Instagram", "Open Labor Day — reserve your spot", "WATO", "Post"),
        ("Q4 campaign brief + Oct content prep", "Internal", "—", "WATO", "Doc ready"),
        ("Hard Gel upsell Reels", "Instagram Reels", "Our fastest-growing service — book Hard Gel", "WATO", "Reel 1/2"),
        ("The Pedi ritual video (rose soak, candle oil)", "Instagram Reels", "Quiet luxury pedicure in Fountain Valley", "WATO", "Reel 2/2"),
        ("Yelp review push + QR at desk", "Yelp, in-store", "Share your calm experience", "Tiệm", "QR visible"),
    ],
    10: [
        ("Halloween Gel-X custom art showcase", "Instagram, Google", "Book your Halloween nails", "WATO", "Post + Reel 1"),
        ("Reels: spooky nail art process", "Instagram Reels", "DM or book online", "WATO", "Reel 2/2"),
        ("Google Local ads — Halloween keywords (+base budget)", "Google Ads", "Nail art near me — Fountain Valley", "WATO", "Ads on"),
        ("Durability proof post (client review screenshot)", "Instagram", "Still perfect after 4 weeks", "WATO", "Post"),
        ("Tuesday Two-fer promo (WATO suggest — owner approve)", "Instagram, in-store", "Tuesday special — ask front desk", "Tiệm", "Approve offer"),
    ],
    11: [
        ("Thanksgiving gratitude post — open Nov 26", "Google, Instagram", "Open Thanksgiving — book ahead", "WATO", "Post"),
        ("Gift card / holiday combo launch (WATO suggest)", "Website, in-store", "Gift calm luxury this season", "WATO", "Landing + cards"),
        ("Black Friday: gift card bonus (suggest)", "Instagram, Google", "Limited holiday gift offer", "WATO", "Reel 1/2"),
        ("Reels: Garden Bliss / La Minthe holiday set", "Instagram Reels", "Book party nails before Dec rush", "WATO", "Reel 2/2"),
        ("Google ads spike begins (+$100 vs base → $200–400)", "Google Ads", "Holiday nails Fountain Valley", "WATO", "Budget up"),
    ],
    12: [
        ("Book BEFORE Dec 25 — salon closed Christmas Day", "Google, SMS", "Book Dec 23–24 — closed Dec 25", "WATO", "Post + SMS"),
        ("NYE glitter Gel-X Reels", "Instagram Reels", "New Year's Eve nails — book now", "WATO", "Reel 1/2"),
        ("Reels: champagne / gold party nails", "Instagram Reels", "Ring in 2027 with Iris", "WATO", "Reel 2/2"),
        ("Gift card last-minute push", "Instagram, Google", "Still time for a gift card", "WATO", "Post"),
        ("December KPI review + Jan plan note", "Internal", "—", "WATO", "Fill KPI tab"),
    ],
}

PROMO_SUGGESTIONS = [
    ("Combo Mani-Pedi $85", "Top combo tier from POS report", "+$8.5K/yr potential", "Chưa duyệt"),
    ("Early-bird −15% before 11AM", "Fill morning 12.9% → ~20% capacity", "+$5K/yr potential", "Chưa duyệt"),
    ("Tuesday Two-fer", "Weakest day fill", "+$3K/yr potential", "Chưa duyệt"),
    ("Win-back SMS @ 5 weeks", "467 one-time clients", "+$4–12K/yr potential", "Chưa duyệt"),
    ("Loyalty via SimplePOS", "Retention 44.5% → 60% goal", "+$5K/yr potential", "Chưa duyệt"),
    ("Gift card T11–12", "Thanksgiving / Christmas", "Holiday revenue", "Chưa duyệt"),
]

PERSONAS = [
    ("Quiet Loyalist (~45%)", "F 25–40 · FV/HB · Gel-X + La Minthe · $70–120"),
    ("Experience Seeker (~25%)", "Gen Z/Millennial · custom Gel-X art · $80–150"),
    ("Sensitive Client (~20%)", "Gentle Gel-X + The Pedi · $60–100"),
    ("Walk-in Discoverer (~10%)", "Google Maps · The Pedi · $40–80"),
]

HOLIDAY_HOURS = [
    ("July 4, 2026", "ĐÓNG", "Campaign: book Jul 1–3"),
    ("Labor Day — Sep 7", "MỞ", "Long weekend pedi push"),
    ("Thanksgiving — Nov 26", "MỞ", "Gratitude + gift card"),
    ("Christmas — Dec 25", "ĐÓNG", "Book Dec 23–24"),
    ("New Year's Eve — Dec 31", "MỞ", "NYE glitter nails"),
    ("Chủ nhật (mọi tuần)", "ĐÓNG", "Không campaign CN"),
]

CONTENT_PILLARS = [
    ("Calm & Unrushed", "9.5/10 brand", "Keep tone all channels"),
    ("Nail Art Showcase", "8/10 volume, 0/10 Reels", "2 Reels/week + daily static"),
    ("Pedicure Ritual", "9/10 copy, 0.5/10 visual", "Video La Minthe / Garden Bliss"),
    ("Durability proof", "8/10 reviews, 0/10 content", "Week 1 vs Week 4 posts"),
    ("Meet the Tech", "8.5/10 IRL, 0/10 social", "Monthly tech spotlight"),
]

ASSIGNMENT_MATRIX = [
    ("Instagram Reels (2/week)", "Film/edit/post EN copy", "B-roll, tech shots, consent"),
    ("Google Business Posts", "Write + schedule EN", "Photos, review replies"),
    ("Google Local Ads", "Setup, budget, optimize", "—"),
    ("Yelp / review QR", "Remind strategy", "QR desk, ask happy clients"),
    ("Messenger / phone", "—", "Reply <1h, confirm bookings"),
    ("SMS win-back", "Draft templates EN", "Send via POS list"),
    ("SimplePOS loyalty/combo", "Suggest setup", "Configure offers when approved"),
    ("In-store promo cards", "Design copy", "Display approved offers"),
]


def _week_range(week_index: int) -> tuple[date, date]:
    start = PLAN_START + timedelta(days=(week_index - 1) * 7)
    end = start + timedelta(days=6)
    return start, end


def _holiday_note(week_start: date, week_end: date) -> str:
    notes: list[str] = []
    d = week_start
    while d <= week_end:
        if d.month == 7 and d.day == 4:
            notes.append("CLOSED Jul 4")
        if d.month == 9 and d.day == 7:
            notes.append("Labor Day OPEN")
        if d.month == 10 and d.day == 31:
            notes.append("Halloween")
        if d.month == 11 and d.day == 26:
            notes.append("Thanksgiving OPEN")
        if d.month == 11 and d.day == 27:
            notes.append("Black Friday")
        if d.month == 12 and d.day == 25:
            notes.append("CLOSED Dec 25")
        if d.month == 12 and d.day == 31:
            notes.append("NYE OPEN")
        d += timedelta(days=1)
    return " · ".join(notes) if notes else ""


def build_overview() -> list[list[str]]:
    today = date.today().isoformat()
    rows: list[list[str]] = [
        ["Iris Nail Digital Plan — T7–T12/2026"],
        [f"Cập nhật: {today} | Nguồn: iris_nails_report.pdf + nailsalon-us-market.vercel.app"],
        ["Copy public: English | Sheet nội bộ: Tiếng Việt + thuật ngữ Anh"],
        [""],
        *section_title("THÔNG TIN TIỆM"),
        ["Hạng mục", "Chi tiết"],
        ["Địa chỉ", "10954 Warner Ave, Fountain Valley, CA 92708"],
        ["Điện thoại", "(949) 987-3969"],
        ["Website", "https://irisnailsfountainvalley.com — online booking"],
        ["Giờ", "Mon–Sat 9:30AM–7:00PM · Closed Sunday"],
        ["Positioning", "Calm · Clean · Premium — Quiet Luxury / Unrushed"],
        ["Khu vực", "Fountain Valley, Westminster, Huntington Beach, Costa Mesa, Santa Ana"],
        [""],
        *section_title("BASELINE POS (Apr/2025–Apr/2026)"),
        ["Chỉ số", "Giá trị"],
        ["Doanh thu 13 tháng", "$222,582"],
        ["TB/tháng Y26", "$20,221 (+28.4% vs Y25)"],
        ["Ticket TB", "$85.91 (+79% vs ngành $48)"],
        ["Google", "5.0★ · 139 reviews"],
        ["Retention", "44.5% (375/842) — mục tiêu 60%"],
        ["Combo rate", "47.2% · combo ticket $117"],
        ["Top dịch vụ", "Gel-X $43.6K · The Pedi $31.4K · Hard Gel +146%"],
        [""],
        *section_title("PERSONA (report §06)"),
        ["Persona", "Mô tả"],
    ]
    for name, desc in PERSONAS:
        rows.append([name, desc])
    append_section(rows, "GIỜ MỞ/ĐÓNG DỊP LỄ")
    rows.append(["Dịp", "Trạng thái", "Campaign note"])
    for holiday, status, note in HOLIDAY_HOURS:
        rows.append([holiday, status, note])
    append_section(rows, "MỤC TIÊU H2/2026")
    rows.extend([
        ["#", "Mục tiêu", "Metric"],
        ["1", "Holiday revenue peak T10–12", "Oct & Dec = historical peaks"],
        ["2", "Instagram Reels", "2/week (from 0% Reels)"],
        ["3", "Pedicure visual gap", "Video ritual for $77K service line"],
        ["4", "Retention / win-back", "44.5% → 60%; 467 one-time clients"],
        ["5", "Google Local ads", "Base $100–300 · T10–12: $200–400"],
    ])
    append_section(rows, "PHÂN CÔNG TÓM TẮT")
    rows.append(["WATO", "Reels, Google ads/posts, EN copy, KPI report"])
    rows.append(["Tiệm", "Messenger, review QR, photos, SMS, POS promos"])
    return rows


def build_strategy() -> list[list[str]]:
    rows: list[list[str]] = [
        ["Iris | Chiến lược truyền thông — T7–T12/2026"],
        [""],
        *section_title("5 CONTENT PILLARS (report §09)"),
        ["Pillar", "Hiện trạng", "Hành động H2"],
    ]
    for pillar, status, action in CONTENT_PILLARS:
        rows.append([pillar, status, action])
    append_section(rows, "KÊNH & ĐIỂM SỐ (report §07)")
    rows.extend([
        ["Kênh", "Score", "Hành động"],
        ["Website / SEO", "8/10", "Booking + service pages"],
        ["Google Reviews", "8/10", "Maintain velocity — marketing asset"],
        ["Instagram", "5/10", "2 Reels/week + link in bio"],
        ["Facebook", "2/10", "Light posting; Messenger response"],
        ["Yelp", "5/10", "Increase review volume from 24"],
        ["Loyalty", "1/10", "SimplePOS program launch"],
    ])
    append_section(rows, "PROMO — WATO ĐỀ XUẤT (Chủ tiệm duyệt)")
    rows.append(["Offer", "Chi tiết", "Impact (report)", "Trạng thái"])
    for row in PROMO_SUGGESTIONS:
        rows.append(list(row))
    append_section(rows, "NÊN LÀM & KHÔNG NÊN")
    rows.append(["Nên làm"])
    for item in [
        "2 Reels/week minimum",
        "Pedicure ritual video on social",
        "Google posts every holiday window",
        "Win-back SMS at 5 weeks",
        "Respond reviews & messages fast",
    ]:
        rows.append([f"✓ {item}"])
    rows.append([""])
    rows.append(["Không nên"])
    for item in [
        "Sunday campaigns (closed)",
        "Deep discounts — hurts premium brand",
        "Fake reviews",
        "Only nail art — skip hygiene visuals",
        "Ignore Google — Walk-in Discoverer segment",
    ]:
        rows.append([f"✗ {item}"])
    return rows


def build_calendar() -> list[list[str]]:
    rows: list[list[str]] = [
        ["Iris | Lịch 6 tháng — T7–T12/2026"],
        [f"Bắt đầu tuần 1: {PLAN_START.isoformat()} · Target: {REELS_PER_WEEK} Reels/tuần"],
        ["Copy public: English | CLOSED: Jul 4, Dec 25, all Sundays"],
        [""],
        ["Tuần", "Từ–Đến", "Tháng / Theme", "Holiday note", "Task", "Kênh", "Copy EN / CTA", "Owner", "Status"],
    ]

    for week in range(1, 27):
        start, end = _week_range(week)
        month = start.month if start.month == end.month else end.month
        theme_title, theme_detail = MONTH_THEMES.get(month, ("", ""))
        holiday = _holiday_note(start, end)
        tasks = WEEKLY_TASKS_BY_MONTH.get(month, WEEKLY_TASKS_BY_MONTH[7])
        task_idx = (week - 1) % len(tasks)
        task, channel, cta, owner, status = tasks[task_idx]
        rows.append([
            str(week),
            f"{start.isoformat()} — {end.isoformat()}",
            f"{theme_title}: {theme_detail}",
            holiday,
            task,
            channel,
            cta,
            owner,
            status,
        ])
    return rows


def build_kpi() -> list[list[str]]:
    rows: list[list[str]] = [
        ["Iris | KPI — T7–T12/2026"],
        [""],
        *section_title("BASELINE & TARGET"),
        ["Chỉ số", "Baseline", "Target H2", "Tần suất"],
        ["Google rating", "5.0★", "Maintain 5.0", "Weekly"],
        ["Google new reviews", "—", "≥ 6/tháng", "Monthly"],
        ["Instagram Reels", "0/week", "2/week", "Weekly"],
        ["Retention", "44.5%", "55–60%", "Monthly"],
        ["Google Ads spend", "—", "$100–300 (T7–9) · $200–400 (T10–12)", "Monthly"],
        ["Online bookings", "—", "+15–20% vs H1", "Monthly"],
        [""],
        *section_title("THEO DÕI THEO THÁNG (ĐIỀN SỐ LIỆU)"),
        ["Tháng", "Reels posted", "Reviews mới", "Ad spend", "Bookings digital", "Retention %", "Ghi chú"],
    ]
    for month in ["2026-07", "2026-08", "2026-09", "2026-10", "2026-11", "2026-12"]:
        rows.append([month, "", "", "", "", "", ""])
    append_section(rows, "KPI THEO DỊP LỄ")
    rows.append(["Dịp", "KPI focus", "Target", "Actual"])
    for holiday, kpi, target in [
        ("July 4 (closed)", "Bookings Jul 1–3", "Fill 3 days"),
        ("Labor Day", "The Pedi bookings", "+10% vs avg week"),
        ("Halloween", "Gel-X art bookings", "Track custom art count"),
        ("Thanksgiving", "Gift cards sold", "≥ target TBD"),
        ("Christmas (closed 25)", "Bookings Dec 23–24", "Fill pre-close days"),
        ("NYE", "Party nail bookings", "Dec 30–31 fill"),
    ]:
        rows.append([holiday, kpi, target, ""])
    return rows


def build_ads_budget() -> list[list[str]]:
    rows: list[list[str]] = [
        ["Iris | Ngân sách Ads — T7–T12/2026"],
        [""],
        *section_title("GOOGLE LOCAL — CHỈ PAID CHANNEL"),
        ["Giai đoạn", "Budget/tháng", "Ghi chú"],
        ["T7 – T9/2026", "$100 – $300", "Base — maintenance + holiday prep from Sep"],
        ["T10 – T12/2026", "$200 – $400", "Spike +$100/th for Oct–Dec holidays"],
        [""],
        *section_title("PHÂN BỔ GỢI Ý (%)"),
        ["Tháng", "Holiday focus", "% budget on peak weeks", "Keywords EN"],
        ["2026-07", "Pre–July 4", "40% in W1", "nail salon Fountain Valley, Gel-X"],
        ["2026-08", "Back to school", "Even split", "manicure near me, quick mani"],
        ["2026-09", "Labor Day + Q4 prep", "30% around Sep 7", "pedicure Fountain Valley"],
        ["2026-10", "Halloween", "35% last 2 weeks", "Halloween nail art OC"],
        ["2026-11", "Thanksgiving / BF", "40% Nov 20–30", "gift card nail salon"],
        ["2026-12", "Christmas / NYE", "45% Dec 15–31", "holiday nails, NYE nails"],
        [""],
        *section_title("THEO DÕI CHI TIÊU (ĐIỀN)"),
        ["Tháng", "Budget plan", "Actual spend", "Clicks", "Bookings attributed", "Ghi chú"],
    ]
    for month in ["2026-07", "2026-08", "2026-09", "2026-10", "2026-11", "2026-12"]:
        budget = "$100–300" if month < "2026-10" else "$200–400"
        rows.append([month, budget, "", "", "", ""])
    return rows


def build_assignment() -> list[list[str]]:
    rows: list[list[str]] = [
        ["Iris | Phân công WATO vs Tiệm"],
        [""],
        ["Hoạt động", "WATO", "Tiệm (Iris)"],
    ]
    for activity, wato, salon in ASSIGNMENT_MATRIX:
        rows.append([activity, wato, salon])
    append_section(rows, "CADENCE H2")
    rows.extend([
        ["Tần suất", "WATO", "Tiệm"],
        ["Hàng tuần", "2 Reels + 1 Google Post + ads check", "Review QR · photos · Messenger"],
        ["Hàng tháng", "KPI tab + budget review", "SMS win-back batch · promo cards"],
        ["Theo lễ", "Holiday campaign creative EN", "Extra staffing peak days"],
    ])
    return rows


def get_tab_specs() -> list[TabSpec]:
    return [
        ("Iris | Tổng quan", build_overview),
        ("Iris | Chiến lược", build_strategy),
        ("Iris | Lịch 6 tháng", build_calendar),
        ("Iris | KPI", build_kpi),
        ("Iris | Ngân sách Ads", build_ads_budget),
        ("Iris | Phân công", build_assignment),
    ]
