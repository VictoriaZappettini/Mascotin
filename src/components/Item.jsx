import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';

import { ProductContainer, Circle, Image, Info, Icon } from './StyledComp';

const Item = ({ id, nombre, precio, stock, img, descrip }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={img} />
            <Info>
            <strong>{nombre}</strong>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {precio}</strong>
                </Icon>
                <Icon>
                    quedan {stock} unidades!<DescriptionOutlined />
                </Icon>
                <br/>
                <br/>
                <strong>{descrip}</strong>
            </Info>
        </ProductContainer>
    );
}

export default Item;

        