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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0f2f5',
    marginBottom: 12,

  },
  calendarDay: {
    color: 'black',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
  },
  instructorCardMeet: {
    height: 130,
    marginHorizontal: 2,
    justifyContent: 'center'
    // backgroundColor: 'red',
  },
  cardInner: {
    height: 130,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f2f5',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: .3

  }

});

export default styles;