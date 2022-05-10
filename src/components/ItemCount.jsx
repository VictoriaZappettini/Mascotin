import { Button } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { ProductAmountContainer, ProductAmount } from './StyledComp';


const ItemCount = ({ stock , initial, onAdd }) => {


    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);


const increment = () => {
    if (count < stock) {
        setCount(count + 1);
    }
}

const decrement = () => {
    if (count > initial) {
        setCount(count - 1);
    }
}

return (
    <ProductAmountContainer>
    <Button variant="text" onClick={increment}><Add /></Button>
    <ProductAmount>{count}</ProductAmount>
    <Button variant="text" onClick={decrement}><Remove /></Button>
    {
        stock
        ? <Button variant="contained" color="secondary" onClick={() => onAdd(count)}>Añadir al carro</Button>
        : <Button variant="contained" disabled>Añadir al carro</Button>
    }
</ProductAmountContainer>
);
    
}

export default ItemCount;