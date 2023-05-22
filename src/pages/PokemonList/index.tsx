import { FilterMenu } from '../../components/FilterMenu'
import { PaginationPoints } from '../../components/PaginationPoints'
import { PokemonCard } from '../../components/PokemonCard'
import { SearchBar } from '../../components/SearchBar'
import { usePokemon } from '../../context/pokemon_context'
import styles from './styles.module.css'

export const PokemonList = () => {
  const {pokemonList, searchValue, types, abilities,
    handleGetPrevPage, handleGetNextPage, handleChangeSearchValue, handleChangeTypeFilter, handleChangeAbilityFilter} = usePokemon()
  return (
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
          {pokemonList.map(pokemonData => <PokemonCard  pokemonData={pokemonData}/>)}
        </div>
        <div className={styles.division}>
            <PaginationPoints clickPrev={handleGetPrevPage} clickNext={handleGetNextPage}/>
        </div>
      </div>
    </div>
  )
}
