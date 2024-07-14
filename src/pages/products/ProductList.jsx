import { Link } from "react-router-dom";
import Rating from "../../components/rating/Rating";

const ProductList = ({ products }) => {
    return (
        <div className="product_list">
            {products.map(product =>
                <Link className="product_item" to={`/products/${product.id}`} key={product.id}>
                    <img src={product.image} alt={product.title} className="product_item_img" />
                    <h3 className="product_item_title">{product.title}</h3>
                    <Rating rating={product.rating} reviews={product.reviews} />
                    <div className="product_item_price">${product.price}</div>
                </Link>
            )}
        </div>
    )
}

export default ProductList;