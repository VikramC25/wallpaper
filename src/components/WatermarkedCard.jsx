import { useRef, useEffect } from 'react';
import { useWatermarkCanvas } from '../hooks/useWatermark';

export default function WatermarkedCard({ wallpaper, onClick, variant = 'default' }) {
  const canvasRef = useRef(null);
  const { drawWatermark } = useWatermarkCanvas();

  useEffect(() => {
    if (canvasRef.current) {
      drawWatermark(canvasRef.current, wallpaper.image);
    }
  }, [wallpaper, drawWatermark]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        drawWatermark(canvasRef.current, wallpaper.image);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [wallpaper, drawWatermark]);

  if (variant === 'popular') {
    return (
      <div
        className="popular__card"
        onClick={() => onClick(wallpaper)}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="popular__card-image">
          <canvas ref={canvasRef} />
        </div>
        <div className="popular__card-info">
          <div>
            <div className="popular__card-name">{wallpaper.name}</div>
            <div className="popular__card-genre">{wallpaper.genre}</div>
          </div>
          <div className="popular__card-price">${wallpaper.price1080.toFixed(2)}</div>
        </div>
      </div>
    );
  }

  if (variant === 'demanded') {
    return (
      <div
        className="demanded__card"
        onClick={() => onClick(wallpaper)}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="demanded__card-image">
          <canvas ref={canvasRef} />
        </div>
        <div className="demanded__card-info">
          <div>
            <div className="demanded__card-name">{wallpaper.name}</div>
            <div className="demanded__card-genre">{wallpaper.genre}</div>
          </div>
          <div className="demanded__card-price">${wallpaper.price1080.toFixed(2)}</div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className="wallpaper-card"
      onClick={() => onClick(wallpaper)}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="wallpaper-card__image-wrap">
        <canvas ref={canvasRef} />
      </div>
      <div className="wallpaper-card__info">
        <div>
          <div className="wallpaper-card__name">{wallpaper.name}</div>
          <div className="wallpaper-card__genre">{wallpaper.genre}</div>
        </div>
        <div className="wallpaper-card__price">${wallpaper.price1080.toFixed(2)}</div>
      </div>
    </div>
  );
}
