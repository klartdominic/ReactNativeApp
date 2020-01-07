import React, { Component } from 'react';
import { 
  Image, 
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchOpacity,
} from 'react-native';

import LoginForm from ".././components/loginForm";
import Logo from ".././components/logo";


export default class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Logo />
        <LoginForm />
        <View style={styles.signupCont}>
          <Text>Don't Have Account yet?</Text>
          <Text> Signup</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  signupCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});