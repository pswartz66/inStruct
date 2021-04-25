import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import TopInstructorList from '../../components/TopInstructorList';
import TopicList from '../../components/TopicList'
import AppHeader from '../../components/AppHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

import MileRange from '../../components/MileRange';
import { SimpleLineIcons } from '@expo/vector-icons'; 

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
        <TopInstructorList />

        <Text style={styles.tagLine}>Swipe our options below</Text>
        
        <TopicList />

        <Text style={styles.tagLine}>Located within...</Text>

        <MileRange />

        <Pressable style={styles.finderBackground}>
          <SimpleLineIcons name="magnifier" size={100} color="black" />
        </Pressable>
      </View>

    </SafeAreaView>
  )
}

export default Home;