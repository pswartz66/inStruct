import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import InstructorList from '../../components/InstructorList';
import AppHeader from '../../components/AppHeader';

// tag line = inStruct --> locate any instructor near you

const Home = () => {

  const username = "Phillip";

  const newData = "temp string here";

  return (
    <View style={styles.homeContainer}>
      
        <AppHeader />

      <View style={styles.homeUnderline}></View>


      <View style={styles.homeList}>

        <InstructorList />

      </View>

    </View>
  )
}

export default Home;