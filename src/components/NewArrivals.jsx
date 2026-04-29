import { Link } from 'react-router-dom';

const products = [
  {
    id: 'p1',
    name: 'Premium Wool Coat',
    category: 'Women',
    price: '$249.00',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Classic Tailored Suit',
    category: 'Men',
    price: '$399.00',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true
  },
  {
    id: 'p3',
    name: 'Summer Flowy Dress',
    category: 'Women',
    price: '$129.00',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true
  },
  {
    id: 'p4',
    name: 'Urban Leather Jacket',
    category: 'Men',
    price: '$289.00',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: false
  },
  {
    id: 'p5',
    name: 'Luxury Tote Bag',
    category: 'Accessories',
    price: '$199.00',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true
  },
  {
    id: 'p6',
    name: 'Vintage Sunglasses',
    category: 'Accessories',
    price: '$89.00',
    image: 'https://images.pexels.com/photos/1055693/pexels-photo-1055693.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: false
  }
];

function NewArrivals() {
  return (
    <section className="new-arrivals-section">
      <div className="section-head" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, fontFamily: 'Montserrat, sans-serif' }}>NEW ARRIVALS</h2>
        <Link to="/new" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)', textDecoration: 'none' }}>View All</Link>
      </div>

      <div className="products-carousel">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card carousel-card">
            <div className="product-media">
              {product.isNew && <span className="product-badge">NEW</span>}
              <img src={product.image} alt={product.name} />
              <div className="product-actions">
                <button className="btn btn-secondary" onClick={(e) => { e.preventDefault(); alert('Added to cart'); }}>
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="product-meta">
              <h3>{product.name}</h3>
              <div className="product-meta-row">
                <p>{product.price}</p>
                <span>{product.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
