import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  instructorCard: {
    height: Dimensions.get('screen').height - 10,
    backgroundColor: 'white',
    margin: 10,
  }
});

export default styles;