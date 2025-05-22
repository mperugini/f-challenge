import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fetchUsers, searchUsers } from '../api/github';
import UserCard from '../components/UserCard';
import debounce from 'lodash/debounce';

export default function HomeScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async (text) => {
    if (text.trim() === '') {
      loadUsers();
      return;
    }

    try {
      const response = await searchUsers(text);
      setUsers(response.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  const debouncedSearch = useMemo(() => debounce(handleSearch, 500), []);
  useEffect(() => {
    debouncedSearch(search);
    return () => debouncedSearch.cancel();
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar usuario"
          autoCapitalize="none"
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Ionicons name="close-circle" size={22} color="#aaa" style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={users}
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
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  clearIcon: {
    marginLeft: 6,
  }
});
