import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { Auth } from 'aws-amplify';
import { validateEmail, validatePassword } from '../validation';

const SignUp = (props) => {

  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errors, setErrors] = useState({ email: '', password: '' });

  const onSubmit = async () => {
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    if (emailErr || passwordErr) {
      setErrors({
        email: emailErr,
        password: passwordErr
      });
    } else {
      try {
        const user = await Auth.signUp({
          username: email,
          password: password
        });
        // redirects to confirm code
        props.onStateChange('confirmSignUp', user);

      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  if (props.authState === 'signUp') {
    return (
      <KeyboardAvoidingView style={styles.signUpContainer} behavior="padding" enabled>
        <Text style={{ fontSize: 30, fontFamily: 'HelveticaNeue-Bold', color: '#2679ff' }}>Sign Up</Text>

        <View style={styles.signUpForm}>

          <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>Email *</Text>
          <TextInput
            style={styles.signUpInput}
            onChangeText={email => onChangeEmail(email.toLowerCase())}
            value={email}
            placeholder={'Enter your email'}
          />
          <Text style={{ alignSelf: 'flex-start', paddingRight: 10, color: 'red' }}>{errors.email}</Text>

          <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>Password *</Text>
          <TextInput
            style={styles.signUpInput}
            onChangeText={password => onChangePassword(password)}
            value={password}
            placeholder={'Enter your password'}
            secureTextEntry={true}
          />
          <Text style={{ alignSelf: 'flex-start', paddingRight: 10, color: 'red' }}>{errors.password}</Text>

        </View>
        <TouchableOpacity onPress={() => onSubmit()} style={styles.signUpSubmitBtn}>
          <Text
            style={{ textAlign: 'center', fontSize: 18, fontFamily: 'HelveticaNeue-Bold', color: 'white' }}
          >
            Submit
          </Text>
        </TouchableOpacity>

        <View style={styles.signUpBtnsRow}>

          <Button
            onPress={() => props.onStateChange('confirmSignUp', {})}
            title="Confirm a Code"
            color="gray"
            accessibilityLabel="back to confirm code"
          >
          </Button>

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

export default SignUp;
