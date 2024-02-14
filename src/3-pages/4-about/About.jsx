import React, { useState } from 'react'
import "./about.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import aboutUs from "../../7-animation/aboutUs.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { BsArrowRightShort } from 'react-icons/bs'
import { BiSolidShareAlt, BiSolidShow } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Player } from '@lottiefiles/react-lottie-player';
import { HeadPage } from '../../2-component/index'
import imgError from "../../1-assaset/imgError.jpg"

const dataGallery = [
    {
        id: 1,
        img: "https://th.bing.com/th/id/R.e8ed15b9f3d0858125cddffa5d1a97e6?rik=6FgWyNYLnSY4MQ&pid=ImgRaw&r=0"
    },
    {
        id: 2,
        img: "https://img.freepik.com/premium-photo/asian-worker-caught-robber-trying-steal-fashionable-clothes-from-modern-boutique-african-american-robber-stealing-stylish-merchandise-wearing-hood-glasses-during-burglary_482257-63336.jpg?w=826"
    },
    {
        id: 3,
        img: "https://thumbs.dreamstime.com/b/young-handsome-man-his-ginger-girlfriend-taking-part-global-sale-season-smiling-woman-shirt-choosing-present-gift-her-272451322.jpg"
    },
    {
        id: 4,
        img: "https://thumbs.dreamstime.com/b/sales-assistant-giving-package-clothes-to-buyer-boutique-successful-shopping-african-american-new-female-trendy-clothing-155822587.jpg"
    },
    {
        id: 5,
        img: "https://justsamosa.uk/assets/img/features/home-delivery-food-uk.jpg"
    },
    {
        id: 6,
        img: "https://image.freepik.com/free-photo/going-out-from-mall_236854-13421.jpg"
    },
]
const About = () => {
    const [viewPopupGallery, setViewPopupGallery] = useState(false)
    const openPopupFunc = (i) => {
        setViewPopupGallery(true)
        document.querySelectorAll(".galleryContainer .swiper-pagination-bullet")[i].click()
    }
    const closePopupFunc = () => {
        setViewPopupGallery(false)
    }

    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <div className='About'>
            <HeadPage title={"about us"} desc={"Lorem ipsum dolor sit amet consectetur."} />
            <div className="container">
                <div className="aboutContainer">
                    <div className="anamtion">
                        <Player
                            autoplay
                            controls
                            loop
                            src={aboutUs}
                        >
                        </Player>
                    </div>
                    <div className="details">
                        <h2>who we are?</h2>
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos ducimus sapiente dolorem illum omnis consectetur magnam, eum nulla error, nemo magni quidem minima consequatur laborum ipsa facilis deserunt adipisci. Dolore delectus, quam placeat hic eveniet sunt minus aliquam odio.
                        </span>
                        <button className='btn btn-arrow'>read more<BsArrowRightShort className='arrow' /></button>
                    </div>
                </div>
                <fieldset className="galleryContainer">
                    <legend>our gallery</legend>
                    <div className={`popupGallery ${viewPopupGallery ? "open" : ""}`}>
                        <div className="overlay" onClick={closePopupFunc}></div>
                        <Swiper
                            spaceBetween={30}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            {
                                dataGallery && dataGallery.map(({ img, id }) => (
                                    <SwiperSlide key={id}>
                                        <div className="boxView">
                                            <i className='closeBtn' onClick={closePopupFunc}>
                                                <AiOutlineClose />
                                            </i>
                                            <img onError={handleErrorImg} src={img} alt="aboutImage" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    {
                        dataGallery && dataGallery.map(({ id, img }, i) => (
                            <div className="box" key={id}>
                                <img onError={handleErrorImg} src={img} alt="galleryContainer" />
                                <div className="optionsGallery">
                                    <i className='view' onClick={() => openPopupFunc(i)}>
                                        <BiSolidShow />
                                    </i>
                                    <i>
                                        <BiSolidShareAlt />
                                    </i>
                                </div>
                            </div>
                        ))
                    }
                </fieldset>
            </div>
        </div>
    )
}

export default About