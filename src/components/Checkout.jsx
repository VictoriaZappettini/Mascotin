import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
       <Link to='/cart' ><Button variant="contained" color="primary">Checkout</Button ></Link>
    )
 
    
}
export default Checkout;