import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Button, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import styles from './styles';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createProfile, updateProfile } from '../../graphql/mutations';
import { getProfile, listProfiles } from '../../graphql/queries';
import * as ImagePicker from 'expo-image-picker';
import { Storage } from 'aws-amplify';


const EditProfileScreen = (props) => {

  let userEmail = Auth.user.attributes.email.toString();

  const [profImage, setProfImage] = useState(null);

  const [currentProfile, setCurrentProfile] = useState(null);
  const [selectedId, setSelectedId] = useState(0);

  const [role, setRole] = useState('');
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

  useEffect(() => {
    API.graphql(graphqlOperation(listProfiles))
      .then((profiles) => {
        const userID = profiles.data.listProfiles.items.filter(itm => itm.email === props.route.params ? itm.id : null);

        API.graphql({ query: getProfile, variables: { id: userID[0].id } })
          .then((profile) => {
            setCurrentProfile(profile);
            setRole(profile.data.getProfile.type);
            if (role === 'User') {
              setUserRole({
                type: 'User',
                color: '#2679ff'
              })
              setInstructorRole({
                type: 'none',
                color: '#dbdbdb'
              })
            }
            if (role === 'Instructor') {
              setInstructorRole({
                type: 'Instructor',
                color: '#2679ff'
              })
              setUserRole({
                type: 'none',
                color: '#dbdbdb'
              })
            }

            skillList.map((itm) => {
              if (itm.skill === userID[0].skill) {
                setSelectedId(itm.id)
              }
            });
            console.log('Received profile from DB for: ', profile);
          })
          .catch(err => console.log('Error getting single profile: ', err))

      })
      .catch(err => console.log('Error listing profiles: ', err));

    async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Please update camera settings for this to work.')
      }
    }

    
    // Storage.get("")
    //   .then(userImg => {
    //     console.log('retrieved uri from S3: ', userImg);
    //     // setProfImage(userImg)
    //   })



    // cleanup function
    return () => {
      console.log('cleanup function');
    }

  }, []);

  const onSaveProfile = async () => {
    console.log('clicked image');
    userEmail = Auth.user.attributes.email.toString();

    let selectedSkill = 'none';
    // if the role is user then no need to have a skill set in the db, default to none
    if (role !== 'User') {
      skillList.map((itm) => {
        if (itm.id === selectedId) {
          selectedSkill = itm.skill
        }
      });
    }

    await API.graphql(graphqlOperation(listProfiles))
      .then((profiles) => {
        const foundID = profiles.data.listProfiles.items.filter(itm => itm.email === userEmail ? itm.id : null);
        // console.log('foundID: ', foundID[0].id.toString());

        const profile = {
          id: foundID[0].id,
          email: userEmail,
          type: role,
          skill: selectedSkill
        };

        try {
          API.graphql({ query: updateProfile, variables: { input: profile } })
            .then(() => {
              console.log('successfully updated user: ', userEmail)
              alert('Save successful');
            })

            .catch(err => console.log('Error updating profile: ', err));
        } catch {
          err => console.log(err);
        }
      })
      .catch(err => console.log('Error listing profiles: ', err));
  }


  
  // save image to S3
  const saveImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfImage(result.uri);
      // send to S3 data storage in aws here
      Storage.put(userEmail, result.uri)
        .then(() => {
          console.log('successfully uploaded image to S3 bucket');
        })
        .catch(err => console.log('Error uploading image to S3 bucket: ', err));
    }

  }

  return (
    <View>
      <View style={styles.editProfileContainer}>
        <View style={styles.editProfileCol}>
          <TouchableOpacity
            onPress={saveImage}
          >
            <View style={{
              height: 120,
              width: 120,
              backgroundColor: '#dbdbdb',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {profImage === null ?
                <Text>Profile image</Text>
                :
                <Image style={{
                  height: 120,
                  width: 120,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',

                }}
                  source={{ uri: profImage }} />

              }
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
              >Your skill:  </Text>

              <View>

                <FlatList
                  data={skillList}
                  vertical={true}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  initialNumToRender={skillList.length}
                  initialScrollIndex={selectedId}
                  getItemLayout={(data, index) => (
                    { length: skillList.length, offset: 100 * (selectedId - 1), index }
                  )}
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
