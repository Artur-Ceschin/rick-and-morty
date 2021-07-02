import { Container } from "./styles";
import Modal from 'react-modal'
import { useState } from "react";

import closeImg from '../../assets/close.svg'
import api from "../../services/api";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useFavoriteCaracter } from "../../hooks/useFavoriteCaracter";

type CardProps = Omit<CardInfo, 'location'>

type CardInfo = {
    id: number;
    image: string;
    name: string;
    gender: string;
    status: string;
    location: {
        name: string
    }
}

export function Card({ id, image, name, gender, status }: CardProps) {
    const { handleAddFovoriteCaracter, favorite } = useFavoriteCaracter()
    const [isCaracterModalOpen, setIsCaracterModalOpen] = useState(false)
    const [caracterInfo, setCaracterInfo] = useState<CardInfo>()


    async function handleOpenCaracterModal(id: number) {
        setIsCaracterModalOpen(true)
        try {
            const response = await api.get(`/${id}`)
            const caracterInfo = response.data
            setCaracterInfo(caracterInfo)

        } catch (err) {
            console.log(err)
        }
    }

    function handleCloseCaracterModal() {
        setIsCaracterModalOpen(false)
    }


    return (
        <>
            <Container>
                <img src={image} alt={name} />
                <aside>
                    <h3>Nome: {name}</h3>
                    <h3>Sexo: {gender === 'Male' ? 'Masculino' : 'Feminino'}</h3>
                </aside>
                <button
                    onClick={() => handleOpenCaracterModal(id)}
                >
                    Acessar informações
                </button>
            </Container>

            <Modal
                isOpen={isCaracterModalOpen}
                onRequestClose={handleCloseCaracterModal}
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <button type="button" onClick={handleCloseCaracterModal} className="modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <div className="modal-info">
                    <img src={caracterInfo?.image} alt={caracterInfo?.name} />
                    <h2>Nome: <span>{caracterInfo?.name}</span></h2>
                    <h2>Gênero: <span>{caracterInfo?.gender === 'Male' ? 'Masculino' : 'Feminino'}</span></h2>
                    <h2>Status: <span>{caracterInfo?.status === "Dead" ? "Morto" : "Vivo"}</span></h2>
                    <h2>Última localização: <span>{caracterInfo?.location.name}</span></h2>
                </div>


                <button className="save-button" onClick={(() => handleAddFovoriteCaracter(id))}>
                    {favorite.findIndex(data => data.id === id) >= 0 ? <AiFillHeart size={35} color={"red"} /> : <AiOutlineHeart size={35} color={"red"} />}
                </button>


            </Modal>
        </>

    )
}