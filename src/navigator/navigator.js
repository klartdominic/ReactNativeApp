import React, { Component } from 'react';

import {createAppContainer } from "react-navigation" 
import {createStackNavigator} from "react-navigation-stack"
import {createBottomTabNavigator} from "react-navigation-tabs"
import  Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from ".././pages/home";
import PostScreen from ".././pages/posts";
import SettingsScreen from ".././pages/settings";

const variables = {
   size: 12,
}

// export default App;
const NavigationStack = createBottomTabNavigator({
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
  }
},{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  },
})

const NavigationContainer = createAppContainer(NavigationStack);

export default NavigationContainer;
