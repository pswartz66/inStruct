import React, { useState } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import styles from './styles'


const EducationList = (props) => {
  const { subject } = props;

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

  return (
    <Pressable
      onPressIn={onPressInFunction}
      onPressOut={onPressOutFunction}
    >
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: Dimensions.get('window').width - 195,
        backgroundColor: pressedStyle.color,
        borderRadius: 10,    
        borderColor: 'gray',
        borderWidth: 0.3,
        margin: 10,
      }}>
        <Text
          style={{
            color: pressedStyle.textColor
          }}
        >
          {subject.subject}
        </Text>
      </View>
    </Pressable>
  )
}
export default EducationList;