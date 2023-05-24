import { useEffect } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.backgroundColor = '#F2B807'

        return () => {
            document.body.style.backgroundColor = '#FFFFFF'
        }
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <p className={styles.textMain}>
                    <span className={styles.textMainBold}>Find</span> all your favorite {' '}
                    <span className={styles.textMainBold}>Pokemon</span>
                </p>
                <p className={styles.textSecondary}>
                    You can know the type of Pokemon, its strengths, disadvantages and abilities
                </p>
                <button className={styles.textButton} onClick={() => navigate('/list')}>
                    See pokemons
                </button>
            </div>
            <div className={styles.imageDiv}>
                <img src="/BannerComplete.png" className={styles.image}/>
            </div>
        </div>  
    )
}