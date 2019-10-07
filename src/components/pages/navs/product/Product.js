import React from 'react';
import {StyledProduct} from "./Product.styled";
import { Badge, Button } from 'reactstrap'

const Product = ({details,addToOrder}) => {
    return (
        <>
            <StyledProduct>
                <Badge color={'dark'}>{details.size}</Badge>
                <Button
                    onClick={() => addToOrder(details)}
                    id={'add-button'}>
                    +</Button>
                <img src={'http://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png'} alt="food"/>
                <div id={'name-price'}>
                    <h2>{details.name}</h2>
                    <Badge color='dark'>{details.price}zł</Badge>
                </div>

                <div className={'description'}>
                    <p>{details.description}</p>
                </div>
            </StyledProduct>
        </>
    )
};

export default Product;
