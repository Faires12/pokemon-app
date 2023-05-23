import { useState } from 'react'
import { FilterMenu } from '../../components/FilterMenu'
import { PaginationPoints } from '../../components/PaginationPoints'
import { PokemonCard } from '../../components/PokemonCard'
import { PokemonModal } from '../../components/PokemonModal'
import { SearchBar } from '../../components/SearchBar'
import { PokemonData, usePokemon } from '../../context/pokemon_context'
import styles from './styles.module.css'

export const PokemonList = () => {
  const {pokemonList, searchValue, types, abilities,
    handleGetPrevPage, handleGetNextPage, handleChangeSearchValue, 
    handleChangeTypeFilter, handleChangeAbilityFilter} = usePokemon()
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(null)

  return (
    <>
      {selectedPokemon && <PokemonModal pokemonData={selectedPokemon} handleClose={() => setSelectedPokemon(null)}/>}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.division}>
              <SearchBar value={searchValue} onChange={handleChangeSearchValue}/>
          </div>
          <div className={styles.division}>
              <div className={styles.filtersDiv}>
                <FilterMenu title='Tipos' filters={types} clickFilter={handleChangeTypeFilter}/>
                <FilterMenu title='Ataque' filters={abilities} clickFilter={handleChangeAbilityFilter}/>
              </div>
          </div>
          <div className={styles.list}>
            {pokemonList.map(pokemonData => <PokemonCard pokemonData={pokemonData} 
            handleClick={() => setSelectedPokemon(pokemonData)}/>)}
          </div>
          <div className={styles.division}>
              <PaginationPoints clickPrev={handleGetPrevPage} clickNext={handleGetNextPage}/>
          </div>
        </div>
      </div>
    </>
  )
}
