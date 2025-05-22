import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { FavoritesContext } from '../context/FavoritesContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Github',
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Favorites')}
                style={styles.favoriteButton}
              >
                <Ionicons
                              name={'heart-sharp'}
                              size={24}
                              color="#FF3B30"
                              style={styles.icon}
                            />

              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen 
          name="Favorites" 
          component={FavoritesScreen}
          options={{
            title: 'Favoritos'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  favoriteButton: {
    marginRight: 12,
    padding: 4,
    borderRadius: 20,
    width: 40,
    height:30
  },
  icon: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  }
});