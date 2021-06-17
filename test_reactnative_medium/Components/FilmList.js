import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import FilmItem from './FilmItem'
import { connect } from 'react-redux'
import { TouchableOpacity , Image} from 'react-native'
import EnlargeFavoris from '../Animations/EnlargeFavoris'

class FilmList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  _displayDetailForFilm = (idFilm) => {
    console.log("Display film " + idFilm)
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
   }

  _toggleFavorite(film) {
    const action = { type: "TOGGLE_FAVORITE", value: film } // Si le film n'est pas en favoris il sera ajoute dans la liste de film favoris dans le store
    this.props.dispatch(action)
   }

  _displayFavoriteImage(film) {
    var sourceImage = require('../Images/ic_favorite_border.png')
    var shouldEnlarge = false // Par défaut, si le film n'est pas en favoris, on veut qu'au clic sur le bouton, celui-ci s'agrandisse => shouldEnlarge à true
    if (this.props.favoritesFilm.findIndex(item => item._id === film._id) !== -1) {
      sourceImage = require('../Images/ic_favorite.png')
      shouldEnlarge = true // Si le film est dans les favoris, on veut qu'au clic sur le bouton, celui-ci se rétrécisse => shouldEnlarge à false
    }
    return (
      <EnlargeFavoris
        shouldEnlarge={shouldEnlarge}>
        <Image
          style={{
            flex: 1,
            width: null,
            height: null
          }}
          source={sourceImage}
        />
      </EnlargeFavoris>
    )
   }
  render() {
    return (
      
        <FlatList
          style={styles.list}
          data={this.props.films}
          extraData={this.props.favoritesFilm}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
                <FilmItem
                  film={item}
                  isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film._id === item._id) !== -1) ? true : false} // Bonus pour différencier les films déjà présent dans notre state global et qui n'ont donc pas besoin d'être récupérés depuis l'API
                  displayDetailForFilm={this._displayDetailForFilm}
                />
                  <TouchableOpacity
                    style={styles.favorite_container}
                    onPress={() => this._toggleFavorite(item)}>

                    {this._displayFavoriteImage(item)}
                    
                </TouchableOpacity>
            </View>
            
            )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!this.props.favoriteList) {
              this.props.loadFilms()
            }
          }}
        />

        )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item:{
    borderBottomColor: 'red',
    borderBottomWidth: 4,
    borderRightColor: 'red',
    borderRightWidth: 2,
    borderLeftColor: 'red',
    borderLeftWidth: 2,
    backgroundColor: '#fff',
    marginTop: 10
  },
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmList)
