import { useState } from 'react'

export default function Footer({ onNavigate }) {
  // BUG #14 FIX: replaced direct DOM style mutation with React state
  const [hovered, setHovered] = useState(null)

  const links = [
    { label: 'About',        page: 'about'   },
    { label: 'Submit a Tool',page: 'submit'  },
    { label: 'Blog',         page: 'blog'    },
    { label: 'Privacy',      page: 'privacy' },
    { label: 'Contact',      page: 'contact' },
  ]

  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '40px 24px', textAlign: 'center',
      color: '#5a6580', fontSize: '0.82rem',
    }}>
      <span
        onClick={() => onNavigate('home')}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#e8edf5', marginBottom: '16px', display: 'block', cursor: 'pointer' }}
      >
        Tool<span style={{ color: '#00f0a0' }}>Drop</span>
      </span>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {links.map(({ label, page }) => (
          <span
            key={page}
            onClick={() => onNavigate(page)}
            onMouseEnter={() => setHovered(page)}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: hovered === page ? '#e8edf5' : '#5a6580',
              cursor: 'pointer', transition: 'color 0.2s',
            }}
          >
            {label}
          </span>
        ))}
      </div>

      <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '0.75rem', lineHeight: 1.6 }}>
        © {new Date().getFullYear()} ToolDrop. Some links are{' '}
        <span onClick={() => onNavigate('privacy')} style={{ color: '#00f0a0', cursor: 'pointer' }}>affiliate links</span>
        {' '}— we may earn a commission when you click through and purchase.
        This helps us keep the site free and growing.
      </p>
    </footer>
  )
}
