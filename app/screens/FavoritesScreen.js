import React from 'react';
import { ScrollView } from 'react-native';
import {
  useMoviesContext,
} from "../store/MoviesContext";
import Movie from '../components/Movie';
export default function FavoritesScreen() {
  const { state } = useMoviesContext();

  return (
    <ScrollView>
      {
        state.favorites.map((film) => (
          <Movie key={film._id} movie={film}/>
        ))
      }
    </ScrollView>
  );
}
