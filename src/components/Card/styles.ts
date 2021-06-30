import styled from "styled-components";

// interface RadioBoxProps {
//     isActive: boolean;
//     activeColor: 'green' | 'red';
// }

// const colors = {
//     green: '#49AA26',
//     red: '#E92929'
// }

export const Container = styled.div`
    display: flex;
    background-color: var(--card-background);
    border-radius: 8px;
    margin: 20px;
    gap: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    transition: transform 0.4s;
    cursor: pointer;
    &:hover{
            transform: translateY(-10px);
        }
    img{
        width: 150px;
        height: 150px;
        border-radius: 8px 0 0 8px;
    }
    h3{ 
        color: white;
    }

    svg{
        
    }

 `