import { PaginationPoints } from '../../components/PaginationPoints'
import { PokemonCard } from '../../components/PokemonCard'
import { SearchBar } from '../../components/SearchBar'
import { usePokemon } from '../../context/pokemon_context'
import styles from './styles.module.css'

export const PokemonList = () => {
  const {pokemonList, searchValue, handleGetPrevPage, handleGetNextPage, handleChangeSearchValue} = usePokemon()
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <div className={styles.division}>
            <SearchBar value={searchValue} onChange={handleChangeSearchValue}/>
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
