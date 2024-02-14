import React from 'react'
import "./productBox.scss"
import { AiFillStar } from 'react-icons/ai'
import { BsBagFill, BsBagHeartFill, BsStarHalf } from 'react-icons/bs'
import { BiSolidShow } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { upPageScroll } from '../../6-store/producstSlice'
import { useEffect } from 'react'
import { setDataCart } from '../../6-store/cartSlice'
import { addToFavorite } from '../../6-store/favoriteSlice'
import imgError from "../../1-assaset/imgError.jpg"
import Swal from 'sweetalert2'
const ProductBox = ({ product }) => {
    const { inputSearchValue } = useSelector(state => state.searchSlice)
    const dispatch = useDispatch()
    const handelProduct = (title) => {
        if (inputSearchValue.length && product.search) {
            let frist = title.slice(0, title.toLowerCase().indexOf(inputSearchValue))
            let secound = title.toLowerCase().match(inputSearchValue.toLowerCase())
            let three = title.slice((frist + secound).length)
            return (
                <>
                    {frist}
                    <span>
                        {secound}
                    </span>
                    {three}
                </>
            )
        } else {
            return <>{title.slice(0, 10) + "..."}</>
        }
    }
    const addToFavoriteFunc = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added To Foverite',
            showConfirmButton: false,
            timer: 800
        })
        dispatch(addToFavorite(product))
    }
    const addToCartFunc = () => {
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
    useEffect(() => {
        upPageScroll()
    }, [])
    return (
        <div className='ProductBox'>
            {
                product.images.length && (
                    <>
                        <div className="image">
                            <img onError={handleErrorImg} src={product.images[0]} alt={product.title} />
                        </div>
                        <div className="detalis">
                            <div className="category">{product.category.name}</div>
                            <p className="price"><span>$</span>{product.price}</p>
                            <p className="title">{handelProduct(product.title)}</p>
                            {/* <p className="title">{inputSearchValue.length && product.search ? product.title.split("").map((e, i) => <span key={i + 1} style={{ color: inputSearchValue.toLowerCase().includes(e.toLowerCase()) ? "red" : "" }}>{e}</span>) : product.title.slice(0, 10) + "..."}</p> */}
                            <p className="desc">{product.description.slice(0, 20) + "..."}</p>
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
                                <Link to={"/detailsProduct/" + product.id} className="option">
                                    <BiSolidShow />
                                    <small>view product</small>
                                </Link>
                                <div onClick={addToCartFunc} className="option">
                                    <BsBagFill />
                                    <small>add to cart</small>
                                </div>
                                <div onClick={addToFavoriteFunc} className="option">
                                    <BsBagHeartFill />
                                    <small>add to favourite</small>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ProductBox