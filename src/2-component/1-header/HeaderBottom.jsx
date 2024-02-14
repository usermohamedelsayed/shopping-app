import React, { useState } from 'react'
import "./header.scss"
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
const HeaderBottom = () => {
    const [toggaleBar, setToggaleBar] = useState(false)
    const closeMenue = () => {
        setToggaleBar(false)
    }
    const openMenue = () => {
        setToggaleBar(true)
    }
    return (
        <div className='HeaderBottom'>
            <div className={`backDrop ${toggaleBar ? "active" : ""}`} onClick={closeMenue}></div>
            <div className="container">
                <ul className={toggaleBar ? "active" : ""}>
                    <li className='close' onClick={closeMenue}>
                        <i>
                            <AiFillCloseCircle />
                        </i>
                    </li>
                    <li onClick={closeMenue}>
                        <NavLink to="/">home</NavLink>
                    </li>
                    <li onClick={closeMenue}>
                        <NavLink to="/shop">shop</NavLink>
                    </li>
                    <li onClick={closeMenue}>
                        <NavLink to="/blog">blog</NavLink>
                    </li>
                    <li onClick={closeMenue}>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li onClick={closeMenue}>
                        <NavLink to="/review">review</NavLink>
                    </li>
                    <li onClick={closeMenue}>
                        <NavLink to="/contact">contact</NavLink>
                    </li>
                </ul>
                <i className="iconBarToggale" onClick={openMenue}>
                    <FiMenu />
                </i>
            </div>
        </div>
    )
}

export default HeaderBottom