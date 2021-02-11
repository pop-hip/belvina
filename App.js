import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TouchableOpacity} from 'react-native';
// jimporte le perso principale qui se situe dans les composants

import Night from './assets/images/night.jpg'
import  Oiseau from './assets/components/Oiseau'
import  Sol from './assets/components/Sol'
import  Ennemi from './assets/components/Ennemi'


export default function App() {

  const [DeplacementOiseau, setDeplacementOiseau] = useState(0);
  return (
    <View
    style={{
     
     width: 400,
     height: 810,
     background: `url(${Night})`

   }}>
  
     <Button
     onPress={() =>  setDeplacementOiseau(DeplacementOiseau + 10) }
     title="Avancer"
      
     />
      <StatusBar style="auto" />
      <Oiseau
      DeplacementOiseau = {DeplacementOiseau} />
      <Ennemi />
      <Sol />
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
