import { useEffect, useState, 
    // useContext
 } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';  
import { TbSearch } from 'react-icons/tb'
import { CgShoppingCart } from 'react-icons/cg'
// import { AiOutlineHeart } from 'react-icons/ai'
import Search from './Search/Search'
import Cart from '../Cart/Cart'
// import { Context } from "../../utils/context";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    // const { cartCount } = useContext(Context)
    const navigate = useNavigate()

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
        // console.log(offset)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content" >
                    <ul className="left">
                        <li onClick={() => navigate('/')}>
                            Home
                        </li>
                        <Link spy={true} to='newsLetter' smooth={true}>
                            <li >About</li>
                        </Link>
                        <Link spy={true} to='category' smooth={true}>
                            <li >Categories</li>
                        </Link>
                        <Link spy={true} to='products' smooth={true}>
                            <li >Products</li>
                        </Link>
                        <li onClick={() => navigate('Loginuser')}>
                            Add Products
                        </li>
                    </ul>

                    <div className="center"
                        onClick={() => navigate('/')} >FaizanStore</div>
                    <div className="right">
                        <TbSearch
                            onClick={() => setShowSearch(true)} />

                        {/* <Link spy={true} to='products' smooth={true}>
                            <AiOutlineHeart />
                        </Link> */}

                        <span className="admin" onClick={() => navigate('Loginadmin')}>
                            Admin
                        </span>

                        <span className="cart-icon"
                            onClick={() => setShowCart(true)} >
                            <CgShoppingCart />
                            {/* {!!cartCount && <span>{cartCount}</span>} */}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
