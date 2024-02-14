import React, { useEffect, useState } from 'react'
import "./detailsProduct.scss"
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux'
import { AiFillStar } from 'react-icons/ai'
import { BiExitFullscreen } from 'react-icons/bi'
import { BsArrowsFullscreen, BsBagFill, BsBagHeartFill, BsStarHalf } from 'react-icons/bs'
import { feactProduct, upPageScroll } from '../../6-store/producstSlice'
import { setDataCart } from '../../6-store/cartSlice'
import { addToFavorite } from '../../6-store/favoriteSlice'
import { EffectCube, Pagination } from 'swiper/modules';
import { useParams } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductBox, Error, GridProducts } from '../../2-component/index'
import Swal from 'sweetalert2'
import imgError from "../../1-assaset/imgError.jpg"

const DetailsProduct = () => {
    const dispatch = useDispatch()
    const { dataProducts } = useSelector(state => state.productsSlice)
    const [fullSlider, setFullSlider] = useState()
    const { id } = useParams()
    const dataDetails = dataProducts.filter(e => e.id === +id)[0]
    const activeCurrentImageSlide = (i) => {
        document.querySelectorAll(".swiper-pagination-bullet")[i].click()
        document.querySelectorAll(".optionsImage img").forEach((e, index) => (
            index === i ? e.classList.add("active") : e.classList.remove("active")
        ))
    }
    useEffect(() => {
        upPageScroll()
        dispatch(feactProduct())
    }, [dispatch])
    const addToFavoriteFunc = (product) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added To Foverite',
            showConfirmButton: false,
            timer: 800
        })
        dispatch(addToFavorite(product))
    }
    const addToCartFunc = (product) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added To Cart',
            showConfirmButton: false,
            timer: 800
        })
        dispatch(setDataCart(product))
    }
    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <div className='DetailsProduct'>
            <div className="container">
                {
                    dataDetails ? (
                        <>
                            <div className="product">
                                <div className="detailsText">
                                    <p className="price"> <span>$</span> {dataDetails.price} </p>
                                    <p className="title"> {dataDetails.title} </p>
                                    <p className="desc"> {dataDetails.description} </p>
                                    <div className="stars">
                                        <div className="star">
                                            <AiFillStar />
                                        </div>
                                        <div className="star">
                                            <AiFillStar />
                                        </div>
                                        <div className="star">
                                            <AiFillStar />
                                        </div>
                                        <div className="star">
                                            <AiFillStar />
                                        </div>
                                        <div className="star">
                                            <BsStarHalf />
                                        </div>
                                    </div>
                                    <div className="options">
                                        <div onClick={() => addToCartFunc(dataDetails)} className="option">
                                            <small>add to cart</small>
                                            <i><BsBagFill /> <span className='counter'></span> <span className='anmation'></span> </i>
                                        </div>
                                        <div onClick={() => addToFavoriteFunc(dataDetails)} className="option">
                                            <small>add to favourite</small>
                                            <i><BsBagHeartFill /> <span className='counter'></span> </i>
                                        </div>
                                    </div>
                                </div>
                                <div className={`slideImage ${fullSlider ? "fullSceenSlider" : ""}`}>
                                    <div className="currentImage">
                                        <Swiper
                                            effect={'cube'}
                                            grabCursor={true}
                                            cubeEffect={{
                                                shadow: true,
                                                slideShadows: true,
                                                shadowOffset: 20,
                                                shadowScale: 0.94,
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            modules={[EffectCube, Pagination]}
                                            className="mySwiper2"
                                        >
                                            {
                                                dataDetails.images.map((src, i) => (
                                                    <SwiperSlide key={i + 1}>
                                                        <img onError={handleErrorImg} src={src} alt={dataDetails.title} />
                                                    </SwiperSlide>
                                                ))
                                            }

                                        </Swiper>
                                    </div>
                                    {
                                        dataDetails.images.length > 1 && (
                                            <div className="optionsImage">
                                                <Swiper
                                                    spaceBetween={5}
                                                    slidesPerView={3}
                                                    className="mySwiper"
                                                >
                                                    {
                                                        dataDetails.images.map((src, i) => (
                                                            <SwiperSlide key={i + 1}>
                                                                <img onError={handleErrorImg} onClick={() => activeCurrentImageSlide(i)} src={src} alt={dataDetails.title} />
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                </Swiper>
                                            </div>
                                        )
                                    }
                                    <div className="BtnFullScreen" onClick={() => setFullSlider(!fullSlider)}>
                                        {
                                            fullSlider ? (
                                                <BiExitFullscreen />
                                            ) : <BsArrowsFullscreen />
                                        }
                                    </div>
                                </div>
                                <div className={`overlayFullSceenSlider ${fullSlider ? "active" : ""}`} onClick={() => setFullSlider(false)}></div>
                            </div>

                            <div className="productsExtra">
                                <fieldset>
                                    <legend>products {dataDetails.category.name}</legend>
                                    <GridProducts>
                                        {
                                            dataProducts.filter(e => (
                                                e.category.name.toLowerCase() === dataDetails.category.name.toLowerCase()
                                            )).map(e => (
                                                <ProductBox key={e.id} product={e} />
                                            ))
                                        }
                                    </GridProducts>
                                </fieldset>
                            </div>
                        </>
                    ) : <div className='notFound'><Error /></div>
                }
            </div>
        </div>
    )
}

export default DetailsProduct