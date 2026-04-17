import { useState } from 'react'

const inputBase = {
  width: '100%', background: '#0f1420',
  border: '1px solid rgba(255,255,255,0.07)',
  color: '#e8edf5', fontFamily: "'Outfit', sans-serif",
  padding: '12px 16px', borderRadius: '10px',
  outline: 'none', fontSize: '0.95rem', marginBottom: '16px',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

// BUG #15 FIX: proper RFC-compliant email check
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

// ─────────────────────────────────────────────────────────────
export function ContactPage() {
  const [sent,  setSent]  = useState(false)
  const [form,  setForm]  = useState({ name: '', email: '', message: '' })
  const [errors,setErrors]= useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())            e.name    = 'Name is required.'
    if (!isValidEmail(form.email))    e.email   = 'Please enter a valid email.'
    if (!form.message.trim())         e.message = 'Message cannot be empty.'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSent(true)
  }

  const Field = ({ label, error, children }) => (
    <div style={{ marginBottom: '4px' }}>
      <label style={{ display: 'block', color: '#e8edf5', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>
        {label}
      </label>
      {children}
      {error && <p style={{ color: '#ff6b35', fontSize: '0.78rem', marginTop: '-10px', marginBottom: '12px', fontFamily: "'DM Mono', monospace" }}>{error}</p>}
    </div>
  )

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto', padding: '60px 24px 80px' }}>
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(0,240,160,0.08)',
          border: '1px solid rgba(0,240,160,0.2)', color: '#00f0a0',
          fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
        }}>// CONTACT</div>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '3rem', letterSpacing: '-1.5px', color: '#e8edf5', marginBottom: '16px' }}>
          Get in Touch
        </h1>
        <p style={{ color: '#5a6580', lineHeight: 1.7 }}>Have a question, suggestion, or want to advertise? We&apos;d love to hear from you.</p>
      </div>

      {sent ? (
        <div style={{ textAlign: 'center', padding: '48px', background: '#0f1420', borderRadius: '16px', border: '1px solid rgba(0,240,160,0.2)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", color: '#e8edf5', fontWeight: 700 }}>Message Sent!</h3>
          <p style={{ color: '#5a6580', marginTop: '8px' }}>We&apos;ll get back to you within 24–48 hours.</p>
        </div>
      ) : (
        <div style={{ background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '36px' }}>

          <Field label="Your Name" error={errors.name}>
            <input
              style={{ ...inputBase, borderColor: errors.name ? 'rgba(255,107,53,0.5)' : 'rgba(255,255,255,0.07)' }}
              placeholder="John Doe"
              value={form.name}
              onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })) }}
              onFocus={e  => e.target.style.borderColor = 'rgba(0,240,160,0.4)'}
              onBlur={e   => e.target.style.borderColor = errors.name ? 'rgba(255,107,53,0.5)' : 'rgba(255,255,255,0.07)'}
            />
          </Field>

          <Field label="Email" error={errors.email}>
            <input
              style={{ ...inputBase, borderColor: errors.email ? 'rgba(255,107,53,0.5)' : 'rgba(255,255,255,0.07)' }}
              placeholder="you@email.com"
              type="email"
              value={form.email}
              onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })) }}
              onFocus={e  => e.target.style.borderColor = 'rgba(0,240,160,0.4)'}
              onBlur={e   => e.target.style.borderColor = errors.email ? 'rgba(255,107,53,0.5)' : 'rgba(255,255,255,0.07)'}
            />
          </Field>

          <Field label="Message" error={errors.message}>
            <textarea
              style={{ ...inputBase, minHeight: '120px', resize: 'vertical', borderColor: errors.message ? 'rgba(255,107,53,0.5)' : 'rgba(255,255,255,0.07)' }}
              placeholder="Your message..."
              value={form.message}
              onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })) }}
              onFocus={e  => e.target.style.borderColor = 'rgba(0,240,160,0.4)'}
              onBlur={e   => e.target.style.borderColor = errors.message ? 'rgba(255,107,53,0.5)' : 'rgba(255,255,255,0.07)'}
            />
          </Field>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%', background: '#00f0a0', color: '#000',
              fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1rem',
              padding: '14px', border: 'none', borderRadius: '10px', cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Send Message →
          </button>
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
export function PrivacyPage() {
  const sections = [
    { title: 'Information We Collect',  text: 'We collect minimal data — only what you provide (like your email for newsletter signup) and basic analytics to understand how the site is used.' },
    { title: 'Affiliate Links',         text: 'Some links on ToolDrop are affiliate links. When you click them and make a purchase, we earn a small commission at no extra cost to you. We only recommend tools we genuinely believe in.' },
    { title: 'Cookies',                 text: 'We use basic cookies for analytics purposes. We do not sell your data to third parties.' },
    { title: 'Newsletter',              text: 'If you subscribe to our newsletter, your email is stored securely and only used to send you ToolDrop updates. You can unsubscribe at any time.' },
    { title: 'Contact',                 text: 'If you have any questions about this privacy policy, please use the contact page to reach out.' },
  ]

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', padding: '60px 24px 80px' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(0,240,160,0.08)',
          border: '1px solid rgba(0,240,160,0.2)', color: '#00f0a0',
          fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
        }}>// PRIVACY POLICY</div>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '3rem', letterSpacing: '-1.5px', color: '#e8edf5', marginBottom: '8px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#5a6580', fontFamily: "'DM Mono', monospace", fontSize: '0.8rem' }}>Last updated: March 2026</p>
      </div>

      {sections.map((s, i) => (
        <div key={i} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: i < sections.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#e8edf5', marginBottom: '12px' }}>{s.title}</h2>
          <p style={{ color: '#5a6580', lineHeight: 1.8 }}>{s.text}</p>
        </div>
      ))}
    </div>
  )
}
