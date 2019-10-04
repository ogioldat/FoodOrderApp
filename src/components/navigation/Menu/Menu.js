import React from 'react';
import { StyledMenu, StyledOption } from './Menu.styled';
import burger from '../../../assets/icons/png/007-burger-1.png';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = ({open}) => {
    return (
        <StyledMenu open={open}>

            <Link to={"/burgers"}>
                <StyledOption>
                    <span>Burgers</span>
                    <span>
                        <img src={burger} alt="" width={'40px'}/>
                    </span>
                </StyledOption>
            </Link>

            <Link to={"/"}>
                <StyledOption>
                    <span>Desserts</span>
                    <span>
                        <img src={burger} alt="" width={'40px'}/>
                    </span>
                </StyledOption>
            </Link>


            <Link to={"/"}>
                <StyledOption>
                    <span>Drinks</span>
                    <span>
                        <img src={burger} alt="" width={'40px'}/>
                    </span>
                </StyledOption>
            </Link>

        </StyledMenu>
    )
};

Menu.propTypes = {
    open: bool.isRequired,
};
export default Menu;
