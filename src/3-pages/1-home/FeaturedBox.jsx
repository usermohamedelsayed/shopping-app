import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { feactProduct } from '../../6-store/producstSlice'
import { ProductBox, GridProducts } from '../../2-component/index'
const FeaturedBox = ({ title, desc, data }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(feactProduct())
    }, [dispatch])
    return (
        <div className='Featured'>
            <div className="container">
                <fieldset>
                    <legend className="caption">
                        <p className="title">{title}</p>
                        <p className="desc">{desc}</p>
                    </legend>
                    <GridProducts>
                        {
                            data && (
                                data.map(e => (
                                    <ProductBox key={e.id} product={e} />
                                ))
                            )
                        }
                    </GridProducts>
                </fieldset>
            </div>
        </div>
    )
}

export default FeaturedBox