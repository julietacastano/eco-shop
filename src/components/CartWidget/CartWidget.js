import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () =>{
    const {getQuantity} = useContext(CartContext)
    let quantity = getQuantity()

    return(
        <Link to={'/cart'} className = "btn btn-light btn-carrito"><FontAwesomeIcon icon={faCartShopping}/> Items: {quantity}</Link>
    )
}

export default CartWidget;