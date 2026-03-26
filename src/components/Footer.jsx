export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="cta-banner">
        <p className="cta-banner__text">
          <span>WE CURATE.</span> <span>WE DELIVER.</span><br />
          WALLPAPERS MADE FROM PASSION.
        </p>
      </div>

      <div className="footer__grid">
        <div>
          <div className="footer__brand-name">WallVault</div>
          <p className="footer__brand-desc">
            Premium high-resolution wallpapers for desktop and mobile.
            Curated by artists, loved by millions.
          </p>
        </div>

        <div>
          <div className="footer__col-title">Info</div>
          <a href="#" className="footer__link" onClick={(e) => e.preventDefault()}>About Us</a>
          <a href="#" className="footer__link" onClick={(e) => e.preventDefault()}>Licensing</a>
          <a href="#" className="footer__link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          <a href="#" className="footer__link" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          <a href="#" className="footer__link" onClick={(e) => e.preventDefault()}>FAQ</a>
        </div>

        <div>
          <div className="footer__col-title">Contact</div>
          <a href="mailto:hello@wallvault.com" className="footer__link">hello@wallvault.com</a>
          <a href="#" className="footer__link" onClick={(e) => e.preventDefault()}>Support Center</a>
          <a href="#" className="footer__link" onClick={(e) => e.preventDefault()}>Report an Issue</a>
          <a href="#" className="footer__link" onClick={(e) => e.preventDefault()}>Become an Artist</a>
        </div>

        <div>
          <div className="footer__col-title">Follow Us</div>
          <div className="footer__social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="Twitter">𝕏</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="Instagram">📷</a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="Discord">💬</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="YouTube">▶</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 WallVault. All rights reserved.</span>
        <span>Crafted with passion for wallpaper enthusiasts</span>
      </div>
    </footer>
  );
}
