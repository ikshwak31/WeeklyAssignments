import { useState } from 'react'
import { CATEGORIES } from '../data/tools'

// BUG #6 FIX: complete emoji map covering ALL 16 categories
// Previous map had `Chatbots` (wrong — category is `Chatbot`) and was missing 9 categories
const CATEGORY_EMOJIS = {
  All:          '⚡',
  Chatbot:      '🤖',  // was 'Chatbots' — typo caused undefined emoji
  Coding:       '💻',
  Image:        '🎨',
  Video:        '🎬',
  Audio:        '🎵',
  Writing:      '✍️',
  Design:       '🎯',   // was missing
  Research:     '🔬',
  Automation:   '⚙️',   // was missing
  Data:         '📊',   // was missing
  Developer:    '🛠️',   // was missing
  Productivity: '⚡',
  SEO:          '📈',
  Education:    '🎓',   // was missing
  '3D':         '🧊',   // was missing
}

export default function CategoryFilter({ selected, onSelect }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
      {CATEGORIES.map(cat => {
        const isActive  = selected === cat
        const isHovered = hovered === cat
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            onMouseEnter={() => setHovered(cat)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background:  isActive || isHovered ? 'rgba(0,240,160,0.1)' : '#0f1420',
              border:      `1px solid ${isActive || isHovered ? 'rgba(0,240,160,0.3)' : 'rgba(255,255,255,0.07)'}`,
              color:       isActive || isHovered ? '#00f0a0' : '#5a6580',
              fontSize:    '0.82rem',
              fontFamily:  "'DM Mono', monospace",
              padding:     '7px 16px',
              borderRadius:'999px',
              cursor:      'pointer',
              transition:  'all 0.2s',
              letterSpacing: '0.3px',
            }}
          >
            {CATEGORY_EMOJIS[cat] || '🔧'} {cat}
          </button>
        )
      })}
    </div>
  )
}
