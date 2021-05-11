import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  InStructorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,    
    margin: 5,
  },
  InstructorImgContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 20,
    width: '50%',
  },
  InstructorImg: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginRight: 20,
  },
  bookmarkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  star: {
    marginHorizontal: 3,
  }
});

export default styles;
