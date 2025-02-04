
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button} from 'react-native';
import Night from './assets/images/night.jpg'
import  Oiseau from './assets/components/Oiseau'
import  Sol from './assets/components/Sol'
import  Ennemi from './assets/components/Ennemi'

export default function App() { 
  //Permet de faire la gravité de notre oiseau
   const [DeplacementOiseau, setDeplacementOiseau] = useState(0);

   const [HauteurOiseau, setHauteurOiseau] = useState(450);

//tentative de déplacement ennemi vers la gauche
  const [DeplacementEnnemi, setDeplacementEnnemi] = useState(250);
  /*var a = 1;
  const boucle = () => {
    while (a=a) {
      setDeplacementEnnemi(DeplacementEnnemi - 10);
      console.log('dep +1')
    }
    setTimeout(boucle, 500)
  }*/
  let depEnTimerId
  useEffect(() => {
    if (DeplacementEnnemi > 0) {
      depEnTimerId = setInterval(()=> {
        setDeplacementEnnemi(DeplacementEnnemi -3)
      }, 30)
    }
    return () => {
      clearInterval(depEnTimerId)
    }
  },[DeplacementEnnemi])

  let gravityTimerId              //variable dans laquelle on implante l'intervale pour la gravité de Bird()
  
  useEffect(() => {                                  // le useEffect permet de
  if (HauteurOiseau > 0 ) {                       //L'oiseau ne va pas plus bas que 0
      gravityTimerId = setInterval(() => {       //on initialise l'intervale entre la hauteur actuelle de l'oiseau -3 pour la gravité de l'oiseau
      setHauteurOiseau(HauteurOiseau - 3)       //applique la gravité à la positon de Bird()
    }, 30)                                     //réactualisé toutes les 30ms
  }
  return () => {
    clearInterval(gravityTimerId)
  }
  }, [HauteurOiseau])


 
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
      <Oiseau DeplacementOiseau = {DeplacementOiseau} 
        HauteurOiseau = {HauteurOiseau} />
      <Ennemi  DeplacementEnnemi = {DeplacementEnnemi}/>
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