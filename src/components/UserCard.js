import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FavoriteButton from '../features/favorites/components/FavoriteButton';

export default function UserCard({ user, onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="flex-row items-center p-4 border-b border-gray-200"
    >
      <Image 
        source={{ uri: user.avatar_url }} 
        className="w-12 h-12 rounded-full"
      />
      <View className="flex-1 ml-3">
        <Text className="text-base font-medium">{user.login}</Text>
        <Text className="text-sm text-gray-500">{user.type}</Text>
      </View>
      <FavoriteButton user={user} />
    </TouchableOpacity>
  );
}