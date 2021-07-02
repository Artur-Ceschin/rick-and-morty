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

    @media (max-width:800px) {
        display: flex;
        flex-direction: column;
        > div{
            display: flex;
            flex-direction:column;
            img{
                width: 150px;
            }
        }
    }


`

export const Loading = styled.div`
    width: 100px;
    display: block;
    margin: 0 auto;
    text-align: center;
`

export const Container = styled.div`

    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--body);
    justify-items: center;

    @media (max-width:800px) {
        padding: 0 32px;
        display: grid;
        grid-template-columns: 1fr;
    }

`

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 0.5rem;
`