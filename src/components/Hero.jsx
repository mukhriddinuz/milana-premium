function Hero({ title, description, imageUrl }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="hero-kicker">Textile factory collection</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary">
            Shop collection
          </button>
          <button type="button" className="btn btn-outline">
            View catalog
          </button>
        </div>
        <div className="hero-inline-meta">
          <span>Factory made</span>
          <span>Premium fabrics</span>
          <span>New season</span>
        </div>
      </div>

      <div className="hero-media">
        <img src={imageUrl} alt={`${title} visual`} loading="eager" />
        <div className="hero-floating-card">
          <span>Factory note</span>
          <strong>Designed for comfortable daily wear with reliable fabric quality.</strong>
        </div>
      </div>
    </section>
  )
}

export default Hero
