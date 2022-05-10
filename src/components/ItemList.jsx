import Item from "./Item";
import { ProductsContainer } from "./StyledComp";

const ItemList = ({ items }) => {
    return (
        <>
        <ProductsContainer>
        {
  
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} precio={item.precio} stock={item.stock} img={item.img}
            descrip={item.descrip}/>)
           
            : <p>Cargando...</p>
        }
        </ProductsContainer>
        
        </>
    );
}
export default ItemList;