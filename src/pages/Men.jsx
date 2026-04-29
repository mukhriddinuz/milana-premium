import { Link } from 'react-router-dom'

const menProducts = [
  { id: 'm1', name: 'Classic Tailored Suit', category: 'Suits', price: '$399.00', image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
  { id: 'm2', name: 'Urban Leather Jacket', category: 'Outerwear', price: '$289.00', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'm3', name: 'Essential Cotton T-Shirt', category: 'T-Shirts', price: '$35.00', image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
  { id: 'm4', name: 'Slim Fit Denim Jeans', category: 'Jeans', price: '$89.00', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'm5', name: 'Formal Oxford Shoes', category: 'Shoes', price: '$150.00', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'm6', name: 'Knitted Wool Sweater', category: 'Knitwear', price: '$120.00', image: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
];

function Men() {
  return (
    <div className="page-content">
      
      <div className="category-page-layout">
        <aside className="category-sidebar">
          <div className="category-filter-group">
            <h3>Categories</h3>
            <ul>
              <li><a href="#" className="active">All Clothing</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">T-Shirts & Polos</a></li>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Suits & Tailoring</a></li>
              <li><a href="#">Outerwear</a></li>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Shoes</a></li>
            </ul>
          </div>
          <div className="category-filter-group">
            <h3>Filter by Size</h3>
            <ul>
              <li><a href="#">S</a></li>
              <li><a href="#">M</a></li>
              <li><a href="#">L</a></li>
              <li><a href="#">XL</a></li>
            </ul>
          </div>
        </aside>

        <div className="category-products">
          <div className="category-toolbar">
            <span>{menProducts.length} Products</span>
            <select className="sort-select">
              <option>Recommended</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {menProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-card">
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
        </div>
      </div>
    </div>
  )
}

export default Men
