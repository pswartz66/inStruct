import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import awsconfig from './src/aws-exports';

import { Authenticator } from 'aws-amplify-react-native';

// Custom SignIn/SignUp pages
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ConfirmSignUp from './src/screens/ConfirmSignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import ChangePassword from './src/screens/ChangePassword';


import { SafeAreaProvider } from 'react-native-safe-area-context';

// work around to remove unhandled promise warnings
// https://github.com/aws-amplify/amplify-js/issues/5918
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
  
});


// const client = new AWSAppSyncClient({
//   url: awsconfig.aws_appsync_graphqlEndpoint,
//   region: awsconfig.aws_appsync_region,
//   auth: {
//     type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
//     //jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
//   },
// });



const AuthScreens = (props) => {
  // console.log(props.authState);
  console.log('props', props.authState);

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
        <View style={styles.container}>
          {/* <Navigation client={client}/> */}
          <Navigation />

        </View>
      );
    default:
      return <></>;
  }
};

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Authenticator
        usernameAttributes="email"
        hideDefault={true}
        authState="signUp"
        onStateChange={(authState) => console.log('auth state...', authState)}
      >      
        <AuthScreens />
      </Authenticator>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'orange',
    width: '100%',
    height: Dimensions.get('window').height,
  },
});
