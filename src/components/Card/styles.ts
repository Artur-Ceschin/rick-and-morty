import styled from "styled-components";


export const Container = styled.div`
    background: white;
    border-radius: 8 0 0 8px;
    margin: 2rem;
    width: 400px;
    display: flex;
    flex-direction:column;
    align-items: center;
    border-radius: 8px;
    padding: 32px;
    gap: 20px;

    transition: transform 0.4s;

    &:hover{
        transform: translateY(-10px);
    }

    img{
        width: 150px;
        height: 150px;
        border-radius: 8px 0 0 8px;
    }
    
    button{
        background-color: white;
        color: var(--green);
        font-size: 1.2rem;
        font-weight: bold;
    }

    @media (max-width:800px) {
        width: 300px;
        margin: 0 auto;
        margin-top: 1rem;
    }


 `