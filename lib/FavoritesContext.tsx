"use client";

// Create FavoritesContext.js
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext<any>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState(0);
  // Add/remove product logic here

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
