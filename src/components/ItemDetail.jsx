import {DetailContainer,WrapperDetail,ImgContainer,InfoContainer,Desc,
Price, Title, ImageDetail} from './StyledComp'
import ItemCount from './ItemCount';
import { useState } from 'react';
import Checkout from './Checkout';

const ItemDetail = ({item }) =>{
    const [itemcount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount (qty)
    }
    return(
    <DetailContainer>
        <WrapperDetail>
            <ImgContainer>
                <ImageDetail src={item.img} />
            </ImgContainer>
                    <InfoContainer>
                        <Title>{item.nombre}</Title>
                        <Desc>{item.descrip}</Desc>
                        <Price>$ {item.precio}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                </WrapperDetail>
                {
                    itemcount === 0
                    ? <ItemCount stock={item.stock} initial ={itemcount} onAdd={onAdd}></ItemCount>
                    : <Checkout />
                }
            </DetailContainer>
   

    )

}

export default ItemDetail;