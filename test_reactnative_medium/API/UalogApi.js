
const URL_BASE = "http://192.168.30.10:8080/";

// avoir les details d'un film depuis la base de donnees 
export function getFilmDetailFromApi (id) {
  return fetch(URL_BASE+'films/'+id )
  .then((response) => {return response.json();})
  .catch((error) => console.error(error));
}

// avoir tous les film depuis la base de donnees 
export function getFilmsFromApi() {
  return fetch(URL_BASE+'films')
    .then((response) => {return response.json();})
    .catch((error) => console.error(error));
}

// avoir les Films par rapport la categorie choisie depuis la base de donnees 
export function getFilmByCategorieFromApi (id) {
  return fetch(URL_BASE+'films/category/'+id )
  .then((response) => {return response.json();})
  .catch((error) => console.error(error));
}

// avoir tous les categories depuis la base de donnees 
export function getCategorieFromApi () {
  return fetch(URL_BASE+'categories/' )
  .then((response) => {return response.json();})
  .catch((error) => console.error(error));
}




