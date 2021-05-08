import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const InstructorList = (props) => {
  const { instructor } = props;


  console.log(instructor);

  // fetch top 5 instructors from database
  // determine what meets criteria for "top 5" - # of meetups & positive reviews
  


  return (
    <View style={styles.InStructorCard}>

      <View style={styles.InStructorImg}></View>
      <Text>{instructor.name}</Text>

      <View style={styles.bookmark}>

        <Entypo name="bookmark" size={24} color="black" />

        <Text></Text>

        <Text>{instructor.rating}</Text>


      </View>
      <FontAwesome name="star" size={24} color="black" />


    </View>
  )
}
export default InstructorList;