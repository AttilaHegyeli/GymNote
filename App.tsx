import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import AuthInputemail from './src/components/molecules/AuthInput/Email/authinputemail';
import AuthInputpassword from './src/components/molecules/AuthInput/Password/authiInputpassword';

import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Welcome to GymNote!</Text>
      <AuthInputemail />
      <AuthInputpassword />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
