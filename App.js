import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { FavoritesProvider } from './src/context/FavoritesContext';

export default function App() {
  return (
    <FavoritesProvider>
      <AppNavigator />
    </FavoritesProvider>
  );
}
