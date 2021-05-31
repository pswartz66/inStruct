import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { Auth, API } from 'aws-amplify';
import { validateEmail, validatePassword } from '../validation';

import { createProfile } from '../../graphql/mutations';

const SignIn = (props) => {

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
        const user = await Auth.signIn({
          username: email,
          password: password
        });

        const profile = { email: email, type: 'User', skill: 'none' };
        const condition = { email: { attributeExists: false }}

        // send to database
        // await API.graphql({
        //   query: createProfile, variables: {
        //     input: profile,
        //     condition: condition
        //   }
        // })
        // .then(() => console.log('successfully added to DB'))
        // .catch(err => console.log('Error from sign in: ', err));
        ;

        // see app.js -> next navigate to navigation/rest of app and pass user
        props.onStateChange('signedIn', user);



      } catch (error) {
        Alert.alert(error.message);
        throw error;
      }
    }
  };

  if (props.authState === 'signIn') {
    return (
      <KeyboardAvoidingView style={styles.signInContainer} behavior="padding" enabled>
        <Text style={{ fontSize: 30, fontFamily: 'HelveticaNeue-Bold', color: '#2679ff' }}>Sign In</Text>

        <View style={styles.signInForm}>
          <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>Email *</Text>
          <TextInput
            style={styles.signInInput}
            onChangeText={email => onChangeEmail(email.toLowerCase())}
            value={email}
            placeholder={'Enter your email'}
          />
          <Text style={{ alignSelf: 'flex-start', paddingRight: 10, color: 'red' }}>{errors.email}</Text>

          <Text style={{ alignSelf: 'flex-start', marginTop: 5, marginBottom: 5 }}>Password *</Text>
          <TextInput
            style={styles.signInInput}
            onChangeText={password => onChangePassword(password)}
            value={password}
            placeholder={'Enter your password'}
            secureTextEntry={true}
          />
          <Text style={{ alignSelf: 'flex-start', paddingRight: 10, color: 'red' }}>{errors.password}</Text>

        </View>

        <TouchableOpacity onPress={() => onSubmit()} style={styles.signInSubmitBtn}>
          <Text
            style={{ textAlign: 'center', fontSize: 18, fontFamily: 'HelveticaNeue-Bold', color: 'white' }}
          >
            Submit
          </Text>
        </TouchableOpacity>

        <View style={styles.signInBtnsRow}>

          <Button
            onPress={() => props.onStateChange('signUp', {})}
            title="Sign Up"
            color="gray"
            accessibilityLabel="Sign up"
          >
          </Button>

          <Button
            onPress={() => props.onStateChange('forgotPassword', {})}
            title="Forgot password"
            color="black"
            accessibilityLabel="Forgot password"
          >
          </Button>

        </View>
      </KeyboardAvoidingView>

    )
  } else <></>
}

export default SignIn;
