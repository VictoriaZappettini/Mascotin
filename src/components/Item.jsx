import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { ProductContainer, Circle, Image, Info, Icon } from './StyledComp';
import { Link } from 'react-router-dom';

const Item = ({ id,precio,stock, img }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={img} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {precio}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />solo quedan {stock} unidades!
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}><InfoOutlined />Detalle</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;