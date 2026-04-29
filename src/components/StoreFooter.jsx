const footerColumns = [
  {
    title: 'Shop By',
    links: ['Men Apparel', 'Women Apparel', 'Kids Apparel', 'New Collection', 'Best Sellers'],
  },
  {
    title: 'Factory',
    links: ['Textile Production', 'Private Label', 'Bulk Orders', 'Size Range', 'Fabric Quality'],
  },
  {
    title: 'Clothing',
    links: ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Pants', 'Outerwear'],
  },
  {
    title: 'Collections',
    links: ['Essential Line', 'Urban Basics', 'Family Wear', 'Seasonal Edit', 'Premium Cotton'],
  },
]

function StoreFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-column footer-highlight">
          <h3>About Factory</h3>
          <div className="footer-profile">
            <div className="footer-avatar" />
            <div>
              <strong>Milana Textile</strong>
              <p>Reliable apparel production focused on modern cuts and wearable comfort.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>2026 MILANA textile apparel store.</span>
        <div className="footer-socials" aria-label="Social links">
          <a href="#" aria-label="Instagram">
            Ig
          </a>
          <a href="#" aria-label="Facebook">
            Fb
          </a>
          <a href="#" aria-label="YouTube">
            Yt
          </a>
        </div>
      </div>
    </footer>
  )
}

export default StoreFooter
