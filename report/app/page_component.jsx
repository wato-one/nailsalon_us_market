"use client";

import { useEffect, useState } from "react";
import {
  sections,
  hero,
  footerMeta,
  sectionIntros,
  valueChain,
  valueChainHighlight,
  statCards,
  overviewSourceIds,
  pestelData,
  porterData,
  competitorData,
  segments,
  infoSources,
  consumerLabels,
  consumerDemographics,
  consumerPsychographics,
  consumerMediaBehavior,
  journeyStages,
  strategyData,
  sectionHints,
} from "./report-content-vi";
import { reportSources } from "./report-sources";
import { masterGlossary } from "./master-glossary";
import { clientTheme as theme, fontStylesheet } from "./wato-theme";

const sourceById = Object.fromEntries(reportSources.map((s) => [s.id, s]));

const BADGE_COLORS = {
  critical: "#C62828",
  high: "#E65100",
  opportunity: "#2E7D32",
  insight: "#1565C0",
};

const BADGE_LABELS = {
  critical: "Quan trọng",
  high: "Cao",
  opportunity: "Cơ hội",
  insight: "Nhận định",
};

const sectionStyle = {
  scrollMarginTop: "88px",
  marginBottom: "64px",
  paddingTop: "8px",
};

const cardStyle = {
  background: theme.colors.white,
  border: `1px solid ${theme.colors.lineSoft}`,
  borderRadius: theme.radius.md,
  padding: "24px",
  marginBottom: "16px",
  boxShadow: theme.colors.cardShadow,
};

function SourceRefs({ ids }) {
  if (!ids?.length) return null;
  return (
    <span style={{ fontSize: "12px", color: theme.colors.muted }}>
      {" "}
      [
      {ids.map((id, i) => {
        const s = sourceById[id];
        if (!s) return null;
        return (
          <span key={id}>
            {i > 0 && ", "}
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.colors.accentDeep, textDecoration: "underline" }}
              >
                {s.label}
              </a>
            ) : (
              <span>{s.label}</span>
            )}
          </span>
        );
      })}
      ]
    </span>
  );
}

function SectionSources({ ids, title = "Nguồn tham khảo" }) {
  const unique = [...new Set(ids || [])];
  if (!unique.length) return null;
  return (
    <div style={{ marginTop: "20px", fontSize: "13px", color: theme.colors.muted }}>
      <strong style={{ color: theme.colors.ink }}>{title}</strong>
      <ul style={{ margin: "8px 0 0", paddingLeft: "20px" }}>
        {unique.map((id) => {
          const s = sourceById[id];
          if (!s) return null;
          return (
            <li key={id} style={{ marginBottom: "4px" }}>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.accentDeep }}>
                  {s.title}
                </a>
              ) : (
                s.title
              )}
              {s.note ? ` — ${s.note}` : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SectionTermHint({ terms }) {
  if (!terms?.length) return null;
  return (
    <div
      style={{
        ...cardStyle,
        background: theme.colors.bgAlt,
        border: `1px dashed ${theme.colors.line}`,
        padding: "16px 20px",
      }}
    >
      <div style={{ fontSize: "12px", fontWeight: 600, color: theme.colors.muted, marginBottom: "8px" }}>
        THUẬT NGỮ NHANH
      </div>
      {terms.map((t) => (
        <div key={t.term} style={{ fontSize: "13px", marginBottom: "6px", lineHeight: 1.5 }}>
          <strong style={{ color: theme.colors.accent }}>{t.term}</strong>
          <span style={{ color: theme.colors.muted }}> — {t.def}</span>
        </div>
      ))}
      <a href="#glossary" style={{ fontSize: "12px", color: theme.colors.accentDeep, fontWeight: 600 }}>
        Xem bảng thuật ngữ đầy đủ →
      </a>
    </div>
  );
}

function Badge({ type, children }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: theme.radius.sm,
        background: BADGE_COLORS[type] || theme.colors.muted,
        color: "#fff",
        marginRight: "8px",
        verticalAlign: "middle",
      }}
    >
      {children || BADGE_LABELS[type]}
    </span>
  );
}

