import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import UserCard from '../../../shared/components/UserCard';

export default function FavoritesScreen({ navigation }) {
  const favorites = useSelector((state) => state.favorites);

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