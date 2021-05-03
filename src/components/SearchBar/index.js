import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

import './styles';

const SearchBar = (props) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput 
        style={styles.searchBarInput}
        placeholder={'Search...'}
      />
    </View>
  )
}

export default SearchBar;