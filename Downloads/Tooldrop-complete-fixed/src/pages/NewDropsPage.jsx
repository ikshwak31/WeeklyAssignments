import ToolCard from '../components/ToolCard'
import { tools } from '../data/tools'

export default function NewDropsPage() {
  // BUG #7 FIX: was `[...tools].reverse()` which showed all 78 tools
  // Now correctly filters to only tools with isNew: true
  const newTools = tools.filter(t => t.isNew === true)

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(0,240,160,0.08)', border: '1px solid rgba(0,240,160,0.2)',
          color: '#00f0a0', fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
        }}>
          <span style={{ width: 6, height: 6, background: '#00f0a0', borderRadius: '50%', animation: 'pulse 1.5s infinite', display: 'inline-block' }} />
          UPDATED WEEKLY
        </div>
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1.5px',
          color: '#e8edf5', marginBottom: '16px',
        }}>
          🆕 New Drops
        </h1>
        <p style={{ color: '#5a6580', fontSize: '1.1rem', lineHeight: 1.7 }}>
          The freshest AI tools added to ToolDrop. Don&apos;t miss out.
        </p>
      </div>

      <div style={{
        background: '#161d2e', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px', padding: '16px 24px', marginBottom: '32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: '#e8edf5' }}>
          Week of March 18, 2026
        </span>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: '#00f0a0',
          background: 'rgba(0,240,160,0.08)', padding: '4px 12px', borderRadius: '999px',
        }}>
          {newTools.length} new tools
        </span>
      </div>

      {newTools.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {/* BUG #4 FIX: key uses tool.name not tool.id (id doesn't exist) */}
          {newTools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} delay={i * 0.05} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: '#5a6580' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#e8edf5', marginBottom: '8px' }}>
            No new drops yet
          </div>
          <div>Check back next week for fresh AI tools.</div>
        </div>
      )}
    </div>
  )
}
