import "./producto.css"
import Avatar from "../Avatar/Avatar"
import Card from "../Card/Card"
import React, {useState, useEffect} from 'react'






const Producto = ({id, nombre, precio, imagen}) =>{

    const [contador, setContador] = useState(0);

    // button increased
    const buttonAumento = () => {
        setContador(contador+1)
    }
    // Button decrement
    const buttonDecrement = () => {
        setContador(contador-1);
    }

    useEffect(()=> {
        console.log('El componente se ejecuto')
    },[contador])
    
    

    return (
        <Card>
        <Avatar/>
        <p>{nombre}</p>
        <p>${precio}</p>
        <img src={imagen}/>
        <div className="buttonContainer">
        <button onClick={buttonDecrement} className="buttonHand">Quitar</button>
        <button onClick={buttonAumento} className="buttonHand">Agregar</button>
        </div>
        <p className="contador">Agregar Al carrito <br></br>{contador}</p>
        </Card>
    ) 
}


export default Producto;