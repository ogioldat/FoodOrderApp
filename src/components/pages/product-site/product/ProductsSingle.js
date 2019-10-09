import React from 'react';
import {StyledProduct} from "./ProductsSingle.styled";
import { Badge, Button } from 'reactstrap'
import veganLogo from '../../../../assets/images/veganLogo.jpg'

const ProductsSingle = ({details,addToOrder}) => {
    return (
        <>
            <StyledProduct isVegan={details.isVegan}>
                <img className={'veganBadge'} src={veganLogo} alt=""/>
                <Button
                    onClick={() => addToOrder(details)}
                    id={'add-button'}>
                    +</Button>
                <img src={details.thumbnailUrl}
                     alt="food"/>
                <div id={'name-price'}>
                    <h2>{
                        // details.name
                        details.title.slice(0,10)
                    }</h2>
                    <Badge color='dark'>{
                        details.id
                        // details.price
                    }zł</Badge>
                </div>

                <div className={'description'}>
                    <p>{
                        details.title
                        // details.description
                    }</p>
                </div>
                <Badge color={'dark'} className={'size'}>{
                    // details.size
                    details.id
                }</Badge>

            </StyledProduct>
        </>
    )
};

export default ProductsSingle;
