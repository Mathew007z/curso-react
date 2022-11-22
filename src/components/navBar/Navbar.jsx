import "./navbar.css";
import ImgAv from "../navBar/plant.png"
import Cart from "../CartWidget/CartWidget"


// Navbar




 export function Navbar () { 

  // Renderizando navbar

  return <> <div className="navbar">
    
      <img src={ImgAv} alt="hoja" className="imgPlanta"/>
      <ul className="navbar-ul">
          <li>
            <a href="" className="nav-link">Inicio</a>
          </li>
      </ul>
      <ul className="navbar-ul">
          <li>
            <a href="" className="nav-link">Nosotros</a>
          </li>
      </ul>
      <ul className="navbar-ul">
          <li>
            <a href="" className="nav-link">Productos</a>
          </li>
      </ul>
      <Cart/>
  </div>
  </>
}
