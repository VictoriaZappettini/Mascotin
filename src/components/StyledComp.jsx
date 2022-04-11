import styled from "styled-components";


//Elementos del item count
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 840px;
    padding: 10px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    `;

//ItemList
const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

//Item
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    diplay: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const ProductContainer = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 10px;
    height: 260px;
    width: 260px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: pink;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    font-size: 12px;
    width: 100px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.3);
    }
`;

const CircleTwo = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    
`;


//ItemDetail
const DetailContainer = styled.div`
`;

const WrapperDetail = styled.div`
    padding: 0px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const ImageDetail = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 10px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

export { 
    ProductAmountContainer, ProductAmount, 
    ProductsContainer, ProductContainer,
    Circle, Image, Info, Icon, CircleTwo ,
    Price, Desc, Title, InfoContainer, DetailContainer, WrapperDetail,ImageDetail, ImgContainer
   }