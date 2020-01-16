import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

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


class HomeScreen extends Component {  
  constructor(props) {
    super(props)
  
    this.state = {
      id: "",
      title: "",
      name: "",
    };
  };
  
  pressHandler = (item) =>{
    this.setState({
        id: item.id,
        title: item.title,
        name: item.name
    })
    // console.log(this)
    this.props.navigation.navigate("Posts")
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.pressHandler(item)}> 
              <ListItem 
                roundAvatar
                title={`${item.id} ${item.title} ${item.name}`}
                containerStyle={{ borderBottomWidth: 0 }}
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
