import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';

import { Ionicons } from '@expo/vector-icons';

export default function UserCard({ user, onPress }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites[user.login];

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View style={styles.info}>
        <Text>{user.login}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(user)}>
            <Ionicons
              name={isFav ? 'heart-sharp' : 'heart-outline'}
              size={24}
              color="#FF3B30"
              style={styles.icon}
            />
          </TouchableOpacity>
      </View>
    </TouchableOpacity>

    
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  info: { marginLeft: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
});