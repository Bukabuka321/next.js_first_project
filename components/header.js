import {SiProducthunt} from "react-icons/si";
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <div>
                <SiProducthunt />
            </div>
            <nav>
                <Link href="/">
                    Home 
                </Link>
                <Link href="/products">
                    Products
                </Link>
                <Link href="/reviews">
                    Reviews
                </Link>
                <Link href="/about">
                    About
                </Link>
            </nav>
        </header> 
    )
};

export default Header;