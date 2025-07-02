import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import CustomText from './src/components/atoms/Text/text';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      
      <CustomText message="Hello, this is a custom text component!" />

    
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
