import React from 'react'
import "./gridProducts.scss"
const GridProducts = ({ children }) => {
    return (
        <div className='GridProducts'>
            <div className="products">
                {children}
            </div>
        </div>
    )
}

export default GridProducts