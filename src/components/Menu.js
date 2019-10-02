import React, {Component} from 'react';
import { stack as Menu } from 'react-burger-menu'
import '../assets/styles/menu.css'
import HamburgerMenu from "react-hamburger-menu";
import SlideMenu from 'react-slide-menu'


class MenuNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            menuClicked: false,
            slideMenuActive: true,
        };
    }


    render() {
        const nav = [
            {id: 'home', label: 'Home', path: '/'},
            {id: 'about', label: 'About', path: '/about'},
            {id: 'discover', label: 'Discover', path: '/discover'},
        ];

        return (
            <>
                {/*<Menu*/}
                {/*    customBurgerIcon={<HamburgerMenu/>}*/}
                {/*    customCrossIcon={<HamburgerMenu*/}
                {/*        isOpen={true}*/}
                {/*        color={'white'}*/}
                {/*    />}*/}
                {/*    isOpen={this.state.isOpen}*/}
                {/*>*/}
                {/*    <p>Twój stary</p>*/}
                {/*    <p>Twój stary</p>*/}
                {/*    <p>Twój stary</p>*/}
                {/*</Menu>*/}

                <SlideMenu
                    active={this.state.slideMenuActive}
                    nav={nav}
                    reactRouter={false}
                    closeMenu={() => this.setState({slideMenuActive: false})}>
                    <div>
                        Sth be here
                    </div>
                </SlideMenu>
            </>
        );
    }
}


export default MenuNav;