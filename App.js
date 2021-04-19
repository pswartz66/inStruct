import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './src/navigation';

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { 
  Authenticator,
  // SignIn,
  // SignUp,
  // ConfirmSignUp,
  ForgotPassword,
} from 'aws-amplify-react-native';

// Custom SignIn/SignUp pages
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ConfirmSignUp from './src/screens/ConfirmSignUp';

Amplify.configure(awsconfig);

const AuthScreens = (props) => {
  // console.log(props.authState);

  switch (props.authState) {
    case 'signIn':
      return <SignIn {...props} />;
    case 'signUp':
      return <SignUp {...props} />;
    case 'forgotPassword':
      return <ForgotPassword {...props} />;
    case 'confirmSignUp':
      return <ConfirmSignUp {...props} />;
    case 'changePassword':
      return <ChangePassword {...props} />;
    case 'signedIn':
      return (
        <SafeAreaView style={styles.container}>
          <Navigation />
      </SafeAreaView>
      );
    default:
      return <></>;
  }
};


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Authenticator
        usernameAttributes="email"
        hideDefault={true}
        authState="signUp"
        onStateChange={(authState) => console.log('auth state...', authState)}
      >      
        <AuthScreens />
      </Authenticator>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
});
