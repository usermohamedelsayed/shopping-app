import React from 'react'
import "./home.scss"
import { useSelector } from 'react-redux'
import Slider from './Slider'
import Category from './Category'
import Upto from './Upto'
import FeaturedBox from './FeaturedBox'
import OfferBox from './OfferBox'

const Home = () => {
    const { dataProducts } = useSelector(state => state.productsSlice)
    const featuredProduct = dataProducts.slice(-11, -1)
    const arrivalsProduct = dataProducts.slice(20, 30)
    return (
        <div className='Home'>
            <Slider />
            <div className="Sections">
                <Category />
                <FeaturedBox data={featuredProduct} title={"featured products"} desc={"summer collection new morden design"} />
                <Upto />
                <FeaturedBox data={arrivalsProduct} title={"new arrivals"} desc={"summer collection new morden design"} />
                <OfferBox />
            </div>
        </div>
    )
}

export default Home