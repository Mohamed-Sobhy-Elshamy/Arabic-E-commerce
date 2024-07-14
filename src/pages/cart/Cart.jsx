import { Link } from 'react-router-dom';
import { removeFromCart } from '../../redux/apiCalls/cartApiCall';
import './cart.css';
import { useSelector, useDispatch } from "react-redux"


const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    return (
        cartItems.length < 1 ? <div className="empty-cart" >
            <h1>سلة التسوق الخاصة بك فارغة</h1>
            <p>لا يوجد سلع</p>
            <Link className='empty-cart-link' to="products">
                صفحة السلع
            </Link>
        </div>
            :
            <div className="cart">
                <h1 className="cart-title">سلة التسوق</h1>
                <div className="cart-wrapper">
                    <div className="cart-items">
                        {cartItems.map(item =>
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-img-wrapper">
                                    <img src={item.image} alt={item.title} className="cart-item-img" />
                                </div>
                                <div className="cart-item-info">
                                    <div className="cart-item-title">{item.title}</div>
                                    <div className="cart-item-quantity">
                                        الكمية :
                                        <span>{item.quantity}</span>
                                    </div>
                                    <div className="cart-item-price">
                                        السعر :
                                        <span>{item.price * item.quantity}$</span>
                                    </div>
                                    <i class="bi bi-trash cart-item-delete-icon"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    ></i>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="cart-summary">
                        <div className="cart-summary-text">
                            <i className='bi bi-check-circle-fill'></i>
                            جزء من طلبك مؤهل للشحن المجاني, قم بتحديد هذا الخيار عند الدفع التفاصيل
                        </div>
                        <div className="cart-summary-total">
                            المجموع :
                            <span>
                                {
                                    cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                                }
                            </span>
                        </div>
                        <button className="cart-summary-btn">
                            تابع عمليات الشراء
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Cart;