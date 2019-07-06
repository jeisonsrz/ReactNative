import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("Hola mundoo");
  return (
    <View style={styles.container}>
    
      <Text>Hola mundo con REACT NATIVE!</Text>
      
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
