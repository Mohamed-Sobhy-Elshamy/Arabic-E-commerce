import { Link } from "react-router-dom";
import { useSelector } from "react-redux"


const MiddleHeader = () => {
    const { cartItems } = useSelector(state => state.cart);
    
    return (
        <div className="middle-header">
                <div className="middle-header-search-box">
                    <input type="search"  placeholder="ماذا تريد" />
                    <button className="search-box-btn">ابحث</button>
                </div>
                <Link to="/cart" className="middle-header-shopping-cart">
                    سلة التسوق
                    <i class="bi bi-cart"></i>
                    {cartItems.length > 0 && (
                        <span className="cart-notification">{cartItems.length}</span>
                    )}
                </Link>
            </div>
    )
}

export default MiddleHeader;