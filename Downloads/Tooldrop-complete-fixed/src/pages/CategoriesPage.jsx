import { CATEGORIES } from '../data/tools'
import { tools } from '../data/tools'

const categoryInfo = {
  Writing:      { emoji: '✍️', desc: 'AI tools to write faster, better, and smarter.' },
  Image:        { emoji: '🎨', desc: 'Generate stunning images and art from text.' },
  Coding:       { emoji: '💻', desc: 'AI-powered coding assistants and editors.' },
  Video:        { emoji: '🎬', desc: 'Create and edit videos with AI.' },
  Audio:        { emoji: '🎵', desc: 'Voice cloning, music generation & more.' },
  Productivity: { emoji: '⚡', desc: 'Work smarter and automate your workflow.' },
  SEO:          { emoji: '📈', desc: 'Rank higher and grow organic traffic.' },
  Marketing:    { emoji: '📣', desc: 'AI tools for ads, social, and campaigns.' },
  Research:     { emoji: '🔬', desc: 'Find information faster with AI search.' },
  Chatbots:     { emoji: '🤖', desc: 'Conversational AI and virtual assistants.' },
  Design:       { emoji: '🎯', desc: 'AI-enhanced design and creative tools.' },
  Data:         { emoji: '📊', desc: 'AI analytics, visualization, and insights.' },
  Education:    { emoji: '🎓', desc: 'AI tutoring and personalized learning.' },
  '3D':         { emoji: '🧊', desc: 'Generate 3D models, scenes, and textures.' },
  Automation:   { emoji: '⚡', desc: 'Automate workflows and connect apps with AI.' },
}

export default function CategoriesPage({ onSelectCategory }) {
  const cats = CATEGORIES.filter(c => c !== 'All')

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(0,240,160,0.08)',
          border: '1px solid rgba(0,240,160,0.2)', color: '#00f0a0',
          fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
        }}>
          // CATEGORIES
        </div>
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1.5px',
          color: '#e8edf5', marginBottom: '16px',
        }}>
          Browse All Categories
        </h1>
        <p style={{ color: '#5a6580', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Find the perfect AI tool for every use case.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        {cats.map((cat, i) => {
          const info = categoryInfo[cat] || { emoji: '🔧', desc: 'AI tools for ' + cat }
          const count = tools.filter(t => t.category === cat).length
          return (
            <div
              key={cat}
              onClick={() => onSelectCategory(cat)}
              style={{
                background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px', padding: '28px', cursor: 'pointer',
                transition: 'all 0.25s', animation: `fadeUp 0.5s ease ${i * 0.06}s both`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,160,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(0,240,160,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#0f1420' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>{info.emoji}</div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.2rem',
                color: '#e8edf5', marginBottom: '8px', letterSpacing: '-0.3px',
              }}>{cat}</h3>
              <p style={{ color: '#5a6580', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>{info.desc}</p>
              <span style={{
                background: 'rgba(0,240,160,0.08)', color: '#00f0a0',
                fontFamily: "'DM Mono', monospace", fontSize: '0.72rem',
                padding: '4px 12px', borderRadius: '999px',
              }}>
                {count} tool{count !== 1 ? 's' : ''}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
