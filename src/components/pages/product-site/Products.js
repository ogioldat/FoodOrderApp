import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {StyledBurgers} from "./Products.styled";
import ProductsSingle from "./product/ProductsSingle";
import OrderBar from "../navs/order-bar/OrderBar";

const Products = ({orders,inOrder,query,products,setRequest}) => {

    setRequest(() => query);

    const addToOrder = (details) => {

        details.counter++;
        if(details.counter !== 0){
            if(!orders.includes(details)){
                inOrder(orders => [...orders,details]);
            } else {
                inOrder(prev => [...prev]);
            }
        }
    };

    const decrement = (order) => {
        if(order.counter > 1 ) {
            order.counter--;
        }
        else {
            inOrder(orders.filter(o => o!==order));
        }
        inOrder(prev => [...prev]);
    };


    return (
        <>
            <StyledBurgers>
                <section>
                    <h1>Na co masz dzisiaj ochotę?  </h1>
                </section>
                <main>
                    {
                        products.map(product => <ProductsSingle
                                addToOrder={addToOrder}
                                key={product.id}
                                orders={orders}
                                details={product}/>)}

                </main>
                <OrderBar
                    orders={orders}
                    decrement={decrement}
                >
                </OrderBar>
            </StyledBurgers>

        </>
    )
};

export default Products;