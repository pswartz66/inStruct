import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const DetailsScreen = (props) => {

  const { data } = props.route.params;

  console.log('Detail: ', data);

  // fetch all instructors from database skilled in "data" 
  // & approximately close to the person location
  // and list vertically using a flat list


  return (
    <View style={styles.DetailsContainer}>
      <View style={styles.DetailHeaderRow}>
        <Text style={styles.DetailsHeaderLeft}>Skilled in</Text>
        <Text style={styles.DetailsHeaderRight}> {data}.</Text>
      </View>
    </View>
  )
}

export default DetailsScreen;
