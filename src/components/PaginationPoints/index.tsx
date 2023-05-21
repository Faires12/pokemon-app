import styles from './styles.module.css'

interface Props{
  clickPrev(): void
  clickNext(): void
}

export const PaginationPoints = ({clickPrev, clickNext}: Props) => {
  return (
    <div className={styles.main}>
        <div className={styles.point} onClick={clickPrev}></div>
        <div className={styles.pointCenter}></div>
        <div className={styles.point} onClick={clickNext}></div>
    </div>
  )
}
