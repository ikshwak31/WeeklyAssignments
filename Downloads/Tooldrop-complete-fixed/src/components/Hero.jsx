import { useState, useEffect } from 'react'

export default function Hero({ onSearch, searchValue }) {
  const [query, setQuery] = useState(searchValue || '')

  // Sync local state when parent clears search
  useEffect(() => {
    setQuery(searchValue || '')
  }, [searchValue])

  const handleChange = (val) => {
    setQuery(val)
    onSearch(val)  // live search — results update as user types
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <section style={{ textAlign: 'center', padding: '100px 20px 80px', position: 'relative', zIndex: 1 }}>
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(2rem, 6vw, 3.8rem)',
        lineHeight: 1.1,
        letterSpacing: '-2px',
        marginBottom: '20px',
        color: '#e8edf5',
      }}>
        Discover the Best AI Tools
      </h1>

      <p style={{ color: '#5a6580', marginBottom: '40px', fontSize: '1.05rem', maxWidth: '460px', margin: '0 auto 40px', lineHeight: 1.7 }}>
        Find powerful AI tools instantly — curated, ranked, and categorised across every use case.
      </p>

      <div style={{
        display: 'flex', maxWidth: '520px', margin: '0 auto',
        background: '#0f1420',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px', overflow: 'hidden',
        boxShadow: query ? '0 0 0 2px rgba(0,240,160,0.3)' : '0 0 40px rgba(0,240,160,0.06)',
        transition: 'box-shadow 0.25s',
      }}>
        <input
          type="text"
          placeholder="Search AI tools, categories, use cases..."
          value={query}
          onChange={e => handleChange(e.target.value)}
          onKeyDown={e => { if (e.key === 'Escape') handleClear() }}
          style={{
            flex: 1, padding: '16px 20px',
            background: 'transparent', border: 'none', outline: 'none',
            color: '#e8edf5', fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem',
          }}
        />
        {query && (
          <button
            onClick={handleClear}
            title="Clear search"
            style={{
              background: 'none', border: 'none',
              color: '#5a6580', cursor: 'pointer',
              padding: '0 14px', fontSize: '1rem',
            }}
          >
            ✕
          </button>
        )}
        <button
          onClick={() => onSearch(query)}
          style={{
            padding: '16px 28px',
            background: '#00f0a0', border: 'none',
            cursor: 'pointer', fontWeight: 700,
            fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', color: '#000',
            letterSpacing: '0.3px', whiteSpace: 'nowrap',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Search →
        </button>
      </div>
    </section>
  )
}
