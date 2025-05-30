import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList, TextInput, TouchableOpacity } from 'react-native';
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
    <View className="flex-1 p-2.5">
      <View className="flex-row items-center border border-gray-300 rounded-md mb-2.5 px-2">
        <TextInput
          className="flex-1 py-2 px-1"
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar usuario"
          autoCapitalize="none"
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Ionicons name="close-circle" size={22} color="#aaa" className="ml-1.5" />
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
