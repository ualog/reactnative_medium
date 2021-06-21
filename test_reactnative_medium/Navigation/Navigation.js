import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FilmDetail from '../Components/FilmDetail'
import Films from '../Components/Films'
import Header from '../Components/Header'
import Favorites from '../Components/Favorites'



const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      header: (
        <Header/>
      )
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const FilmsStackNavigator = createStackNavigator({
  Films: {
    screen: Films,
    navigationOptions: {
      header: (
        <Header/>
      )
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    },
    Films: {
      screen: FilmsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_movie.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: 'red',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)
