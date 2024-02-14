import React from 'react'
import "./lodding.scss"
import loddingAnmation from "../../7-animation/lodding.json"
import { Player } from '@lottiefiles/react-lottie-player';
const Loddding = () => {
    return (
        <div className='container'>
            <div className="Loddding">
                <div className="player">
                    <Player
                        autoplay
                        loop
                        src={loddingAnmation}
                    >
                    </Player>
                </div>
            </div>
        </div>
    )
}

export default Loddding