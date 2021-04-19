import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TopInstructor = (props) => {
  const { averageLess, id, name, skill, rating } = props.topInstructor;


  return (

    <View style={styles.instructorCard}>
      <Text style={styles.instructorName}>
        { name }
      </Text>
    </View>
  )
}

export default TopInstructor