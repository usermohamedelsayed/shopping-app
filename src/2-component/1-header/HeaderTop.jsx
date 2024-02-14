import React, { useState } from 'react'
import "./header.scss"
import MyImg from '../../1-assaset/tiger.jpg'
import { AiOutlineSearch } from "react-icons/ai"
import { BsBagHeartFill, BsBagFill, BsFillSunFill } from "react-icons/bs"
import { MdDarkMode } from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValueSearch } from '../../6-store/searchSlice'
import { useRef } from 'react'


const HeaderTop = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const refInputTagSearch = useRef()
    const [openSearchMopile, setOpenSearchMopile] = useState(false)
    const [lightMood, setLightMood] = useState(false)
    const { dataCart } = useSelector(state => state.cartSlice)
    const { dataFavorite } = useSelector(state => state.favoriteSlice)
    const handlerInputSearch = (val) => {
        if (val) {
            navigate("/searchResult")
            dispatch(setInputValueSearch(val))
        } else {
            navigate("/")
        }
    }
    const handelInputSearchMbile = () => {
        setOpenSearchMopile(true)
        refInputTagSearch.current.focus()
    }
    const darkLightMoodFunc = () => {
        document.body.classList.toggle("dark")
        setLightMood(!lightMood)
    }
    return (
        <div className='HeaderTop'>
            <div className="container">
                <Link to={"/"} className="logo">
                    <img src={MyImg} alt="logo" />
                    <span>shop</span>
                </Link>
                <div className={`boxSearchMbile ${openSearchMopile ? "active" : ""}`}>
                    <div className="boxSearch">
                        <input ref={refInputTagSearch} onChange={(e) => handlerInputSearch(e.target.value)} type="search" placeholder='search by product name' />
                        <i className="iconSearch"><AiOutlineSearch /></i>
                    </div>
                    <div className="close" onClick={() => setOpenSearchMopile(false)}>&gt;</div>
                </div>
                <div className="icons">
                    <div className='toggaleThemeBtn' onClick={darkLightMoodFunc}>
                        {
                            lightMood ? <BsFillSunFill /> : <MdDarkMode />
                        }
                        <span className='anmation'></span>
                    </div>
                    <div className='togglIconSearchBtn' onClick={handelInputSearchMbile}><AiOutlineSearch /> <span className='anmation'></span> </div>
                    <div className="favorteHeaderBtn">
                        <span className='length'>{dataFavorite.length < 9 ? dataFavorite.length : "+9"}</span>
                        <Link to={"/favorite"}>
                            <BsBagHeartFill />
                            <span className='anmation'></span>
                        </Link>
                    </div>
                    <div className='cartHeaderBtn'>
                        <span className='length'>{dataCart.length < 9 ? dataCart.length : "+9"}</span>
                        <Link to={"/cart"}><BsBagFill />
                            <span className='anmation'></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop