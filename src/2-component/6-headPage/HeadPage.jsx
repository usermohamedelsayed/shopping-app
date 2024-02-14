import React from 'react'
import "./headPage.scss"
import animationHeadPage from "../../7-animation/headPage.json"
import { Player } from '@lottiefiles/react-lottie-player'
const HeadPage = ({ title, desc }) => {
    return (
        <div className='HeadPahge'>
            <div className="container">
                <div>
                    <p className="title">{title}</p>
                    <span className='desc'>{desc}</span>
                </div>
            </div>
            <div className="animation">
                <Player
                    autoplay
                    loop={true}
                    src={animationHeadPage}
                >
                </Player>
            </div>
        </div>
    )
}

export default HeadPage