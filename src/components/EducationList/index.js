import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableHighlight, ImageBackground } from 'react-native';


const EducationList = (props) => {
  const { subject, navigate } = props;

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
    navigate('Details', { data: subject.subject });
  }

  return (
    <TouchableHighlight
      onShowUnderlay={onPressInFunction}
      onHideUnderlay={onPressOutFunction}
      onPress={navigatePress}
      activeOpacity={1}
      underlayColor={'#2679ff'}
      style={{ margin: 10, borderRadius: 10, borderColor: 'white', borderWidth: 0.3 }}
    >

      <ImageBackground source={subject.image}
        style={{ 
          justifyContent: 'center',
          alignItems: 'center',
          height: 90,
          width: Dimensions.get('window').width - 195,
          backgroundColor: pressedStyle.color,
          borderRadius: 10,
        }}
        imageStyle={{
          borderRadius: 10,
          borderWidth: 0.3,
          borderColor: 'gray',
          opacity: 0.8,
        }}
      >
        <Text
          style={{
            color: pressedStyle.textColor,
            fontSize: 18,
            fontFamily: 'HelveticaNeue-Bold',
            letterSpacing: 0.5,
          }}
        >
          {subject.subject}
        </Text>
        </ImageBackground>
    </TouchableHighlight>
  )
}
export default EducationList;