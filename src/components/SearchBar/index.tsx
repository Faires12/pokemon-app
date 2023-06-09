import styles from './styles.module.css'

interface Props{
    value: string
    onChange(value: string): void
}

export const SearchBar = ({value, onChange}: Props) => {
    return (
        <input type='text' 
            value={value} 
            onChange={e => onChange(e.target.value)} className={styles.input}
            placeholder='Encontre seu pokemon...'
        />
    )
}