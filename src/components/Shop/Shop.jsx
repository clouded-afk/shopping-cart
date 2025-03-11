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
            <div className={styles.categoryContainer}>
                <h2>Men's Clothing</h2>
                <div className={styles.itemContainer}>
                    {data.slice(0, 4).map((item, index) => (
                        <ItemCard 
                            key={index}
                            itemId={item.id}
                            itemName={item.title}
                            itemImage={item.image}
                            itemPrice={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.categoryContainer}>
                <h2>Jewelry</h2>
                <div className={styles.itemContainer}>
                    {data.slice(4, 8).map((item, index) => (
                        <ItemCard 
                            key={index}
                            itemId={item.id}
                            itemName={item.title}
                            itemImage={item.image}
                            itemPrice={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.categoryContainer}>
                <h2>Electronics</h2>
                <div className={styles.itemContainer}>
                    {data.slice(8, 14).map((item, index) => (
                        <ItemCard 
                            key={index}
                            itemId={item.id}
                            itemName={item.title}
                            itemImage={item.image}
                            itemPrice={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.categoryContainer}>
                <h2>Women's Clothing</h2>
                <div className={styles.itemContainer}>
                    {data.slice(14, 20).map((item, index) => (
                        <ItemCard 
                            key={index}
                            itemId={item.id}
                            itemName={item.title}
                            itemImage={item.image}
                            itemPrice={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}