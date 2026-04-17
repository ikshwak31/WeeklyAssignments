import { useState } from 'react'

export default function Navbar({ currentPage, onNavigate }) {
  const [hovered,   setHovered]   = useState(null)
  const [menuOpen,  setMenuOpen]  = useState(false)

  const links = [
    { label: 'Discover',    page: 'home'       },
    { label: 'Categories',  page: 'categories' },
    // BUG #5 FIX: was 'newdrops' — route is registered as 'new-drops'
    { label: 'New Drops',   page: 'new-drops'  },
    { label: 'Blog',        page: 'blog'       },
  ]

  const handleNav = (page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(8,11,18,0.88)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: '64px', maxWidth: '1400px', margin: '0 auto',
      }}>
        {/* Logo */}
        <span
          onClick={() => handleNav('home')}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.5px', color: '#e8edf5', cursor: 'pointer' }}
        >
          Tool<span style={{ color: '#00f0a0' }}>Drop</span>
        </span>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }}>
          {links.map(({ label, page }) => {
            const isActive = currentPage === page
            return (
              <li key={page}>
                <span
                  onClick={() => handleNav(page)}
                  onMouseEnter={() => setHovered(page)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    color: isActive || hovered === page ? '#e8edf5' : '#5a6580',
                    fontSize: '0.9rem', fontWeight: 500,
                    transition: 'color 0.2s', cursor: 'pointer',
                    borderBottom: isActive ? '1px solid #00f0a0' : 'none',
                    paddingBottom: '2px',
                  }}
                >
                  {label}
                </span>
              </li>
            )
          })}
          <li>
            <span
              onClick={() => handleNav('submit')}
              style={{
                background: '#00f0a0', color: '#000',
                padding: '8px 20px', borderRadius: '6px',
                fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Submit Tool
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}
