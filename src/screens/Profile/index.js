import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { listProfiles, getProfile } from '../../graphql/queries';

const Profile = ({ navigation }) => {
  const userEmail = Auth.user.attributes.email;

  // console.log('IMAGE: ', navigation);

  const [profImage, setProfImage] = useState(null);

  const stats = [
    {
      id: 1,
      Lessons: 2,
      Reviews: 10,
    },
  ];

  const navigateClick = () => {
    navigation.navigate('ProfileSettings', { user: userEmail });
  }

  useEffect(() => {
    // async () => {
    API.graphql(graphqlOperation(listProfiles))
      .then((profiles) => {
        const userID = profiles.data.listProfiles.items.filter(itm => itm.email === userEmail ? itm.id : null);

        API.graphql({ query: getProfile, variables: { id: userID[0].id } })
          .then((profile) => {
            setProfImage(profile.data.getProfile.image);
          }).catch(err => console.log('Error getting single profile: ', err))
      }).catch(err => console.log('Error listing profiles', err));
    // }
    // cleanup function
    return () => {
      console.log('Profile ---- cleanup function');
    }

  }, []);

  return (
    <SafeAreaView style={styles.profContainer}>
      <View style={styles.settingsIcon}>
        <TouchableOpacity onPress={navigateClick}>
          <Ionicons name="settings-sharp" size={26} color="black" />
        </TouchableOpacity>

      </View>


      <View style={styles.profImage}>
        {profImage === null ?
          <Text>Profile image</Text>
          :
          <Image style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',

          }}
            source={{ uri: profImage }} />

        }
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


    </SafeAreaView>
  )
}

export default Profile;