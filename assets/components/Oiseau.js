import React from 'react';
import { View } from 'react-native';
import Bird from '../images/Bird.png'
// le view remplace une div, ici je viens juste créer mon composant oiseau à l'aide d'une constante qui est donc en faite le perso principal

const Oiseau = ({DeplacementOiseau}) => {
    return (
        // La div (view) permet de gérer directement le style de notre composant soit ici l'oiseau'
        // J'ai placé en paramètre la const deplacementoiseau utilisé dans l'app js et je l'ai ensuite appélé au left pour que l'oiseau se déplace de 10 en 10 comme l'indique la const deplacementoiseau et tout ça sur la gauche (left)
        <View style={{
            position: 'absolute',
            bottom:300,
            left: DeplacementOiseau,
            width:100,
            height: 100,
           background: `url(${Bird})`
        }}/>

        

    )
}

export default Oiseau