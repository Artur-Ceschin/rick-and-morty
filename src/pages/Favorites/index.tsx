// import { Card } from "../../components/Card";
import { AiFillStar } from 'react-icons/ai'
import { Container } from "../../components/Card/styles";
import { Data } from "./styles";



export function Favorites() {
    return (
        <>
            <Data>

                <h1>Seus Favoritos</h1>
                <div>
                    <Container>
                        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />
                        <div>
                            <h3>Nome: Morty Smith</h3>
                            <h3>Sexo: Masculino</h3>
                            <h3>Status: Vivo</h3>
                        </div>
                        <AiFillStar size={20} color={"orange"} />
                    </Container>
                    <Container>
                        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />
                        <div>
                            <h3>Nome: Morty Smith</h3>
                            <h3>Sexo: Masculino</h3>
                            <h3>Status: Vivo</h3>
                        </div>
                        <AiFillStar size={20} color={"orange"} />
                    </Container>
                    <Container>
                        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />
                        <div>
                            <h3>Nome: Morty Smith</h3>
                            <h3>Sexo: Masculino</h3>
                            <h3>Status: Vivo</h3>
                        </div>
                        <AiFillStar size={20} color={"orange"} />
                    </Container>
                </div>
            </Data>



        </>
    )
}