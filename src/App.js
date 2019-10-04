import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './layout/global'
import { theme } from './layout/theme'
import { Burger, Menu } from './components'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Test from './components/Test'
import Burgers from './components/pages/burgers/Burgers'

function App() {
    const [open,setOpen] = useState(false);

  return (
      <Router>
              <Route exact path="/" component={Test} />
              <Route path="/burgers" component={Burgers} />

        <ThemeProvider theme={theme} >
            <>
                <GlobalStyles/>
                <Menu open={open} setOpen={setOpen} > </Menu>
                <Burger open={open} setOpen={setOpen} > </Burger>
            </>
        </ThemeProvider>
      </Router>
  );
}

export default App;
