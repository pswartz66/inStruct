import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import TopInstructorList from '../../components/TopInstructorList';
import TopicList from '../../components/TopicList'
import AppHeader from '../../components/AppHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

// tag line = inStruct --> locate any instructor near you

const Home = () => {

  const username = "Phillip";

  return (
    <SafeAreaView style={styles.homeContainer}>
      <AppHeader />
      <View style={styles.homeUnderline}></View>

      <View style={styles.tagLineRow}>
        <Text style={styles.tagLine}>Top Instructors</Text>
      </View>

      <View style={styles.homeList}>
        {/* Horizontal Flat List outlining top instructors*/}
        <TopInstructorList />

        {/* List of Instructors currently online */}
        <Text style={styles.tagLine}>Swipe our options below</Text>
        
        <TopicList />

        <Text style={styles.tagLine}></Text>



      </View>

    </SafeAreaView>
  )
}

export default Home;