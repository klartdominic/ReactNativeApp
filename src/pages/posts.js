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
    const { navigation } = this.props;
    return(
      <View style={styles.container}>
        <Text>Post List</Text>
        {/* <Text>{this.props.navigation.state.params.id}</Text> */}
        <Text>{navigation.getParam('name', 'Name of Pokemon')}</Text>
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