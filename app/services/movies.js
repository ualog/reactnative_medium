export const getCategories = () => {
	return fetch('http://localhost:8080/categories')
			.then((response) => response.json());   
}
export const getMovies = (setFIlms) => {
	return fetch('http://localhost:8080/films')
			.then((response) => response.json())
			.then((data) => setFIlms(data));
}
   
export const getMoviesByIdCategory = (setFilms, idCategory) => {
	return fetch(`http://localhost:8080/films/category/${idCategory}`)
			.then((response) => response.json())
			.then(({ datas }) => {
					setFilms(datas.films)
			});    
}
        