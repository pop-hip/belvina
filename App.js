import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
<<<<<<< HEAD
import { StyleSheet, View } from 'react-native';

=======
import { StyleSheet, View, Button, TouchableOpacity} from 'react-native';
>>>>>>> 6b690bc33237dcf2383e1e5299aadc52a6bc2785
// jimporte le perso principale qui se situe dans les composants

import Night from './assets/images/night.jpg'
import  Oiseau from './assets/components/Oiseau'
import  Sol from './assets/components/Sol'
import  Ennemi from './assets/components/Ennemi'

//test


   return {
   height: 100,
   width: 50,
   marginTop: 10,
   backgroundColor : "red",
   marginLeft: gauche, }
}

// fin test
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
