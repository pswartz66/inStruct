import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  settingsIcon: {
    top: 55,
    left: 10,
    position: 'absolute'
  },
  profImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'grey'
  },
  username: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'HelveticaNeue-Medium',
  },
  memberSince: {
    marginTop: 2,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Thin',
    marginBottom: 10,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  profileContentStats: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '45%',
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 5,
  },
  profContentStat: {
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Medium',
    color: 'black',
  },
  profContentText: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Thin',
    color: 'black',
  },
  profContentAbout: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Thin',
    color: 'black',
  },

});

export default styles;