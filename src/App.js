import React, {useState,useEffect} from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './layout/global'
import { theme } from './layout/theme'
import { Burger, Menu } from './components'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Burgers from './components/pages/burgers/Burgers'
import axios from "axios";


function App() {
    const [open,setOpen] = useState(false);
    const [orders,inOrder] = useState([]);
    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                let readyData = res.data.slice(0,10);
                for(let i of readyData) i.counter = 0;
                setProducts(readyData);
            })
            .catch(err => {console.log(err)})
    },[]);

  return (
          <Router>
              <ThemeProvider theme={theme} >
                  <GlobalStyles/>
                  <>
                      <div>
                          <Menu open={open} setOpen={setOpen} > </Menu>
                          <Burger open={open} setOpen={setOpen} > </Burger>
                      </div>
                  </>

                  <Route exact path="/" component={() =>
                      <Burgers orders={orders}
                        inOrder={inOrder}
                        products={products}
                        // amount={amount}
                        // setAmount={setAmount}
                      />}
                  />
                  <Route path="/burgers" component={Burgers} />
              </ThemeProvider>
          </Router>
  );
}

export default App;
