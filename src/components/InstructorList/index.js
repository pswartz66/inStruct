import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'


const InstructorList = (props) => {
  const { instructor } = props;
  return (
    <View style={styles.InStructorCard}>

      <View style={styles.InStructorImg}></View>
      <Text>{instructor.name}</Text>
    </View>
  )
}
export default InstructorList;