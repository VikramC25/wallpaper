import { useState, useEffect, useCallback, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Hero from './components/Hero';
import GenreGrid from './components/GenreGrid';
import CollectionModal from './components/CollectionModal';
import PopularSection from './components/PopularSection';
import DemandedSection from './components/DemandedSection';
import MobileSection from './components/MobileSection';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';

export default function App() {
  const [activeGenre, setActiveGenre] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Global image protection
  useEffect(() => {
    const preventContext = (e) => {
      if (e.target.tagName === 'CANVAS' || e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    const preventDrag = (e) => {
      if (e.target.tagName === 'CANVAS' || e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    const preventKeys = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventContext);
    document.addEventListener('dragstart', preventDrag);
    document.addEventListener('keydown', preventKeys);

    return () => {
      document.removeEventListener('contextmenu', preventContext);
      document.removeEventListener('dragstart', preventDrag);
      document.removeEventListener('keydown', preventKeys);
    };
  }, []);

  const handleWallpaperClick = useCallback((wallpaper) => {
    setActiveGenre(wallpaper.genre);
  }, []);

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: 0, duration: 1.5 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Header
        onCartOpen={() => setCartOpen(true)}
        onMenuOpen={() => setMenuOpen(true)}
      />

      <NavMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      <Hero />
      <GenreGrid onGenreSelect={(id) => setActiveGenre(id)} />
      <PopularSection onWallpaperClick={handleWallpaperClick} />
      <DemandedSection onWallpaperClick={handleWallpaperClick} />
      <MobileSection onWallpaperClick={handleWallpaperClick} />
      <Footer />

      {activeGenre && (
        <CollectionModal
          genreId={activeGenre}
          onClose={() => setActiveGenre(null)}
        />
      )}

      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)} />}
    </>
  );
}
