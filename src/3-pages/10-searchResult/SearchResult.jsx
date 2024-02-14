import React, { useEffect } from 'react'
import "./searchResult.scss"
import noSearch from "../../7-animation/noSearch.json"
import { useDispatch, useSelector } from 'react-redux'
import { feactProduct } from '../../6-store/producstSlice'
import { Player } from '@lottiefiles/react-lottie-player'
import { GridProducts, ProductBox } from '../../2-component/index'
const SearchResult = () => {
    const dispatch = useDispatch()
    const { inputSearchValue } = useSelector(state => state.searchSlice)
    const { dataProducts } = useSelector(state => state.productsSlice)
    const ProdcutsResultSearch = dataProducts.filter(e => e.title.toLowerCase().includes(inputSearchValue.toLowerCase())).map(e => ({ ...e, search: true }))
    useEffect(() => {
        dispatch(feactProduct())
    }, [dispatch])
    return (
        <div className='SearchResult'>
            <div className="container">
                <fieldset className="productSearch">
                    <legend>result search</legend>
                    {
                        ProdcutsResultSearch.length ? (
                            <GridProducts>
                                {
                                    ProdcutsResultSearch.map(e => (
                                        <ProductBox key={e.id} product={e} />
                                    ))
                                }
                            </GridProducts>
                        ) : <Player
                            autoplay
                            loop
                            src={noSearch}
                            style={{
                                maxWidth: "400px",
                                width: "95%",
                                marginTop: "-30px",
                                paddingBottom: "30px"
                            }}
                        >

                        </Player>
                    }
                </fieldset>
            </div>
        </div>
    )
}

export default SearchResult