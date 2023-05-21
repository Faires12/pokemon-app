import { PaginationPoints } from '../../components/PaginationPoints'
import { PokemonCard } from '../../components/PokemonCard'
import { usePokemon } from '../../context/pokemon_context'
import styles from './styles.module.css'

export const PokemonList = () => {
  const {pokemonList, handleGetPrevPage, handleGetNextPage} = usePokemon()
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.list}>
          {pokemonList.map(pokemonData => <PokemonCard  pokemonData={pokemonData}/>)}
        </div>
        <div className={styles.pagination}>
            <PaginationPoints clickPrev={handleGetPrevPage} clickNext={handleGetNextPage}/>
        </div>
      </div>
    </div>
  )
}
