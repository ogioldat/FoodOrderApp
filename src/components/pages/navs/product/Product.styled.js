import styled from "styled-components";

export const StyledProduct = styled.div`
    width:30%;
    height:27rem;
    min-width:30%;  
    user-select: none;
    border-radius:.3rem;
    background:white;
    // border: .1rem solid ${({ theme }) => theme.primaryDark};  
    box-shadow: ${({theme}) => theme.shadow};
    margin: 1rem;
    
    display:flex;
    align-items:center;
    text-align:center;
    flex-direction:column;
    
    transition: box-shadow .5s,transform .2s;
    
    :hover {
        box-shadow: 0 0 20px 10px rgba(0,0,0,.17);
        transform:scale(1.015);
        cursor:pointer;
    }
    
    img {
        width:15rem;
        height:15rem;
        min-height:15rem;
        margin-top:2rem;
    }
    
    #name-price {
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        margin:1.5rem;
    }
    
    #name-price * {
        margin:.2rem;
        font-size:1rem;
    }
    
    #add-button {
        position:absolute;
        align-self:flex-end;
        justify-self:flex-start;
        font-weight:bolder;
        
    }
    
    h2 {
        font-size:2rem !important;
        text-transform:uppercase;
        font-weight:lighter;
    }
    
    p{
        margin:0;
        padding:.5rem;
    }
    
    .description {
        width: 80%;
        height: 1rem;
        text-align:center;
        display:flex;
        align-items:center;
    }
    
    .description:before,
     .description:after{
        content:'';
        display:flex;
        margin:.5rem;
        background:${({ theme }) => theme.primaryDark};
        width:1.5rem;
        height:1px;
    }
    
    
`;