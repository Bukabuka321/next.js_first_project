import Head from "next/head";

const Reviews = ({ reviews }) => {

    return (
        <div>
            <Head>
                <title>Test web app | Home</title>
                <meta name="title" content="Bullshit"/>
            </Head>
            <h1>Check out the reviews of our customers</h1>
            <div className="reviews">
                {!!reviews.length && reviews.slice(0, 30).map((res) => {
                    return (
                        <div key={res.id} className='review'>
                           <ul>
                            <li> User id = {res.id}
                            <br/>
                            {`${res.body.slice(0, 90)}...`}
                            </li>
                           </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};


export async function getServerSideProps() {
    const respons = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await respons.json();

    return {
        props: {
            reviews: data
        } 
    }
}

export default Reviews;