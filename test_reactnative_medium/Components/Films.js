
import React from 'react'
import { StyleSheet, View, Picker} from 'react-native'
import FilmList from './FilmList'
import { getFilmsFromApi } from '../API/UalogApi'
import { getCategorieFromApi } from '../API/UalogApi'
import { getFilmByCategorieFromApi } from '../API/UalogApi'

class Films extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: [],
      categorie: [],
      selectedValue: "all",
      isLoading: false
    }

    this._loadFilms = this._loadFilms.bind(this)
    this._loadCategorie = this._loadCategorie.bind(this)

  }

  componentDidMount() {
    this._loadFilms()
    this._loadCategorie()
  }

  _loadFilms() {
    this.setState({ isLoading: true })

     if(this.state.selectedValue=="all")
    {
    getFilmsFromApi().then(data => {
        this.setState({
          films: data,
          isLoading: false
        })
    })}
    else {
      getFilmByCategorieFromApi(this.state.selectedValue).then(data => {
        this.setState({
          films: data.datas.films,
          isLoading: false
        })
    })
    }
  }
  _loadCategorie() {
    this.setState({ isLoading: true })
    getCategorieFromApi().then(data => {
      console.log('data '+data)
        this.setState({
          categorie: data,
        })
    })
  }
  render() {
    return (
      <View style={styles.main_container}>
        <Picker 
            style={styles.container}
            selectedValue={this.state.selectedValue}
            onValueChange={(itemValue, itemIndex) => {this.setState({selectedValue: itemValue});this._loadFilms()}}>
            <Picker.Item label="All" value="all" />
            {this.state.categorie.map((value) => {return (<Picker.Item label={value.name} value={value._id}/>)})}
        </Picker>
        
        <FilmList
            films={this.state.films}
            navigation={this.props.navigation}
            loadFilms={this._loadFilms}
            favoriteList={false}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  
})
export default Films
