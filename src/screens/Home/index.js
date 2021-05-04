import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, Keyboard, Dimensions } from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import InstructorList from '../../components/InstructorList';

const Home = () => {

  const [searchBarFocused, setSearchBarFocused] = useState(false);

  const categoryList = [
    {
      id: 1,
      header: 'Instructors'
    },
    {
      id: 2,
      header: 'Sports'
    },
    {
      id: 3,
      header: 'Education'
    },
    {
      id: 4,
      header: 'Instrument'
    },
    {
      id: 5,
      header: 'Other'
    },
    {
      id: 6,
      header: 'Reccomendations'
    },
  ]

  const instructorList = [
    {
      id: 1,
      name: 'Joe'
    },
    {
      id: 2,
      name: 'Sally'
    },
    {
      id: 3,
      name: 'Anthony'
    }
  ]


  const searchBarClicked = () => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', keyboardWillHide);

  }

  const keyboardDidShow = () => {
    setSearchBarFocused(true);
  }
  const keyboardWillShow = () => {
    setSearchBarFocused(true);
  }
  const keyboardWillHide = () => {
    setSearchBarFocused(false);

  }

  return (
    <SafeAreaView style={styles.homeContainer}>

      {searchBarFocused ? (
        <View style={styles.aboveSearchAnim}
        >
          <Text style={styles.searchBarVisibleText}>Find an instructor</Text>
        </View>
      ) : <AppHeader />}

      <View style={styles.searchBarContainer}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: 'gray',
          borderWidth: 0.5,
          borderRadius: 10,
          paddingLeft: 10,
          marginLeft: 15,
          backgroundColor: searchBarFocused ? 'white' : '#ebebeb',
        }}>
          <Feather name={'search'} size={24} color={'black'} />
          <TextInput
            style={{
              justifyContent: 'center',
              height: 50,
              marginTop: 1,
              width: Dimensions.get('window').width - 65,
              borderRadius: 10,
              paddingHorizontal: 10,
              backgroundColor: searchBarFocused ? 'white' : '#ebebeb',
            }}
            placeholder={'Search...'}
            onFocus={() => searchBarClicked()}
            onPressIn={() => fadeIn()}

          />
        </View>
      </View>



      <FlatList
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        // snapToInterval={200}
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: searchBarFocused ? 'rgba(0,0,0,0.1)' : 'white',
          opacity: searchBarFocused ? '0.3' : '1.0'

        }}
        data={categoryList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <View
            style={{
              height: 200,
              paddingHorizontal: 4
            }}
            key={item.id.toString()}
          >
            <Text style={styles.tagLine}>{item.header}</Text>

            {item.header === 'Instructors' ? (
              <FlatList
                horizontal={true}
                data={instructorList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <InstructorList instructor={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width - 175}
              />
            ) : null}
            
          </View>
        }
      />


      <TextInput
        style={styles.reccomendInput}
        placeholder={`${"Tell us what you'd like to learn"}`}
      />

    </SafeAreaView>

  )
}

export default Home;