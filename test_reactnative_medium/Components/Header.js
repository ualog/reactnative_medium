import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

  class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
  return(
    <View style={styles.navBar}>
    
    <Text style={styles.navBarTitle}>Test react </Text> 
    <Text style={styles.NombreFav}>{ this.props.favoritesFilm.length } Films</Text>
            
    </View>
    )
  };
}
const styles = StyleSheet.create({

      navBar: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',
        padding : 5
      },
      navBarTitle: {
        textAlign: 'center',
        fontSize:14,
        fontStyle : 'italic',
        fontWeight : 'bold',
      },
      NombreFav: {
        textAlign: 'center',
        fontSize:14,
        fontStyle : 'italic',
        fontWeight : 'bold',
        color: '#fff'
      },

})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}
export default connect(mapStateToProps)(Header)



