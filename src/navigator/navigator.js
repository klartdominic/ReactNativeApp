import React, { Component } from 'react';

import {createAppContainer } from "react-navigation" 
import {createStackNavigator} from "react-navigation-stack"
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import  Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from ".././pages/home";
import PostScreen from ".././pages/posts";
import SettingsScreen from ".././pages/settings";
import FlatListDemo from ".././pages/flatlistdemo";

const variables = {
   size: 14,
}

// export default App;
const NavigationStack = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={variables.size} />
      )
    }
  },
  Posts:{
    screen: PostScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-browsers" color={tintColor} size={variables.size} />
      )
    }
  },
  Settings:{
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-settings" color={tintColor} size={variables.size} />
      )
    }
  },
  FlatListDemo:{
    screen: FlatListDemo,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-settings" color={tintColor} size={variables.size} />
      )
    }
  }
},{
  initialRouteName: 'Home',
  activeColor: 'black',
  inactiveColor: 'gray',
  barStyle: {
    backgroundColor: 'white',
  },
  shifting: false,

})

const StackNavigator = () => createStackNavigator({
  Posts:{
    screen: PostScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-browsers" color={tintColor} size={variables.size} />
      )
    }
  },
})

const NavigationContainer = createAppContainer(NavigationStack);

export default NavigationContainer;
