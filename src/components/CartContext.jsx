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
    const calcuantItem = () =>{
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        
    }
    const calcTotalPerItem = (id) =>{
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].precio * cartList[index].qtyItem;
    }
    const calcTotal = () =>{
        return calcTaxes() + calcSubTotal();
    }
    const calcSubTotal = () =>{
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    const calcTaxes = () =>{
        return calcSubTotal() * 0.04;

    }
    return (
        <CartContext.Provider value={{ cartList, clear, removeItem, addItem,
        calcuantItem, calcTotal, calcTotalPerItem, calcSubTotal,calcTaxes }} >
            {children}
        </CartContext.Provider>

    );
}
export default CartContextProvider;


