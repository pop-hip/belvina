import React from 'react';
import { View } from 'react-native';
import  Ennemi from './Ennemi'
import  Oiseau from './Oiseau'
import  Sol from './Sol'
import Background from '../images/Background.png'
// le view remplace une div, ici je viens juste créer mon composant oiseau à l'aide d'une constante qui est donc en faite le perso principal

const Game = () => {
    return (

        <View
         style={{
          
          width: 400,
          height: 810,
          background: `url(${Background})`

        }}>

        <Oiseau />
        <Ennemi />
        <Sol />

    </View>
    )
}

export default Game