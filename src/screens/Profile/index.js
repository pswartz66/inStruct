import React from 'react';
import { View, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Auth } from 'aws-amplify';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = (props) => {
  const userEmail = Auth.user.attributes.email;

  const stats = [
    {
      id: 1,
      Lessons: 2,
      Reviews: 10,
    },
  ];

  return (
    <SafeAreaView style={styles.profContainer}>
      <View style={styles.profImage}>
        <Text>Add image</Text>
      </View>

      <Text style={styles.username}>{userEmail.toLowerCase()}</Text>
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
        <Text style={styles.profContentAbout}>Tell us about yourself..</Text>

      </View>
      
      <TouchableOpacity style={styles.signOutBtn} onPress={() => Auth.signOut()}>
        <Text style={styles.signOutBtnText}>Sign Out</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Profile;