import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class HomeScreen extends Component {
  static navitaionOPtions = {
    title: 'This is Home'
  }
  render(){
    return(
        <View style={styles.container}>
          <Text>Home test</Text>
        </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
