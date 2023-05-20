import { PokemonData } from "../context/pokemon_context";
import { getAverageRGB } from "../utils/image";
import { get } from "./generic";

export interface GeneralListInterface{
    count: number
    results: {
        name: string
        url: string
    }[]
}

export interface PokemonApiData{
    id: number
    name: string
    base_experience: number
    abilities: {
        ability: {name: string; url: string}
        is_hidden: boolean
        slot: number
    }[]
    sprites: {
        front_shiny: string
    }
    stats: {
        base_stat: number
        stat: {
            name: string
            url: string
        }
    }[]
    types: {
        slot: number
        type: {
            name: string
            url: string
        }
    }[]
}

async function parseApiData(data: PokemonApiData): Promise<PokemonData>{
    const averageColor = await getAverageRGB(data.sprites.front_shiny)
    return {
        id: data.id,
        name: data.name,
        abilities: data.abilities.map(ability => ability.ability.name),
        hp: data.stats.filter(stat => stat.stat.name === "hp")[0].base_stat,
        attack: data.stats.filter(stat => stat.stat.name === "attack")[0].base_stat,
        defense: data.stats.filter(stat => stat.stat.name === "defense")[0].base_stat,
        spAttack: data.stats.filter(stat => stat.stat.name === "special-attack")[0].base_stat,
        spDefense: data.stats.filter(stat => stat.stat.name === "special-defense")[0].base_stat,
        exp: data.base_experience,
        sprite: data.sprites.front_shiny,
        types: data.types.map(type => type.type.name),
        averageColor: averageColor
    }
}

export function listPokemon(page: number, rows: number): Promise<GeneralListInterface> {
    return get(`pokemon?offset=${(page - 1) * rows}&limit=${rows}`)
}

export async function getSpecificPokemon(name: string): Promise<PokemonData> {
    const res: PokemonApiData = await get(`pokemon/${name}`)
    return parseApiData(res)
}