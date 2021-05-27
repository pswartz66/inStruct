import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Dimensions } from 'react-native';


const OtherList = (props) => {
  const { other, navigate } = props;

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
    navigate('Details', { data: other.other });
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
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: Dimensions.get('window').width - 195,
        backgroundColor: pressedStyle.color,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 0.3,
      }}>
        <Text
          style={{
            color: pressedStyle.textColor,
            fontSize: 16
          }}
        >
          {other.other}
        </Text>
      </View>
    </TouchableHighlight>
  )
}
export default OtherList;