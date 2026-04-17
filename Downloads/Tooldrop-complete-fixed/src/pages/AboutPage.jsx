import { tools, CATEGORIES } from '../data/tools'

export default function AboutPage() {
  // BUG #16 FIX: compute real counts from actual data instead of hardcoded "500+, 48"
  const toolCount     = tools.length
  const catCount      = CATEGORIES.length - 1  // subtract "All"
  const newToolCount  = tools.filter(t => t.isNew).length

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto', padding: '60px 24px 80px' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(0,240,160,0.08)',
          border: '1px solid rgba(0,240,160,0.2)', color: '#00f0a0',
          fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
        }}>
          // ABOUT
        </div>
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1.5px',
          color: '#e8edf5', marginBottom: '24px',
        }}>
          What is ToolDrop?
        </h1>
      </div>

      {[
        { emoji: '🎯', title: 'Our Mission',       text: "The AI tool landscape is exploding. There are hundreds of new tools launching every week — and it's impossible to keep up. ToolDrop exists to cut through the noise. We curate, test, and rank the best AI tools so you don't have to waste time searching." },
        { emoji: '🔍', title: 'How We Pick Tools', text: "Every tool on ToolDrop is manually reviewed. We look at quality, usefulness, value for money, and real user feedback. We don't list tools just because they pay us — we list tools because they're actually good." },
        { emoji: '💰', title: 'How We Make Money', text: "ToolDrop is free to use. We earn a small commission when you sign up for tools through our affiliate links — at no extra cost to you. This keeps the site running and lets us keep adding new tools every week." },
        { emoji: '📬', title: 'Stay in the Loop',  text: "Subscribe to our weekly newsletter and be the first to know about new drops. No spam — just the best AI tools landing in your inbox every Monday." },
      ].map((section, i) => (
        <div key={i} style={{
          background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px', padding: '32px', marginBottom: '20px',
          animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{section.emoji}</div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.3rem',
            color: '#e8edf5', marginBottom: '12px', letterSpacing: '-0.3px',
          }}>{section.title}</h2>
          <p style={{ color: '#5a6580', lineHeight: 1.8, fontSize: '0.95rem' }}>{section.text}</p>
        </div>
      ))}

      {/* BUG #16 FIX: real dynamic stats instead of hardcoded "500+, 48, 12K+" */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '40px',
        background: 'linear-gradient(135deg, rgba(0,240,160,0.06), rgba(0,170,255,0.04))',
        border: '1px solid rgba(0,240,160,0.15)', borderRadius: '16px', padding: '32px', textAlign: 'center',
      }}>
        {[
          { num: `${toolCount}+`,    label: 'Tools Listed'   },
          { num: `${catCount}`,      label: 'Categories'     },
          { num: `${newToolCount}+`, label: 'New This Month' },
        ].map(s => (
          <div key={s.label}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '2rem', color: '#00f0a0' }}>{s.num}</div>
            <div style={{ color: '#5a6580', fontSize: '0.82rem', marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
