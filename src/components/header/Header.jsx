import MiddleHeader from './MiddleHeader';
import Navbar from './Navbar';
import TopHeader from './TopHeader';
import './header.css';
import {useState} from "react"

/*  Header top - Header middle - Navber */
const Header = () => {
    // menu toggle 
    const [toggle, setToggle] = useState(false);

    return(
        <header className="header">
            {/* top header */}
            <TopHeader setToggle={setToggle} />
            {/* middle header */}
            <MiddleHeader />
            {/* navbar */}
            <Navbar setToggle={setToggle} toggle={toggle} />
        </header>   
    )
}

export default Header;