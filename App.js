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

import {createAppContainer } from "react-navigation" 
import {createStackNavigator} from "react-navigation-stack"
import {createBottomTabNavigator} from "react-navigation-tabs"
import  Icon from "react-native-vector-icons/Ionicons";

class HomeScreen extends Component {
  render(){
    return(
        <View style={styles.container}>
          <Text>Home test</Text>
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
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={18} />
      )
    }
  },
  Settings:{
  screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={18} />
      )
      }
  },
},{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  },
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