import { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { firestoreC } from "../utils/firestoreFetch";
import { async } from "@firebase/util";




const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams(); //es un Hook
    
    useEffect(() => {
        firestoreC(idCategory)
    .then(result => setDatos(result))
    .catch(err => console.log (err))
    },[idCategory]);
        
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    
    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " items.");
    }

    return (
        <>
        <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;