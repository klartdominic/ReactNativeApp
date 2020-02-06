import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Platform,
} from 'react-native';
import styles from '.././styles/styles'
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class AddTodoList extends Component {
  constructor(){
    super()

    this.state = {
      currentDate:'',
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
        }}
        
      >
        <View style={styles.todoContainer}>
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
            // textAlign= 'start'
            underlineColorAndroid='transparent'
            onFocus={(event: Event) => {
              // `bind` the function if you're using ES6 classes
              this._scrollToInput((event.target))
            }}
            
          />
          <TouchableOpacity
            style={styles.touchable}>
          <Text>
            Add
          </Text>
        </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default AddTodoList;
