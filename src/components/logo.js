import React, { Component } from 'react';
import { 
  Image, 
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';

export default class Logo extends Component{
  render(){
    let uri = 'https://facebook.github.io/react/logo-og.png'
    return(
      <View style={styles.container}>
        <Image 
          style={styles.images}
          source={{uri}}
        />
        <Text
          style={styles.logoText}
        >This is sample Logo</Text>
      </View>
    );
  }
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  images: {
    // width: ( width * 0.2 ),
    // height: ( height * 0.2 ),
    width: 100,
    height: 100,
  },
  logoText: {
    paddingTop: 20,
    fontSize: 18,
    color: 'rgba(0,0,0,0.7)',
  },
})