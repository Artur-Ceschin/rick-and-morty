import styled from "styled-components";

export const Data = styled.main`
    background: var(--body);
    height:100vh;
    header {
        max-width: 1080px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 20px;
        h1{
        text-align: center;
        font-size: 3.4rem;
        color: var(--green);
        }
        a{
            img{
                width: 50px;
                border-radius: 50%;
            }
        }
        @media (max-width:800px) {
            display: flex;
            flex-direction: column;
            h1{
                margin-top: 1rem;
            }
        }
    }
    
     > div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        @media (max-width:800px) {
            padding: 0 32px;
            display: grid;
            grid-template-columns: 1fr;
        }
    }
`