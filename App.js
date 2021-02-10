import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// jimporte le perso principale qui se situe dans les composants
import Game from './assets/components/Game'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Game/>
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
