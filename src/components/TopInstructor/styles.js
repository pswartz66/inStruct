import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  instructorCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'white',
    margin: 12,
    borderRadius: 100,
    shadowColor: "#2679ff",
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    }
    
  },
  instructorName: {
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Thin',
    color: 'black',
  }
});

export default styles;