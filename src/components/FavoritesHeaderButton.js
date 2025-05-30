import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const FavoritesHeaderButton = (props) => {
  const favorites = useSelector((state) => state.favorites);
  const favoritesCount = Object.keys(favorites).length;

  return (
    <View style={styles.container}>
      <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={24}
        color={Platform.OS === 'android' ? '#000' : '#FF3B30'}
        style={styles.button}
      />
      {favoritesCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{favoritesCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 0,
    width: 40,
    height:24
  },
  button: {
    marginHorizontal: 8,
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default FavoritesHeaderButton;