import { Button } from '@material-ui/core';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart,Info, Summary,Bottom, TitleCart, TopText, Top, TopButton, SummaryItem, SummaryTitle, SummaryItemText, SummaryItemPrice,ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice} from './StyledComp';
import { Link } from 'react-router-dom';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
        <TitleCart>TU CARRITO😊 </TitleCart>
        <Top>
             <Link to='/'><TopButton>CONTINUAR COMPRANDO</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.clear}>Eliminar todos los productos</TopButton>
                    : <TopText>Tu carro esta vacio!</TopText>
                }
            </Top>

            {
                test.cartList.length> 0 && ( 
                    <ContentCart>
                        {
                            test.cartList.map(item =>
                                <Product key={item.id}>
                                <ProductDetail>
                                    <ImageCart src={item.img} />
                                    <Details>
                                    <span>
                                        <b>Product:</b> {item.nameItem}
                                    </span>
                                    <TopButton type="filled" onClick={() => test.removeItem(item.id)}>DELETE</TopButton>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                    <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                                    /
                                    <ProductAmount>$ {item.precio} each</ProductAmount>
                                    </ProductAmountContainer>
                                    <ProductPrice> el total: $ {test.calcTotalPerItem(item.id)} </ProductPrice>
                                </PriceDetail>
                                </Product>  
                              
                                )
                        }
                   
            </ContentCart>

                )
            }
            {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>Orden de compra </SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice> {test.calcSubTotal()} </SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes</SummaryItemText>
                                <SummaryItemPrice> {test.calcTaxes()} </SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>{test.calcTotal()}</SummaryItemPrice>
                            </SummaryItem>
                            <Button >CHECKOUT NOW</Button>
                        </Summary>
                }
            
        </WrapperCart>
    );
}


export default Cart;