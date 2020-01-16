import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import PostScreen from ".././pages/posts";

const DATA = [
  {
    id: '1',
    title: 'First Item',
    name: 'test1',
  },
  {
    id: '2',
    title: 'Second Item',
    name: 'test2',
  },
  {
    id: '3',
    title: 'Third Item',
    name: 'test3',
  },
];

// const pressHandler=(id) => {
  // this.props
  // this.props.navigation.navigate('PostScreen')
  
// }
const pressHandler = () =>{
  console.log(this.props)
}
class HomeScreen extends Component {  

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            // <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <TouchableOpacity onPress={() => console.log(this.props.navigation.navigate("Posts"))}> 
              <ListItem 
                roundAvatar
                title="test"
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
