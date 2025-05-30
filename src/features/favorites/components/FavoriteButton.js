import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/favoritesSlice';

export default function FavoriteButton({ user }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFav = favorites[user.login];

  return (
    <TouchableOpacity 
      onPress={() => dispatch(toggleFavorite(user))}
      className="p-2"
    >
      <Ionicons 
        name={isFav ? "heart" : "heart-outline"} 
        size={24} 
        color={isFav ? "#FF3B30" : "#666"} 
      />
    </TouchableOpacity>
  );
} 