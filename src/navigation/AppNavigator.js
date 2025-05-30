import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FavoritesHeaderButton from '../components/FavoritesHeaderButton';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../features/favorites/screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
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
              <HeaderButtons HeaderButtonComponent={FavoritesHeaderButton}>
                <Item
                  title="Favoritos"
                  iconName="heart"
                  onPress={() => navigation.navigate('Favorites')}
                  color="#FF3B30"
                  buttonStyle={{ padding: 8 }}
                />
              </HeaderButtons>
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
