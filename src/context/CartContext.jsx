import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.quality === action.payload.quality
      );
      if (existing) return state;
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.quality === action.payload.quality)
        ),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = useCallback((wallpaper, quality) => {
    const priceMap = { '720p': wallpaper.price720, '1080p': wallpaper.price1080, '4K': wallpaper.price4k };
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: wallpaper.id,
        name: wallpaper.name,
        image: wallpaper.image,
        quality,
        price: priceMap[quality],
      },
    });
  }, []);

  const removeItem = useCallback((id, quality) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, quality } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const total = state.items.reduce((sum, item) => sum + item.price, 0);
  const count = state.items.length;

  return (
    <CartContext.Provider value={{ items: state.items, addItem, removeItem, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
