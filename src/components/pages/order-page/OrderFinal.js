import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {StyledBurgers} from '../product-site/Products.styled';
import {OrdersContainer, SingleOrder} from "./OrderFinal.styled";

const OrderFinal = ({orders}) => {
    console.log(orders);
    return (
        <>
            <StyledBurgers>
                <section>
                    <h1>Oto twoje zamówienie!</h1>
                </section>
                <OrdersContainer>
                    {/*{*/}
                    {/*    orders.map(order => {console.log(order)})*/}
                    {/*}*/}
                </OrdersContainer>
            </StyledBurgers>
        </>
    )
};

export default OrderFinal;