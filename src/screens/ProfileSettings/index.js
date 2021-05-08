import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const ProfileSettingsScreen = () => {

  const navigateToEdit = () => {
    console.log('navigate to edit profile');
  }
  const navigateToPrivacy = () => {
    console.log('navigate to privacy');
  }
  const navigateToNotifcations = () => {
    console.log('navigate to change notifications');
  }
  const navigateToChangePhone = () => {
    console.log('navigate to change phone');
  }

  return (
    <View style={styles.profileSettingsContainer}>
      <Text style={styles.settingsHeader}>PREFERENCES</Text>

      <View style={styles.settingsTabsContainer}>

        <TouchableOpacity onPress={navigateToEdit}>
          <View style={styles.settingsRow}>
            <View style={styles.settingsIcons}>
              <Ionicons name="person" size={20} color="gray" />
            </View>
            <Text>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToPrivacy}>

          <View style={styles.settingsRow}>
            <View style={styles.settingsIcons}>
              <FontAwesome name="lock" size={20} color="gray" />
            </View>
            <Text>Privacy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToNotifcations}>

          <View style={styles.settingsRow}>
            <View style={styles.settingsIcons}>
              <Ionicons name="notifications" size={20} color="gray" />
            </View>
            <Text>Notifications</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToChangePhone}>

          <View style={styles.settingsRow}>
            <View style={styles.settingsIcons}>
              <FontAwesome name="phone" size={20} color="gray" />
            </View>
            <Text>Change Phone Number</Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
  )
}
export default ProfileSettingsScreen;