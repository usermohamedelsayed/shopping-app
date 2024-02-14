import React from 'react'
import "./review.scss"
import { HeadPage } from '../../2-component/index'
import { AiFillCar, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsFillShieldLockFill, BsMusicNoteBeamed } from 'react-icons/bs'
import imgError from "../../1-assaset/imgError.jpg"

const dataReviewRow1 = [
    {
        id: 1,
        icon: <AiFillCar />,
        title: "Fast Delivery",
        desc: "Within 30 Minutes",
    },
    {
        id: 2,
        icon: <BsMusicNoteBeamed />,
        title: "24 / 7 Service",
        desc: "Call Us Anytime",
    },
    {
        id: 3,
        icon: <BsFillShieldLockFill />,
        title: "Esy Payments",
        desc: "Cash Or Card Any",
    }
]
const dataReviewRow2 = [
    {
        id: 1,
        title: "Mohamed Farag",
        subtitle: "Full Stack Developer",
        img: "https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/avatar-01.png",
        desc: "Lorem ipsum dolor sit amet adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
        id: 2,
        title: "Mohamed Ibrahim",
        subtitle: "Full Stack Developer",
        img: "https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/avatar-02.png",
        desc: "Lorem ipsum dolor sit amet adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
        id: 3,
        title: "Shady Nabil",
        subtitle: "Full Stack Developer",
        img: "https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/avatar-03.png",
        desc: "Lorem ipsum dolor sit amet adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
        id: 4,
        title: "Osama Mohamed",
        subtitle: "Full Stack Developer",
        img: "https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/avatar-04.png",
        desc: "Lorem ipsum dolor sit amet adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
        id: 5,
        title: "Amr Hendawy",
        subtitle: "Full Stack Developer",
        img: "https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/avatar-05.png",
        desc: "Lorem ipsum dolor sit amet adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
        id: 6,
        title: "Sherief Ashraf",
        subtitle: "Full Stack Developer",
        img: "https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/avatar-06.png",
        desc: "Lorem ipsum dolor sit amet adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    }
]
const Review = () => {
    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <div className='Review'>
            <HeadPage title={"review"} desc={"Lorem ipsum dolor sit amet consectetur."} />
            <div className="container">
                <div className="row-1">
                    {
                        dataReviewRow1 && dataReviewRow1.map(({ id, icon, title, desc }) => (
                            <div className="box" key={id}>
                                <i className='icon'>{icon}</i>
                                <div>
                                    <div className="title">{title}</div>
                                    <div className="desc">{desc}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row-2">
                    {
                        dataReviewRow2 && dataReviewRow2.map(({ id, img, title, subtitle, desc }) => (
                            <div className="box" key={id}>
                                <img onError={handleErrorImg} src={img} alt={"avatarImage"} />
                                <div>
                                    <div className="title">{title}</div>
                                    <div className="subtitle">{subtitle}</div>
                                    <div className="stars">
                                        <i><AiFillStar /></i>
                                        <i><AiFillStar /></i>
                                        <i><AiFillStar /></i>
                                        <i><AiFillStar /></i>
                                        <i><AiOutlineStar /></i>
                                    </div>
                                </div>
                                <p className="desc">{desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Review