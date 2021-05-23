import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Dimensions } from 'react-native';


const TimeList = (props) => {

  const { day, time, name, navigate } = props;

  const [pressedStyle, setPressedStyle] = useState({
    color: '#f0f2f5',
    textColor: 'black'
  });

  const onPressInFunction = () => {
    setPressedStyle({
      color: '#2679ff',
      textColor: 'white'
    });
  }
  const onPressOutFunction = () => {
    setPressedStyle({
      color: '#f0f2f5',
      textColor: 'black'
    });
  }

  const navigatePress = () => {
    if (day === null) {
      alert('Please select a day from the calendar above.')
    } else {
      navigate('BookAppointment', { data: {
        day: day,
        time: time.time,
        name: name
      }});
    }
  }


  return (
    <View style={{ height: 80 }}>
      <TouchableHighlight
        onShowUnderlay={onPressInFunction}
        onHideUnderlay={onPressOutFunction}
        onPress={navigatePress}
        activeOpacity={0.9}
        underlayColor={'#2679ff'}
        style={{
          marginTop: 8,
          marginRight: 10, 
          marginLeft: 10,
          borderRadius: 10, 
          borderColor: 'white', 
          borderWidth: 0.3 }}
      >
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          height: 45,
          width: Dimensions.get('window').width - 260,
          backgroundColor: pressedStyle.color,
          borderRadius: 10,
          borderColor: 'gray',
          borderWidth: 0.3,
        }}>
          <Text
            style={{
              color: pressedStyle.textColor,
              fontFamily: 'HelveticaNeue',
              fontSize: 16,
            }}
          >
            {time.time}
          </Text>
        </View>
      </TouchableHighlight>

    </View>
  )

}

export default TimeList;
