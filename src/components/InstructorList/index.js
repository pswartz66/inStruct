import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const InstructorList = (props) => {
  const { instructor } = props;


  console.log(instructor);



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