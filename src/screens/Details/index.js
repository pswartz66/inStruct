import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';


const DetailsScreen = (props) => {

  const { data } = props.route.params;
  const { navigate } = props.navigation;
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
  ]

  const navigateToBooking = (itm) => {
    console.log('navigate to availability for', itm);
    navigate('Connect');
  }


  return (
    <View style={styles.detailsContainer}>
      <ScrollView>
        <View style={styles.detailHeaderRow}>
          <Text style={styles.detailsHeaderLeft}>Skilled in</Text>
          <Text style={styles.detailsHeaderRight}> {data}.</Text>
        </View>

        <View style={styles.detailDataList}>
          {tempData.map((item) => (
            <View key={item.id} style={styles.detailCards}>
              <View style={styles.detailsCardInner}>
                <View style={styles.detailsProfImg}><Text>Img placeholder</Text></View>
                <View style={styles.detailsBottomCard}>
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>
                    {item.name}
                  </Text>
                  <View style={{ position: 'absolute', top: 22, right: 6, bottom: 0 }}>
                    <TouchableOpacity 
                      style={{
                        backgroundColor: '#2679ff',
                        borderRadius: 12,
                        marginRight: 4,
                      }}
                      onPress={() => navigateToBooking(item.name)}>
                      <Entypo name="plus" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
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
