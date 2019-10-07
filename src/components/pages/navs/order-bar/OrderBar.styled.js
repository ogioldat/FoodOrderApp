import styled from "styled-components";

export const StyledOrderBar = styled.footer`
  width: 100vw;
  height: 80px;
  background: white;
  position:fixed;
  justify-self:center;
  box-shadow: ${({theme}) => theme.shadow};
  left:0;
  right:0;
  bottom:0;
  z-index:1;
  color:${({ theme }) => theme.primaryLight}
  
  display:flex;
    align-items:center;
  
  #order-butt {
    width:7rem;
    position:absolute;
    margin-right:2rem;
    white-space: nowrap
    display:flex;
    z-index:4;
    align-items:center;
    justify-content:center;
    right:0;   
    }
    
  #overflow-div {
    display:flex;
    flex-direction:column-reverse;
    align-items:center;
    justify-items:center;
    height:90vw;
    width:80px;
    min-width:80px;
    min-height:90vw;
        
    overflow-y: auto;
    overflow-x: hidden;
    
    transform: rotate(90deg);
    transform-origin: right top;
    
    position:absolute;
    right:0;
    top:100%;
    
  }
  #overflow-div div {
  transform: rotate(90deg);
    align-self:center;
    display:flex;
    margin:.5rem 0;
    flex-direction:column;
    min-width:15rem;
    
  }
  
  .gap {
    width:80px;
    height:1rem;
    margin-left:1rem;
  }
  
  
  a {
    transform: rotate(-90deg);
  }
  
  
  #overflow-div::-webkit-scrollbar {width: 0 !important; }
  
  #shader,
   #shader-r{
    position:absolute;
    width:15vw;
    height:80px;
    background:blue;
    z-index:2;
    background:linear-gradient(90deg,white 70%,transparent)
  }
  
  #shader-r {
    right:0;
    background:linear-gradient(-90deg,white 60%,transparent)
  }
  
  
`;

export const StyledBar = styled.div`
    width:10rem;
    position:absolute;
    white-space: nowrap
    display:flex;
    z-index:4;
    align-items:center;
    justify-content:center;
    background:#212121;
    
    margin:0 3rem 0 1rem;
    border-radius:.3rem;
    padding:.5rem .7rem;
`;

export const AddedOrder = styled.div`
    margin-left:1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    align-self:center;
    color:#bbb;
    
    user-select: none; 
   
    :hover {
        background:rgba(0,0,0,.3);
        cursor:pointer;
    }

    
    div {
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    
    img {
        width:3rem;
        height:3rem;
        border-radius:50%;
        transform: rotate(90deg);
    }
    
    p {
        color:#212121;
        margin: 2rem 0 0;
        font-size:1.3rem;
    }
    
    #quan {
        margin: 0 0 2rem;
        font-size:.9rem;
    }
`;