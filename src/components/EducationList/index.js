import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'


const EducationList = (props) => {
  const { subject } = props;
  return (
    <View style={styles.subjectCard}>
      <Text>{subject.subject}</Text>
    </View>
  )
}
export default EducationList;