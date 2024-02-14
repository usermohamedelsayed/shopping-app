import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { feactProduct } from '../../6-store/producstSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Error } from '../../2-component/index';
import imgError from "../../1-assaset/imgError.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Category = () => {
    const dispatch = useDispatch()
    const { dataProducts } = useSelector(state => state.productsSlice)
    const category = [...new Set([...dataProducts.map(e => e.category.name)])].map(e => dataProducts.filter(el => el.category.name === e)[0])
    useEffect(() => {
        dispatch(feactProduct())
    }, [dispatch])
    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <div className='Category'>
            <div className="container">
                <div className="caption">
                    <span>Swipe For More</span>
                    <AiOutlineArrowRight />
                </div>
                <Swiper
                    // slidesPerView={6}
                    spaceBetween={20}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        550: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 4,
                        }
                    }}
                    className="mySwiper"
                >
                    {
                        category.length ? (
                            <>
                                {
                                    category.map((e, i) => (
                                        <SwiperSlide key={i + 1}>
                                            <Link to={`/shop/${e.category.name.toLowerCase()}`} className="card">
                                                <img onError={handleErrorImg} src={e.images[0]} alt={e.category.name} />
                                                <div className='nameCategory'>{e.category.name}</div>
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                }
                            </>
                        ) : <Error />
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Category