import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Test web app | Home</title>
        <meta name="title" content="Bullshit"/>
      </Head>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Хуй говно дрочилово адское какашка головка от хуя</h1> 
      <div className={styles.mainImage}>
        <Image src="/Unknown.jpeg" alt="bear" width={500} height={300} />
      </div>
      <p className={styles.text}>Do you want something new in your projects?</p>
      <p className={styles.text}>We can do it for you!</p>
      <Link className={styles.btn} href='/products'>
        Our projects
      </Link>
    </div>
  )
};

export default Index;