import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const initialCartItems = [
  {
    id: 'c1',
    productId: 'mock',
    name: 'PREMIUM WOOL BLEND COAT',
    price: 249.00,
    quantity: 1,
    size: 'M',
    color: 'Black',
    image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'c2',
    productId: 'm3',
    name: 'ESSENTIAL COTTON T-SHIRT',
    price: 35.00,
    quantity: 2,
    size: 'L',
    color: 'White',
    image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 150 ? 0 : 15.00; // Free shipping over $150
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-page">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <span>{cartItems.length} items</span>
      </div>

      <div className="cart-layout">
        <div className="cart-items-container">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <Link to={`/product/${item.productId}`} className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </Link>
              
              <div className="cart-item-details">
                <div className="cart-item-header">
                  <Link to={`/product/${item.productId}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <button className="remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
                
                <p className="cart-item-meta">Size: {item.size} | Color: {item.color}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                
                <div className="cart-item-actions">
                  <div className="cart-quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <span className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          {shipping > 0 && (
            <p className="shipping-notice">Spend ${(150 - subtotal).toFixed(2)} more for free shipping!</p>
          )}
          <div className="summary-divider"></div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => alert('Proceeding to checkout...')}>
            Proceed to Checkout
          </button>
          <div className="secure-checkout">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Secure Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
