import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appointmentContainer: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  appointmentTop: {
    height: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  appointmentText: {
    color: '#2679ff',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 28,
  },
  appointmentBook: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2679ff'
  },
  appointmentSubText: {
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontSize: 22,
    marginBottom: 20
  }

});

export default styles;
