import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const Topic = (props) => {
  const { topic } = props.topic;

  return (
    <View style={styles.topicCard}>
      <Text style={styles.topicText}>
        { topic }
      </Text>
    </View>
  )
}

export default Topic;

