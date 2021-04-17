import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profContainer: {
    flex: 1,
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
  profileContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    height: 60,
    backgroundColor: 'white',
    padding: 10,
  },
  profileContentBox: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 120,
    width: '45%',
    borderRadius: 10,
    backgroundColor: '#2679ff',
    margin: 5,
  }

});

export default styles;