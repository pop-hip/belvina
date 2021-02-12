import React from 'react';
import { View } from 'react-native';
import Bird from '../images/Bird.png'
// le view remplace une div, ici je viens juste créer mon composant oiseau à l'aide d'une constante qui est donc en faite le perso principal
// dans la const on a placé deux paramètres qui permettent à l'oiseau d'avancer(DeplacementOiseau) et d'avoir de la gravité(HauteurOiseau)

const Oiseau = ({DeplacementOiseau, HauteurOiseau}) => {
    return (
        // La div (view) permet de gérer directement le style de notre composant soit ici l'oiseau'
        
        <View style={{
            position: 'absolute',
            bottom: HauteurOiseau,//permet de faire descendre toute les 30ms l'oiseau de 3 px(effet de graviité)
            left: DeplacementOiseau,// permet de faire avancer l'oiseau de 10 vers la gauche
            width:100,
            height: 100,
            background: `url(${Bird})`
        }}/>

        

    )
}

export default Oiseau