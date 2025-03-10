import Button from '../Button/Button'
import styles from "./ItemCard.module.css"

export function ItemCard(
    itemImage,
    itemName,
) {
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <img className={styles.itemImage} src={itemImage} alt={itemName}/>
                <div className={styles.itemName}>{itemName}</div>
            </div>
            <div className={styles.buttonContainer}>
                <Button type={"quantity"} label={"-"}/>
                <input 
                    type='number'
                />
                <Button type={"quantity"} label={"+"}/>
            </div>
        </div>
    )
}