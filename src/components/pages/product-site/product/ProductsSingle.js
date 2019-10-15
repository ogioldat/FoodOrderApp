import React from 'react';
import {StyledProduct} from "./ProductsSingle.styled";
import { Badge, Button } from 'reactstrap'
import veganLogo from '../../../../assets/images/veganLogo.jpg'

const ProductsSingle = ({details,addToOrder}) => {
    return (
        <>
            <StyledProduct isVegan={details.isVegan}>

                <Button
                    onClick={() => addToOrder(details)}
                    id={'add-button'}>
                    +</Button>
                <img src={details.imageUrl}
                     alt="food"/>
                <div id={'name-price'}>
                    <h2>{
                        // details.name
                        details.name
                    }</h2>
                    <Badge color='dark'>{
                        details.price
                        // details.price
                    }zł</Badge>
                </div>

                <div className={'description'}>
                    <p>{
                        details.description
                        // details.description
                    }</p>
                </div>
                <Badge color={'dark'} className={'size'}>{
                    // details.size
                    details.size
                }</Badge>
                <span className={'veganBadge'}>
                    <p>Vegan!
                    </p>
                </span>

            </StyledProduct>
        </>
    )
};

export default ProductsSingle;
