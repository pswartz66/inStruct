import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const AppHeader = () => {
  return (
    <View style={styles.appHeaderContainer}>
      <Text style={styles.appNameIn}>in</Text>
      <Text style={styles.appNameStruct}>Struct.</Text>

    </View>
  )
}

export default AppHeader;