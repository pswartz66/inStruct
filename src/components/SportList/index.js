import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableHighlight, ImageBackground } from 'react-native';


const SportList = (props) => {
  const { sport, navigate } = props;

  console.log('SportList Navigation: ', navigate);

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
    navigate('Details', { data: sport.sport });
  }

  return (
    <TouchableHighlight
      onShowUnderlay={onPressInFunction}
      onHideUnderlay={onPressOutFunction}
      onPress={navigatePress}
      activeOpacity={0.9}
      underlayColor={'#2679ff'}
      style={{ margin: 10, borderRadius: 10, borderColor: 'white', borderWidth: 0.3 }}
    >
      <ImageBackground source={sport.image}
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
        }}
      >
          <Text
            style={{
              color: pressedStyle.textColor,
              fontSize: 16
            }}
          >
            {sport.sport}
          </Text>
      </ImageBackground>
    </TouchableHighlight>
  )
}
export default SportList;