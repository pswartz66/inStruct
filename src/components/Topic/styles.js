import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  topicCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 140,
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 30,
  },
  topicText: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Bold',
    color: 'black',
  }
});

export default styles;