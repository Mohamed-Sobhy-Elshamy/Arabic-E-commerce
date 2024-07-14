import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Slider from "../../components/slider/Slider";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/apiCalls/productApiCall';


const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);


    useEffect(() => {
        dispatch(fetchProducts());
    }, []) // send request once time 

    


    // filteration -> laptops and mobile
    const laptops = products.filter(p => p.isLaptop === true);
    const mobiles = products.filter(p => p.isLaptop === false);

    return (
        <>
            <Banner />
            <Category />
            <SpecialOffers />
            <HeadingTitle title="الجديد من اللابتوبات" />
            <Slider data={laptops} />
            <HeadingTitle title="الجديد من الموبايلات" />
            <Slider data={mobiles} />
            <HeadingTitle title="تسوق حسب المارك" />
            <Brands />
        </>
    )
}

export default Home;