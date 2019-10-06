import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  z-index:2;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out, box-shadow .7s;
  box-shadow: ${({open,theme}) => open ? theme.shadow : 0};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  
  a {
    font-size: 2rem;
    text-transform: uppercase;
    // padding: 2rem 0;
    font-weight: lighter;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
  
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  
`;

export const StyledOption = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    img {
        margin:15px;
        width:40px;
    }
`;













