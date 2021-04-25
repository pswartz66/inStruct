import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import Topic from '../Topic';

const TopicList = () => {


  const topics = [
    {
      id: '1',
      topic: 'soccer',
      pins: '24',
    },
    {
      id: '2',
      topic: 'running',
      pins: '43',
    },
    {
      id: '3',
      topic: 'yoga',
      pins: '12',
    },
    {
      id: '4',
      topic: 'canvas painting',
      pins: '84',
    },
    {
      id: '5',
      topic: 'music recording',
      pins: '45',
    },
    {
      id: '6',
      topic: 'photo editing',
      pins: '76',

    },
    {
      id: '7',
      topic: 'juicing',
      pins: '114',

    },
    
  ];


  return (
    <View>

        <FlatList
          data={topics}
          key={topics.id}
          renderItem={({item}) => <Topic topic={item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'slow'}
          horizontal={true}
          // snapToInterval={Dimensions.get('window').width}
        />

    </View>
  )
};

export default TopicList;