import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',

    paddingTop: 10,

  },
  homeUnderline: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'gray'
  },
  homeList: {
    height: '100%',
    width: '100%',
  }
});

export default styles;