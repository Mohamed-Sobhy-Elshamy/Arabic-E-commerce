import { Link } from "react-router-dom";

const Navbar = ({toggle, setToggle}) => {
    return(
        <nav style={{right: toggle && "0"}} className="navbar">
                <div className="navbar-close-icon">
                    <i class="bi bi-x-circle"
                        onClick={() => setToggle(false)}
                    ></i>
                </div>
                <ul className="navbar-links">
                    <Link to="/" onClick={() => setToggle(false)} className="navbar-link">الصفحة الرئيسية</Link>
                    <Link to="/products" onClick={() => setToggle(false)} className="navbar-link">الالكترونيات و الوبايلات</Link>
                    <Link onClick={() => setToggle(false)} className="navbar-link">المنزل و المطبخ</Link>
                    <Link onClick={() => setToggle(false)} className="navbar-link">رجالية</Link>
                    <Link onClick={() => setToggle(false)} className="navbar-link">نسائية</Link>
                </ul>
        </nav>
    )
}

export default Navbar;