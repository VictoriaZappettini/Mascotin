import {Badge} from "@material-ui/core"
import {ShoppingCartOutlined} from "@material-ui/icons"
import { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from './CartContext'

const CartWidget = () =>{
    const cant = useContext(CartContext)

    return(
        <Link to='/cart' >
    <Badge className="carro" badgeContent= {cant.calcuantItem()} color="secondary" >
   
        <ShoppingCartOutlined  />
       
     </Badge>
     </Link>
  
    );
}
export default CartWidget;