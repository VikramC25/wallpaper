// ============================================================
// WALLPAPER DATA — Replace image URLs with your own images!
// ============================================================
// For testing, we use picsum.photos placeholder images.
// To use your own:
//   1. Place images in /public/images/
//   2. Reference them as "/images/your-image.jpg"
// ============================================================

export const genres = [
  {
    id: 'nature',
    name: 'Nature',
    description: 'Breathtaking landscapes & wildlife',
    count: 6,
    thumbnail: 'https://picsum.photos/seed/nature1/400/300',
  },
  {
    id: 'abstract',
    name: 'Abstract',
    description: 'Colorful geometric & fluid art',
    count: 5,
    thumbnail: 'https://picsum.photos/seed/abstract1/400/300',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon-lit futuristic cityscapes',
    count: 5,
    thumbnail: 'https://picsum.photos/seed/cyber1/400/300',
  },
  {
    id: 'space',
    name: 'Space',
    description: 'Galaxies, nebulae & cosmic wonders',
    count: 5,
    thumbnail: 'https://picsum.photos/seed/space1/400/300',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean lines & subtle palettes',
    count: 5,
    thumbnail: 'https://picsum.photos/seed/minimal1/400/300',
  },
  {
    id: 'anime',
    name: 'Anime',
    description: 'Stunning anime & manga art',
    count: 5,
    thumbnail: 'https://picsum.photos/seed/anime1/400/300',
  },
];

