import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} precio={item.precio} stock={item.stock} img={item.img}
            descrip={item.descrip}/>)
            : <p>Cargando...</p>
        }
        
        
        </>
    );
}
export default ItemList;