import React from 'react';
import { View } from 'react-native';
import Bird from '../images/Bird.png'
// le view remplace une div, ici je viens juste créer mon composant oiseau à l'aide d'une constante qui est donc en faite le perso principal

const Oiseau = () => {
    return (
        // La div (view) permet de gérer directement le style de notre composant soit ici le carré bleu
        <View style={{
            position: 'absolute',
            bottom: 300,
            left: 50,
            width:100,
            height: 100,
           background: `url(${Bird})`
        }}/>

    )
}

export default Oiseau