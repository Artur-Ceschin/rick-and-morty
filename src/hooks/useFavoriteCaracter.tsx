

import { ReactNode } from "react";
import { createContext, useEffect, useState, useContext } from "react";
import api from "../services/api";

type Caracters = {
    id: number;
    image: string;
    name: string;
    gender: string;
    status: string;
}


interface FavoriteCaracterContextProps {
    children: ReactNode
}

interface FavoriteCaracterData {
    favorite: Caracters[]
    handleAddFovoriteCaracter: (idFavorite: any) => void
}

const FavoriteCaracterContext = createContext<FavoriteCaracterData>(
    {} as FavoriteCaracterData
)

export function FavoriteCaracterProvider({ children }: FavoriteCaracterContextProps) {
    const [favorite, setFavorite] = useState<Caracters[]>(() => {
        const storageRepositories = localStorage.getItem('@rickAndMorty:favorites')

        if (storageRepositories) {
            return JSON.parse(storageRepositories)
        } else {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('@rickAndMorty:favorites', JSON.stringify(favorite))
        console.log(favorite)
    }, [favorite])

    async function handleAddFovoriteCaracter(idFavorite: any) {
        const caracterIndex = favorite.findIndex(data => data.id === idFavorite)
        if (caracterIndex < 0) {
            const response = await api.get(`${idFavorite}`)
            const caracter = response.data
            setFavorite([...favorite, caracter])
        } else {
            favorite.splice(caracterIndex, 1)
            setFavorite([...favorite])
        }
    }

    return (
        <FavoriteCaracterContext.Provider value={{ favorite, handleAddFovoriteCaracter }}>
            {children}
        </FavoriteCaracterContext.Provider>
    )
}

export function useFavoriteCaracter() {
    const context = useContext(FavoriteCaracterContext)
    return context
}