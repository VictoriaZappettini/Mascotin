import ItemCount from "./ItemCount";

function ItemListContainer (props){
    
    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " artículos.");
    }
return(
    <>
        <h1>{props.greeting}</h1>
        
        <ItemCount stock={5} initial={1} onAdd={onAdd}  />
    </>
);
}

export default ItemListContainer;