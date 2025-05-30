import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { fetchUserDetails } from '../api/github';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favorites/store/favoritesSlice';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route }) {
  const { username } = route.params;
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    fetchUserDetails(username).then(response => setUser(response.data));
  }, []);

  const handleToggleFavorite = useCallback(() => {
    if (user) {
      dispatch(toggleFavorite(user));
    }
  }, [user, dispatch]);

  if (!user) return null;

  const isFav = favorites[username];

  return (
    <View className="flex-1 items-center p-5">
      <Image 
        source={{ uri: user.avatar_url }} 
        className="w-[100px] h-[100px] rounded-full mb-2.5"
      />
      <Text className="text-[18px] font-bold mb-2.5">
        {user.name || user.login}
      </Text>
      <Text className="mb-2">{user.bio}</Text>
      <Text className="mb-1">Login: {user.login}</Text>
      <Text className="mb-5">Repos: {user.public_repos}</Text>
      <TouchableOpacity 
        className="flex-row items-center bg-[#f0f0f0] p-2.5 rounded-lg mt-5"
        onPress={handleToggleFavorite}
      >
        <Ionicons 
          name={isFav ? "heart" : "heart-outline"} 
          size={24} 
          color={isFav ? "#FF3B30" : "#666"} 
        />
        <Text className={`ml-2 ${isFav ? 'text-[#FF3B30]' : 'text-[#666]'}`}>
          {isFav ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}