import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Range = (props) => {

  const { range } = props.range;

  return (
    <View style={styles.miles}>
      <Text style={styles.milesText}>
        { range }
      </Text>
    </View>
  )
}

export default Range;