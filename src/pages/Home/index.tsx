
import { FormEvent, useEffect, useState } from 'react'

import { Header, Container, Error, Loading } from './styles'
import rickAndMortyImg from '../../assets/rick-and-morty.png'
import portalGif from '../../assets/portal.gif'
import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'
import api from '../../services/api'
import { Footer } from '../../components/Footer'
import ReactLoading from 'react-loading';

type Caracters = {
    id: number;
    image: string;
    name: string;
    gender: string;
    status: string;
}

export function Home() {
    const [caracters, setCaracters] = useState<Caracters[]>([])
    const [newCaracter, setNewCaracter] = useState('')
    const [query, setQuery] = useState('')
    const [inputError, setInputError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCaracter();
        setLoading(true)
    }, [query])

    async function getCaracter() {
        try {
            const response = await api.get(`/?name=${query}`)
            const caracter = response.data.results
            console.log(caracter)
            setCaracters(caracter)
            setNewCaracter('')
            setInputError('')
            setLoading(false)

        } catch (err) {
            setInputError('Personagem não existe')
        }
    }

    function handleSearchCaracter(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setQuery(newCaracter)
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
            <Loading>

                {loading && <ReactLoading type={"spin"} color={'#149eb6'} height={100} width={100} />}


            </Loading>

            <Container>

                {!loading && caracters.map(caracter => (<Card key={caracter.id} id={caracter.id} image={caracter.image} name={caracter.name} gender={caracter.gender} status={caracter.status} />))}
            </Container>

            <Footer />

        </>
    )
}