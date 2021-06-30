import { Container } from "./styles";
import Modal from 'react-modal'
import { useState } from "react";

import closeImg from '../../assets/close.svg'
import api from "../../services/api";
// import { AiFillStar } from 'react-icons/ai'

type CardProps = {
    id: number;
    image: string;
    name: string;
    gender: string
    status: string
}

type CaracterInfo = {
    id: number;
    image: string;
    name: string;
    gender: string
    status: string
}

export function Card({ id, image, name, gender, status }: CardProps) {
    const [isCaracterModalOpen, setIsCaracterModalOpen] = useState(false)
    const [caracterInfo, setCaracterInfo] = useState<CaracterInfo>()

    async function handleOpenCaracterModal(id: number) {
        setIsCaracterModalOpen(true)
        try {
            const response = await api.get(`${id}`)
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
                <div>
                    <h3>Nome: {name}</h3>
                    <h3>Sexo: {gender === 'Male' ? 'Masculino' : 'Feminino'}</h3>
                    <h3>Status: {status}</h3>
                </div>
                {/* <AiFillStar size={20} color={"orange"} /> */}
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
                <img src={caracterInfo?.image} alt={caracterInfo?.name} />
                <h2>{caracterInfo?.name}</h2>
                <h2>{caracterInfo?.gender}</h2>
                <h2>{caracterInfo?.status}</h2>
            </Modal>
        </>

    )
}