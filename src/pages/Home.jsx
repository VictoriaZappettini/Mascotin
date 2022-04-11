import NavBar from "../components/NavBar";
//import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";

const Home =() =>{
    return(
        <div>
    <NavBar />
    <ItemDetailContainer />
    <br />
   { /* < ItemListContainer greeting= "Hola Item List Container!" /> */}
    </div>
    );
}

export default Home;