import ItemDetail from "./ItemDetail";
import customFetch from "../utils/promesaFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const {products} = require ('../utils/productos')


const ItemDetailContainer = () =>{

const [dato, setDato] = useState({});
const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

return (
    <ItemDetail item={dato} />
)
}

export default ItemDetailContainer;