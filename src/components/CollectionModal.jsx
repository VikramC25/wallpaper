import { useState, useEffect, useRef } from 'react';
import { getWallpapersByGenre, genres } from '../data/wallpapers';
import { useWatermarkCanvas } from '../hooks/useWatermark';
import { useCart } from '../context/CartContext';

export default function CollectionModal({ genreId, onClose }) {
  const wallpapers = getWallpapersByGenre(genreId);
  const genre = genres.find((g) => g.id === genreId);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [quality, setQuality] = useState('1080p');
  const canvasRef = useRef(null);
  const { drawWatermark } = useWatermarkCanvas();
  const { addItem } = useCart();

  const current = wallpapers[currentIdx];

  useEffect(() => {
    if (canvasRef.current && current) {
      drawWatermark(canvasRef.current, current.image);
    }
  }, [current, drawWatermark]);

  // Redraw on resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && current) {
        drawWatermark(canvasRef.current, current.image);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [current, drawWatermark]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIdx((p) => Math.min(p + 1, wallpapers.length - 1));
      if (e.key === 'ArrowLeft') setCurrentIdx((p) => Math.max(p - 1, 0));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, wallpapers.length]);

  // Block body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const priceMap = { '720p': current?.price720, '1080p': current?.price1080, '4K': current?.price4k };

  if (!current) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" onContextMenu={(e) => e.preventDefault()}>
        <div className="modal__header">
          <h3 className="modal__title">{genre?.name} Collection</h3>
          <button className="modal__close" onClick={onClose}>✕</button>
        </div>
        <div className="modal__body">
          <div className="modal__viewer">
            <div className="modal__canvas-wrap">
              <canvas ref={canvasRef} />
            </div>
            {currentIdx > 0 && (
              <button
                className="modal__nav-btn modal__nav-btn--prev"
                onClick={() => setCurrentIdx((p) => p - 1)}
              >
                ‹
              </button>
            )}
            {currentIdx < wallpapers.length - 1 && (
              <button
                className="modal__nav-btn modal__nav-btn--next"
                onClick={() => setCurrentIdx((p) => p + 1)}
              >
                ›
              </button>
            )}
          </div>

          <div className="modal__wp-info">
            <div>
              <div className="modal__wp-name">{current.name}</div>
              <div className="modal__wp-counter">
                {currentIdx + 1} of {wallpapers.length}
              </div>
            </div>

            <div className="modal__purchase">
              <select
                className="modal__quality-select"
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
              >
                <option value="720p">720p — ${current.price720.toFixed(2)}</option>
                <option value="1080p">1080p — ${current.price1080.toFixed(2)}</option>
                <option value="4K">4K — ${current.price4k.toFixed(2)}</option>
              </select>
              <button
                className="modal__add-btn"
                onClick={() => addItem(current, quality)}
              >
                Add to Cart · ${priceMap[quality].toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
