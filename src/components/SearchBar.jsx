import { useState, useRef, useEffect } from 'react';
import { genres } from '../data/wallpapers';

export default function SearchBar({ onGenreSelect }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const filtered = genres.filter(
    (g) =>
      g.name.toLowerCase().includes(query.toLowerCase()) ||
      g.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="search" id="search">
      <div className="search__container" ref={ref}>
        <span className="search__icon">🔍</span>
        <input
          className="search__input"
          placeholder="Search genres, styles, moods..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {isOpen && filtered.length > 0 && (
          <div className="search__dropdown">
            {filtered.map((genre) => (
              <button
                key={genre.id}
                className="search__dropdown-item"
                onClick={() => {
                  onGenreSelect(genre.id);
                  setQuery('');
                  setIsOpen(false);
                }}
              >
                {genre.name}
                <span>{genre.count} wallpapers</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
