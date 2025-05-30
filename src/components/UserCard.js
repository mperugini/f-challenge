import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favorites/store/favoritesSlice';
import { Ionicons } from '@expo/vector-icons';

export default function UserCard({ user, onPress }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFav = favorites[user.login];

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.username}>{user.login}</Text>
        <TouchableOpacity 
          onPress={() => dispatch(toggleFavorite(user))}
          style={styles.favoriteButton}
        >
          <Ionicons 
            name={isFav ? "heart" : "heart-outline"} 
            size={24} 
            color={isFav ? "#FF3B30" : "#666"} 
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    padding: 10, 
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  avatar: { 
    width: 50, 
    height: 50, 
    borderRadius: 25 
  },
  info: { 
    marginLeft: 10, 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
  },
  favoriteButton: {
    padding: 8,
  }
});