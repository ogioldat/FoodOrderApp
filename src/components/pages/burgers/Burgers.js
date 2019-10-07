import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {StyledBurgers} from "./Burgers.styled";
import Product from "../navs/product/Product";
import OrderBar from "../navs/order-bar/OrderBar";
import axios from "axios";

const Burgers = ({orders,inOrder,query}) => {
    const [products,setProducts] = useState([]);
    const data = (endpoint) => {
        axios
            .get(`http://192.168.50.40:8080/api/food/${endpoint}`)
            .then(res => {
                let readyData = res.data;
                for(let i of readyData) i.counter = 0;
                setProducts(readyData);
            })
            .catch(err => {console.log(err)})
    };

    useEffect(() => {data(query)},[]);

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
                        products.map(product => <Product
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

export default Burgers;