import React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import  Ennemi from './Ennemi'
import  Oiseau from './Oiseau'
import  Sol from './Sol'
import Night from '../images/night.jpg'
import react, { useState } from 'react';
//test
export default function App() {
	// variable d'état, setter de la variable d'état = valeur d'initiale
	const [margeDroite, setMargeDroite] = useState(0);

    
	const moveLeft = () => {
  	  console.log("margeGauche" + margeDroite);
  	  setMargeDroite(margeDroite + 10);
	};

  return (
    <View >
  	  {/* TouchableOpacity = view cliquable */}
  	  <TouchableOpacity style={grosStyle(margeDroite)}>
  	  </TouchableOpacity>

  	  <Button
  		  onPress={() => { moveLeft() } }
  		  title="moveLeft"
  	  />
    </View>
  );
}

// fin test
// le view remplace une div, ici je viens juste créer mon composant oiseau à l'aide d'une constante qui est donc en faite le perso principal
//const [margeDroite, setMargeDroite] = useState(0);
const Game = () => {
    return (

        <View
         style={{
          
          width: 400,
          height: 810,
          background: `url(${Night})`

        }}>

        <Oiseau />
        <Ennemi />
        <Sol />
      
    </View>
    )
}
//fonction qui pgère le déplacement des ennemis, avec en paramètre l'antitée à déplacer.

export default Game