import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import Instructor from '../Instructor';

const InstructorList = () => {

  const sampleData = [
    {
      id: '1',
      name: "joe",
      skill: "soccer",
      averageLesson: "1hr",
      rating: "4"
    },
    {
      id: '2',
      name: "sam",
      skill: "drawing",
      averageLesson: "1hr",
      rating: "5"
    },
    {
      id: '3',
      name: "chris",
      skill: "designer",
      averageLesson: "1hr 20min",
      rating: "5"
    }
  ];

  return (
    <View>
      
        <FlatList
          data={sampleData}
          key={sampleData.id}
          renderItem={({item}) => <Instructor message={item} />}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height + 10}
        />
        
    </View>
  )
};

export default InstructorList;
