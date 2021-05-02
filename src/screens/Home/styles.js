import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    // backgroundColor: 'yellow',
    paddingTop: 10,

  },
  homeUnderline: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'gray'
  },
  tagLine: {
    marginLeft: 10,
    marginTop: 10,
    padding: 4,
    fontSize: 22,
    fontFamily: 'HelveticaNeue-Medium',
    color: 'black',
    // backgroundColor: '#2679ff'
  },
  reccomendInput: {
    height: 45,
    width: 360,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginLeft: 14,
  }
});

export default styles;