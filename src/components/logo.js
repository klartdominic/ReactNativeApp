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
    return(
      <View style={styles.container}>
        <Image 
          style={styles.images}
          // style={{width: 40 , height: 70}}
          source={require('.././images/sprobe_logo.png')}
        />
        <Text
          style={styles.logoText}
        >test</Text>
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
    fontSize: 18,
    color: 'rgba(0,0,0,0.7)',
  },
})