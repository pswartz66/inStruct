import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',

  },
  username: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'DevanagariSangamMN-Bold',
    marginBottom: 10,

  },
  divider: {
    textAlign: 'center',
    width: '100%',
    height: 0.5,
    backgroundColor: 'black',
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOpacity: .5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  profileTop: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: 'yellow',
  },
  weekContainer: {
    // flex: 1,
    alignItems: 'center',
    height: 100,
    width: '100%',
    backgroundColor: 'orange',
  },
});

export default styles;