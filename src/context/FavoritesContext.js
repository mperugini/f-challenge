import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (user) => {
    setFavorites((prev) => {
      const newFavorites = { ...prev };
      if (newFavorites[user.login]) {
        delete newFavorites[user.login];
      } else {
        newFavorites[user.login] = user;
      }
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};