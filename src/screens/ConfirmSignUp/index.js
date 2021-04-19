import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { Auth } from 'aws-amplify';
import { validateEmail } from '../validation';

const ConfirmSignUp = (props) => {

  const [email, onChangeEmail] = useState("");
  const [confirmationCode, onChangeConfirmationCode] = useState("");
  const [errors, setErrors] = useState({ email: '' });

  const onSubmit = async () => {
    const emailErr = validateEmail(email);
    if (emailErr) {
      setErrors({
        email: emailErr,
      });
    } else {
      try {
        const user = await Auth.confirmSignUp(email, confirmationCode);

        props.onStateChange('signIn', {})

      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  if (props.authState === 'confirmSignUp') {
    return (
      <KeyboardAvoidingView style={styles.cSignUpContainer} behavior="padding" enabled>
        <Text style={{ fontSize: 30, fontFamily: 'DevanagariSangamMN-Bold', color: '#2679ff' }}>Confirm Sign Up</Text>

        <View style={styles.cSignUpForm}>
          <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>Email *</Text>
          <TextInput
            style={styles.cSignUpInput}
            onChangeText={email => onChangeEmail(email)}
            value={email}
            placeholder={'Enter your email'}
          />
          <Text style={{ alignSelf: 'flex-start', paddingRight: 10, color: 'red' }}>{errors.email}</Text>

          <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>Confirmation Code *</Text>
          <TextInput
            style={styles.cSignUpInput}
            onChangeText={confirmationCode => onChangeConfirmationCode(confirmationCode)}
            value={confirmationCode}
            placeholder={'Enter confirmation code'}
          />
        </View>
        <TouchableOpacity onPress={() => onSubmit()} style={styles.cSignUpSubmitBtn}>
          <Text
            style={{ textAlign: 'center', fontSize: 18, fontFamily: 'DevanagariSangamMN-Bold', color: 'white' }}
          >
            Confirm
          </Text>
        </TouchableOpacity>

        <View style={styles.cSignUpBtnsRow}>

          <Button
            onPress={() => props.onStateChange('confirmSignUp', {})}
            title="Resend code"
            color="gray"
            accessibilityLabel="Resend code"
          >
          </Button>

          <Button
            onPress={() => props.onStateChange('signUp', {})}
            title="Back to Sign Up"
            color="black"
            accessibilityLabel="back to signUp"
          >
          </Button>

        </View>
      </KeyboardAvoidingView>

    )
  }
  else return <></>;
}

export default ConfirmSignUp;