import { useState } from "react";
import styles from "./styles.module.css";
import { Filter } from "../../context/pokemon_context";

interface Props{
    title: string
    filters: Filter[]
    clickFilter(name: string): void
}

export const FilterMenu = ({title, filters, clickFilter}: Props) => {
  const [showDropbox, setShowDropbox] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.main}
        onClick={() => setShowDropbox((prev) => !prev)}
      >
        {title}
      </div>
      {showDropbox && (
        <div className={styles.dropbox}>
          <div>
            {
                filters.map(filter => (
                    <div className={styles.checkDiv}>
                        <input className={styles.checkDivCheckbox} 
                        type="checkbox" checked={filter.selected} onClick={() => clickFilter(filter.name)}/>
                        <p className={styles.checkDivText}>{filter.name}</p>
                    </div>
                ))
            }
          </div>
        </div>
      )}
    </div>
  );
};
