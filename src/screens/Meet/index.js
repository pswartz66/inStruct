import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Meet = (props) => {
  const { instructor } = props.route.params;
  console.log(instructor);

  return (
    <SafeAreaView>
      <Text>
        Schedule a meeting with {instructor}
      </Text>
    </SafeAreaView>
  )
}

export default Meet;