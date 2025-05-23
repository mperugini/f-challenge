import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';
import UserCard from '../components/UserCard';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  const favoriteUsers = Object.values(favorites);

  if (favoriteUsers.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay usuarios favoritos aún.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => navigation.navigate('Detail', { username: item.login })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#666' },
});
