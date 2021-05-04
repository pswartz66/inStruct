import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  InStructorCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 195,
    backgroundColor: '#f0f2f5',
    borderRadius: 10,    
    borderColor: '#2679ff',
    borderWidth: 0.3,
    margin: 10,
  }
});

export default styles;
