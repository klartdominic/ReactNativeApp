import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const pressHandler = (id) => {
  {console.log(id)}
}

class HomeScreen extends Component {
  static navitaionOPtions = {
    title: 'This is Home'
  };
  
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
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
