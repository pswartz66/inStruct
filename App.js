import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './src/navigation';


export default function App() {
  return (

    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.container}>

        <Navigation />

    </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
