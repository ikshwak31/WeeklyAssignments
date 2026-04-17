import { useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import ToolCard from './components/ToolCard'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BlogPage from './pages/BlogPage'
import CategoriesPage from './pages/CategoriesPage'
import NewDropsPage from './pages/NewDropsPage'
import SubmitPage from './pages/SubmitPage'
import AboutPage from './pages/AboutPage'
import { ContactPage, PrivacyPage } from './pages/ContactPrivacyPage'
import { tools, CATEGORIES } from './data/tools'

function Orbs() {
  return (
    <>
      {[
        { w: 600, h: 600, bg: '#00f0a0', top: '-200px', left: '-200px' },
        { w: 500, h: 500, bg: '#0af',    bottom: '-100px', right: '-150px' },
        { w: 300, h: 300, bg: '#ff6b35', top: '40%', left: '55%' },
      ].map((o, i) => (
        <div key={i} style={{
          position: 'fixed', borderRadius: '50%', filter: 'blur(120px)',
          pointerEvents: 'none', zIndex: 0, opacity: 0.15,
          width: o.w, height: o.h, background: o.bg,
          top: o.top, left: o.left, bottom: o.bottom, right: o.right,
        }} />
      ))}
    </>
  )
}

function HomePage() {
  const navigate = useNavigate()
  // BUG #8 FIX: read category from URL search param so CategoriesPage can pre-select it
  const [searchParams, setSearchParams] = useSearchParams()
  const urlCategory = searchParams.get('category') || 'All'

  const [search, setSearch]     = useState('')
  const [category, setCategory] = useState(urlCategory)

  const handleCategorySelect = (cat) => {
    setCategory(cat)
    // Keep URL in sync so the page is shareable/bookmarkable
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  const filtered = useMemo(() => {
    return tools.filter(tool => {
      // BUG #1 FIX: data uses `desc` not `description` — guard with || '' to be safe
      const q = search.toLowerCase()
      const matchSearch =
        !search ||
        tool.name.toLowerCase().includes(q) ||
        (tool.desc || '').toLowerCase().includes(q) ||
        (tool.tags || []).some(t => t.toLowerCase().includes(q))
      const matchCat = category === 'All' || tool.category === category
      return matchSearch && matchCat
    })
  }, [search, category])

  // BUG #3 FIX: `featured` field doesn't exist in data — use `isNew: true` instead
  const featured = filtered.filter(t => t.isNew === true)
  const rest      = filtered.filter(t => t.isNew !== true)

  return (
    <>
      <Hero onSearch={setSearch} searchValue={search} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>

        {/* BUG #10 FIX: use real count from CATEGORIES, not hardcoded "48" */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.5px', color: '#e8edf5' }}>
            Browse by Category{' '}
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: '#00f0a0', fontWeight: 400, marginLeft: '10px' }}>
              // {CATEGORIES.length - 1} CATEGORIES
            </span>
          </h2>
        </div>

        <CategoryFilter selected={category} onSelect={handleCategorySelect} />

        {/* Search feedback strip */}
        {search && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <span style={{ color: '#5a6580', fontSize: '0.9rem' }}>
              <span style={{ color: '#00f0a0', fontWeight: 600 }}>{filtered.length}</span> result{filtered.length !== 1 ? 's' : ''} for &ldquo;{search}&rdquo;
            </span>
            <button
              onClick={() => setSearch('')}
              style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: '#5a6580', padding: '2px 12px', borderRadius: '999px', cursor: 'pointer', fontSize: '0.78rem' }}
            >
              ✕ Clear
            </button>
          </div>
        )}

        {/* BUG #3 FIX: this section now actually renders because `featured` uses isNew */}
        {featured.length > 0 && (
          <>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.5px', color: '#e8edf5' }}>
                🔥 Trending Now{' '}
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: '#00f0a0', fontWeight: 400, marginLeft: '10px' }}>// FEATURED</span>
              </h2>
              <span
                onClick={() => navigate('/new-drops')}
                style={{ color: '#5a6580', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                View all →
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              {/* BUG #4 FIX: key uses tool.name (unique) not tool.id (undefined) */}
              {featured.map((tool, i) => <ToolCard key={tool.name} tool={tool} delay={i * 0.05} />)}
            </div>
          </>
        )}

        {rest.length > 0 && (
          <>
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.5px', color: '#e8edf5' }}>
                All Tools{' '}
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: '#00f0a0', fontWeight: 400, marginLeft: '10px' }}>// {rest.length} RESULTS</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {/* BUG #4 FIX: key uses tool.name */}
              {rest.map((tool, i) => <ToolCard key={tool.name} tool={tool} delay={i * 0.05} />)}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: '#5a6580' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#e8edf5', marginBottom: '8px' }}>No tools found</div>
            <div style={{ marginBottom: '24px' }}>Try a different search term or category</div>
            <button
              onClick={() => { setSearch(''); handleCategorySelect('All') }}
              style={{ background: '#00f0a0', color: '#000', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      <div style={{ position: 'relative', zIndex: 1, background: 'linear-gradient(135deg, rgba(0,240,160,0.06), rgba(0,170,255,0.04))', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '48px 24px', marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.8rem', marginBottom: '10px', color: '#e8edf5' }}>💰 Earn With ToolDrop</h2>
        <p style={{ color: '#5a6580', marginBottom: '24px' }}>Every tool on this site has an affiliate program. When you refer users, you earn commissions.</p>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#5a6580', display: 'inline-block', background: '#0f1420', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.07)' }}>
          // Some links on this site are affiliate links. We earn a commission at no extra cost to you.
        </span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
        <Newsletter />
      </div>
    </>
  )
}

function AppLayout() {
  const navigate  = useNavigate()
  const location  = useLocation()
  // Derives the active nav key — strips leading slash
  const currentPage = location.pathname.replace(/^\//, '') || 'home'

  return (
    <div style={{ minHeight: '100vh' }}>
      <Orbs />
      <Navbar
        currentPage={currentPage}
        onNavigate={(p) => navigate(p === 'home' ? '/' : `/${p}`)}
      />
      <Routes>
        <Route path="/"           element={<HomePage />} />
        {/* BUG #8 FIX: pass category to navigate so CategoriesPage selection works */}
        <Route path="/categories" element={<CategoriesPage onSelectCategory={(cat) => navigate(`/?category=${cat}`)} />} />
        <Route path="/new-drops"  element={<NewDropsPage />} />
        <Route path="/blog"       element={<BlogPage />} />
        <Route path="/submit"     element={<SubmitPage />} />
        <Route path="/about"      element={<AboutPage />} />
        <Route path="/contact"    element={<ContactPage />} />
        <Route path="/privacy"    element={<PrivacyPage />} />
        {/* BUG #9 FIX: catch-all so unknown URLs don't show a blank content area */}
        <Route path="*"           element={<HomePage />} />
      </Routes>
      <Footer onNavigate={(p) => navigate(p === 'home' ? '/' : `/${p}`)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
