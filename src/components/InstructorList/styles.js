import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  InStructorCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,    
    margin: 5,
  },
  InStructorImg: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginRight: 20,
  },
  bookmark: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40
  }
});

export default styles;
