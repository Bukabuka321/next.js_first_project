import Link from "next/link";
import React from "react";
import { useRouter } from "next/router"

const NotFoundPage = () => {

const router = useRouter();
React.useEffect(() => {
    setTimeout(() => {
        router.push(`/`)
    }, 5000)
}, []);

    return (
        <div className='not-found'> 
        <h1>Sorry we still didn't add the page!</h1>
        <h2>You will see it soon!</h2> 
        <Link href="/">
            Return to Home page
        </Link>
        </div>
    )
};

export default NotFoundPage;