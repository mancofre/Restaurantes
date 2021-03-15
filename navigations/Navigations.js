import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, TabBarIOS } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AcountStack from './AccountStack';
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

export default function Navigations() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{ title: 'Restaurantes' }}
                />
                <Tab.Screen 
                    name="favorites"
                    component={FavoritesStack}
                    options={{ title: 'Favoritos' }}
                />
                <Tab.Screen 
                    name="topRestaurants"
                    component={TopRestaurantsStack}
                    options={{ title: 'Top 5' }}
                />
                <Tab.Screen 
                    name="search"
                    component={SearchStack}
                    options={{ title: 'Buscar' }}
                />
                <Tab.Screen 
                    name="Cuenta"
                    component={AcountStack}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}
