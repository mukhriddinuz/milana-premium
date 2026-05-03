import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/text_logo.png'

const leftLinks = [
  { label: 'Men', to: '/men' },
  { label: 'Women', to: '/women' },
  { label: 'Kids', to: '/kids' },
  { label: 'Factory', to: '/factory' },
]

const rightLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Wholesale', to: '/wholesale' },
  { label: 'Contact', to: '/contact' }
]

const subCategories = {
  '/men': ['New Arrivals', 'T-Shirts', 'Shirts', 'Jeans', 'Trousers', 'Outerwear', 'Shoes', 'Accessories'],
  '/women': ['New Arrivals', 'Dresses', 'Tops', 'Skirts', 'Jeans', 'Outerwear', 'Shoes', 'Bags'],
  '/kids': ['New Arrivals', 'Boys', 'Girls', 'Baby', 'Outerwear', 'Shoes', 'Accessories'],
  '/factory': ['About Factory', 'Production', 'Materials', 'Quality Control', 'Partners'],
}

function LogoSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  const toggleCategory = (e, label) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedCategory(expandedCategory === label ? null : label)
  }
  const currentPath = location.pathname
  const displaySubCategories = (currentPath === '/' && hoveredCategory) ? subCategories[hoveredCategory] : null

  return (
    <section className="logo-section" aria-label="Main navbar" onMouseLeave={() => setHoveredCategory(null)}>
      <div className={`logo-lockup ${isSearchOpen ? 'search-open' : ''}`}>
        <button 
          className="hamburger-btn" 
          aria-label="Open Menu" 
          onClick={() => setIsMenuOpen(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="hamburger-icon">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <nav className="brand-nav brand-nav-left" aria-label="Main navigation left">
          {leftLinks.map((link) => (
            <NavLink
              key={`${link.label}-${link.to}`}
              to={link.to}
              className={({ isActive }) =>
                `brand-nav-link ${isActive ? 'active' : ''}`
              }
              onMouseEnter={() => setHoveredCategory(link.to)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/men" className="brand-mark" aria-label="MILANA home">
          <img src={logo} alt="MILANA" className="brand-logo" />
        </NavLink>

        <div className="brand-right">
          <nav className="brand-nav brand-nav-right" aria-label="Main navigation right">
            {rightLinks.map((link) => (
              <NavLink 
                key={link.label} 
                to={link.to} 
                className={({ isActive }) => `brand-nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="search-input"
              autoFocus
            />
          </div>

          <div className="language-selector-wrapper">
            <button 
              type="button" 
              className="search-button" 
              aria-label="Language"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon" fill="none">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>
            {isLangMenuOpen && (
              <div className="language-dropdown">
                <button className="active">UZ</button>
                <button>RU</button>
                <button>EN</button>
              </div>
            )}
          </div>

          <button 
            type="button" 
            className="search-button" 
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="close-icon" style={{ width: '24px', height: '24px' }}>
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {displaySubCategories && (
        <div className="sub-nav-wrapper" onMouseEnter={() => setHoveredCategory(hoveredCategory)}>
          <div className="sub-nav-inner">
            <nav className="sub-nav" aria-label="Sub navigation">
              {displaySubCategories.map((cat) => {
                const subPath = `${hoveredCategory}/${cat.toLowerCase().replace(/\s+/g, '-')}`
                return (
                  <NavLink 
                    key={cat} 
                    to={subPath} 
                    className={({ isActive }) => `sub-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setHoveredCategory(null)}
                  >
                    {cat}
                  </NavLink>
                )
              })}
            </nav>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-menu-btn" 
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="close-icon">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <nav className="mobile-nav-links">
              {leftLinks.map((link) => {
                const subs = subCategories[link.to]
                return (
                  <div key={`mobile-group-${link.label}`} className="mobile-nav-group">
                    <div className="mobile-nav-header">
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `mobile-nav-link ${isActive ? 'active' : ''}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                      {subs && (
                        <button 
                          className="mobile-expand-btn"
                          onClick={(e) => toggleCategory(e, link.label)}
                          aria-expanded={expandedCategory === link.label}
                        >
                          <svg viewBox="0 0 24 24" className="expand-icon" style={{ transform: expandedCategory === link.label ? 'rotate(180deg)' : 'rotate(0)' }}>
                            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      )}
                    </div>
                    {subs && expandedCategory === link.label && (
                      <div className="mobile-sub-links">
                        {subs.map(sub => {
                          const subPath = `${link.to}/${sub.toLowerCase().replace(/\s+/g, '-')}`
                          return (
                            <NavLink 
                              key={`mobile-sub-${sub}`} 
                              to={subPath} 
                              className={({ isActive }) => `mobile-sub-link ${isActive ? 'active' : ''}`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub}
                            </NavLink>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
              <div className="mobile-nav-divider"></div>
              {rightLinks.map((link) => (
                <NavLink 
                  key={`mobile-${link.label}`} 
                  to={link.to} 
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <div className="mobile-nav-divider"></div>
              <a href="tel:+998901234567" className="mobile-phone">
                +998 90 123 45 67
              </a>
              <div className="mobile-socials">
                <a href="https://instagram.com" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-social-icon">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="https://t.me" aria-label="Telegram">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="mobile-social-icon">
                    <path d="M20.7 4.1 3.9 10.6c-1.1.4-1 2 .1 2.3l4.2 1.3 1.6 5c.3 1 1.6 1.2 2.2.4l2.3-3 4.5 3.3c.8.6 1.9.2 2.1-.8l2.3-13.1c.2-1.1-.9-1.9-1.9-1.5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default LogoSection
