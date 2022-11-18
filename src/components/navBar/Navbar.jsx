import "./navbar.css";
import ImgAv from "../navBar/plant.png"
import ImgCart from "../navBar/basket-fill.svg"

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
      <div className="divImg">
      <img src={ImgCart} alt="cart" className="cart" />
      <p className="paragraphimg">1</p>
      </div>
      
      
    
  </div>
  </>
}
