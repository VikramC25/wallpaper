import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getMobileWallpapers } from '../data/wallpapers';
import { useWatermarkCanvas } from '../hooks/useWatermark';

export default function MobileSection({ onWallpaperClick }) {
  const mobile = getMobileWallpapers();
  const gridRef = useRef(null);
  const canvasRefs = useRef({});
  const { drawWatermark } = useWatermarkCanvas();

  useEffect(() => {
    mobile.forEach((wp) => {
      const canvas = canvasRefs.current[wp.id];
      if (canvas) {
        drawWatermark(canvas, wp.image);
      }
    });
  }, [mobile, drawWatermark]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('.mobile-card');

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            onEnter: () => card.classList.add('is-visible'),
            once: true,
          },
        });
        card.style.transitionDelay = `${i * 0.1}s`;
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mobile-section" id="mobile">
      <div className="mobile-section__header">
        <span className="mobile-section__label">On The Go</span>
        <h2 className="mobile-section__title">Mobile Wallpapers</h2>
      </div>

      <div className="mobile-grid" ref={gridRef}>
        {mobile.map((wp) => (
          <div
            key={wp.id}
            className="mobile-card"
            onClick={() => onWallpaperClick(wp)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="mobile-card__image-wrap">
              <canvas ref={(el) => (canvasRefs.current[wp.id] = el)} />
            </div>
            <div className="mobile-card__info">
              <div className="mobile-card__name">{wp.name}</div>
              <div className="mobile-card__price">from ${wp.price720.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
