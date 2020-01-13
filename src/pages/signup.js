import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import SignupForm from ".././components/signupForm";
import Logo from ".././components/logo";
import { Actions } from 'react-native-router-flux';
import CustomButton from '.././components/custombutton';

export default class Signup extends Component{
  popBack() {
    Actions.pop();
  }
  render(){
    return(
      <View style={styles.container}>
        <Logo />
        <SignupForm type="signup"/>
        <View style={styles.signupCont}>
          <Text>Already a Member?</Text>
          <CustomButton name=" Signup" onPress={this.popBack}/>
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