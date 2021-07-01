
import { Data } from "./styles";
import { Card } from '../../components/Card';
import { useFavoriteCaracter } from "../../hooks/useFavoriteCaracter";
import { Link } from "react-router-dom";
import portalGif from '../../assets/portal.gif'


export function Favorites() {
    const { favorite } = useFavoriteCaracter()
    console.log(favorite)
    return (
        <>
            <Data>

                <header>
                    <h1>Seus Favoritos</h1>
                    <Link to="/" ><img src={portalGif} alt="Voltar" /></Link>
                </header>
                <div>
                    {favorite.map(data => (<Card key={data.id} id={data.id} image={data.image} name={data.name} gender={data.gender} status={data.status} />))}
                </div>
            </Data>

        </>
    )
}