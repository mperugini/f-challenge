import React from 'react';
import { View, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const FavoritesHeaderButton = (props) => {
  return (
    <View className="relative mr-2 w-12 h-12 justify-center items-center">
      <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={32}
        color={Platform.OS === 'android' ? '#000' : '#FF3B30'}
        style={{ marginHorizontal: 8, width: 48, height: 48 }}
      />
    </View>
  );
};

export default FavoritesHeaderButton;