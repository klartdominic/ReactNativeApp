import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
} from 'react-native';

import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class AddTodoList extends Component {
  constructor(){
    super()

    this.state = {
      currentDate:''
    }
  }

  componentDidMount() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fullDate = date.toLocaleString();
    this.setState({
      currentDate: (`${fullDate}`),
    })
  }

  _scrollToInput (reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
  }

  render(){
    return(
      <KeyboardAwareScrollView 
          innerRef={ref => {
        this.scroll = ref
      }}>
        <View style={styles.container}>
          {/* <Text>Add Todo List</Text> */}
          <Text>{this.state.currentDate}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Todo Title"
            inlineImageLeft='search_icon'
          />
          <TextInput
            style={styles.detailInput}
            placeholder="Details"
            multiline={true}
            underlineColorAndroid='transparent'
            onFocus={(event: Event) => {
              // `bind` the function if you're using ES6 classes
              this._scrollToInput((event.target))
            }}
            
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default AddTodoList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    
  },
  textInput: {
    width: 300,
    marginBottom: 20,

    
    // height: 20,
  },
  detailInput: {
    // flex: 3,
    width: 300,
    // height: 300,   
    // justifyContent: "space-around",
    textAlignVertical: 'top',
  }

})