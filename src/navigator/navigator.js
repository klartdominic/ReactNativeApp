import React, { Component } from 'react';

import { Button, Text } from 'react-native';

import {createAppContainer } from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import  Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from ".././pages/home";
import PostScreen from ".././pages/posts";
import SettingsScreen from ".././pages/settings";
import FlatListDemo from ".././pages/flatlistdemo";
import AddTodoList from '.././pages/todolist';
import { HeaderBackButton, createStackNavigator } from 'react-navigation-stack';

const variables = {
   size: 14,
}

const Home = createStackNavigator({

  Home: {
    screen: HomeScreen,
  },
  AddTodo: {
    screen: AddTodoList,
  }

},{
  // initialRouteName: 'Home', //default 
  initialRouteName: 'AddTodo', //for testing 
  activeColor: 'black',
  inactiveColor: 'gray',
  // barStyle: {
  //   backgroundColor: 'white',
  // }, 
  shifting: false,
});

const NavigationStack = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-browsers" color={tintColor} size={variables.size} />
      ),
      
    },
  },
  Posts:{
    screen: PostScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-browsers" color={tintColor} size={variables.size} />
      ),
      
    },
    
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
  },
  
},{
  initialRouteName: 'Home',
  activeColor: 'black',
  inactiveColor: 'gray',
  barStyle: {
    backgroundColor: 'white',
  },
  shifting: false,  
})


const NavigationContainer = createAppContainer(NavigationStack);

export default NavigationContainer;
