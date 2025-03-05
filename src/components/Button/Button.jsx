import styles from './Button.module.css'

export function Button({
    label,
    type
}) {
    return (
        <button className={styles[type]}>{label}</button>
    )
}