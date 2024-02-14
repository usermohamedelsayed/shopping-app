import React from 'react'
import "./error.scss"
import { Player } from '@lottiefiles/react-lottie-player'
import error from "../../7-animation/Error.json"

const Error = () => {
    return (
        <div className='container'>
            <div className="Error">
                <div className="player">
                    <Player
                        autoplay
                        loop
                        src={error}
                    >
                    </Player>
                </div>
            </div>
        </div>
    )
}

export default Error