import { useRef, useEffect, useCallback } from 'react';

/**
 * Draws an image on a canvas with a watermark overlay.
 * This prevents users from saving the original un-watermarked image.
 */
export function useWatermarkCanvas() {
  const drawWatermark = useCallback((canvas, imageSrc, options = {}) => {
    if (!canvas) return;

    const {
      text = 'WallVault',
      fontSize = null,
      opacity = 0.25,
      angle = -30,
      repeat = true,
    } = options;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);

      // Draw the image scaled to fill
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // Draw watermark
      const size = fontSize || Math.max(canvas.width * 0.06, 18);
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${size}px 'Outfit', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (repeat) {
        const gap = size * 5;
        for (let wy = -canvas.height; wy < canvas.height * 2; wy += gap) {
          for (let wx = -canvas.width; wx < canvas.width * 2; wx += gap) {
            ctx.save();
            ctx.translate(wx, wy);
            ctx.rotate((angle * Math.PI) / 180);
            ctx.fillText(text, 0, 0);
            ctx.restore();
          }
        }
      } else {
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.fillText(text, 0, 0);
      }
      ctx.restore();
    };

    img.onerror = () => {
      // Draw a placeholder on error
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#5a5a78';
      ctx.font = '16px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Image unavailable', canvas.width / 2, canvas.height / 2);
    };

    img.src = imageSrc;
  }, []);

  return { drawWatermark };
}

/**
 * Hook to use a canvas ref and auto-draw watermarked image.
 */
export function useWatermarkedImage(imageSrc, options = {}) {
  const canvasRef = useRef(null);
  const { drawWatermark } = useWatermarkCanvas();

  useEffect(() => {
    if (canvasRef.current && imageSrc) {
      drawWatermark(canvasRef.current, imageSrc, options);
    }
  }, [imageSrc, drawWatermark]);

  // Redraw on resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && imageSrc) {
        drawWatermark(canvasRef.current, imageSrc, options);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageSrc, drawWatermark]);

  return canvasRef;
}
