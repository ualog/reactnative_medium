import 'react-native-gesture-handler';
import React from 'react';
import {
  MoviesProvider,
} from "./store/MoviesContext";
import { RootStack } from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function Header() {
  return (
    <MoviesProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </MoviesProvider>
  );
}
