import styled from "styled-components";

export const Data = styled.main`
    max-width: 1080px;
    margin: 0 auto;
    header {
        display: flex;
        align-items: center;
        gap: 20px;
        h1{
        text-align: center;
        font-size: 3.4rem;
        /* margin-bottom:2rem; */
        color: var(--green);
        }
        a{
            img{
                width: 50px;
                border-radius: 50%;
            }
        }
    }
    
    div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`