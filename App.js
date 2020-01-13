/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer, } from "react-navigation" 
import {createStackNavigator} from "react-navigation-stack"
import {createBottomTabNavigator} from "react-navigation-tabs"

class HomeScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

class SettingScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

// export default App;
const NavigationStack = createBottomTabNavigator({
  Home: HomeScreen ,
  // Home: { screen:HomeScreen },
  // Settings: { screen:SettingScreen },
  Settings: SettingScreen,
},{
  initialRouteName: 'Settings',
  // order: ['Home','Settings'],
})

const NavigationContainer = createAppContainer(NavigationStack);

export default class App extends Component{
  render(){
    return(
      <NavigationContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})