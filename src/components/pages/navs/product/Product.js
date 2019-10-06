import React from 'react';
import {StyledProduct} from "./Product.styled";
import { Badge, Button } from 'reactstrap'

const Product = ({details,addToOrder}) => {

    return (
        <>
            <StyledProduct>
                <Button
                    onClick={() => addToOrder(details)}
                    id={'add-button'}>
                    +</Button>
                <img src={details.thumbnailUrl} alt=""/>
                <div id={'name-price'}>
                    <h2>{details.title.slice(0,12)}</h2>
                    <Badge color='dark'>100$</Badge>
                </div>

                <div className={'description'}>
                    <p>{details.title}</p>
                </div>
            </StyledProduct>
        </>
    )
};

export default Product;
