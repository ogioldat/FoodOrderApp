import styled from 'styled-components'

export const StyledBurgers = styled.section`
    width:70rem;

    section {
        width:100%;
        height: 8rem;
        border-radius: 2rem 2rem 0 0;
        background-position:center;
        background-size:cover;
        background-repeat: no-repeat;
        
        display:flex;
        justify-content:center;
        align-items:center;
        
        h1 {
            font-size:3rem;
            color: ${({ theme }) => theme.primaryDark};
            background:white;
            font-weight:lighter;
        }
    }    
    
    main {
            width:100%;
            margin-bottom:100px;             
            display:flex;
            // justify-content:flex-end;
            align-items:center;
            flex-wrap:wrap;
        }
    
    
`;