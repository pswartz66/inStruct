import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './src/navigation';

import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { 
  Authenticator,
  SignIn,
  // SignUp,
  ConfirmSignUp,
  ConfirmSignIn,
  ForgotPassword,
} from 'aws-amplify-react-native';
import SignUp from './src/screens/SignUp';

Amplify.configure(awsconfig);

function Temp(props) {
  if (props.authState === 'signIn') return <Text>Welcome</Text>;
  else return <></>;
}

export default function App() {

  return (

    <SafeAreaView style={styles.container}>

      <Authenticator
        usernameAttributes="email"
        hideDefault={true}
        authState="signIn"
        onStateChange={(authState) => console.log('auth state...', authState)}
      >

        <StatusBar barStyle="light-content" />

        <SignIn />
        <SignUp />
        <ConfirmSignIn />
        <ConfirmSignUp />
        <ForgotPassword />


        {/* <Navigation /> */}



      </Authenticator>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
