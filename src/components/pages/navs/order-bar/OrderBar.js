import React from 'react';
import {StyledOrderBar, StyledBar, AddedOrder} from "./OrderBar.styled";
import { Badge, Button } from 'reactstrap'
import { Link } from 'react-router-dom';

const OrderBar = ({orders,decrement}) => {

    return (
        <>
            <StyledOrderBar>
                <StyledBar>Twoje zamówienie</StyledBar>
                <div id={'shader'}> </div>
                <div id={'overflow-div'}>
                    <div className="gap"> </div>
                    {
                        orders.map(order => (
                                    <React.Fragment key={order.id}>

                                        <AddedOrder onClick={() => decrement(order)}>
                                            <img src={"http://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png"}
                                                 alt="kanapeczka"/>
                                            <div>
                                                <p>{order.title.slice(0,10)}</p>
                                                <p id='quan'>ILOŚC:
                                                    <Badge color='dark'>{order.counter}</Badge></p>
                                            </div>
                                            <Badge color={'primary'}>{order.id*order.counter}zł</Badge>
                                        </AddedOrder>
                                        <p id="sep">|</p>
                                    </React.Fragment>
                            )
                        )
                    }
                    <div className="gap"> </div>
                </div>
                <div id={'shader-r'}> </div>
                <Button
                    // onClick={() => {wid}}
                    id='order-butt'
                    color={'primary'}
                    onClick={() => {window.location.pathname = '/order_finalisation'}}
                >
                    {/*<Link to={'/order_finalisation'}>*/}
                        Zamów
                    {/*</Link>*/}
                </Button>
            </StyledOrderBar>
        </>
    )
};

export default OrderBar;
