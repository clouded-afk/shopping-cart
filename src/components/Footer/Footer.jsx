import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import styles from './Footer.module.css'

export function Footer() {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.linkContainer}>
                <div className={styles.linkPrefix}>Coded By:</div>
                <a className={styles.linkText} href="https://github.com/clouded-afk">clouded-afk</a>
                <FontAwesomeIcon className={styles.linkIcon} icon={faGithub}/>
            </div>
        </div>
    )
}