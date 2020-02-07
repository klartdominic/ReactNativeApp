import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import styles from '.././styles/styles';

class SettingsScreen extends Component {
  render(){
    return(
      
      <View style={styles.settingsContainer}>
        <Text>Settings</Text>
      </View>
    );
  } 
}

export default SettingsScreen;

