import { useCart } from '../context/CartContext';

export default function Header({ onCartOpen, onMenuOpen }) {
  const { count } = useCart();

  return (
    <header className="header">
      <div
        className="header__logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        wallvault<span className="header__logo-dot">.mov</span>
      </div>
      <div className="header__right">
        <button className="header__cart-btn" onClick={onCartOpen}>
          :/ cart
          {count > 0 && <span className="header__cart-badge" key={count}>{count}</span>}
        </button>
        <button className="header__menu-btn" onClick={onMenuOpen}>
          :/ menu
        </button>
      </div>
    </header>
  );
}
