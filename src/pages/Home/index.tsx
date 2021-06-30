
import { FormEvent, useState } from 'react'

import { Header, Container, Error } from './styles'
import rickAndMortyImg from '../../assets/rick-and-morty.png'
import portalGif from '../../assets/portal.gif'
import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'
import api from '../../services/api'

type Caracters = {
    id: number;
    image: string;
    name: string;
    gender: string;
    status: string;
}

export function Home() {
    const [newCaracter, setNewCaracter] = useState('')
    const [inputError, setInputError] = useState('')
    const [caracters, setCaracters] = useState<Caracters[]>([])

    async function handleSearchCaracter(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        if (!newCaracter) {
            setInputError('Digite o nome do personagem')
            return
        }

        try {
            const response = await api.get(`/?name=${newCaracter}`)
            const caracter = response.data.results
            console.log(caracter)
            setCaracters(caracter)
            setNewCaracter('')
            setInputError('')
        } catch (err) {
            setInputError('Erro na busca por personagem')
        }
    }
    return (
        <>
            <Header>
                <img src={rickAndMortyImg} alt="Rick and Morty logo" />
                <div>
                    <h1>Procure pelo os seus personages preferidos</h1>
                    <div>
                        <h3>Acesse seus favoritos:</h3>
                        <Link to="/favorites"><img src={portalGif} alt="" /></Link>
                    </div>
                </div>
                <form onSubmit={handleSearchCaracter}>
                    <input
                        type="text"
                        placeholder="Procure pelo os seus personagens"
                        onChange={e => setNewCaracter(e.target.value)}
                        value={newCaracter}
                    />
                    <button type="submit">Procurar</button>
                </form>


                {inputError && <Error>{inputError}</Error>}
            </Header>

            <Container>
                {caracters.map(caracter => (<Card key={caracter.id} id={caracter.id} image={caracter.image} name={caracter.name} gender={caracter.gender} status={caracter.status} />))}
            </Container>

        </>
    )
}