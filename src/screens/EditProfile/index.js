import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Button, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';

import { Auth, API } from 'aws-amplify';
import { createProfile } from '../../graphql/mutations';


const EditProfileScreen = () => {
  const [role, setRole] = useState('');
  const [selectedId, setSelectedId] = useState(null)
  const [userRole, setUserRole] = useState({
    type: 'none',
    color: '#dbdbdb'
  });
  const [instructorRole, setInstructorRole] = useState({
    type: 'none',
    color: '#dbdbdb'
  });
  const onUserPressFunction = () => {
    setRole('User');
    setUserRole({
      type: 'User',
      color: '#2679ff'
    })
    setInstructorRole({
      type: 'none',
      color: '#dbdbdb'
    })
  }
  const onInstructorPressFunction = () => {
    setRole('Instructor');
    setInstructorRole({
      type: 'Instructor',
      color: '#2679ff'
    })
    setUserRole({
      type: 'none',
      color: '#dbdbdb'
    })
  }


  const skillList = [
    {
      id: 1,
      skill: 'basketball'
    },
    {
      id: 2,
      skill: 'baseball'
    },
    {
      id: 3,
      skill: 'tennis'
    },
    {
      id: 4,
      skill: 'boxing'
    },
    {
      id: 5,
      skill: 'math'
    },
    {
      id: 6,
      skill: 'finance'
    },
    {
      id: 7,
      skill: 'coding'
    },
    {
      id: 8,
      skill: 'physcology'
    },
    {
      id: 9,
      skill: 'piano'
    },
    {
      id: 10,
      skill: 'guitar'
    },
    {
      id: 11,
      skill: 'recording'
    },
    {
      id: 12,
      skill: 'juggling'
    },
    {
      id: 13,
      skill: 'painting'
    },
    {
      id: 14,
      skill: 'drawing'
    },
  ]


  const onSaveProfile = async () => {
    let userEmail = Auth.user.attributes.email;
    let selectedSkill = 'none';
    skillList.map((itm) => { 
      if (itm.id === selectedId) { 
        selectedSkill = itm.skill 
      }})
    const profile = { email: userEmail, type: role, skill: selectedSkill }
    await API.graphql({ query: createProfile, variables: { input: profile } });

  }

  return (
    <View>
      <View style={styles.editProfileContainer}>


        <View style={styles.editProfileCol}>
          <TouchableOpacity

          >
            <View style={{
              height: 120,
              width: 120,
              backgroundColor: '#dbdbdb',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text>Profile image</Text>
            </View>
          </TouchableOpacity>

        </View>



        <View style={styles.editProfileCol}>
          <Text style={styles.editHeader}>Select your role: {role}</Text>
          <View style={styles.editProfileRow}>

            <TouchableHighlight
              onPress={onUserPressFunction}
              activeOpacity={0.4}
              underlayColor={'#2679ff'}
            >
              <View style={{
                height: 75,
                width: 140,
                backgroundColor: userRole.color,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>User</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={onInstructorPressFunction}
              activeOpacity={0.4}
              underlayColor={'#2679ff'}
            >
              <View style={{
                height: 75,
                width: 140,
                backgroundColor: instructorRole.color,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>Instructor</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>



        {role === 'Instructor' ?

          <View style={styles.editProfileCol}>
            <View style={styles.editProfileSkillRow}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'HelveticaNeue-Medium',
                }}
              >Your skill:   </Text>

              <View>

                <FlatList
                  data={skillList}
                  vertical={true}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => {
                    
                    const color = item.id === selectedId ? '#2679ff' : 'black';

                    return (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setSelectedId(item.id)}
                        style={{
                          height: 100,
                          paddingTop: 39,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontFamily: 'HelveticaNeue-Bold',
                            color: color,
                            letterSpacing: 0.4,
                            textAlign: 'center'
                          }}
                        >
                          {item.skill}
                        </Text>
                      </TouchableOpacity>
                    )
                  }
                  }
                  snapToAlignment={'start'}
                  decelerationRate={'fast'}
                  snapToInterval={100}
                />

              </View>
            </View>


          </View>

          : null

        }

        <TouchableHighlight
          onPress={() => onSaveProfile()}
          activeOpacity={0.8}
          underlayColor={'#78a0ff'}
          style={{
            height: 60,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2679ff',
            borderRadius: 10,

          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'HelveticaNeue-Medium',
              letterSpacing: 0.5,
              color: 'white'

            }}
          >
            Save Changes
         </Text>
        </TouchableHighlight>

      </View>
    </View>
  )
}

export default EditProfileScreen;
