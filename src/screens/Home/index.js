import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, Keyboard, Dimensions } from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import InstructorList from '../../components/InstructorList';
import SportList from '../../components/SportList';
import EducationList from '../../components/EducationList';

const Home = () => {

  const [searchBarFocused, setSearchBarFocused] = useState(false);

  // our standard lists of categories
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

  // query to fetch top 5 instructors based on rating and highest # of meets
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
    },
    {
      id: 4,
      name: 'Matt'
    },
    {
      id: 5,
      name: 'Nicole'
    }
  ]

  // list of sports based on signed up instructors
  const sportList = [
    {
      id: 1,
      sport: 'basketball'
    },
    {
      id: 2,
      sport: 'baseball'
    },
    {
      id: 3,
      sport: 'tennis'
    },
    {
      id: 4,
      sport: 'boxing'
    },
  ]

  // list of sports based on signed up instructors
  const educationList = [
    {
      id: 1,
      subject: 'math'
    },
    {
      id: 2,
      subject: 'finance'
    },
    {
      id: 3,
      subject: 'coding'
    },
    {
      id: 4,
      subject: 'physcology'
    },
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
          borderWidth: 0.3,
          borderRadius: 10,
          paddingLeft: 10,
          marginLeft: 15,
          backgroundColor: searchBarFocused ? 'white' : '#f0f2f5',
        }}>

          <Feather name={'search'} size={24} color={'black'} />
          <TextInput
            style={{
              justifyContent: 'center',
              height: 45,
              marginTop: 1,
              width: Dimensions.get('window').width - 65,
              borderRadius: 10,
              paddingHorizontal: 10,
              backgroundColor: searchBarFocused ? 'white' : '#f0f2f5',
            }}
            placeholder={'Search...'}
            onFocus={() => searchBarClicked()}
            onPressIn={() => fadeIn()}

          />
        </View>
      </View>


      {/* Vertical Flatlist */}
      <FlatList
        snapToAlignment={'start'}
        decelerationRate={'fast'}
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
              paddingHorizontal: 4
            }}
            key={item.id.toString()}
          >
            <Text style={styles.tagLine}>{item.header}</Text>

            {/* Vertical Flatlist */}
            {item.header === 'Instructors' ? (
              <FlatList
                style={{
                  backgroundColor: 'white',
                  borderColor: 'gray',
                  borderWidth: 0.3,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}
                vertical={true}
                data={instructorList}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <InstructorList instructor={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
              />
            ) : null}


            {item.header === 'Sports' ? (
              <FlatList
                horizontal={true}
                data={sportList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <SportList sport={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width - 175}
              />
            ) : null}

            {item.header === 'Education' ? (
              <FlatList
                horizontal={true}
                data={educationList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <EducationList subject={item} />}
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