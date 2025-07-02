import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import React from 'react';
import AuthForm from './src/components/templates/AuthForm/Authform';

export default function App() {
  return (
    <View style={styles.container}>
      
      <AuthForm />

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
