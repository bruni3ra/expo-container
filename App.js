import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from "./componentes/Titulo"
import Saudacao from "./componentes/Saudacao"
import FotoPerfil from "./componentes/FotoPerfil"
import CartaoUsuario from "./componentes/CartaoUsuario"

export default function App() {
  return (
    <ScrollView style={{ padding: 20 }}>
    <Titulo />
    <Saudacao nome="Bruniera" />
    <FotoPerfil />
  

    <CartaoUsuario 
    nome='Joao'
    descricao='Programador Mobile'
    img='perfil00'
    />

    <CartaoUsuario nome='Guilherme'
    descricao='Departamento de TI'
    img='perfil01'
    />

    <CartaoUsuario nome='Luiza'
    descricao='Programador de Jogos'
    img='perfil04'
    />

    <CartaoUsuario nome='Gael'
    descricao='Banco de dados'
    img='perfil02'
    />

    <CartaoUsuario nome='Maria'
    descricao='Ciencias da Computação'
    img='perfil03'
    />

    <CartaoUsuario nome='Henrique'
    descricao='Programador'
    img='perfil05'
    />

    <CartaoUsuario nome='Mônica'
    descricao='Erros de programação'
    img='perfil06'
    />


  <CartaoUsuario nome='Júlia'
    descricao='Programador de Java Script'
    img='perfil07'
    />
        </ScrollView>
  );
}