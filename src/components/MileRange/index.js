import React from 'react';
import { View, FlatList } from 'react-native';
import Range from '../Range';

const MileRange = () => {

  const MileRanges = [
    {
      id: '1',
      range: '0 - 5mi',
    },
    {
      id: '2',
      range: '5 - 10mi',
    },
    {
      id: '3',
      range: '> 15mi',
    },
    
  ];
  return (
    <View>
      
      <FlatList
          data={MileRanges}
          key={MileRanges.id}
          renderItem={({item}) => <Range range={item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'slow'}
          horizontal={true}
          // snapToInterval={Dimensions.get('window').width}
        />
      

    </View>
  )
}

export default MileRange;