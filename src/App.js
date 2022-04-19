import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
