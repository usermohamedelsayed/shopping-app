import React, { useEffect } from 'react'
import "./home.scss"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { feactProduct } from '../../6-store/producstSlice';
import { Link } from 'react-router-dom';
import { BiSolidShow } from 'react-icons/bi';
import { Error, Loddding } from '../../2-component/index';
import imgError from "../../1-assaset/imgError.jpg"

const Slider = () => {
    const dispatch = useDispatch()
    const { dataProducts, loddingStatus } = useSelector(state => state.productsSlice)
    useEffect(() => {
        dispatch(feactProduct())
    }, [dispatch])
    if (loddingStatus) {
        return (<div className='Slider lodding'><Loddding /></div>)
    }
    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <div className='Slider'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    dataProducts.length ? (

                        dataProducts.slice(1, 20).map((e, i) => (
                            <SwiperSlide key={i + 1}>
                                <>
                                    <img onError={handleErrorImg} src={e.images[0]} alt={e.title} />
                                    <div className="options">
                                        <Link to={"/detailsProduct/" + e.id} className="option">
                                            <BiSolidShow />
                                            <small>view product</small>
                                        </Link>
                                    </div>
                                </>
                            </SwiperSlide>
                        ))
                    ) : <Error />
                }
            </Swiper>
        </div>
    )
}
export default Slider
