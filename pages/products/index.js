import Link from "next/link";
import styles from '../../styles/Products.module.css'


const Products = () => {
    return (
        <div>
            <h1>
                Our projects! AND BURGERS!!!
            </h1>
            <ol>
                <Link href='/products/weather'>
                <li className={styles.list_item}>Weather app</li>
                </Link>
                <Link href='/products/book'>
                <li className={styles.list_item}>Wilder's book</li>
                </Link>
                <Link  href='/products/aachen'>
                <li className={styles.list_item}>Aachen web app</li>
                </Link>
            </ol>
        </div>
    )
 };

export default Products;