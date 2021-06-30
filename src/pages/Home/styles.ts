import styled from "styled-components";


export const Header = styled.header`
    text-align: center;
    padding: 32px;
    max-width: 1080px;
    margin: 0 auto;
    > div {
        display: flex;
        a{
            img{
                border-radius: 50%;
            }
        }
        h3{
            color: var(--button);
        }
    }
    img{
        width: 300px;
    }
    h1{
        font-size: 3.4rem;
        margin-bottom:2rem;
        color: var(--green);
    }

    form {
        margin-top: 1rem;
        input{
        width: 50%;
        padding: 1rem;
        border: 0;
        border-radius: 4px 0  0 4px;
        }
        button {
            padding: 1rem;
            background-color: var(--button);
            color: white;
            border-radius: 0px 4px 4px 0px;
        }
    }
    a{
        text-decoration: none

    }
`

export const Container = styled.div`
    background-color: var(--body);
    /* width: 100%; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

`

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 0.5rem;
`