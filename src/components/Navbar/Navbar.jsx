import { Button } from '../Button/Button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'

export function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <h1 className={styles.pageTitle}>All The Things</h1>
            <div className={styles.buttonContainer}>
                <Button type={"primary"} label={"Home"}/>
                <Button type={"primary"} label={"Shop"}/>
                <Button type={"secondary"} label={<FontAwesomeIcon className={styles.cartIcon}icon={faShoppingCart}/>}/>
            </div>
        </div>
    )
}