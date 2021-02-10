import React from 'react';
import { View } from 'react-native';
import Solimage from '../images/Solimage.png'
// le view remplace une div, ici je viens juste créer mon composant oiseau à l'aide d'une constante qui est donc en faite le perso principal

const Sol = () => {
    return (
        // La div (view) permet de gérer directement le style de notre composant soit ici le carré bleu
        <View style={{
            position: 'absolute',
            bottom:0,
            
            width: 500,
            height: 200,
            background: `url(${Solimage})`

        }}/>

    )
}

export default Sol