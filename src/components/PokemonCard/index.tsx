import { PokemonData, typeColor } from '../../context/pokemon_context'
import styles from './styles.module.css'

interface Props {
  pokemonData: PokemonData
  handleClick(): void
}

export const PokemonCard = ({pokemonData, handleClick}: Props) => {
  return (
    <div className={styles.main} onClick={handleClick}>
      <div className={styles.infos}>
        <p className={styles.name}>{pokemonData.name}</p>
        <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>
                {pokemonData.attack}
              </div>
              <p className={styles.statName}>Attack</p>
            </div>
            <div className={styles.statMarginLeft}>
              <div className={styles.statValue}>
                {pokemonData.defense}
              </div>
              <p className={styles.statName}>Defense</p>
            </div>
        </div>
        <div className={styles.types}>
          {
            pokemonData.types.map((type, i) => (
              <div className={i === 0 ? styles.type : styles.typeMargin} 
              style={{backgroundColor: typeColor[type]}}>{type}</div>
            ))
          }
        </div>
      </div>
      <div className={styles.imageDiv} style={{background: pokemonData.backgroundColor}}>
        <img src={pokemonData.sprite}  
          className={styles.image}
        />
      </div>
    </div>
  )
}
