import './rating.css';

const Rating = ({rating, reviews}) => {
    return(
        <div className="rating-wrapper">
            <b className="rating">
                {rating} <i class="bi bi-star-fill"></i>
            </b>
            <span>{reviews} التقييمات</span>
        </div>
    )
}

export default Rating;