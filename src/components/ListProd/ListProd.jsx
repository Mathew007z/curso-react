import "./listprod.css"
import Producto from "../Producto/Producto";
import {productos} from "./productos";




// Container de mis productos con logica de negocio

const ListProd = () => {

    return (
        <div className="listProd">
           {productos.map((prod)=>
            <Producto
            id={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            imagen={prod.imagen}
            />
           )}
            

        </div>
    ) 
}








export default ListProd;

