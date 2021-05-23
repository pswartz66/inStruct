import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../BookAppointment/styles';


const BookAppointment = (props) => {
  const { name, day, time } = props.route.params.data
  console.log(props);

  return (
    <View style={styles.appointmentContainer}>

      <View style={styles.appointmentTop}>
        <Text style={styles.appointmentText}>Schedule</Text>

      </View>

      <View style={styles.appointmentBook}>
        <Text style={styles.appointmentSubText}>{name}</Text>
        <Text style={styles.appointmentSubText}>{day}</Text>
        <Text style={styles.appointmentSubText}>{time}</Text>



        <TouchableHighlight style={{
          height: 40,
          width: 200,
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center'

        }}>
          <Text>Book</Text>
          
        </TouchableHighlight>

      </View>


    </View>
  )
}

export default BookAppointment;