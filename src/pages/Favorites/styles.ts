import styled from "styled-components";

export const Data = styled.main`
    max-width: 1080px;
    margin: 0 auto;
    h1{
        text-align: center;
        font-size: 3.4rem;
        margin-bottom:2rem;
        color: var(--green);
    }
    > div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`