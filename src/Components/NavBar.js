import { Link } from "react-router-dom";
import StyleNavBar from "../Styles/StyleNavBar.css"
import {ImAppleinc} from 'react-icons/im';
import {BiShoppingBag} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';


const NavBar = () =>{
    return(
        <nav>
            <div className="GiHamburgerMenu"><GiHamburgerMenu/></div>
            <div><Link className="ImAppleinc" to = "/"><ImAppleinc/></Link></div>
            <div className="linkContainer">
            <Link className="link" to = "/Iphone">¡phone</Link>
            <Link className="link" to = "/Ipad">¡pad</Link>
            <Link className="link" to = "/Mac">Mac</Link>
            <Link className="link" to = "/Watch">Watch</Link>
            <Link className="link" to = "/News">News</Link>
            </div>
            <div><Link className="BiShoppingBag" to = "/CartWidget"><BiShoppingBag/></Link></div>
            
        </nav>
    )
}

export default NavBar;
