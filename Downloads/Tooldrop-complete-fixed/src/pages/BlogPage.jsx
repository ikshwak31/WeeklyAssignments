const posts = [
  {
    id: 1,
    title: 'Top 15 AI Tools for Freelancers in 2026',
    excerpt: 'Freelancers are using AI to 10x their productivity. Here are the best tools to add to your stack right now.',
    category: 'Productivity',
    date: 'Mar 8, 2026',
    readTime: '5 min read',
    emoji: '💼',
  },
  {
    id: 2,
    title: 'How to Make Money with AI Affiliate Programs',
    excerpt: 'AI tool affiliate programs pay some of the highest commissions online. Here\'s how to get started today.',
    category: 'Monetization',
    date: 'Mar 3, 2026',
    readTime: '7 min read',
    emoji: '💰',
  },
  {
    id: 3,
    title: 'ChatGPT vs Claude vs Gemini: The 2026 Showdown',
    excerpt: 'We tested all three major AI assistants across 30 tasks. Here\'s which one wins and for what use cases.',
    category: 'Comparison',
    date: 'Feb 25, 2026',
    readTime: '9 min read',
    emoji: '🤖',
  },
  {
    id: 4,
    title: 'Best AI Image Generators Ranked (2026)',
    excerpt: 'Midjourney, DALL·E 3, Stable Diffusion, Flux — we compare them all so you know exactly which to use.',
    category: 'Image',
    date: 'Feb 20, 2026',
    readTime: '6 min read',
    emoji: '🎨',
  },
  {
    id: 5,
    title: 'AI Coding Tools: Cursor vs Copilot vs Replit',
    excerpt: 'AI coding tools are transforming developer workflows. We tested the top three head-to-head.',
    category: 'Coding',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    emoji: '💻',
  },
  {
    id: 6,
    title: '5 AI Tools That Will Save You 10 Hours a Week',
    excerpt: 'These five tools handle the busywork so you can focus on what actually matters in your business.',
    category: 'Productivity',
    date: 'Feb 10, 2026',
    readTime: '4 min read',
    emoji: '⚡',
  },
  {
    id: 7,
    title: 'The Best AI Video Generators in 2026',
    excerpt: 'Runway, Kling, Sora, HeyGen — AI video has exploded. Here\'s which tool to pick for your use case.',
    category: 'Video',
    date: 'Feb 5, 2026',
    readTime: '7 min read',
    emoji: '🎬',
  },
  {
    id: 8,
    title: 'How to Automate Your Business with AI in 2026',
    excerpt: 'From Zapier AI to Make, learn how to connect your tools and let AI handle repetitive tasks automatically.',
    category: 'Automation',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    emoji: '🔧',
  },
  {
    id: 9,
    title: 'AI Music Generation: Suno vs Udio vs Soundraw',
    excerpt: 'Create full songs with AI in minutes. We compare the top music generators for quality, control, and pricing.',
    category: 'Audio',
    date: 'Jan 20, 2026',
    readTime: '5 min read',
    emoji: '🎶',
  },
]

export default function BlogPage() {
  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(0,240,160,0.08)',
          border: '1px solid rgba(0,240,160,0.2)', color: '#00f0a0',
          fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px', letterSpacing: '0.5px',
        }}>
          // BLOG
        </div>
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1.5px',
          color: '#e8edf5', marginBottom: '16px',
        }}>
          AI Insights & Guides
        </h1>
        <p style={{ color: '#5a6580', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.7 }}>
          Deep dives, comparisons, and guides to help you get the most out of AI tools.
        </p>
      </div>

      {/* Featured post */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,240,160,0.06), rgba(0,170,255,0.04))',
        border: '1px solid rgba(0,240,160,0.2)', borderRadius: '20px',
        padding: '40px', marginBottom: '40px', cursor: 'pointer',
      }}>
        <span style={{
          background: 'rgba(0,240,160,0.1)', color: '#00f0a0',
          fontFamily: "'DM Mono', monospace", fontSize: '0.7rem',
          padding: '4px 12px', borderRadius: '999px', marginBottom: '16px', display: 'inline-block',
        }}>
          ⭐ FEATURED
        </span>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.8rem',
          letterSpacing: '-0.5px', color: '#e8edf5', marginBottom: '12px',
        }}>
          {posts[0].emoji} {posts[0].title}
        </h2>
        <p style={{ color: '#5a6580', lineHeight: 1.7, marginBottom: '20px' }}>{posts[0].excerpt}</p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ color: '#5a6580', fontSize: '0.82rem', fontFamily: "'DM Mono', monospace" }}>{posts[0].date}</span>
          <span style={{ color: '#5a6580', fontSize: '0.82rem' }}>·</span>
          <span style={{ color: '#5a6580', fontSize: '0.82rem', fontFamily: "'DM Mono', monospace" }}>{posts[0].readTime}</span>
          <span style={{
            background: 'rgba(0,240,160,0.08)', color: '#00f0a0',
            fontSize: '0.72rem', fontFamily: "'DM Mono', monospace",
            padding: '3px 10px', borderRadius: '4px', marginLeft: 'auto',
          }}>{posts[0].category}</span>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {posts.slice(1).map((post, i) => (
          <div key={post.id} style={{
            background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px', padding: '28px', cursor: 'pointer',
            transition: 'all 0.25s', animation: `fadeUp 0.5s ease ${i * 0.07}s both`,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,160,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{post.emoji}</div>
            <span style={{
              background: 'rgba(0,240,160,0.08)', color: '#00f0a0',
              fontSize: '0.7rem', fontFamily: "'DM Mono', monospace",
              padding: '3px 10px', borderRadius: '4px', marginBottom: '12px', display: 'inline-block',
            }}>{post.category}</span>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem',
              letterSpacing: '-0.3px', color: '#e8edf5', marginBottom: '10px', lineHeight: 1.3,
            }}>{post.title}</h3>
            <p style={{ color: '#5a6580', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>{post.excerpt}</p>
            <div style={{ display: 'flex', gap: '12px', color: '#5a6580', fontSize: '0.78rem', fontFamily: "'DM Mono', monospace" }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
