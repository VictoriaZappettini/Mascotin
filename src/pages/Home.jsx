import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";

const Home =() =>{
    return(
        <div>
    <NavBar />
    <br />
    <ItemListContainer greeting= "Hola Item List Container!" />
    </div>
    );
}

export default Home;