export const wallpapers = [
  // ---- Nature ----
  { id: 1, genre: 'nature', name: 'Mountain Sunrise', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: true, demanded: false, mobile: false, image: 'https://picsum.photos/seed/nat1/1280/720' },
  { id: 2, genre: 'nature', name: 'Forest Creek', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: false, demanded: true, mobile: false, image: 'https://picsum.photos/seed/nat2/1280/720' },
  { id: 3, genre: 'nature', name: 'Ocean Cliff', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: true, demanded: false, mobile: false, image: 'https://picsum.photos/seed/nat3/1280/720' },
  { id: 4, genre: 'nature', name: 'Autumn Woods', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: false, demanded: false, mobile: false, image: 'https://picsum.photos/seed/nat4/1280/720' },
  { id: 5, genre: 'nature', name: 'Lavender Fields', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: false, demanded: true, mobile: false, image: 'https://picsum.photos/seed/nat5/1280/720' },
  { id: 6, genre: 'nature', name: 'Tropical Bloom', price720: 1.99, price1080: 3.99, price4k: 6.99, popular: false, demanded: false, mobile: true, image: 'https://picsum.photos/seed/nat6m/720/1280' },

  // ---- Abstract ----
  { id: 7, genre: 'abstract', name: 'Fluid Gradient', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: true, demanded: true, mobile: false, image: 'https://picsum.photos/seed/abs1/1280/720' },
  { id: 8, genre: 'abstract', name: 'Geometric Pulse', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: false, demanded: false, mobile: false, image: 'https://picsum.photos/seed/abs2/1280/720' },
  { id: 9, genre: 'abstract', name: 'Color Explosion', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: true, demanded: false, mobile: false, image: 'https://picsum.photos/seed/abs3/1280/720' },
  { id: 10, genre: 'abstract', name: 'Wave Motion', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: false, demanded: true, mobile: false, image: 'https://picsum.photos/seed/abs4/1280/720' },
  { id: 11, genre: 'abstract', name: 'Neon Swirl', price720: 1.99, price1080: 3.99, price4k: 6.99, popular: false, demanded: false, mobile: true, image: 'https://picsum.photos/seed/abs5m/720/1280' },

  // ---- Cyberpunk ----
  { id: 12, genre: 'cyberpunk', name: 'Neon Alley', price720: 3.99, price1080: 5.99, price4k: 9.99, popular: true, demanded: true, mobile: false, image: 'https://picsum.photos/seed/cyb1/1280/720' },
  { id: 13, genre: 'cyberpunk', name: 'Digital Rain', price720: 3.99, price1080: 5.99, price4k: 9.99, popular: false, demanded: false, mobile: false, image: 'https://picsum.photos/seed/cyb2/1280/720' },
  { id: 14, genre: 'cyberpunk', name: 'Chrome City', price720: 3.99, price1080: 5.99, price4k: 9.99, popular: true, demanded: false, mobile: false, image: 'https://picsum.photos/seed/cyb3/1280/720' },
  { id: 15, genre: 'cyberpunk', name: 'Hacker Den', price720: 3.99, price1080: 5.99, price4k: 9.99, popular: false, demanded: true, mobile: false, image: 'https://picsum.photos/seed/cyb4/1280/720' },
  { id: 16, genre: 'cyberpunk', name: 'Cyber Samurai', price720: 2.99, price1080: 4.99, price4k: 7.99, popular: false, demanded: false, mobile: true, image: 'https://picsum.photos/seed/cyb5m/720/1280' },

  // ---- Space ----
  { id: 17, genre: 'space', name: 'Nebula Core', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: true, demanded: true, mobile: false, image: 'https://picsum.photos/seed/spc1/1280/720' },
  { id: 18, genre: 'space', name: 'Saturn Rings', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: false, demanded: false, mobile: false, image: 'https://picsum.photos/seed/spc2/1280/720' },
  { id: 19, genre: 'space', name: 'Deep Void', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: true, demanded: false, mobile: false, image: 'https://picsum.photos/seed/spc3/1280/720' },
  { id: 20, genre: 'space', name: 'Galactic Drift', price720: 2.99, price1080: 4.99, price4k: 8.99, popular: false, demanded: true, mobile: false, image: 'https://picsum.photos/seed/spc4/1280/720' },
  { id: 21, genre: 'space', name: 'Astronaut Float', price720: 1.99, price1080: 3.99, price4k: 6.99, popular: false, demanded: false, mobile: true, image: 'https://picsum.photos/seed/spc5m/720/1280' },

  // ---- Minimalist ----
  { id: 22, genre: 'minimalist', name: 'Clean Horizon', price720: 1.99, price1080: 3.99, price4k: 6.99, popular: true, demanded: false, mobile: false, image: 'https://picsum.photos/seed/min1/1280/720' },
  { id: 23, genre: 'minimalist', name: 'Soft Gradient', price720: 1.99, price1080: 3.99, price4k: 6.99, popular: false, demanded: true, mobile: false, image: 'https://picsum.photos/seed/min2/1280/720' },
  { id: 24, genre: 'minimalist', name: 'Mono Shape', price720: 1.99, price1080: 3.99, price4k: 6.99, popular: false, demanded: false, mobile: false, image: 'https://picsum.photos/seed/min3/1280/720' },
  { id: 25, genre: 'minimalist', name: 'Paper Fold', price720: 1.99, price1080: 3.99, price4k: 6.99, popular: true, demanded: false, mobile: false, image: 'https://picsum.photos/seed/min4/1280/720' },
  { id: 26, genre: 'minimalist', name: 'Zen Circle', price720: 1.49, price1080: 2.99, price4k: 5.99, popular: false, demanded: false, mobile: true, image: 'https://picsum.photos/seed/min5m/720/1280' },

  // ---- Anime ----
  { id: 27, genre: 'anime', name: 'Sakura Storm', price720: 3.99, price1080: 5.99, price4k: 9.99, popular: true, demanded: true, mobile: false, image: 'https://picsum.photos/seed/ani1/1280/720' },
  { id: 28, genre: 'anime', name: 'Mech Battle', price720: 3.99, price1080: 5.99, price4k: 9.99, popular: false, demanded: false, mobile: false, image: 'https://picsum.photos/seed/ani2/1280/720' },
  { id: 29, genre: 'anime', name: 'Sunset Rooftop', price720: 3.99, price1080: 5.99, price4k: 9.99, popular: true, demanded: true, mobile: false, image: 'https://picsum.photos/seed/ani3/1280/720' },
  { id: 30, genre: 'anime', name: 'Spirit World', price720: 3.99, price1080: 5.99, price4k: 9.99, popular: false, demanded: false, mobile: false, image: 'https://picsum.photos/seed/ani4/1280/720' },
  { id: 31, genre: 'anime', name: 'Moonlit Ninja', price720: 2.99, price1080: 4.99, price4k: 7.99, popular: false, demanded: false, mobile: true, image: 'https://picsum.photos/seed/ani5m/720/1280' },
];

export const heroBackgrounds = [
  'https://picsum.photos/seed/hero1/1920/1080',
  'https://picsum.photos/seed/hero2/1920/1080',
  'https://picsum.photos/seed/hero3/1920/1080',
  'https://picsum.photos/seed/hero4/1920/1080',
];

export const getWallpapersByGenre = (genreId) => wallpapers.filter(w => w.genre === genreId && !w.mobile);
export const getPopularWallpapers = () => wallpapers.filter(w => w.popular);
export const getDemandedWallpapers = () => wallpapers.filter(w => w.demanded);
export const getMobileWallpapers = () => wallpapers.filter(w => w.mobile);
