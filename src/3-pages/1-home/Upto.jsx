import React from 'react'
import upto from "../../1-assaset/Upto.jpg"
const Upto = () => {
    return (
        <div className='Upto'>
            <div className="container">
                <img src={upto} alt="image_upto" />
                <div className="content">
                    <p className="subTitle">repair services</p>
                    <div className="title"><span>up to 70% of</span> - all t-shirts & accessories</div>
                    <button>explore more</button>
                </div>
            </div>
        </div>
    )
}

export default Upto