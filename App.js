/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @ts-check
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from "./src/pages/login";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar 
        backgroundColor="#1c313a"
        barStyle="light-content" />
      <View style={styles.container}>
        <Login />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'rgba(78, 75, 76, 0.7)'
  }
});

export default App;
