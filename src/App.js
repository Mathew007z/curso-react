


import React from 'react';
import "./styles.css"
import {Navbar} from "./components/navBar/Navbar"
import Greeting from "./components/Greetings/Greetings"
import Saludar from "./components/Saludo/Saludo"
import ListProd from './components/ListProd/ListProd';




export default function App (){
    return (
        <>
        <Navbar/>
        <Greeting/>
        <ListProd/>
        <Saludar nombre="Carlos"/>
        <Saludar nombre="Esteban"/>
        </>
    )
} 