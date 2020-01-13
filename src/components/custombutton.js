import React, { Component } from 'react';
import { 
  Image, 
  StyleSheet,
  Dimensions,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

// const CustomButton = () => {
//   return(
//     <TouchableOpacity
//         style={styles.touchable}
//         onPress={() =>  this.props.onPress()}
//         >
//       <Text>
        
//       </Text>
//     </TouchableOpacity>
//   );
// }
class CustomButton extends Component {
  render(){
    return(
      <TouchableOpacity
          style={styles.touchable}
          onPress={() =>  this.props.onPress()}
          >
        <Text>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    )
  }
}
export default CustomButton;

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