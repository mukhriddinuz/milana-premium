import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProduct = {
  id: 'mock',
  name: 'PREMIUM WOOL BLEND COAT',
  price: '$249.00',
  description: 'A timeless silhouette crafted from a luxurious wool blend. This coat features a relaxed fit, notched lapels, and double-breasted button fastening, making it an essential piece for your cold-weather wardrobe.',
  images: [
    'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Black', hex: '#000000' },
    { name: 'Beige', hex: '#d5c7b3' },
    { name: 'Navy', hex: '#1a2a3a' }
  ],
  materials: 'Outer: 70% Wool, 30% Polyamide. Lining: 100% Viscose.',
  care: 'Dry clean only. Do not bleach. Iron at a maximum of 110ºC/230ºF.'
};

function ProductDetails() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0].name);
  const [activeTab, setActiveTab] = useState('details');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(mockProduct.images[0]);

  const product = mockProduct; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec' && quantity > 1) {
      setQuantity(q => q - 1);
    } else if (type === 'inc') {
      setQuantity(q => q + 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    alert(`Successfully added ${quantity}x ${product.name} (Size: ${selectedSize}, Color: ${selectedColor}) to your cart!`);
  };

  return (
    <div className="product-page">
      <div className="product-page-layout">
        <div className="product-gallery-wrapper">
          <div className="product-main-image">
            <img src={mainImage} alt={product.name} />
          </div>
          <div className="product-thumbnails">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                className={`thumbnail-btn ${mainImage === img ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info-container">
          <div className="product-info-sticky">
            <div className="breadcrumbs">
              <Link to="/">Home</Link> / <Link to="/women">Women</Link> / <span>{product.name}</span>
            </div>

            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">{product.price}</p>
            
            <p className="product-description">{product.description}</p>

            <div className="product-options">
              <div className="option-group">
                <div className="option-header">
                  <span>Color:</span>
                  <strong>{selectedColor}</strong>
                </div>
                <div className="color-swatches">
                  {product.colors.map(color => (
                    <button 
                      key={color.name}
                      className={`color-swatch ${selectedColor === color.name ? 'active' : ''}`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(color.name)}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="option-group">
                <div className="option-header">
                  <span>Size:</span>
                  <a href="#" className="size-guide-link">Size Guide</a>
                </div>
                <div className="size-selector">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-actions-row">
              <div className="quantity-selector">
                <button onClick={() => handleQuantity('dec')}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantity('inc')}>+</button>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </div>

            <div className="product-accordion">
              <div className="accordion-item">
                <button 
                  className={`accordion-header ${activeTab === 'details' ? 'active' : ''}`} 
                  onClick={() => setActiveTab(activeTab === 'details' ? '' : 'details')}
                >
                  Materials & Care
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                {activeTab === 'details' && (
                  <div className="accordion-content">
                    <p><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                )}
              </div>
              
              <div className="accordion-item">
                <button 
                  className={`accordion-header ${activeTab === 'shipping' ? 'active' : ''}`} 
                  onClick={() => setActiveTab(activeTab === 'shipping' ? '' : 'shipping')}
                >
                  Shipping & Returns
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                {activeTab === 'shipping' && (
                  <div className="accordion-content">
                    <p>Free standard shipping on orders over $150. Returns accepted within 30 days of delivery with original tags attached.</p>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
