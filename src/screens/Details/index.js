import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';


const DetailsScreen = (props) => {

  const { data } = props.route.params;

  console.log('Detail: ', data);

  // fetch all instructors from database skilled in "data" 
  // & approximately close to the person location
  // and list vertically using a flat list
  const tempData = [
    {
      id: 1,
      name: 'Joe',
      skill: 'basketball'
    },
    {
      id: 2,
      name: 'Jake',
      skill: 'finance'
    },
    {
      id: 3,
      name: 'Shawn',
      skill: 'microsoft excel'
    },
    {
      id: 4,
      name: 'Nicki',
      skill: 'painting'
    },
    {
      id: 5,
      name: 'Alisha',
      skill: 'drawing'
    },
    {
      id: 5,
      name: 'Alisha',
      skill: 'drawing'
    },
    {
      id: 5,
      name: 'Alisha',
      skill: 'drawing'
    },
    {
      id: 5,
      name: 'Alisha',
      skill: 'drawing'
    },
    {
      id: 5,
      name: 'Alisha',
      skill: 'drawing'
    },
  ]

  return (
    <View style={styles.detailsContainer}>
      <ScrollView>
        <View style={styles.detailHeaderRow}>
          <Text style={styles.detailsHeaderLeft}>Skilled in</Text>
          <Text style={styles.detailsHeaderRight}> {data}.</Text>
        </View>

        <View style={styles.detailDataList}>
          {tempData.map((item) => (

            <View style={styles.detailCards}>

              <View style={styles.detailsCardInner}>

                <View style={styles.detailsProfImg}></View>

                <View style={styles.detailsBottomCard}>


                <Text style={{ fontSize: 16, fontWeight: '500' }}>
                  {item.name}
                </Text>


                  <Entypo name="plus" size={24} color="#2679ff" />
                </View>



              </View>

            </View>

          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailsScreen;
