import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function CartSidebar({ onClose }) {
  const { items, removeItem, clearCart, total } = useCart();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <div className="cart-sidebar__overlay" onClick={onClose} />
      <aside className="cart-sidebar">
        <div className="cart-sidebar__header">
          <h2 className="cart-sidebar__title">Your Cart</h2>
          <button className="cart-sidebar__close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-sidebar__items">
          {items.length === 0 ? (
            <p className="cart-sidebar__empty">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.quality}`} className="cart-sidebar__item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-sidebar__item-image"
                  draggable="false"
                />
                <div className="cart-sidebar__item-info">
                  <div className="cart-sidebar__item-name">{item.name}</div>
                  <div className="cart-sidebar__item-quality">{item.quality}</div>
                </div>
                <div className="cart-sidebar__item-price">${item.price.toFixed(2)}</div>
                <button
                  className="cart-sidebar__item-remove"
                  onClick={() => removeItem(item.id, item.quality)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__total">
              <span className="cart-sidebar__total-label">Total</span>
              <span className="cart-sidebar__total-value">${total.toFixed(2)}</span>
            </div>
            <button className="cart-sidebar__checkout-btn">
              Checkout
            </button>
            <button className="cart-sidebar__clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
