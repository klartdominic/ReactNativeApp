import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const variable = {
  totalWidth: 0.8 * Dimensions.get('window').width,
  textInputBorderRadius: 10,
  touchableBorderRadius: 10,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoContainer: {
    // flex: 1,
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
  textInput: {
    marginBottom: 20,
    borderRadius: variable.textInputBorderRadius,
    width: variable.totalWidth,
    marginVertical: 5,
    fontSize: 14,
    backgroundColor: 'rgba(200, 200, 200, 1)',
    height: 60,
  },
  detailInput: {
    width: variable.totalWidth,
    // height: 300,
    textAlignVertical: Platform.OS === 'android' ? 'top' : null,
    // textAlign: 'start',
    // paddingTop: 0,
    // paddingBottom: 0,
  },
  touchable:{
    textAlign: 'center',
    backgroundColor: 'rgba(155, 155, 255, 0.5)',
    // width: ( width * 0.8 ),
    width: variable.totalWidth,
    fontSize: 14,
    borderRadius: variable.touchableBorderRadius,
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },

});

// module.exports = styles;
export default styles;