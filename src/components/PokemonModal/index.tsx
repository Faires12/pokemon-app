import {useEffect} from 'react'
import { PokemonData, typeColor } from '../../context/pokemon_context'
import styles from './styles.module.css'

interface Props{
    pokemonData: PokemonData
    handleClose(): void
}

export const PokemonModal = ({pokemonData, handleClose}: Props) => {

    useEffect(() => {
        window.scroll(0, 0)
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.main} style={{backgroundColor: pokemonData.backgroundColor}}>
                <div className={styles.closeX} onClick={handleClose}>
                    X
                </div>
                <div className={styles.imgDiv}>
                    <div className={styles.imgDivTop}>
                        {pokemonData.name}
                    </div>
                    <img src={pokemonData.sprite}
                        className={styles.image}
                    />
                    <div className={styles.imgDivBottom}>
                        {
                            pokemonData.types.map((type, i) => (
                            <div className={i === 0 ? styles.type : styles.typeMargin} 
                            style={{backgroundColor: typeColor[type]}}>{type}</div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.infosDiv}>
                    <div className={styles.infosDivHeader}>
                        <div className={styles.infosDivHeaderTitle}>
                            {pokemonData.name}
                        </div>
                        <div className={styles.infosDivHeaderInfos}>
                            <div className={styles.infosDivHeaderGeneration}>
                                Generation 1
                            </div>
                            <div className={styles.infosDivHeaderId}>
                                {pokemonData.id}
                            </div>
                        </div>
                        <div className={styles.infosDivHeaderTypes}>
                            {
                                pokemonData.types.map((type, i) => (
                                <div className={i === 0 ? styles.type : styles.typeMargin} 
                                style={{backgroundColor: typeColor[type]}}>{type}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.infosDivAbilities}>
                        <p>Abilities</p>
                        <div>
                            {
                                pokemonData.abilities.map((ability, i) => (
                                    <>
                                        {ability} {i === pokemonData.abilities.length - 1 ? ' ' : ' - '}
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.infosDivGeneralStats}>
                        <div className={styles.infosDivGeneralStatsStat}>
                            <p>Healthy Points</p>
                            <p className={styles.infosDivGeneralStatsStatBold}>{pokemonData.hp}</p>
                            <div className={styles.infosDivGeneralStatsStatHealthBar}></div>
                        </div>
                        <div className={styles.infosDivGeneralStatsStat}>
                            <p>Experience</p>
                            <p className={styles.infosDivGeneralStatsStatBold}>{pokemonData.exp}</p>
                            <div className={styles.infosDivGeneralStatsStatExpBar}></div>
                        </div>
                    </div>
                    <div className={styles.infosDivStats}>
                        <div className={styles.infosDivStat}>
                            <div className={styles.infosDivStatValue}>{pokemonData.defense}</div>
                            <div className={styles.infosDivStatName}>Defense</div>
                        </div>
                        <div className={styles.infosDivStat}>
                            <div className={styles.infosDivStatValue}>{pokemonData.attack}</div>
                            <div className={styles.infosDivStatName}>Attack</div>
                        </div>
                        <div className={styles.infosDivStat}>
                            <div className={styles.infosDivStatValue}>{pokemonData.spAttack}</div>
                            <div className={styles.infosDivStatName}>Sp Attack</div>
                        </div>
                        <div className={styles.infosDivStat}>
                            <div className={styles.infosDivStatValue}>{pokemonData.spDefense}</div>
                            <div className={styles.infosDivStatName}>Sp defense</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}