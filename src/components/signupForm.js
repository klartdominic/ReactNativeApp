import React, { Component } from 'react';
import { 
  Image, 
  StyleSheet,
  Dimensions,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class LoginForm extends Component<{}>{
  state = {
    uname: "Username",
    pword: "Password",
  };
  render(){
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.textInput} 
          // placeholder='Username'
          placeholder={this.state.uname}
        /> 
        <TextInput 
          style={styles.textInput} 
          // placeholder='Username'
          placeholder={this.state.pword}
        /> 
        <TouchableOpacity
            style={styles.touchable}>
          <Text>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    textAlign: 'left',
    borderRadius: 10,
    backgroundColor: 'rgba(200, 200, 200, 1)',
    width: ( width * 0.7 ),
    marginVertical: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    // backgroundColor: 'black',
  },
  touchable:{
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: ( width * 0.7 ),
    fontSize: 14,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});