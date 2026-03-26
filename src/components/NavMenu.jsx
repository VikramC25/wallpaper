import { useEffect, useRef } from 'react';

export default function NavMenu({ isOpen, onClose, onNavigate }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNav = (id) => {
    onClose();
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigate(id);
      }
    }, 400);
  };

  return (
    <div ref={menuRef} className={`nav-menu ${isOpen ? 'nav-menu--open' : ''}`}>
      <div className="nav-menu__header">
        <div className="nav-menu__logo">
          wallvault<span style={{ fontStyle: 'italic', opacity: 0.5 }}>.mov</span>
        </div>
        <button className="nav-menu__close" onClick={onClose}>
          :/ close
        </button>
      </div>

      <ul className="nav-menu__links">
        <li>
          <button className="nav-menu__link" onClick={() => handleNav('home')}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-menu__link" onClick={() => handleNav('showcase')}>
            Collections
          </button>
        </li>
        <li>
          <button className="nav-menu__link" onClick={() => handleNav('popular')}>
            Popular
          </button>
        </li>
        <li>
          <button className="nav-menu__link" onClick={() => handleNav('demanded')}>
            Trending
          </button>
        </li>
        <li>
          <button className="nav-menu__link" onClick={() => handleNav('contact')}>
            Contact
          </button>
        </li>
      </ul>

      <div className="nav-menu__footer">
        <div className="nav-menu__contact">
          <a href="mailto:hello@wallvault.com">hello@wallvault.com</a><br />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram</a>
        </div>
        <a href="mailto:hello@wallvault.com" className="nav-menu__cta">
          &gt; contact us
        </a>
      </div>
    </div>
  );
}
