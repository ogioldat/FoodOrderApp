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
                {/*<div className="gap"> </div>*/}
                    {
                        orders.map(order => (
                                <div key={order.id}>
                                    <AddedOrder onClick={() => decrement(order)}>
                                        <img src={order.thumbnailUrl}  alt="kanapeczka"/>
                                        <div>
                                            <p>{order.title.slice(0,8)}</p>
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
