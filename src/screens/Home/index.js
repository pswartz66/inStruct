import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Keyboard, Dimensions, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import InstructorList from '../../components/InstructorList';
import SportList from '../../components/SportList';
import EducationList from '../../components/EducationList';
import InstrumentList from '../../components/InstrumentList';
import OtherList from '../../components/OtherList';


const Home = ({ navigation }) => {

  // console.log(navigation);

  const [searchBarFocused, setSearchBarFocused] = useState(false);

  // our standard lists of categories
  const categoryList = [
    {
      id: 1,
      header: 'Top Instructors'
    },
    {
      id: 2,
      header: 'Sports',
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
      name: 'Joe',
      skill: 'basketball',
      rating: '5',
    },
    {
      id: 2,
      name: 'Sally',
      skill: 'baseball',
      rating: '5',
    },
    {
      id: 3,
      name: 'Anthony',
      skill: 'math',
      rating: '5',
    },
    {
      id: 4,
      name: 'Matt',
      skill: 'finance',
      rating: '5',
    },
    {
      id: 5,
      name: 'Nicole',
      skill: 'coding',
      rating: '5',
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

  const instrumentList = [
    {
      id: 1,
      instrument: 'piano',
    },
    {
      id: 2,
      instrument: 'guitar',
    },
    {
      id: 3,
      instrument: 'recording',
    },
  ]

  const otherList = [
    {
      id: 1,
      other: 'juggling',
    },
    {
      id: 2,
      other: 'painting',
    },
    {
      id: 3,
      other: 'drawing',
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
            {item.header === 'Top Instructors' ? (
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
                renderItem={({ item }) => <InstructorList instructor={item} {...navigation}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
              />
            ) : null}

            {/* Horizontal Flatlist */}
            {item.header === 'Sports' ? (
              <FlatList
                horizontal={true}
                data={sportList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <SportList sport={item} {...navigation} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width - 175}
              />
            ) : null}

            {/* Horizontal Flatlist */}
            {item.header === 'Education' ? (
              <FlatList
                horizontal={true}
                data={educationList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <EducationList subject={item} {...navigation} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width - 175}
              />
            ) : null}

            {/* Horizontal Flatlist */}
            {item.header === 'Instrument' ? (
              <FlatList
                horizontal={true}
                data={instrumentList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <InstrumentList instrument={item} {...navigation} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width - 175}
              />
            ) : null}


            {/* Horizontal Flatlist */}
            {item.header === 'Other' ? (
              <FlatList
                horizontal={true}
                data={otherList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <OtherList other={item} {...navigation} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width - 175}
              />
            ) : null}

            {item.header === 'Reccomendations' ? (
              /* need to add some type of keyboard behavior here
                since it currently gets blocked
              */
                <TextInput
                  style={styles.reccomendInput}
                  placeholder={`${"Tell us what you'd like to learn"}`}
                />

            ) : null}

          </View>

        }
      />



    </SafeAreaView>

  )
}

export default Home;