/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @ts-check
 */

import React, { Component }from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import Routes from "./src/routes/route";

export default class App extends Component{
  render(){
    return (
      <>
        <StatusBar 
          backgroundColor="#1c313a"
          barStyle="light-content" />
        <View style={styles.container}>
          <Routes />
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
  }
});


