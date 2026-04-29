import { Link } from 'react-router-dom'

function Categories({ cards }) {
  return (
    <section className="categories-section">
      <div className="section-head">
        <p className="eyebrow">Collection focus</p>
        <h2>Featured Collections</h2>
      </div>

      <div className="category-card-grid">
        {cards.map((card) => (
          <Link to={card.to} key={card.title} className="category-card">
            <img src={card.image} alt={card.title} loading="lazy" />
            <div className="category-copy">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
