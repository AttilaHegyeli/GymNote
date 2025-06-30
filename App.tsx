import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <text>Changes you make will automatically reload.</text>
      <Text>Shake your phone to open the developer menu.</Text>
      <Text>Welcome to React Native!</Text>
      <Text>Welcome to Expo!</Text>
      <StatusBar style="auto" />


      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
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
