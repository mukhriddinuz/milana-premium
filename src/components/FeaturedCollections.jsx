import { Link } from 'react-router-dom';

const collections = [
  {
    title: 'Summer Dresses',
    path: '/women/dresses',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Denim Fit',
    path: '/men/jeans',
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Outerwear',
    path: '/kids/outerwear',
    image: 'https://images.pexels.com/photos/1620788/pexels-photo-1620788.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Premium Shoes',
    path: '/men/shoes',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

function FeaturedCollections() {
  return (
    <section className="collections-section">
      <div className="collections-header">
        <h2 className="collections-title">TRENDING COLLECTIONS</h2>
        <p className="collections-subtitle">Explore our most popular subcategories</p>
      </div>
      
      <div className="collections-grid">
        {collections.map((item) => (
          <Link to={item.path} key={item.title} className="collection-card">
            <div className="collection-img-wrapper">
              <img src={item.image} alt={item.title} className="collection-img" />
            </div>
            <div className="collection-info">
              <h3 className="collection-name">{item.title}</h3>
              <span className="collection-action">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCollections;
