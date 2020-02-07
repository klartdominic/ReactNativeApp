import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const _totalWidth = Dimensions.get('window').width;
const _totalheight = Dimensions.get('window').height;

const variable = {
  width: 0.8 * _totalWidth, 
  textInputBorderRadius: 4,
  touchableBorderRadius: 10,
  fontSize: 14,
  backgroundColor: 'rgba(150, 200, 200, 0.5)',
  buttonBGColor: 'rgba(200, 150, 200, 1)',
  textInputHeight: 50,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    
  },
  postContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    textAlign: 'left',
    marginBottom: 20,
    borderRadius: variable.textInputBorderRadius,
    width: variable.width,
    marginVertical: 5,
    fontSize: variable.fontSize,
    backgroundColor: variable.backgroundColor,
    height: variable.textInputHeight,
  },
  detailInput: {
    // textAlignVertical : "top",
    textAlignVertical: Platform.OS === 'android' ? 'top' : 'auto',
    width: variable.width,
    backgroundColor: variable.backgroundColor,
    borderRadius: variable.textInputBorderRadius,
    fontSize: variable.fontSize,
  },
  touchable:{
    textAlign: 'center',
    backgroundColor: variable.buttonBGColor,
    // width: ( width * 0.8 ),
    width: variable.width,
    fontSize: variable.fontSize,
    borderRadius: variable.touchableBorderRadius,
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },

});

// module.exports = styles;
export default styles;