import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import LoginForm from ".././components/loginForm";
import Logo from ".././components/logo";
import { Actions } from "react-native-router-flux";

export default class Login extends Component{
  signup() {
    Actions.signup();
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Logo />
        <LoginForm type="login"/>
        <View style={styles.signupCont}>
          <Text>Don't Have Account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'rgba(78, 75, 76, 0.7)',
  },
  signupCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});