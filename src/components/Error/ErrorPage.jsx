import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import styles from './ErrorPage.module.css'

export function ErrorPage() {
    const navigate = useNavigate()
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorType}>Looks like this route doesnt exist!</h1>
            <Button type={'error'} label={'Return Home'} onClick={() => navigate('/')}/>
        </div>
    )
}