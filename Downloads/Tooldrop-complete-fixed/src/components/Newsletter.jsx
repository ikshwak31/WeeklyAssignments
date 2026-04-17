import { useState } from 'react'

// BUG #15 FIX: proper email format validation (not just includes('@'))
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

export default function Newsletter() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error,     setError]     = useState('')

  const handleSubmit = () => {
    setError('')
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setSubmitted(true)
  }

  return (
    <div style={{
      maxWidth: '600px', margin: '0 auto 80px',
      padding: '48px', background: '#161d2e',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '24px', textAlign: 'center', position: 'relative', zIndex: 1,
    }}>
      <h2 style={{
        fontFamily: "'Syne', sans-serif", fontSize: '1.8rem',
        fontWeight: 800, marginBottom: '10px', letterSpacing: '-0.5px', color: '#e8edf5',
      }}>
        Get Weekly Drops 📬
      </h2>
      <p style={{ color: '#5a6580', marginBottom: '24px', fontSize: '0.9rem' }}>
        New AI tools land every week. Be the first to know — no spam, just the best drops.
      </p>

      {submitted ? (
        <div style={{
          background: 'rgba(0,240,160,0.1)', border: '1px solid rgba(0,240,160,0.3)',
          color: '#00f0a0', padding: '14px 24px', borderRadius: '10px',
          fontFamily: "'DM Mono', monospace", fontSize: '0.85rem',
        }}>
          ✅ You&apos;re on the list! Welcome to ToolDrop.
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => { setEmail(e.target.value); setError('') }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                flex: 1, background: '#0f1420',
                border: `1px solid ${error ? 'rgba(255,107,53,0.5)' : 'rgba(255,255,255,0.07)'}`,
                color: '#e8edf5', fontFamily: "'Outfit', sans-serif",
                padding: '12px 16px', borderRadius: '8px', outline: 'none', fontSize: '0.9rem',
                transition: 'border-color 0.2s',
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                background: '#00f0a0', color: '#000', fontWeight: 600,
                fontFamily: "'Outfit', sans-serif", padding: '12px 20px',
                border: 'none', borderRadius: '8px', cursor: 'pointer',
                fontSize: '0.9rem', whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Subscribe
            </button>
          </div>
          {error && (
            <p style={{ color: '#ff6b35', fontSize: '0.8rem', marginTop: '8px', fontFamily: "'DM Mono', monospace" }}>
              {error}
            </p>
          )}
        </>
      )}
    </div>
  )
}
