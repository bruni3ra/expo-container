import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App() {
  return<ScrollView>
    <Titulo />
    <Saudacao nome='Bruniera' />
    <FotoPerfil />

    <CartaoUsuario nome='Joao'
    descricao='Programador Mobile'
    img='perfill00'
    />

    <CartaoUsuario nome='Guilherme'
    descricao='Departamento de TI'
    img='perfill01'
    />

    <CartaoUsuario nome='Luiza'
    descricao='Programador de Jogos'
    img='perfill03'
    />
        </ScrollView>
  
}