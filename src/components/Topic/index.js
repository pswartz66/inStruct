import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';


const Topic = (props) => {
  const { topic, id } = props.topic;

  const [pressedColor, setPressedColor] = useState(false);
  const [color, setColor] = useState('white');
  const [textColor, setTextColor] = useState('black');

  const [finderCriteria, setFinderCriteria] = useState([]);

  const onPressFunc = () => {

    if (pressedColor === false) {
      setPressedColor(true);
      setColor('#2679ff');
      setTextColor('white');
    } else {
      setPressedColor(false);
      setColor('white');
      setTextColor('black');
    }
    
    console.log('pressed', id);
  }


  return (
    <Pressable id={id} onPress={onPressFunc} style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: 140,
      margin: 10,
      backgroundColor: color,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#2679ff'
    }} >

      <Text style={
        {
          fontSize: 16,
          fontFamily: 'HelveticaNeue-Medium',
          color: textColor,
        }
      }>
        { topic }
      </Text>
    </Pressable>
  )
}

export default Topic;

