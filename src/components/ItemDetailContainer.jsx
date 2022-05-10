import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreUno } from "../utils/firestoreFetch";


const ItemDetailContainer = () =>{

const [dato, setDato] = useState({});
const { idItem } = useParams();

    useEffect(() => {
        firestoreUno(idItem)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

return (
    <ItemDetail item={dato} />
)
}

export default ItemDetailContainer;