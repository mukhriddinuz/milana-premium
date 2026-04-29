import { Link } from 'react-router-dom';

function FloatingCart() {
  // Placeholder for cart items count
  const cartCount = 3;

  return (
    <Link to="/cart" className="floating-cart" aria-label="Shopping Cart">
      <div className="cart-icon-wrapper">
        <svg viewBox="0 0 24 24" className="cart-icon" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </div>
    </Link>
  );
}

export default FloatingCart;
