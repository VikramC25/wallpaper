import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getDemandedWallpapers } from '../data/wallpapers';
import WatermarkedCard from './WatermarkedCard';

export default function DemandedSection({ onWallpaperClick }) {
  const demanded = getDemandedWallpapers();
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('.demanded__card');

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            onEnter: () => card.classList.add('is-visible'),
            once: true,
          },
        });

        // Stagger delay via CSS transition
        card.style.transitionDelay = `${i * 0.08}s`;
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="demanded" id="demanded">
      <div className="demanded__header">
        <span className="demanded__label">High Demand</span>
        <h2 className="demanded__title">Most Requested</h2>
      </div>

      <div className="demanded__grid" ref={gridRef}>
        {demanded.map((wp) => (
          <WatermarkedCard key={wp.id} wallpaper={wp} onClick={onWallpaperClick} variant="demanded" />
        ))}
      </div>
    </section>
  );
}
