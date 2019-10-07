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

    //

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
                               query={'burgers'}
                      />}
                  />

                  <Route exact path="/burgers" component={() =>
                      <Burgers orders={orders}
                        inOrder={inOrder}
                        query={'burgers'}
                      />}
                  />

                  <Route exact path="/drinks" component={() =>
                      <Burgers orders={orders}
                               inOrder={inOrder}
                               query={'drinks'}
                      />}
                  />

                  <Route exact path="/desserts" component={() =>
                      <Burgers orders={orders}
                               inOrder={inOrder}
                               query={'desserts'}
                      />}
                  />

              </ThemeProvider>
          </Router>
  );
}

export default App;
