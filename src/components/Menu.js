import React, {Component} from 'react';
// import { stack as Menu } from 'react-burger-menu'
import '../assets/styles/menu.css'
// import HamburgerButton from "./hamburger-button";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from './Test'



class MenuNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen : false,
            hamButtonClicked : true,
            open: true
        }
    }

    // handleClick() {
    //     this.setState({
    //         open: !this.state.open
    //     });
    // }

    onSelect= (selected) => {
    // Add your code here
    };

    render() {
        return (
            <>
                <Router>
                    <Route render={({ location, history }) => (
                        <React.Fragment>
                            <SideNav
                                style={sideNav}
                                onSelect={(selected) => {
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }}
                            >
                                <SideNav.Toggle />
                                <SideNav.Nav defaultSelected="home">
                                    <NavItem eventKey="home">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Home
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="devices">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Devices
                                        </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                            <main>
                                <Route path="/" exact component={props => <Test />} />
                                <Route path="/home" component={props => <Test />} />
                                <Route path="/devices" component={props => <Test />} />
                            </main>
                        </React.Fragment>
                    )}
                    />
                </Router>


                 {/*<div id="outer-container">*/}
                 {/*    <Menu*/}
                 {/*        isOpen={this.state.menuOpen}*/}
                 {/*        pageWrapId={ "page-wrap" }*/}
                 {/*        outerContainerId={ "outer-container" }*/}
                 {/*        customBurgerIcon={*/}
                 {/*            <HamburgerButton*/}
                 {/*            isClicked={this.state.hamButtonClicked}*/}
                 {/*            isOpen={this.state.open}*/}
                 {/*        /> }*/}
                 {/*    >*/}
                 {/*        <p>Twój stary</p>*/}
                 {/*        <p>Twój stary</p>*/}
                 {/*        <p>Twój stary</p>*/}
                 {/*    </Menu>*/}
                 {/*    <div id="page-wrap">*/}
                 {/*        Wrapper*/}
                 {/*    </div>*/}
                 {/*</div>*/}


            </>
        );
    }
}

export default MenuNav;



const sideNav = {
  background:'blue',
  width:'10%',
  height:'100vh',
  // display:'flex',
};