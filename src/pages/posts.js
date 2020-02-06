import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import styles from '.././styles/styles';
import { HeaderTitle } from 'react-navigation-stack';
class PostScreen extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    const { navigation } = this.props;
    // const varfname = navigation.getParam('firstname', 'No First name');
    // const varlname = navigation.getParam('lastname', 'No Last name')
    const homeName = navigation.getParam("name", "no data")
    return(
      
      <View style={styles.postContainer}>
        {/* <Text>Post List</Text> */}
        {/* <Text>{`${varfname} ${varlname}`}</Text> */}
        <Text>{`${homeName}`}</Text>
      </View>
    );
  }
}

export default PostScreen;
