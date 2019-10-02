import React, {Component} from 'react';
import HamburgerMenu from "react-hamburger-menu";

class Burger extends Component {
    render() {
        return (
            <HamburgerMenu
                isOpen={this.props.open}
                menuClicked={this.props.menuClicked}
                width={30}
                height={25}
                strokeWidth={2}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            />
        );
    }
}

export default Burger;