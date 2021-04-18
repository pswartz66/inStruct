import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Profile = () => {

  const username = "Phil Swartz";

  const stats = [
    {
      id: 1,
      Lessons: 2,
      Reviews: 10,
    },
  ];

  return (
    <View style={styles.profContainer}>

      <View style={styles.profImage}></View>

      <Text style={styles.username}>{username.toLowerCase()}</Text>
      <Text style={styles.memberSince}>Member since 2020</Text>


      <View style={styles.profileContent}>
        {stats.map((itm) => (
          <View style={styles.profileContentStats} key={itm.id}>
            <Text style={styles.profContentStat}>{itm.Lessons}</Text>
            <Text style={styles.profContentText}>Lessons</Text>
          </View>
        ))}
        {stats.map((itm) => (
          <View style={styles.profileContentStats} key={itm.id}>
            <Text style={styles.profContentStat}>{itm.Reviews}</Text>
            <Text style={styles.profContentText}>Reviews</Text>
          </View>
        ))}

      </View>

      <View style={styles.profContentOther}>
        <Text style={styles.profContentStory}>Your story</Text>

      </View>

    </View>
  )
}

export default Profile;