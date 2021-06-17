import React from 'react';
import { Text,  StyleSheet} from 'react-native'
import { Card, Button } from 'react-native-elements'
import {
  useMoviesContext,
	addFavorite,
	removeFavorite
} from "../store/MoviesContext";

export default function Movie({ movie }) {
	const { state, dispatch } = useMoviesContext();
  return (
		<Card style={styles.container}>
			<Card.Title>{movie.title}</Card.Title>
			<Card.Divider/>
			<Card.Image source={movie.imgUrl} />
				<Text style={{marginBottom: 10}}>
					{movie.description}
				</Text>
				<Text style={{marginBottom: 10}}>
					By {movie.director}
				</Text>
				{
					state.favorites.includes(movie) ? (
						<Button title="Remove Favorite" onPress={() => dispatch(removeFavorite(movie))} />
					) : <Button title="Add Favorite" onPress={() => dispatch(addFavorite(movie))} />
				}
		</Card>
  );
}

const styles = StyleSheet.create({
	container: {
		width: '100%'
	}
});