import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Profile = () => {

  const username = "Phil Swartz";

  return (
    <View style={styles.profContainer}>

      <Text style={styles.username}>{username}</Text>
      <View style={styles.divider}></View>

      <View style={styles.profileTop}></View>

        <View style={styles.weekContainer}>

      </View>


    </View>
  )
}

export default Profile;