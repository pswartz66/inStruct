import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'white'
  },
  signInInput: {
    height: 45,
    width: 260,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  signInSubmitBtn: {
    borderRadius: 4,
    padding: 10,
    margin: 10,
    backgroundColor: '#2679ff',
    width: 260,
  },
  signInBtnsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;