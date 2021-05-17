import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalendarList } from 'react-native-calendars';
import styles from './styles';

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
            />
          </View>
          <View style={styles.calendarClickView}>
            <Text style={styles.calendarDay}>
              {dayClicked.day}
            </Text>
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
                  marginLeft:2
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