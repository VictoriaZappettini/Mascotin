import {DetailContainer,WrapperDetail,ImgContainer,InfoContainer,Desc,
Price, Title, ImageDetail} from './StyledComp'
import ItemCount from './ItemCount';

const ItemDetail = ({item }) =>{
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
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
                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                    </InfoContainer>
                </WrapperDetail>
                
            </DetailContainer>
   

    )

}

export default ItemDetail;