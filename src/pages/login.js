import React, { Component } from 'react';
import { 
  Image, 
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';

import LoginForm from ".././components/loginForm";
import Logo from ".././components/logo";

export default class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Logo />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
});