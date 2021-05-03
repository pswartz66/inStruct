import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  searchBarContainer: {
    // flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,

  },
  searchBarInput: {
    height: 50,
    width: Dimensions.get('window').width - 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 10,
    marginLeft: 15,
    backgroundColor: '#ebebeb',
  }
});

export default styles;