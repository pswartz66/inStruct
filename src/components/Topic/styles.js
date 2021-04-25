import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  topicCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 140,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#2679ff'
  },
  topicText: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Medium',
    color: 'black',
  }
});

export default styles;