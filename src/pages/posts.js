import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class PostScreen extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: "",
       title: "",
       name: "",
    };
  };
  
  logThis = () => {
    console.log("test")
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Post List</Text>
        <Button title="test"  onPress={this.logThis} />
      </View>
    );
  }
}

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})