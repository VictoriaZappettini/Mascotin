import ItemDetail from "./ItemDetail";
import customFetch from "../utils/promesaFetch";
import { useEffect, useState } from "react";
const {products} = require ('../utils/productos')


const ItemDetailContainer = () =>{

const [dato, setDato] = useState({});

useEffect(()=> {
    customFetch (2000,products[1])
    .then(result => setDato (result))
    .catch(err => console.log(err))

},[]);

return (
    <ItemDetail item={dato} />
)

}

export default ItemDetailContainer;