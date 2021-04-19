import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: 'white'
  },
  signUpInput: {
    height: 45,
    width: 260,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  signUpSubmitBtn: {
    borderRadius: 4,
    padding: 10,
    margin: 10,
    backgroundColor: '#2679ff',
    width: 260,
  },
  signUpBtnsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpForm: {
    width: 260,
  }
});

export default styles;
