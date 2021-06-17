import React, { useState, useEffect } from 'react';
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View , Text} from 'react-native';
import {
  useMoviesContext,
	selectCategory
} from "../store/MoviesContext";
import { getCategories } from '../services/movies';

export default function Categories() {
  const { state, dispatch } = useMoviesContext();
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

	useEffect(() => {
    let mounted = true;
    getCategories()
      .then((data) => {
        if(mounted) {
					const newData = [];
					data.forEach(element => {
						const obj = {
							value: element._id,
							label: element.name
						}
						newData.push(obj)
					});
					setCategories(newData)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    return () => {
      mounted = false
    }
  }, []);

  return (
    <View style={styles.container}>
			{
				isLoading ? <Text>Loading...</Text> : (
					<RNPickerSelect
						placeholder={{ label: "Select category", value: '' }}
						items={categories}
						onValueChange={(itemValue) => {
							dispatch(selectCategory(itemValue))
							console.log(state.category)
						}}
					/>
				)
			}
    </View>
  );
}

const styles = StyleSheet.create({
	container : {
		marginTop: '10px'
	},
});