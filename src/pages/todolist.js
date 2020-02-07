import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Platform,
  Keyboard,
} from 'react-native';
import styles from '.././styles/styles'
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class AddTodoList extends Component {
  constructor(){
    super()

    this.state = {
      currentDate:'',
      DATA: {
        titleInput: '',
        detailInput: '',
      },
      backgroundColor: 'rgba(0, 0, 0, 1)',
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
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

  }

  _scrollToInput (reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
  }

  saveData = () => {
    console.log(this.state)
  }

  render(){
    return(
      <KeyboardAwareScrollView 
        innerRef={ref => {
          this.scroll = ref
        }}
        extraHeight= {20}
        extraScrollHeight={20}
        automaticallyAdjustContentInsets={false}
      >
        <View style={styles.todoContainer}>
          {/* <Text>Add Todo List</Text> */}
          <Text>{this.state.currentDate}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Todo Title"
            selectionColor="#fff"
            underlineColorAndroid={this.state.backgroundColor}
            onSubmitEditing={() => this.details.focus()}
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.detailInput}
            underlineColorAndroid={this.state.backgroundColor}
            placeholder="Details" 
            multiline={true} 
            numberOfLines={20}
            maxLength={1000} 
            onFocus={(event: Event) => {
              // `bind` the function if you're using ES6 classes
              this._scrollToInput((event.target))
            }}
            ref={(input) => this.details = input}
            onChangeText={(textInput) => this.setState({textInput})}
          />
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => this.saveData()}
          >
          <Text>
            Add
          </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const isAndroid = Platform.OS === "android";
const viewPadding = 10;

export default AddTodoList;
