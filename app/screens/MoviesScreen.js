import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  useMoviesContext,
} from "../store/MoviesContext";
import { getMovies, getMoviesByIdCategory } from '../services/movies';
import Categories from '../components/Categories';
import Movie from '../components/Movie';
export default function MoviesScreen() {
  const [isLoading, setLoading] = useState(true);
  const scrollRef = useRef();
  const [films, setFilms] = useState([]);
  const { state } = useMoviesContext();
  const mapping = {
    'all': getMovies,
    'category': getMoviesByIdCategory
  };


  useEffect(() => {
    let mounted = true;
    if (mounted) {
      mapping[state.category === '' ? 'all' : 'category'](setFilms, state.category)
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false)
        });
    }
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    })
    return () => {
      mounted = false
    }
  }, [state.category]);

  return (
    <View style={styles.container}>
      <View style={styles.containerCategories}>
        <Categories />
      </View>
      {isLoading ? <Text>Loading...</Text> : (
        <ScrollView ref={scrollRef}>
          {
            films.map((film) => (
              <Movie key={film._id} movie={film}/>
            ))
          }
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCategories: {
    width: '100%'
  },
  containerMovies: {
    marginTop: '10px'
  }
});