import React from 'react';
import HamburgerMenu from 'react-hamburger-menu'

const HamburgerButton = (props) => (
        <HamburgerMenu
            isOpen={true}
            menuClicked={true}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
        />
    );

export default HamburgerButton;