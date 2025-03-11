import { Button } from '../Button/Button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from "./ItemCard.module.css"

export function ItemCard({
    itemId,
    itemImage,
    itemName,
    itemPrice
}) {
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <img className={styles.itemImg} src={itemImage} alt={itemName}/>
                <div className={styles.itemInfo}>
                    <div className={styles.item}>{itemName}</div>
                    <div className={styles.item}>Price: {itemPrice}</div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button type={"quantity"} label={<FontAwesomeIcon icon={faPlus}/>}/>
                <input className={styles.quantityInput}
                    type='number'
                    id={itemId}
                    min={0}
                />
                <Button type={"quantity"} label={<FontAwesomeIcon icon={faMinus}/>}/>
            </div>
        </div>
    )
}