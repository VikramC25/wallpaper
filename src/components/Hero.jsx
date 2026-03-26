import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const heroRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Multi-layer parallax — each text layer moves at different speed
      gsap.to(layer1Ref.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -200,
        opacity: 0,
      });

      gsap.to(layer2Ref.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -120,
        opacity: 0,
      });

      gsap.to(layer3Ref.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -60,
        opacity: 0,
        scale: 0.95,
      });

      gsap.to(bottomRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '60% top',
          scrub: 1,
        },
        y: -40,
        opacity: 0,
      });

      // Glitch flicker on the outline layer
      const flicker = gsap.timeline({ repeat: -1, repeatDelay: 4 });
      flicker
        .to(layer1Ref.current, { opacity: 0.3, duration: 0.05 })
        .to(layer1Ref.current, { opacity: 1, duration: 0.05 })
        .to(layer1Ref.current, { opacity: 0.6, duration: 0.08 })
        .to(layer1Ref.current, { opacity: 1, duration: 0.05 })
        .to(layer1Ref.current, { x: -3, duration: 0.03 })
        .to(layer1Ref.current, { x: 0, duration: 0.03 });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__layers">
        {/* Layer 1: Outline text — moves fastest */}
        <div className="hero__layer hero__layer--outline" ref={layer1Ref}>
          <span>WALL</span>
          <span>VAULT</span>
        </div>

        {/* Layer 2: Filled text — moves medium speed */}
        <div className="hero__layer hero__layer--fill" ref={layer2Ref}>
          <span>WALL</span>
          <span>VAULT</span>
        </div>

        {/* Layer 3: Shadow/glow text — moves slowest */}
        <div className="hero__layer hero__layer--glow" ref={layer3Ref}>
          <span>WALL</span>
          <span>VAULT</span>
        </div>

        {/* Decorative elements */}
        <div className="hero__deco">
          <span className="hero__deco-line" />
          <span className="hero__deco-dot" />
          <span className="hero__deco-label">est. 2026</span>
        </div>
      </div>

      <div className="hero__bottom" ref={bottomRef}>
        <div className="hero__tagline">
          Premium Wallpapers.<br />
          Reimagined.
        </div>
        <div className="hero__description">
          wallvault is a curated wallpaper platform fusing<br />
          high-end visual art with a drive to explore the<br />
          unconventional. desktop &amp; mobile.
        </div>
      </div>
    </section>
  );
}
