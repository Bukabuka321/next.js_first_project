import styles from '../../styles/Products.module.css';
import Image from "next/image";


export const getStaticPaths = async () => {
    const res = await fetch(' http://localhost:3001/items');
    const data = await res.json();

    const paths = data.map(burger => {
        return {
            params:  {id: burger.id}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:3001/items/${id}`);
    const data = await res.json();

    return {
        props: { burger: data }
    }
}

const Details = ({burger}) => {
    return (
        <div className={styles.singleBurger}>
            <h1>
               {burger.name}
            </h1>
            <div className={styles.imageContainer}>
                <Image src={`${burger.image}`} alt={burger.name} width={150} height={130} />
            </div>
            <div>
                <p>{burger.desc }</p>
            </div>
        </div>
    )
 };

export default Details;