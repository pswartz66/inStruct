import React from 'react';
import { View, FlatList } from 'react-native';
import TopInstructor from '../TopInstructor';

const TopInstructorList = () => {

  const topInstructors = [
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
    },
    {
      id: '4',
      name: "mark",
      skill: "pottery",
      averageLesson: "1hr 20min",
      rating: "5"
    },
    {
      id: '5',
      name: "louise",
      skill: "haircoloring",
      averageLesson: "1hr 20min",
      rating: "5"
    }
  ];

  return (
    <View>
        
        <FlatList
          data={topInstructors}
          key={topInstructors.id}
          renderItem={({item}) => <TopInstructor topInstructor={item} />}
          showsVerticalScrollIndicator={true}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          horizontal={true}
          // snapToInterval={Dimensions.get('window').height + 10}
        />
        
    </View>
  )
};

export default TopInstructorList;
