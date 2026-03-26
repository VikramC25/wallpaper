import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { genres } from '../data/wallpapers';

const GENRE_IMAGES = {
  nature: 'https://picsum.photos/seed/nature1/1920/1080',
  abstract: 'https://picsum.photos/seed/abstract1/1920/1080',
  cyberpunk: 'https://picsum.photos/seed/cyber1/1920/1080',
  space: 'https://picsum.photos/seed/space1/1920/1080',
  minimalist: 'https://picsum.photos/seed/minimal1/1920/1080',
  anime: 'https://picsum.photos/seed/anime1/1920/1080',
};

export default function GenreGrid({ onGenreSelect }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        // Each card is sticky and overlaps the previous one
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: i < cards.length - 1 ? `+=${window.innerHeight}` : 'bottom bottom',
          pin: i < cards.length - 1,
          pinSpacing: true,
        });

        // Parallax movement on the background image
        const bg = card.querySelector('.showcase__card-bg');
        if (bg) {
          gsap.fromTo(bg,
            { y: i === 0 ? 0 : 60 },
            {
              y: -60,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="showcase" id="showcase">
      <div className="showcase__header">
        <span className="showcase__label">Selected Collections</span>
      </div>

      <div className="showcase__container" ref={containerRef}>
        {genres.map((genre, idx) => (
          <div
            key={genre.id}
            className="showcase__card"
            ref={(el) => (cardsRef.current[idx] = el)}
            onClick={() => onGenreSelect(genre.id)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div
              className="showcase__card-bg"
              style={{
                backgroundImage: `url(${GENRE_IMAGES[genre.id] || genre.thumbnail})`,
              }}
            />
            <div className="showcase__card-overlay" />

            <div className="showcase__card-index">
              <div className="showcase__card-counter">
                <span className="showcase__card-num">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>/ {String(genres.length).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="showcase__card-content">
              <h2 className="showcase__card-title">{genre.name}</h2>
              <div className="showcase__card-meta">
                <div className="showcase__card-meta-row">
                  <div>
                    <span className="showcase__card-meta-item">Type</span>
                    <span className="showcase__card-meta-value">{genre.description}</span>
                  </div>
                  <div>
                    <span className="showcase__card-meta-item">Count</span>
                    <span className="showcase__card-meta-value">{genre.count} Wallpapers</span>
                  </div>
                  <div>
                    <span className="showcase__card-meta-item">From</span>
                    <span className="showcase__card-meta-value">$1.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
