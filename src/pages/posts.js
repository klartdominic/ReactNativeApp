import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class PostScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Post List</Text>
        <Text>{this.props.name}</Text>
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