function ForceBar({ level, color }) {
  const pct = (level / 5) * 100;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
      <div style={{ flex: 1, height: "8px", background: theme.colors.lineSoft, borderRadius: "4px", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "4px" }} />
      </div>
      <span style={{ fontFamily: theme.fonts.mono, fontSize: "13px", fontWeight: 600, color: theme.colors.ink, minWidth: "32px" }}>
        {level}/5
      </span>
    </div>
  );
}

function ThreatDots({ level }) {
  return (
    <span style={{ display: "inline-flex", gap: "4px" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: n <= level ? theme.colors.accent : theme.colors.lineSoft,
          }}
        />
      ))}
    </span>
  );
}

function TermGlossary({ terms }) {
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      {terms.map((t) => (
        <div key={t.term} style={cardStyle}>
          <div style={{ fontWeight: 700, fontSize: "16px", color: theme.colors.ink, marginBottom: "4px" }}>
            {t.term}
            {t.en ? (
              <span style={{ fontWeight: 400, fontSize: "13px", color: theme.colors.muted, marginLeft: "8px" }}>
                ({t.en})
              </span>
            ) : null}
          </div>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: theme.colors.muted }}>{t.def}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontStylesheet;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: [0, 0.1, 0.25] }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const publisherLabels = [...new Set(reportSources.map((s) => s.label))].slice(0, 5).join(" · ");

  return (
    <div
      style={{
        fontFamily: theme.fonts.body,
        background: theme.colors.bg,
        color: theme.colors.ink,
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(245, 243, 238, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${theme.colors.lineSoft}`,
          boxShadow: theme.colors.navShadow,
        }}
      >
        <div
          style={{
            maxWidth: theme.maxWidth,
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href={theme.siteUrl} target="_blank" rel="noopener noreferrer">
            {theme.logoUrl ? (
              <img src={theme.logoUrl} alt="Wato.one" style={{ height: "44px", width: "auto" }} />
            ) : (
              <span style={{ fontFamily: theme.fonts.display, fontWeight: 700, fontSize: "18px" }}>Wato.one</span>
            )}
          </a>
          <span style={{ fontSize: "12px", color: theme.colors.muted }}>Báo cáo {footerMeta.generated}</span>
        </div>
        <nav
          style={{
            maxWidth: theme.maxWidth,
            margin: "0 auto",
            padding: "0 24px 10px",
            display: "flex",
            gap: "6px",
            overflowX: "auto",
            flexWrap: "nowrap",
          }}
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              style={{
                fontSize: "12px",
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: theme.radius.sm,
                textDecoration: "none",
                whiteSpace: "nowrap",
                background: activeSection === id ? theme.colors.accent : "transparent",
                color: activeSection === id ? "#fff" : theme.colors.muted,
                border: `1px solid ${activeSection === id ? theme.colors.accent : theme.colors.lineSoft}`,
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: theme.maxWidth, margin: "0 auto", padding: "32px 24px 80px" }}>
        <section id="overview" style={sectionStyle}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: theme.colors.accent, marginBottom: "12px" }}>
            {hero.eyebrow}
          </div>
          <h1
            style={{
              fontFamily: theme.fonts.display,
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: "0 0 16px",
              color: theme.colors.ink,
            }}
          >
            {hero.title}
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.65, color: theme.colors.muted, maxWidth: "720px", margin: "0 0 20px" }}>
            {hero.subtitle}
          </p>
          <p style={{ fontSize: "13px", color: theme.colors.muted }}>
            ✓ {hero.verifiedLine}: {publisherLabels}
          </p>

          <SectionTermHint terms={sectionHints.overview} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
              margin: "32px 0",
            }}
          >
            {statCards.map((c) => (
              <div key={c.l} style={cardStyle}>
                <div style={{ fontSize: "26px", fontWeight: 700, color: theme.colors.accent, fontFamily: theme.fonts.display }}>{c.n}</div>
                <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "4px" }}>{c.l}</div>
                <div style={{ fontSize: "12px", color: theme.colors.muted }}>{c.s}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "22px", marginBottom: "16px" }}>{sectionIntros.valueChain}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            {valueChain.map((step, i) => (
              <span key={step} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    padding: "8px 14px",
                    borderRadius: theme.radius.sm,
                    fontSize: "13px",
                    fontWeight: i === valueChainHighlight ? 700 : 500,
                    background: i === valueChainHighlight ? theme.colors.accent : theme.colors.white,
                    color: i === valueChainHighlight ? "#fff" : theme.colors.ink,
                    border: `1px solid ${i === valueChainHighlight ? theme.colors.accent : theme.colors.lineSoft}`,
                  }}
                >
                  {step}
                </span>
                {i < valueChain.length - 1 && <span style={{ color: theme.colors.muted }}>→</span>}
              </span>
            ))}
          </div>
          <SectionSources ids={overviewSourceIds} />
        </section>

        <section id="pestel" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Phân tích PESTEL</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>{sectionIntros.pestel}</p>
          <SectionTermHint terms={sectionHints.pestel} />
          {pestelData.map((cat) => (
            <div key={cat.letter} style={{ ...cardStyle, borderLeft: `4px solid ${cat.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: cat.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {cat.letter}
                </span>
                <h3 style={{ margin: 0, fontSize: "18px" }}>{cat.title}</h3>
              </div>
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    marginBottom: "16px",
                    paddingBottom: idx < cat.items.length - 1 ? "16px" : 0,
                    borderBottom: idx < cat.items.length - 1 ? `1px solid ${theme.colors.lineSoft}` : "none",
                  }}
                >
                  <div style={{ marginBottom: "6px" }}>
                    <Badge type={item.impact} />
                    <strong style={{ fontSize: "15px" }}>{item.headline}</strong>
                  </div>
                  <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: 1.65, color: theme.colors.muted }}>
                    {item.detail}
                    <SourceRefs ids={item.sourceIds} />
                  </p>
                </div>
              ))}
              <SectionSources ids={cat.sourceIds} />
            </div>
          ))}
        </section>

        <section id="porter" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Lực lượng Porter</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>{sectionIntros.porter}</p>
          <SectionTermHint terms={sectionHints.porter} />
          {porterData.map((f) => (
            <div key={f.force} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "16px" }}>{f.force}</h3>
                <span style={{ fontSize: "11px", fontWeight: 700, color: f.color, letterSpacing: "0.05em" }}>{f.levelLabel}</span>
              </div>
              <ForceBar level={f.level} color={f.color} />
              <ul style={{ margin: "12px 0 0", paddingLeft: "20px", color: theme.colors.muted, fontSize: "14px", lineHeight: 1.65 }}>
                {f.points.map((p, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>
                    {p}
                  </li>
                ))}
              </ul>
              <SectionSources ids={f.sourceIds} />
            </div>
          ))}
        </section>

        <section id="competitors" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Bản đồ đối thủ</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>{sectionIntros.competitors}</p>
          <SectionTermHint terms={sectionHints.competitors} />
          {competitorData.map((c) => (
            <div key={c.name} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: "17px" }}>{c.name}</h3>
                  <span style={{ fontSize: "12px", padding: "2px 8px", background: theme.colors.bgAlt, borderRadius: theme.radius.sm }}>{c.type}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>{c.rating}</div>
                  {c.threat > 0 && (
                    <div style={{ fontSize: "12px", color: theme.colors.muted, marginTop: "4px" }}>
                      Đe dọa: <ThreatDots level={c.threat} />
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", fontSize: "13px" }}>
                <div>
                  <strong style={{ color: "#2E7D32" }}>Điểm mạnh</strong>
                  <p style={{ margin: "6px 0 0", color: theme.colors.muted, lineHeight: 1.55 }}>{c.strengths}</p>
                </div>
                <div>
                  <strong style={{ color: "#C62828" }}>Điểm yếu</strong>
                  <p style={{ margin: "6px 0 0", color: theme.colors.muted, lineHeight: 1.55 }}>{c.weaknesses}</p>
                </div>
              </div>
              {c.sourceIds && (
                <div style={{ marginTop: "10px" }}>
                  <SourceRefs ids={c.sourceIds} />
                </div>
              )}
            </div>
          ))}
        </section>

        <section id="consumer" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Khách hàng mục tiêu</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>{sectionIntros.consumer}</p>
          <SectionTermHint terms={sectionHints.consumer} />

          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{consumerLabels.demographicsTitle}</h3>
          <p style={{ fontSize: "13px", color: theme.colors.muted, marginBottom: "16px", lineHeight: 1.6 }}>
            {consumerLabels.demographicsIntro}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            {consumerDemographics.map((row) => (
              <div key={`${row.category}-${row.metric}`} style={{ ...cardStyle, marginBottom: 0, padding: "16px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: theme.colors.accent, letterSpacing: "0.04em" }}>
                  {row.category}
                </div>
                <div style={{ fontSize: "22px", fontWeight: 700, color: theme.colors.ink, margin: "4px 0" }}>{row.metric}</div>
                <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>{row.value}</div>
                <p style={{ fontSize: "12px", lineHeight: 1.55, color: theme.colors.muted, margin: 0 }}>
                  {row.detail}
                  <SourceRefs ids={row.sourceIds} />
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{consumerLabels.psychographicsTitle}</h3>
          <p style={{ fontSize: "13px", color: theme.colors.muted, marginBottom: "16px", lineHeight: 1.6 }}>
            {consumerLabels.psychographicsIntro}
          </p>
          {consumerPsychographics.map((item) => (
            <div key={item.headline} style={cardStyle}>
              <div style={{ marginBottom: "6px" }}>
                {item.impact && <Badge type={item.impact} />}
                <strong style={{ fontSize: "15px" }}>{item.headline}</strong>
              </div>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.65, color: theme.colors.muted }}>
                {item.detail}
                <SourceRefs ids={item.sourceIds} />
              </p>
            </div>
          ))}

          <h3 style={{ fontSize: "18px", margin: "32px 0 8px" }}>{consumerLabels.mediaTitle}</h3>
          <p style={{ fontSize: "13px", color: theme.colors.muted, marginBottom: "16px", lineHeight: 1.6 }}>
            {consumerLabels.mediaIntro}
          </p>
          <div style={{ overflowX: "auto", marginBottom: "32px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: theme.colors.bgAlt }}>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Nền tảng</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Vai trò</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Hành vi</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Quan trọng</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {consumerMediaBehavior.map((row) => (
                  <tr key={row.platform}>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, fontWeight: 600 }}>{row.platform}</td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, color: theme.colors.muted }}>{row.role}</td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, color: theme.colors.muted }}>{row.behavior}</td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}` }}>
                      <ThreatDots level={row.importance} />
                    </td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, color: theme.colors.muted }}>
                      {row.detail}
                      <SourceRefs ids={row.sourceIds} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>{consumerLabels.segmentsTitle}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {segments.map((seg) => (
              <div key={seg.name} style={cardStyle}>
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#fff", background: seg.tagColor, padding: "3px 8px", borderRadius: theme.radius.sm }}>{seg.tag}</span>
                <h3 style={{ margin: "10px 0 4px", fontSize: "16px" }}>{seg.name}</h3>
                <div style={{ fontSize: "22px", fontWeight: 700, color: theme.colors.accentDeep }}>{seg.pct}</div>
                <div style={{ fontSize: "12px", color: theme.colors.muted, marginBottom: "12px" }}>{seg.sizeMarket}</div>
                <p style={{ fontSize: "12px", lineHeight: 1.55, color: theme.colors.muted, margin: "0 0 6px" }}>
                  <strong>Demographic:</strong> {seg.demographics}
                </p>
                <p style={{ fontSize: "12px", lineHeight: 1.55, color: theme.colors.muted, margin: "0 0 6px" }}>
                  <strong>Psychographic:</strong> {seg.psychographics}
                </p>
                <p style={{ fontSize: "12px", lineHeight: 1.55, color: theme.colors.muted, margin: "0 0 8px" }}>
                  <strong>Media:</strong> {seg.media}
                </p>
                <p style={{ fontSize: "13px", lineHeight: 1.55, color: theme.colors.muted, margin: "0 0 8px" }}>
                  <strong>Hồ sơ:</strong> {seg.profile}
                </p>
                <p style={{ fontSize: "12px", color: theme.colors.muted, margin: "4px 0" }}>
                  <strong>Kênh:</strong> {seg.channel}
                </p>
                <p style={{ fontSize: "12px", color: theme.colors.muted, margin: "4px 0" }}>
                  <strong>Rào cản:</strong> {seg.barrier}
                </p>
                {seg.sourceIds && (
                  <div style={{ marginTop: "8px" }}>
                    <SourceRefs ids={seg.sourceIds} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>{consumerLabels.infoSourcesTitle}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: theme.colors.bgAlt }}>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>#</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Nguồn</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Quan trọng</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {infoSources.map((row) => (
                  <tr key={row.rank}>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, fontFamily: theme.fonts.mono }}>{row.rank}</td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, fontWeight: 600 }}>{row.name}</td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}` }}>
                      <ThreatDots level={row.importance} />
                    </td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, color: theme.colors.muted }}>
                      {row.detail}
                      <SourceRefs ids={row.sourceIds} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="journey" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Hành trình mua</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>{sectionIntros.journey}</p>
          <SectionTermHint terms={sectionHints.journey} />
          {journeyStages.map((stage) => (
            <div key={stage.num} style={{ ...cardStyle, borderLeft: `4px solid ${stage.color}`, background: stage.bgColor }}>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
                <div style={{ fontSize: "32px" }}>{stage.icon}</div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: stage.color, letterSpacing: "0.08em" }}>
                    GIAI ĐOẠN {stage.num} · {stage.duration}
                  </div>
                  <h3 style={{ margin: "4px 0 2px", fontSize: "18px" }}>{stage.title}</h3>
                  <div style={{ fontSize: "13px", color: theme.colors.muted, marginBottom: "12px" }}>{stage.subtitle}</div>
                  {stage.triggers.map((t) => (
                    <div key={t.label} style={{ fontSize: "13px", marginBottom: "4px" }}>
                      <strong>{t.label}</strong>
                      {t.pct ? <span style={{ color: theme.colors.muted }}> ({t.pct})</span> : null}
                      <span style={{ color: theme.colors.muted }}> — {t.desc}</span>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: "14px",
                      padding: "12px",
                      background: theme.colors.white,
                      borderRadius: theme.radius.sm,
                      fontSize: "13px",
                      lineHeight: 1.6,
                      border: `1px solid ${theme.colors.lineSoft}`,
                    }}
                  >
                    <strong style={{ color: theme.colors.accent }}>{stage.behaviorLabel}:</strong> {stage.industryBehavior}
                    <SourceRefs ids={stage.sourceIds} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section id="strategy" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Đề xuất chiến lược</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>{sectionIntros.strategy}</p>
          <SectionTermHint terms={sectionHints.strategy} />
          {strategyData.map((s) => (
            <div key={s.priority} style={cardStyle}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: theme.colors.accent,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {s.priority}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: "17px" }}>{s.title}</h3>
                  <p style={{ margin: "0 0 12px", fontSize: "14px", color: theme.colors.muted, lineHeight: 1.6 }}>{s.rationale}</p>
                  <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: 1.65 }}>
                    {s.actions.map((a, i) => (
                      <li key={i} style={{ marginBottom: "4px" }}>
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "10px" }}>
                    <SourceRefs ids={s.sourceIds} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section id="glossary" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "20px" }}>Bảng thuật ngữ</h2>
          <TermGlossary terms={masterGlossary} />
        </section>
      </main>

      <footer
        style={{
          borderTop: `1px solid ${theme.colors.lineSoft}`,
          padding: "24px",
          textAlign: "center",
          fontSize: "12px",
          color: theme.colors.muted,
          background: theme.colors.white,
        }}
      >
        Báo cáo được tạo {footerMeta.generated} · {footerMeta.publisher}
        <br />
        {footerMeta.note}
        <br />
        <a href={theme.siteUrl} style={{ color: theme.colors.accentDeep }}>
          wato.one
        </a>
      </footer>
    </div>
  );
}
