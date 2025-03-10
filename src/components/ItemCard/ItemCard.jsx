import { Button } from '../Button/Button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from "./ItemCard.module.css"

export function ItemCard(
    itemImage,
    itemName,
) {
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <img className={styles.itemImg} src={itemImage} alt={itemName}/>
                <div className={styles.item}>{itemName}</div>
            </div>
            <div className={styles.buttonContainer}>
                <Button type={"quantity"} label={<FontAwesomeIcon icon={faPlus}/>}/>
                <input 
                    type='number'
                    id='itemQuantity'
                />
                <Button type={"quantity"} label={<FontAwesomeIcon icon={faMinus}/>}/>
            </div>
        </div>
    )
}