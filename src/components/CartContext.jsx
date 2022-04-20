import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCarList] = useState([])

    const clear = () => {
        setCarList([]);
    }
    const removeItem = (id) => {
        let myArray = cartList;
        let newArray = myArray.filter(function (item) { return item.id !== id })
        setCarList(newArray)
    }
    const addItem = (item, qty) => {
        let found = cartList.find(producto => producto.id === item.id);
        if ( found === undefined) {
            setCarList([
                ...cartList,
                {
                    id: item.id,
                    img: item.img,
                    nombre: item.nombre,
                    stock: item.stock,
                    precio: item.precio,
                    idCategory: item.idCategory,
                    descrip: item.descrip,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
        }
    }
    return (
        <CartContext.Provider value={{ cartList, clear, removeItem, addItem }} >
            {children}
        </CartContext.Provider>

    );
}
export default CartContextProvider;


