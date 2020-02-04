import React, { Component } from 'react';

import { Button, Text } from 'react-native';

import {createAppContainer } from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import  Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from ".././pages/home";
import PostScreen from ".././pages/posts";
import SettingsScreen from ".././pages/settings";
import FlatListDemo from ".././pages/flatlistdemo";
import { HeaderBackButton, createStackNavigator } from 'react-navigation-stack';

const variables = {
   size: 14,
}

const Home = createStackNavigator({
  Home: {
    
    screen: HomeScreen,
    navigationOptions : ({ navigation }) => ({
      
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={variables.size} />
      ),
      headerTitle: () => <Text style={{alignItem: 'center'}}>Testing</Text>,
      headerRight: () => (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="Add Todo List"
          color={Platform.OS === 'ios' ? '#fff' : '#000'}
        />
      ),
    })
  
  }
},{
  initialRouteName: 'Home',
  activeColor: 'black',
  inactiveColor: 'gray',
  barStyle: {
    backgroundColor: 'white',
  },
  shifting: false,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  }
  
});

// export default App;
const NavigationStack = createMaterialBottomTabNavigator({
  Home: Home,
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


const NavigationContainer = createAppContainer(NavigationStack);

export default NavigationContainer;
