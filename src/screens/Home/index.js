import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import SearchBar from '../../components/SearchBar';

import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {

  const username = "Phillip";

  return (
    <SafeAreaView style={styles.homeContainer}>
      <AppHeader />

      <SearchBar />

      <ScrollView>
        <Text style={styles.tagLine}>Instructors</Text>

        <Text style={styles.tagLine}>Sports</Text>

        <Text style={styles.tagLine}>Education</Text>

        <Text style={styles.tagLine}>Instrument</Text>

        <Text style={styles.tagLine}>Other</Text>

        <Text style={styles.tagLine}>Reccomendations</Text>
        
        <TextInput
          style={styles.reccomendInput}
          // onChangeText={email => onChangeEmail(email.toLowerCase())}
          // value={email}
          placeholder={`${"Tell us what you'd like to learn"}`}
        />

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;