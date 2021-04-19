import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',

  },
  profImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'grey'
  },
  username: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'DevanagariSangamMN-Bold',
  },
  memberSince: {
    marginTop: 2,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'DevanagariSangamMN',
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
    fontFamily: 'DevanagariSangamMN-Bold',
    color: 'black',
  },
  profContentText: {
    fontSize: 18,
    fontFamily: 'DevanagariSangamMN',
    color: 'black',
  },
  profContentOther: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'gray',
    padding: 10,
    height: 100,
    width: '100%',
  },
  profContentAbout: {
    fontSize: 18,
    fontFamily: 'DevanagariSangamMN',
    color: 'black',
  },
  signOutBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#e8e8e8'
  },
  signOutBtnText: {
    fontSize: 18,
    fontFamily: 'DevanagariSangamMN',
    color: '#2679ff'
  }

});

export default styles;