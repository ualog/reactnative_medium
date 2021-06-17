import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MoviesScreen from '../screens/MoviesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Header from '../components/Header';

const Stack = createStackNavigator();

const optionsHeader = {
	headerTitle: <Header />,
	headerStyle: {
			backgroundColor: '#B6C9F0',
	},
	headerTintColor: '#000',
	headerTitleStyle: {
			fontWeight: 'bold',
	},
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MoviesScreen} options={optionsHeader}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={optionsHeader}/>
    </Tab.Navigator>
  );
}

export function RootStack() {
	return (
		<Stack.Navigator
			initialRouteName="Movies"
		>
			<Stack.Screen
				name="Home"
				component={MyTabs}
				options={optionsHeader}

			/>
		</Stack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

