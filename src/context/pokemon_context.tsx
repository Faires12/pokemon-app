import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import { getSpecificPokemon, listPokemon } from "../services/pokemon"

export interface PokemonData{
    id: number
    name: string
    exp: number
    sprite: string
    hp: number
    attack: number
    defense: number
    spAttack: number
    spDefense: number
    abilities: string[]
    types: string[]
    averageColor: string
}

export interface PokemonContextInterface{
    pokemonList: PokemonData[]
    pokemonCount: number
    handleGetPrevPage(): void
    handleGetNextPage(): void
}

export const pokemonContextDefault: PokemonContextInterface = {
    pokemonList: [],
    pokemonCount: 0,
    handleGetPrevPage: () => {},
    handleGetNextPage: () => {}
}

const PokemonContext = createContext<PokemonContextInterface>(pokemonContextDefault)

export function usePokemon(){
    return useContext(PokemonContext)
}

interface ProviderProps{
    children: ReactNode
}

export const PokemonProvider = ({children}: ProviderProps) => {
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const rows = useRef(10)

    useEffect(() => {
        getPokemonList(page)
    }, [])

    const getPokemonList = async (page: number) => {
        try {
            const generalList = await listPokemon(page, rows.current)
            const pokemons = await Promise.all(generalList.results.map(async (pokemon) => await getSpecificPokemon(pokemon.name)))
            setCount(generalList.count)
            setPokemonList(pokemons)
        } catch (error) {
            
        }
    }

    const handleGetPrevPage = () => {
        if(page === 1) return
        getPokemonList(page - 1)
        setPage(prev => prev - 1)
    }

    const handleGetNextPage = () => {
        if((page + 1) * rows.current > count) return
        getPokemonList(page + 1)
        setPage(prev => prev + 1)
    }

    return (
        <PokemonContext.Provider value={{pokemonList, pokemonCount: count, handleGetPrevPage, handleGetNextPage}}>
            {children}
        </PokemonContext.Provider>
    )
}