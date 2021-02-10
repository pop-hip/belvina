import React from 'react';
import { View } from 'react-native';
import Ennemis from '../images/Ennemis.png'

const Ennemi = () => {
    return (
        // La div (view) permet de gérer directement le style de nos ennemies , ici il y a une grand div pour mettre toutes les div dedans de manière à créer pleins ennemis
        <View
        //La différence entre absolue et relative est dans la position définie. Pour une div en position relative, elle est calculée en fonction de position originale que absolute c toi qui décide da A à Z où la postion commence
        style={{position: 'relative',}}>
        
        <View style={{
            position: 'absolute',
            top:100,
            bottom:500 ,
            left:250,
            width: 120,
            height: 120,
            background: `url(${Ennemis})`

        }}></View>

            <View style={{
            position: 'absolute',
            top:500,
            left:250,
            width: 120,
            height: 120,
            background: `url(${Ennemis})`
        }}></View>




        </View>

    )
}

export default Ennemi