import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" class="navbar-brand">M4SC0T1N</Link>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to='/category/alimento' class="nav-link" >Alimento</Link>
                </li>
                <li class="nav-item">
                    <Link to='/category/comfort' class="nav-link" >Comfort</Link>
                </li>
                <li class="nav-item">
                    <Link to='/category/juguetes' class="nav-link" >Juguetes</Link>
                </li>
                <li class="nav-item">
                    <Link to='/category/medicamentos' class="nav-link" >Medicamentos</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;