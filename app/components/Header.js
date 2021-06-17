import React from 'react';
import { useMoviesContext } from "../store/MoviesContext";
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  const { state } = useMoviesContext();
  return (
    <View style={styles.container}>
        <Text>Movies App</Text>
        <Text>Favorite movies : { state.favorites.length } </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});