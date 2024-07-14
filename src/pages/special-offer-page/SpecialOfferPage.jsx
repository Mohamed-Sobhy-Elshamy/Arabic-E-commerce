import { useParams } from "react-router-dom"
import { specialOffers } from '../../data/special-offers';
import { useEffect, useState } from "react";
import Rating from '../../components/rating/Rating';
import './specialOfferPage.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/apiCalls/cartApiCall';

const SpecialOfferPage = () => {
    // get the param any product -> (id)
    const { id } = useParams();
    const product = specialOffers.find(p => p.id === parseInt(id)); // convert string to number
    const { images, rating, reviews, price, discount, title } = product;

    // Images 
    const [imageIndex, setImageIndex] = useState(0);

    // calc discount
    const calculateDiscount = price - (discount * price) / 100;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    // Add to cart handler
    const addToCartHandler = () => {
        dispatch(
            addToCart({
                id: id,
                quantity: qty,
                price: price,
                title: title,
                image: images[0],
            })
        )
    }



    return (
        <>
            <div className="special-offer-page">
                <div className="special-offer-page-img-wrapper">
                    <img src={images[imageIndex]} alt="" className="special-offer-page-img" />
                    <div className="special-offer-page-select-img">
                        {images.map((source, index) =>
                            <img 
                                onClick={() => setImageIndex(index)}
                            key={index} src={source} className="select-img" />
                        )}
                    </div>
                </div>
                <div className="special-offer-page-info">
                    <h3 className="special-offer-page-title">{product.title}</h3>
                    <Rating rating={rating} reviews={reviews} />
                    <div className="special-offer-page-price">
                        <b className="special-offer-price-item">{price}</b>
                        <b className="special-offer-final-price-item">
                            {calculateDiscount} 
                        </b>
                    </div>
                    <div className="special-offer-page-add-to-cart">
                        <div>الكمية</div>
                        <input value={qty} onChange={e => setQty(e.target.value)} type="number" min="1" max="10" />
                        <button className="add-to-cart-btn"
                            onClick={addToCartHandler}
                        >
                            اضافة الى سلة التسوق
                        </button>
                    </div>
                </div>
            </div>

            <p className="product-description">
                <strong className="product-description-title">حول هذه السلعة</strong>
                صوت فائق: استمتع بصوت واضح وراحة فائقة مع سماعات رأس ستوديو مونيتور من ون
                اوديو. تتمتع سماعة الرأس بمشغلات كبيرة بحجم 50 ملم مع مغانط من
                النيوديميوم، حيث يشكل الجهير القوي والصوت الواضح والنغمات العالية النقية
                صوت هاي فاي مثالي.
                <br />
                يوفر التصميم المغلق من الخلف صوت هاي فاي غامر عالي الدقة برقاقة سي اس ار
                ومكبرات الصوت 40 ملم معًا، إنها أفضل من السماعات بخاصية إلغاء الصوت النشطة
                من حيث جودة الأصوات. صُممت وسائد الأذن المبطنة عالية الجودة خصيصًا لسماعات
                رأس الستوديو الاحترافية لتوفير أقصى قدر من الراحة وعزل الضوضاء. عصابة
                الرأس قابلة للتعديل وقابلة للتمدد من أجل إيجاد الزاوية المفضلة المرغوب
                فيها كي تلائمك.
                <br />
                لا مزيد من المحولات: تتمتع بسلك ملفوف بنمط دي جيه (بطول 9.8 قدم ببنية
                قابلة للتمدد) حيث يصل بسهولة من التلفزيون أو الستيريو إلى كرسيك المفضل.
                تتضمن قابس قياسي 6.35 ملم ومقبس 3.5 ملم. يتمتع كلاهما بتصميم قابل للفصل
                بالكامل، حيث يمكنك توصيل جهاز الدمج الصوتي الذي تريد استخدامه.
                <br />
                مراقبة من جانب واحد: تتمتع سماعة الرأس بأغطية أذن دوارة بزاوية 90 درجة
                لعزل أذن واحدة في أي وقت، كما تتميز بشريط رأس مرن وقابل للتعديل الذاتي،
                حيث توفر تجربة استماع خالية من التعب يمكن أن تدوم لساعات، مثالية لعشاق
                الموسيقى والدمج الصوتي.
                <br />
                تعمل مع: ايباد وايبود وايفون واندرويد والعديد من أجهزة الصوت الأخرى. توفر
                صوت عالي الجودة ومتانة فائقة وراحة قصوى. تُمثل هذه السماعات الرائعة خيارك
                المفضل.
            </p>
        </>
    )
}

export default SpecialOfferPage;