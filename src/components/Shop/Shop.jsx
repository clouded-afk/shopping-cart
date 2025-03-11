import { ItemCard } from '../ItemCard/ItemCard'
import { useState, useEffect } from 'react'
import styles from './Shop.module.css'

export function Shop() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) =>  response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error))
    }, [])

    console.log(data)

    return (
        <div className={styles.shopContainer}>
            <h1 className={styles.testContent}>THIS IS THE SHOP PAGE</h1>
            {data.length > 1 && <ItemCard itemName={data[1].title} itemPrice={data[1].price} itemImage={data[1].image}/>}
        </div>
    )
}