import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import customFetch from "../utils/promesaFetch";
const { products } = require('../utils/productos');

const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([]);
    
    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <h1>{props.greeting}</h1>
            <ItemList items={datos} />
        <ItemCount stock={5} initial={1} onAdd={onAdd}  />
          
        </>
    );
}

export default ItemListContainer;