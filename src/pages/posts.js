import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
class PostScreen extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  

  render(){
    return(
      <View style={styles.container}>
        <Text>Post List</Text>
        <Text>{this.props.navigation.state.params.id}</Text>
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