import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getPopularWallpapers } from '../data/wallpapers';
import WatermarkedCard from './WatermarkedCard';

export default function PopularSection({ onWallpaperClick }) {
  const popular = getPopularWallpapers();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth + 80;

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 10%',
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="popular" id="popular" ref={sectionRef}>
      <div className="popular__header">
        <div>
          <span className="popular__label">Trending Now</span>
          <h2 className="popular__title">Most Popular</h2>
        </div>
        <span className="popular__count">{popular.length} wallpapers</span>
      </div>

      <div className="popular__track-wrapper">
        <div className="popular__track" ref={trackRef}>
          {popular.map((wp) => (
            <WatermarkedCard key={wp.id} wallpaper={wp} onClick={onWallpaperClick} variant="popular" />
          ))}
        </div>
      </div>
    </section>
  );
}
