import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import UserCard from '../components/UserCard';
import { FavoritesContext } from '../context/FavoritesContext';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(favorites)}
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
  container: {
    flex: 1,
    padding: 10,
  },
}); 