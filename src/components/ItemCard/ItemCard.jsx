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

    const increaseQuantity = () => {
        let inputField = document.getElementById(itemId)
        let inputValue = parseInt(inputField.value) || 0
        if (inputValue < 10) {
            inputField.value = inputValue + 1
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <img className={styles.itemImg} src={itemImage} alt={itemName}/>
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.item}>{itemName}</div>
                <div className={styles.item}>Price: {itemPrice}</div>
                <div className={styles.buttonContainer}>
                    <Button type={"quantity"} label={<FontAwesomeIcon icon={faMinus}/>}/>
                    <input className={styles.quantityInput}
                        type='number'
                        id={itemId}
                        min={0}
                        max={10}
                    />
                    <Button type={"quantity"} label={<FontAwesomeIcon icon={faPlus} onClick={increaseQuantity}/>}/>
                </div>
                <Button type={"addToCart"} label={"Add To Cart"}/> 
            </div>

        </div>
    )
}