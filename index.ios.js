import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
const App = () => {

  return (
    <View>
    <Header headerText={"Fahidss"}/>
    <AlbumList />


  </View>
  )
}

const styles ={

}
AppRegistry.registerComponent('albumsapp', () => App);
