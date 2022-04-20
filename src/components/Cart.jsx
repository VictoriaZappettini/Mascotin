import { Button } from '@material-ui/core';
import { useContext} from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './StyledComp';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>TU CARRITO😊 </TitleCart>
            <Button type="filled" color="secondary" onClick={test.clear}>Eliminar todos</Button>
            {
                test.cartList.length> 0 && ( 
                    <ContentCart>
                        {
                            test.cartList.map(item =>
                                <Product>
                    <ProductDetail>
                        <ImageCart src={item.img} />
                        <Details>
                        <span>
                            <h3>Producto:</h3> <h2>{item.nombre}</h2>
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>$ {item.precio} cada uno</ProductPrice>
                    </PriceDetail>
                    <Button type="filled" color="secondary" onClick={() => test.removeItem(item.id)}>BORRAR</Button>
                    </Product> )
                        }
                   
            </ContentCart>
                )
            }
            
        </WrapperCart>
    );
}

export default Cart;