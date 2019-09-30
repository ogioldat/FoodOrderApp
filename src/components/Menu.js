import React, {Component} from 'react';
import { stack as Menu } from 'react-burger-menu'
import '../assets/styles/menu.css'

class MenuNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen:false
        }
    }

    render() {
        return (
            <>
                <Menu
                    isOpen={this.state.menuOpen}
                >
                    <p>Twój stary</p>
                    <p>Twój stary</p>
                    <p>Twój stary</p>
                </Menu>
            </>
        );
    }
}

export default MenuNav;