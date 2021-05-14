import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import styles from './styles';

const Meet = (props) => {
  const { instructor } = props.route.params;
  console.log(instructor);

  const [dayClicked, setDayClicked] = useState({ day: null });

  const whatDay = (dateAsString) => {
    const { dateString } = dateAsString;
    setDayClicked({
      day: dateString
    })
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.greetingTop}>
        <Text style={styles.greet}>Meet with your instructor </Text>
        <Text style={styles.greetName}>{instructor}.</Text>
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

    </SafeAreaView>
  )
}

export default Meet;