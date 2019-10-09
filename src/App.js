import React, {useState,useEffect} from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './layout/global'
import { theme } from './layout/theme'
import { Burger, Menu } from './components'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Products from './components/pages/product-site/Products'
import OrderFinal from "./components/pages/order-page/OrderFinal";
import axios from "axios";

//TODO:`get Tkaczyk's data, style menu-bar, order finalization, POST request`


function App() {
    const [open,setOpen] = useState(false);
    const [orders,inOrder] = useState([]);
    const [products,setProducts] = useState([]);
    const [request,setRequest] = useState('photos');

    // console.log(orders);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/'+request)
            .then(res => {
                let readyData = res.data.slice(0,10);
                for(let i of readyData) {
                    i.counter = 0;
                    i.isVegan = true;
                }
                setProducts(readyData);
            })
            .catch(err => {console.log(err)})
    },[request]);

    document.getElementsByTagName('body')[0]
        .addEventListener('click', () => {if(open) setOpen(!open)});


  return (
          <Router>
              <ThemeProvider theme={theme}  >
                  <GlobalStyles/>
                  <>
                      <div>
                          <Menu open={open} setOpen={setOpen} > </Menu>
                          <Burger open={open} setOpen={setOpen} > </Burger>
                      </div>
                  </>
                  <Route exact path="/" component={() =>
                      <Products orders={orders}
                                inOrder={inOrder}
                                products={products}
                                query={'photos'}
                                setRequest={setRequest}
                                request={request}
                      />}
                  />

                  <Route exact path="/burgers" component={() =>
                      <Products orders={orders}
                                inOrder={inOrder}
                                products={products}
                                query={'photos'}
                                setRequest={setRequest}
                                request={request}
                      />}
                  />

                  <Route exact path="/drinks" component={() =>
                      <Products orders={orders}
                                inOrder={inOrder}
                                products={products}
                                query={'photos'}
                                setRequest={setRequest}
                                request={request}
                      />}
                  />

                  <Route exact path="/desserts" component={() =>
                      <Products orders={orders}
                                inOrder={inOrder}
                                products={products}
                                query={'photos'}
                                setRequest={setRequest}
                                request={request}
                      />}
                  />

                  <Route exact path="/order_finalisation" component={() =>
                      <OrderFinal orders={orders}
                                  inOrder={inOrder}
                                  products={products}
                                  query={'photos'}
                                  setRequest={setRequest}
                                  request={request}
                      />}
                  />

              </ThemeProvider>
          </Router>
  );
}

export default App;
