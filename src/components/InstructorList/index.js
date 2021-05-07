import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const InstructorList = (props) => {
  const { instructor } = props;
  return (
    <View style={styles.InStructorCard}>

      <View style={styles.InStructorImg}></View>
      <Text>{instructor.name}</Text>

      <View> 
        
      <Entypo name="bookmark" size={24} color="black" />
        
        <Text>20</Text>
      </View>
      <Text>Rating</Text>

      <FontAwesome name="star" size={24} color="black" />
      <FontAwesome name="star" size={24} color="black" />

    </View>
  )
}
export default InstructorList;