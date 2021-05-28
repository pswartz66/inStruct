import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  editProfileContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  editProfileCol: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 150,
    marginBottom: 10,
    width: '100%',
  },  
  editProfileRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  }, 
  editHeader: {
    color: 'black',
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
  },
  editProfileSkillRow: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    // width: '100%',
  }
});

export default styles;
