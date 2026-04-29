import { Link } from 'react-router-dom'

const kidsProducts = [
  { id: 'k1', name: 'Colorful Cotton T-Shirt', category: 'Boys', price: '$25.00', image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
  { id: 'k2', name: 'Floral Summer Dress', category: 'Girls', price: '$45.00', image: 'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
  { id: 'k3', name: 'Denim Overalls', category: 'Baby', price: '$35.00', image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'k4', name: 'Warm Winter Jacket', category: 'Outerwear', price: '$75.00', image: 'https://images.pexels.com/photos/3661267/pexels-photo-3661267.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'k5', name: 'Comfortable Sneakers', category: 'Shoes', price: '$55.00', image: 'https://images.pexels.com/photos/1620815/pexels-photo-1620815.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'k6', name: 'Knitted Beanie & Scarf', category: 'Accessories', price: '$20.00', image: 'https://images.pexels.com/photos/3771343/pexels-photo-3771343.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
];

function Kids() {
  return (
    <div className="page-content">
      
      <div className="category-page-layout">
        <aside className="category-sidebar">
          <div className="category-filter-group">
            <h3>Categories</h3>
            <ul>
              <li><a href="#" className="active">All Clothing</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Boys (4-14Y)</a></li>
              <li><a href="#">Girls (4-14Y)</a></li>
              <li><a href="#">Baby (0-4Y)</a></li>
              <li><a href="#">Outerwear</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          <div className="category-filter-group">
            <h3>Filter by Age</h3>
            <ul>
              <li><a href="#">0-2 Years</a></li>
              <li><a href="#">2-4 Years</a></li>
              <li><a href="#">4-8 Years</a></li>
              <li><a href="#">8-14 Years</a></li>
            </ul>
          </div>
        </aside>

        <div className="category-products">
          <div className="category-toolbar">
            <span>{kidsProducts.length} Products</span>
            <select className="sort-select">
              <option>Recommended</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {kidsProducts.map(product => (
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

export default Kids
