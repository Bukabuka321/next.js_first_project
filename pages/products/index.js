import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Products.module.css';


export const getStaticProps = async () => {
    const res = await fetch(' http://localhost:3001/items');
    const data = await res.json();

    return {
        props: {
            burgers: data
        }
    }
}

const Products = ({burgers}) => { 
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
            <h2>The best burgers</h2>
            {burgers.map((burger) => {
                return (
                    <Link href={`/products/${burger.id}`} key={burger.id} className={styles.burgerCard}>
                        <div className={styles.imageContainer}>
                            <Image src={`${burger.image}`} alt={burger.name} width={150} height={130} />
                        </div>
                        <div>
                            <h3>{burger.name}</h3>
                            <p>{burger.desc}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
 };

export default Products;