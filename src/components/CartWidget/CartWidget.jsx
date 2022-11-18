import "./cartwidget.css"
import ImgCart from "../navBar/basket-fill.svg"


function Cart () {

    
    
return (
        <div className="divImg">
            <img src={ImgCart} alt="cart" className="cart" />
            <p className="paragraphImg">1</p>
        </div>
)


}


export default Cart