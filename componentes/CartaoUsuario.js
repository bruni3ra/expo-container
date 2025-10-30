import React from "react";
import { View,Text, Image } from "react-native";
import fotos from '../img/fotos';


export default function CartaoUsuario ({nome, descricao, img}) {
    return(
        <View style={estilos.cartao}>
            <Image source={fotos{img}} style={estilos.foto} />
            <Test style={estilos.nome}>{nome}</Test>
            <Text style={estilos.descricao}>{descricao}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    
    cartao:{
        backgraudColor:'#e1f7f7',
        padding:16,
        marginTop:15,
        borderRadius:10,
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowOffset:{width:0, height:2},
        shadowRadius:5,
        elevation:5,
    },
    foto:{width:80, height:80, borderRadius:40, marginBottom:10.},
    nome:{fontSize:18, fontWeight:'bold'},
    descricao:{fontSize:14,color:'#555', textAlign:'center'}
});