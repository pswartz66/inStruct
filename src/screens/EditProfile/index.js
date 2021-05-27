import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles';


const EditProfileScreen = () => {
  const [role, setRole] = useState('none')
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

  return (
    <View>
      <View style={styles.editProfileContainer}>

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



        <View style={styles.editProfileCol}>
          <View style={styles.editProfileRow}>
            <TouchableHighlight>
              <View style={{
                height: 75,
                width: 300,
                backgroundColor: '#dbdbdb',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>Choose a profile image</Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>



        {role === 'Instructor' ?

          <View style={styles.editProfileCol}>
            <View style={styles.editProfileRow}>
              
              <TextInput
                style={{
                  height: 40,
                  width: 300,
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: 'white'
                
                }}
                // onChangeText={confirmationCode => onChangeConfirmationCode(confirmationCode)}
                // value={confirmationCode}
                placeholder={'Type your skill here'}
              />

            </View>
          </View>

          : null

        }



      </View>

    </View>
  )
}

export default EditProfileScreen;
