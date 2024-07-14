import { useState} from 'react'
import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';

const Offer = ({offer}) => {
    const { firstImage, secondImage,title, rating, reviews } = offer;

    // Hover on image 
    const [imageSrc, setImageSrc] = useState(firstImage);

    const calculatedDiscount = offer.price - (offer.discount * offer.price) / 100;
    return(
        <div className="offer">
            <div className="offer-image-wrapper">
                <img 
                    onMouseEnter={() => setImageSrc(secondImage)}
                    onMouseLeave={() => setImageSrc(firstImage)}
                src={imageSrc} alt={title} className="offer-image" />
            </div>
            <div className="offer-info">
                <h5 className="offer-title">{title}</h5>
                <Rating rating={rating} reviews={reviews} />
                <div className="offer-price">
                    <b className="offer-price-item">${offer.price + " "}</b>
                    <b className="offer-final-price-item">
                        ${calculatedDiscount}
                    </b>
                </div>
                <Link to={`/special-offer/${offer.id}`} className="offer-see-more">
                    شاهد المزيد...
                </Link>
                <div className="offer-discount">
                    خصم {offer.discount} %
                </div>
            </div>
        </div>
    )
}

export default Offer;