function CategoryNav() {
  return (
    <header className="category-nav-section">
      <div className="category-nav">
        <div className="topline-contact" aria-label="Contact links">
          <a href="tel:+998901234567" className="topline-phone">
            +998 90 123 45 67
          </a>
          <a
            href="https://instagram.com"
            className="topline-social"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="1.2" className="social-icon-fill" />
            </svg>
          </a>
          <a
            href="https://t.me"
            className="topline-social"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
              <path d="M20.7 4.1 3.9 10.6c-1.1.4-1 2 .1 2.3l4.2 1.3 1.6 5c.3 1 1.6 1.2 2.2.4l2.3-3 4.5 3.3c.8.6 1.9.2 2.1-.8l2.3-13.1c.2-1.1-.9-1.9-1.9-1.5Z" />
            </svg>
          </a>
        </div>

        <div className="topline-language" aria-label="Language switcher">
          <button type="button" className="language-link active">
            UZ
          </button>
          <span>/</span>
          <button type="button" className="language-link">
            RU
          </button>
          <span>/</span>
          <button type="button" className="language-link">
            EN
          </button>
        </div>
      </div>
    </header>
  )
}

export default CategoryNav
