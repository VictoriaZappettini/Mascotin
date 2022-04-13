import { useEffect, useState } from "react";
import ItemList from './ItemList';
import customFetch from "../utils/promesaFetch";
import { useParams } from "react-router-dom";
const { products } = require('../utils/productos');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams(); //es un Hook
    
    useEffect(() => {
        if (idCategory == undefined){
        customFetch(1000, products)
        .then (result => setDatos(result))
        .catch(err => console.log(err))
        }else{
            customFetch(1000,products.filter(item => item.idCategory === idCategory))
            .then (result => setDatos(result))
            .catch(err => console.log(err))
        }
    },[idCategory]);
        

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;