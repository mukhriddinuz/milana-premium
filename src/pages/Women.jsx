import { Link } from 'react-router-dom'

const womenProducts = [
  { id: 'w1', name: 'Premium Wool Coat', category: 'Outerwear', price: '$249.00', image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
  { id: 'w2', name: 'Summer Flowy Dress', category: 'Dresses', price: '$129.00', image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
  { id: 'w3', name: 'Classic White Shirt', category: 'Tops', price: '$89.00', image: 'https://images.pexels.com/photos/7691278/pexels-photo-7691278.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'w4', name: 'High-Waist Wide Jeans', category: 'Jeans', price: '$110.00', image: 'https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'w5', name: 'Elegant Silk Skirt', category: 'Skirts', price: '$95.00', image: 'https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
  { id: 'w6', name: 'Leather Crossbody Bag', category: 'Bags', price: '$175.00', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: true },
];

function Women() {
  return (
    <div className="page-content">
      
      <div className="category-page-layout">
        <aside className="category-sidebar">
          <div className="category-filter-group">
            <h3>Categories</h3>
            <ul>
              <li><a href="#" className="active">All Clothing</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Dresses</a></li>
              <li><a href="#">Tops</a></li>
              <li><a href="#">Skirts</a></li>
              <li><a href="#">Outerwear</a></li>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Bags & Shoes</a></li>
            </ul>
          </div>
          <div className="category-filter-group">
            <h3>Filter by Color</h3>
            <ul>
              <li><a href="#">Black</a></li>
              <li><a href="#">White</a></li>
              <li><a href="#">Beige</a></li>
              <li><a href="#">Red</a></li>
            </ul>
          </div>
        </aside>

        <div className="category-products">
          <div className="category-toolbar">
            <span>{womenProducts.length} Products</span>
            <select className="sort-select">
              <option>Recommended</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {womenProducts.map(product => (
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

export default Women
