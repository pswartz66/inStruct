import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const InstructorList = (props) => {
  const { instructor, navigate } = props;

  console.log(instructor);

  // fetch top 5 instructors from database
  // determine what meets criteria for "top 5" - # of meetups & positive reviews

  const navigateToBooking = (itm) => {
    console.log('navigate to availability for', itm);
    navigate('Meet', { instructor: itm });
  }

  return (
    <View style={styles.InStructorCard}>

      <View style={styles.InstructorImgContainer}>
        <View style={styles.InstructorImg}></View>
        <Text>{instructor.name}</Text>
        <Text>     </Text>
        <Text>{instructor.skill}</Text>


      </View>

      <View style={styles.bookmarkContainer}>
        <View style={styles.star}><FontAwesome name="star" size={14} color="black" /></View>
        <View style={styles.star}><FontAwesome name="star" size={14} color="black" /></View>
        <View style={styles.star}><FontAwesome name="star" size={14} color="black" /></View>
        <View style={styles.star}><FontAwesome name="star" size={14} color="black" /></View>
        <View style={styles.star}><FontAwesome name="star" size={14} color="black" /></View>
      </View>

      <TouchableOpacity style={{
        backgroundColor: '#2679ff',
        borderRadius: 12,
        marginRight: 10,
      }}
      onPress={() => navigateToBooking(instructor.name)}>
        <Entypo name="plus" size={20} color="white" />
      </TouchableOpacity>

    </View>
  )
}
export default InstructorList;