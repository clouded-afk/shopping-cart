import { ItemCard } from '../ItemCard/ItemCard'
import styles from './Shop.module.css'

export function Shop() {
    return (
        <div className={styles.shopContainer}>
            <h1 className={styles.testContent}>THIS IS THE SHOP PAGE</h1>
            <ItemCard itemName={"test"}/>
        </div>
    )
}