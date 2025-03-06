import { Button } from '../Button/Button.jsx'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <h1 className={styles.pageTitle}>Fake Store</h1>
            <div className={styles.buttonContainer}>
                <Button type={"primary"} label={"Home"}/>
                <Button type={"primary"} label={"Shop"}/>
                <Button type={"secondary"} label={<FontAwesomeIcon className={styles.cartIcon}icon={faShoppingCart}/>}/>
            </div>
        </div>
    )
}