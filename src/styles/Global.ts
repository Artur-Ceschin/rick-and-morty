import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #E5E5E5;
        --button:#FF810D;
        --special-text:#0C8A8C;
        --green: #5BE933;
        --card-background:#3C3E44;
        --body:#24282F;
        --title:#363F5F;
        --text:#969CB3;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        height: 100%;
        min-height: 100%;
        @media (max-width: 1080px) {
            font-size: 93.75%;//15px
        } 
        @media(max-width: 720px) {
            font-size: 85.5%;//12px
        }  
    }
    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
    body, input, textarea, button,select, option{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    button{
        cursor: pointer;
        border: 0;
    }
    h1, h2 ,h3, h4 ,h5 ,h6, strong {
        font-weight: 600;
    }
    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }
    .modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        right: 0;
        left: 0;

        top: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-content{
        width: 100%;
        max-width:576px;
        background: var(--background);
        position: relative;
        padding: 3rem;
        border-radius: 0.25rem;

        .modal-info{

            h2{
                span{
                    color: var(--button)
                }
            }
        }


        .save-button{
            display: block;
            margin: 0 auto;
            background: transparent;
            color: red;
            margin-top: 1rem;
            &:hover{
                filter: brightness(0.9);
            }
        }
    }
    .modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.7);
        }
        
    }
   
`