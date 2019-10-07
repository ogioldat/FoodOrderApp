import React, {useState, useEffect} from 'react';
import {StyledOrderBar, StyledBar, AddedOrder} from "./OrderBar.styled";
import { Badge, Button } from 'reactstrap'


const OrderBar = ({orders,decrement}) => {



    return (
        <>
            <StyledOrderBar>
                <StyledBar>Twoje zamówienie</StyledBar>
                <div id={'shader'}> </div>
                <div id={'overflow-div'}>
                    {
                        orders.map(order => (
                                <div key={order.id}>
                                    <AddedOrder onClick={() => decrement(order)}>
                                        <img src={"http://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png"}
                                             alt="kanapeczka"/>
                                        <div>
                                            <p>{order.name}</p>
                                            <p id='quan'>ILOŚC:
                                                <Badge color='dark'>{order.counter}</Badge></p>
                                        </div>
                                    </AddedOrder>
                                </div>
                            )
                        )
                    }
                </div>
                <div id={'shader-r'}> </div>
                <Button id='order-butt' color={'primary'}>Zamów</Button>
            </StyledOrderBar>
        </>
    )
};

export default OrderBar;
