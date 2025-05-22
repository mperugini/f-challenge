import React, { useEffect, useState, useContext, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchUserDetails } from '../api/github';
import { FavoritesContext } from '../context/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route }) {
  const { username } = route.params;
  const [user, setUser] = useState(null);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetchUserDetails(username).then(response => setUser(response.data));
  }, []);

  const handleToggleFavorite = useCallback(() => {
    if (user) {
      toggleFavorite(user);
    }
  }, [user, toggleFavorite]);

  if (!user) return null;

  const isFav = favorites[username];

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{user.name || user.login}</Text>
      <Text>{user.bio}</Text>
      <Text>Login: {user.login}</Text>
      <Text>Repos: {user.public_repos}</Text>
      <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={handleToggleFavorite}
      >
        <Ionicons 
          name={isFav ? "heart" : "heart-outline"} 
          size={24} 
          color={isFav ? "#FF3B30" : "#666"} 
        />
        <Text style={[styles.favoriteText, isFav && styles.favoriteTextActive]}>
          {isFav ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    padding: 20 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 10 
  },
  name: { 
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 10
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  favoriteText: {
    marginLeft: 8,
    color: '#666',
  },
  favoriteTextActive: {
    color: '#FF3B30',
  }
});