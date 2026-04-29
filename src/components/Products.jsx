function Products({ items }) {
  return (
    <section className="products-section">
      <div className="section-head">
        <p className="eyebrow">Factory shop</p>
        <h2>Ready To Order</h2>
      </div>

      <div className="product-grid">
        {items.map((item, index) => (
          <article key={item.id} className="product-card">
            <div className="product-media">
              <img src={item.image} alt={item.name} loading="lazy" />
              <span className="product-badge">
                {index % 2 === 0 ? 'New in' : 'Best seller'}
              </span>
              <div className="product-actions">
                <button type="button" className="btn btn-outline">
                  Details
                </button>
                <button type="button" className="btn btn-primary">
                  Order
                </button>
              </div>
            </div>

            <div className="product-meta">
              <h3>{item.name}</h3>
              <div className="product-meta-row">
                <p>{item.price}</p>
                <span>{index % 2 === 0 ? 'Factory stock' : 'Bulk order'}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products
