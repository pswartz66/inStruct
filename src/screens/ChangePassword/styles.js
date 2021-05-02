import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  cpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: 'white'
  },
  cpInput: {
    height: 45,
    width: 260,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  cpSubmitBtn: {
    borderRadius: 4,
    padding: 10,
    margin: 10,
    backgroundColor: '#2679ff',
    width: 260,
  },
  cpBtnsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cpForm: {
    width: 260,
  }
});

export default styles;