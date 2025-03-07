import styles from './Button.module.css'

export function Button({
    label,
    onClick, 
    type
}) {
    return (
        <button className={styles[type]} onClick={onClick} >{label}</button>
    )
}