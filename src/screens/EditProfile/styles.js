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
    height: 160,
    marginTop: 10,
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
  }
});

export default styles;
