import React, { useState } from 'react';
import { View, Text, TouchableHighlight, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalendarList } from 'react-native-calendars';
import styles from './styles';

import TimeList from '../../components/TimeList';

import { Feather } from '@expo/vector-icons';


const Meet = (props) => {

  const { navigate } = props.navigation;
  const [dayClicked, setDayClicked] = useState({ day: null });

  const whatDay = (dateAsString) => {
    const { dateString } = dateAsString;
    setDayClicked({
      day: dateString
    })
  }
  const navigateToFind = () => {
    navigate('Find');
  }

  // query database for the instructor and pull in available times
  const timeOpen = [
    {
      id: 1,
      time: '9:00 am'
    },
    {
      id: 2,
      time: '10:00 am'
    },
    {
      id: 3,
      time: '11:00 am'
    },
    {
      id: 4,
      time: '12:00 am'
    },
    {
      id: 5,
      time: '1:00 pm'
    },
    {
      id: 6,
      time: '2:00 pm'
    },
    {
      id: 7,
      time: '3:00 pm'
    },
    {
      id: 8,
      time: '4:00 pm'
    },
    {
      id: 9,
      time: '5:00 pm'
    },
    {
      id: 10,
      time: '6:00 pm'
    },
  ]


  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      {props.route.params !== undefined ?
        <>
          <View style={styles.greetingTop}>
            <Text style={styles.greet}>Meet with your instructor </Text>
            <Text style={styles.greetName}>{props.route.params.instructor}.</Text>
          </View>
          <View style={styles.calendarWrapper}>
            <CalendarList
              minDate={Date.now()}
              // Callback which gets executed when visible months change in scroll view. Default = undefined
              // onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={0}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={2}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}
              // ...calendarParams
              onDayPress={day => { whatDay(day) }}
              markedDates={{
                [dayClicked.day]: { selected: true, selectedColor: '#2679ff' }
              }}
            />

          </View>
          <View style={styles.calendarClickView}>
            <Text style={styles.calendarDay}>
              {dayClicked.day ? dayClicked.day : <Text>Select date above</Text>}
            </Text>
          </View>

          <View style={{ height: 80 }}>
            <FlatList
              horizontal={true}
              data={timeOpen}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <TimeList 
                day={dayClicked.day} 
                time={item} 
                name={props.route.params.instructor}
                navigate={navigate} />}
              snapToAlignment={'start'}
              decelerationRate={'fast'}
              snapToInterval={Dimensions.get('window').width - 240}

            />
          </View>


        </>

        :

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'HelveticaNeue-Medium',
              fontSize: 18,
            }}
          >
            See our options below
          </Text>
          <TouchableHighlight style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            width: 220,
            backgroundColor: '#2679ff',
            marginTop: 20,
            borderRadius: 6,
            shadowColor: 'black',
            shadowRadius: 4,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: .4
          }}
            onPress={() => navigateToFind()}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              width: 220,
              backgroundColor: '#2679ff',
              borderRadius: 6,
            }}>
              <Feather name={'search'} size={18} color={'white'} />
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'HelveticaNeue-Medium',
                  fontSize: 16,
                  marginLeft: 2
                }}
              >
                Find your instructor
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      }
    </SafeAreaView>
  )
}

export default Meet;