import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Profile = () => {

  const username = "Phil Swartz";

  const boxes = ['one', 'two', 'three', 'four'];

  return (
    <View style={styles.profContainer}>

      <Text style={styles.username}>{username}</Text>
      <View style={styles.divider}></View>



      <View style={styles.profileContent}>

        {boxes.map((itm) => (
          <View style={styles.profileContentBox} key={itm}>
            <Text>{itm}</Text>
          </View>
        ))}


      </View>


    </View>
  )
}

export default Profile;