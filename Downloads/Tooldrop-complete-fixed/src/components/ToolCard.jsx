import { useState } from 'react'

const badgeStyles = {
  FREE:     { background: 'rgba(0,240,160,0.1)',  color: '#00f0a0' },
  PAID:     { background: 'rgba(255,107,53,0.1)', color: '#ff6b35' },
  FREEMIUM: { background: 'rgba(0,170,255,0.1)',  color: '#0af'    },
}

// BUG #2a FIX: derive star count from numeric rating (e.g. 4.8 → 5 stars)
function starsFromRating(rating) {
  if (!rating || isNaN(rating)) return 0
  return Math.min(5, Math.max(0, Math.round(rating)))
}

export default function ToolCard({ tool, delay = 0 }) {
  const [hovered, setHovered] = useState(false)

  // BUG #2a FIX: tool.stars doesn't exist — compute from tool.rating
  const starCount = starsFromRating(tool.rating)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0f1420',
        border: `1px solid ${hovered ? 'rgba(0,240,160,0.25)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '16px', padding: '24px', cursor: 'pointer',
        transition: 'all 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4)' : 'none',
        position: 'relative', overflow: 'hidden',
        animation: `fadeUp 0.5s ease ${delay}s both`,
      }}
    >
      {/* Hover glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,240,160,0.04), transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s', pointerEvents: 'none',
      }} />

      {/* "NEW" label for recently added tools */}
      {tool.isNew && (
        <div style={{
          position: 'absolute', top: '14px', right: '64px',
          background: 'rgba(0,240,160,0.12)', border: '1px solid rgba(0,240,160,0.25)',
          color: '#00f0a0', fontSize: '0.58rem', fontFamily: "'DM Mono', monospace",
          padding: '2px 7px', borderRadius: '999px', letterSpacing: '0.5px',
        }}>
          NEW
        </div>
      )}

      {/* Top row: icon + badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          // BUG #2b FIX: data uses `bg` not `iconBg`
          background: tool.bg || '#1a2233',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0,
        }}>
          {tool.icon}
        </div>
        <span style={{
          // Fallback to FREE style if badge is missing/unrecognised
          ...(badgeStyles[tool.badge] || badgeStyles['FREE']),
          fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
          padding: '3px 9px', borderRadius: '999px', letterSpacing: '0.5px', fontWeight: 500,
        }}>
          {tool.badge}
        </span>
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem',
        marginBottom: '6px', letterSpacing: '-0.3px', color: '#e8edf5',
      }}>
        {tool.name}
      </div>

      {/* BUG #2c FIX: data uses `desc` not `description` */}
      <div style={{ color: '#5a6580', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
        {tool.desc || tool.description || ''}
      </div>

      {/* Tags — guard against missing array */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
        {(tool.tags || []).map(tag => (
          <span key={tag} style={{
            background: 'rgba(0,240,160,0.08)', color: '#00f0a0',
            fontSize: '0.72rem', fontFamily: "'DM Mono', monospace",
            padding: '3px 10px', borderRadius: '4px', letterSpacing: '0.3px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: rating + CTA */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: '#5a6580' }}>
          {/* BUG #2a FIX: use computed starCount instead of undefined tool.stars */}
          <span style={{ color: '#f5c518', letterSpacing: '-1px' }}>
            {'★'.repeat(starCount)}{'☆'.repeat(5 - starCount)}
          </span>
          <span>{tool.rating}</span>
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            background: 'transparent', border: '1px solid rgba(0,240,160,0.3)',
            color: '#00f0a0', fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem',
            fontWeight: 500, padding: '6px 16px', borderRadius: '6px',
            cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,240,160,0.08)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          Try Free →
        </a>
      </div>
    </div>
  )
}
