import React from 'react'
import "./blog.scss"
import { BsArrowRightShort } from 'react-icons/bs'
import { HeadPage } from '../../2-component/index'
import imgError from "../../1-assaset/imgError.jpg"

const dataBlog = [
    {
        id: 1,
        img: "https://i0.wp.com/scopenew.com/wp-content/uploads/2022/11/Temu-Order.png",
        number: "13/1",
        title: "the cotton-jersey zip-up hoodie",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque itaque quisquam"
    },
    {
        id: 2,
        img: "https://th.bing.com/th/id/R.b6ed6e82717d7eb5932ba20b21985705?rik=yJHpCt5N8XtWjg&pid=ImgRaw&r=0",
        number: "15/2",
        title: "how to style a quiff",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque itaque quisquam"
    },
    {
        id: 3,
        img: "https://nnedigital.com/wp-content/uploads/2018/04/social-media-users.jpg",
        number: "16/3",
        title: "must-have skater girl items",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque itaque quisquam"
    },
    {
        id: 4,
        img: "https://th.bing.com/th/id/OIP.H1smIDAI_peJPGyPCcnvhAHaE8?pid=ImgDet&w=1200&h=800&rs=1",
        number: "17/4",
        title: "runmay-inspiredtrends",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque itaque quisquam"
    },
]
const Blog = () => {

    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <div className='Blog'>
            <HeadPage title={"read more"} desc={"read all case studies about our products!"} />
            <div className="container">
                <ul>
                    {
                        dataBlog && dataBlog.map(({ id, img, number, title, desc }) => (
                            <li key={id}>
                                <div className="image">
                                    <img onError={handleErrorImg} src={img} alt="blog_image" />
                                    <div className="number">{number}</div>
                                </div>
                                <div className="info">
                                    <p>{title}</p>
                                    <span>{desc}</span>
                                    <button className='btnContinue'>continue readding <BsArrowRightShort className='arrow' /></button>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Blog