/*
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../favoritesSlice';
import { View, TouchableOpacity, Text } from 'react-native';

export default function FavoriteButton({ productId }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.includes(productId);

  const toggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(productId));
    } else {
      dispatch(addFavorite(productId));
    }
  };

  return (
    <TouchableOpacity onPress={toggle} style={{ padding: 4 }}>
      <Text style={{ fontSize: 20 }}>{isFavorite ? '❤️' : '🤍'}</Text>
    </TouchableOpacity>
  );
}

*/