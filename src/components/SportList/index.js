import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'


const SportList = (props) => {
  const { sport } = props;
  return (
    <View style={styles.sportCard}>
      <Text>{sport.sport}</Text>
    </View>
  )
}
export default SportList;