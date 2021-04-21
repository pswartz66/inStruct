import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',

    paddingTop: 10,

  },
  homeUnderline: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'gray'
  },
  tagLineRow: {
    width: '100%',

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
  homeList: {
    width: '100%',
    backgroundColor: 'white',
  }
});

export default styles;