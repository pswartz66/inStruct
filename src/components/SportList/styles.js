import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  sportCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: Dimensions.get('window').width - 195,
    backgroundColor: '#f0f2f5',
    borderRadius: 10,    
    borderColor: 'gray',
    borderWidth: 0.3,
    margin: 10,
  }
});

export default styles;