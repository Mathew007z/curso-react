import "./producto.css"
import Avatar from "../Avatar/Avatar"
import Card from "../Card/Card"


const Producto = ({id , nombre, precio, imagen}) =>{

    return (
        <Card>
        <Avatar/>
        <p>{nombre}</p>
        <p>${precio}</p>
        <p>{id}</p>
        </Card>
    ) 

}
export default Producto;