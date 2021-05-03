import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  tagLine: {
    marginLeft: 10,
    marginTop: 10,
    padding: 4,
    fontSize: 22,
    fontFamily: 'HelveticaNeue-Medium',
    color: 'black',
  },
  reccomendInput: {
    height: 50,
    width: Dimensions.get('window').width - 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 10,
    marginLeft: 15,
    // backgroundColor: '#e8e8e8',
  }
});

export default styles;