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
    height:100vw;
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
  
  #sep {
    color:${({theme}) => theme.primaryDark};
    transform:rotate(-90deg);
    font-weight:lighter;
    margin:0;
  }
  
  .gap {
    width:10rem;
    min-height:15rem;
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
    transform: rotate(-90deg);
    position:relative
    width:15rem;
    height:80px;
    // flex-direction:column;
    align-self:center;
    display:flex;
    transition:filter .8s,text-decoration .8s;
    align-items:center;
    justify-content:space-around;
    margin:5rem 0;
    
    

    // margin-left:1rem;
    // display:flex;
    // align-items:center;
    // justify-content:center;
    // align-self:center;
    color:#bbb;
    user-select: none; 
    
    :last-child{
        background:green;
    }
   
    :hover {
        filter:grayscale(100%);
        text-decoration: line-through;
        text-decoration-color:red;
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
    }
    
    p {
        color:#212121;
        margin: 1rem 0 0;
        font-size:1.3rem;
    }
    
    #quan {
        margin: 0 0 1rem;
        font-size:.9rem;
    }
`;