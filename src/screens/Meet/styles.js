import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  greetingTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
  },
  greet: {
    color: '#191a1c',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
  },
  greetName: {
    color: '#2679ff',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
  },
  calendarWrapper: {
    height: 360,
    shadowColor: 'gray',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: .2,
  },
  calendarClickView: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10
  },
  calendarDay: {
    color: 'black',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
  }
});

export default styles;