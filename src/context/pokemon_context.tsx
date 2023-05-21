import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import { getSpecificPokemon, listPokemon } from "../services/pokemon"
import { useLoading } from "./loading_context"

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
    backgroundColor: string
}

export interface PokemonContextInterface{
    pokemonList: PokemonData[]
    pokemonCount: number
    searchValue: string
    handleGetPrevPage(): void
    handleGetNextPage(): void
    handleChangeSearchValue(value: string): void
}

export const pokemonContextDefault: PokemonContextInterface = {
    pokemonList: [],
    pokemonCount: 0,
    searchValue: "",
    handleGetPrevPage: () => {},
    handleGetNextPage: () => {},
    handleChangeSearchValue: () => {}
}

const PokemonContext = createContext<PokemonContextInterface>(pokemonContextDefault)

export function usePokemon(){
    return useContext(PokemonContext)
}

interface ProviderProps{
    children: ReactNode
}

export const PokemonProvider = ({children}: ProviderProps) => {
    const loading = useLoading()
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([])
    const [filteredPokemonList, setFilteredPokemonList] = useState<PokemonData[]>([])
    const [page, setPage] = useState<number>(1)
    const [count, setCount] = useState<number>(0)
    const rows = useRef<number>(9)
    const [searchValue, setSearchValue] = useState<string>("")

    useEffect(() => {
        getPokemonList(page)
    }, [])

    const getPokemonList = async (page: number) => {
        loading.show()
        try {
            const generalList = await listPokemon(page, rows.current)
            const pokemons = await Promise.all(generalList.results.map(async (pokemon) => await getSpecificPokemon(pokemon.name)))
            setCount(generalList.count)
            setPokemonList(pokemons)
            applyFilters(pokemons, searchValue)
        } catch (error) {
            
        }
        loading.hide()
    }

    const applyFilters = (pokemonList: PokemonData[], searchValue: string) => {
        const filteredList = pokemonList.filter(pokemonData => {
            let isOk = true
            if(!pokemonData.name.toLowerCase().includes(searchValue.toLowerCase()))
                isOk = false
            return isOk
        })
        setFilteredPokemonList(filteredList)
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

    const handleChangeSearchValue = (value: string) => {
        setSearchValue(value)
        applyFilters(pokemonList, value)
    }

    return (
        <PokemonContext.Provider value={{
        pokemonList: filteredPokemonList, 
        pokemonCount: count, 
        searchValue: searchValue,
        handleGetPrevPage, 
        handleGetNextPage,
        handleChangeSearchValue: handleChangeSearchValue
        }}>
            {children}
        </PokemonContext.Provider>
    )
}