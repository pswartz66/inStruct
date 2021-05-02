import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { Auth } from 'aws-amplify';
import { validatePassword } from '../validation';

const ChangePassword = (props) => {

  // const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmationCode, onChangeConfirmationCode] = useState("");
  const [errors, setErrors] = useState({ password: '' });

  // console.log(' email from change pwd: ', props.user);
  // console.log(props);

  const onSubmit = async () => {
    const passwordErr = validatePassword(password);
    if (passwordErr) {
      setErrors({
        password: passwordErr,
      });
    } else {
      try {
        const username = props.authData;
        await Auth.forgotPasswordSubmit(username, confirmationCode, password).then(() => {
          // navigate to sign in screen
          props.onStateChange('signIn', {});
        }).catch(err => console.log(err));
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  if (props.authState === 'changePassword') {
    return (
      <KeyboardAvoidingView style={styles.cpContainer} behavior="padding" enabled>
        <Text style={{ fontSize: 30, fontFamily: 'HelveticaNeue-Bold', color: '#2679ff' }}>Reset Password</Text>

        <View style={styles.cpForm}>
        <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>Confirmation Code *</Text>
          <TextInput
            style={styles.cpInput}
            onChangeText={confirmationCode => onChangeConfirmationCode(confirmationCode)}
            value={confirmationCode}
            placeholder={'Enter confirmation code'}
          />

          <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>New Password *</Text>
          <TextInput
            style={styles.cpInput}
            onChangeText={password => onChangePassword(password)}
            value={password}
            placeholder={'Enter your new password'}
            secureTextEntry={true}
          />
          <Text style={{ alignSelf: 'flex-start', paddingRight: 10, color: 'red' }}>{errors.email}</Text>

        </View>
        <TouchableOpacity onPress={() => onSubmit()} style={styles.cpSubmitBtn}>
          <Text
            style={{ textAlign: 'center', fontSize: 18, fontFamily: 'HelveticaNeue-Bold', color: 'white' }}
          >
            Submit
          </Text>
        </TouchableOpacity>

        <View style={styles.cpBtnsRow}>

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

export default ChangePassword;