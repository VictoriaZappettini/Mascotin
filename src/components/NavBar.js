import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">M4SC0T1N</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Alimento</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Comfort</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Juguetes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Medicamentos</a>
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar;