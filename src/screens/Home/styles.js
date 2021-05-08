import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginBottom: 60,
    // backgroundColor: 'yellow',
  },
  tagLine: {
    marginLeft: 10,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Medium',
    color: 'black',
  },
  reccomendInput: {
    height: 50,
    width: Dimensions.get('window').width - 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    marginBottom: 40,
    backgroundColor: 'white'
  },
  searchBarContainer: {
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 0,
  },
  searchBarVisibleText: {
    color: '#2679ff',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    alignSelf: 'center'
  },
  aboveSearchAnim: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white'
  }
});

export default styles;