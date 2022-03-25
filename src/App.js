import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">M4SC0T1N</a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Alimentos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Comfort</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Medicamentos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Juguetes</a>
            </li>
          </ul>
        </nav>
        <p style={{marginTop: '350px'}}>
          Bienvenidos!!! Esta página se esta construyendo.
        </p>
       
      </header>
    </div>
  );
}

export default App;
