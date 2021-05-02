import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { Auth } from 'aws-amplify';
import { validateEmail } from '../validation';

const ForgotPassword = (props) => {

  const [email, onChangeEmail] = useState("")
  const [errors, setErrors] = useState({ email: '' });

  // console.log(props.authData);

  const onSend = async () => {

    const emailErr = validateEmail(email);
    if (emailErr) {
      setErrors({
        email: emailErr,
      });
    } else {
      try {
        await Auth.forgotPassword(email).then(() => {
          // navigate to change password screen
          props.onStateChange('changePassword', {});
        }).catch(err => console.log(err));

      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };


  if (props.authState === 'forgotPassword') {
    return (
      <KeyboardAvoidingView style={styles.fpContainer} behavior="padding" enabled>
        <Text style={{ fontSize: 30, fontFamily: 'HelveticaNeue-Bold', color: '#2679ff' }}>Reset Password</Text>

        <View style={styles.fpForm}>
          <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>Email *</Text>
          <TextInput
            style={styles.fpInput}
            onChangeText={(email) => onChangeEmail(email.toLowerCase())}
            value={email}
            placeholder={'Enter your email'}
          />
          <Text style={{ alignSelf: 'flex-start', paddingRight: 10, color: 'red' }}>{errors.email}</Text>


        </View>
        <TouchableOpacity onPress={() => onSend()} style={styles.fpSendBtn}>
          <Text
            style={{ textAlign: 'center', fontSize: 18, fontFamily: 'HelveticaNeue-Bold', color: 'white' }}
          >
            Send
          </Text>
        </TouchableOpacity>

        <View style={styles.fpBtnsRow}>

          <Button
            onPress={() => props.onStateChange('signIn', {})}
            title="Back to Sign In"
            color="black"
            accessibilityLabel="back to signIn"
          >
          </Button>

        </View>
      </KeyboardAvoidingView>

    )
  }
  else return <></>;

}

export default ForgotPassword;
