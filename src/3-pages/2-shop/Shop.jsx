import React, { useEffect, useRef, useState } from 'react'
import "./shop.scss"
import { useDispatch, useSelector } from 'react-redux'
import { FiMenu } from 'react-icons/fi'
import { feactProduct } from '../../6-store/producstSlice'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { ProductBox, GridProducts, HeadPage, Error } from '../../2-component/index'
const Shop = ({ infoBtnFilterPro, setInfoBtnFilterPro }) => {
    const dispatch = useDispatch()
    const refInputCategory = useRef()
    const refInputTagMinPrice = useRef()
    const refInputTagMaxPrice = useRef()
    const refPagnationTag = useRef()
    const refSpanPolitWidth = useRef()
    const { dataProducts } = useSelector(state => state.productsSlice)
    const category = [...new Set(dataProducts.map(e => e.category.name.toLowerCase()))]
    const [productsList, setProductsList] = useState([])
    const [getCurrentCategoryFilter, setGetCurrentCategoryFilter] = useState("")
    const [showMenuFilter, setShowMenuFilter] = useState(false)
    const [indexSliceControlled, setIndexSliceControlled] = useState({ start: 0, end: 4 })
    const [activeSpanContralled, setActiveSpanContralled] = useState(0)
    let countPagnation = 4
    useEffect(() => {
        setProductsList(dataProducts)
        refInputCategory.current.checked = true
        setGetCurrentCategoryFilter("all")
    }, [dataProducts, dispatch])
    useEffect(() => {
        dispatch(feactProduct())
    }, [dispatch])
    const filterByCategory = (categoryName) => {
        if (categoryName === "all") {
            setProductsList(dataProducts.filter((e => (
                +e.price >= +refInputTagMinPrice.current.value && +e.price <= +refInputTagMaxPrice.current.value
            ))))
            setGetCurrentCategoryFilter(categoryName)
        } else {
            setProductsList(dataProducts.filter(e => e.category.name.toLowerCase() === categoryName).filter((e => (
                +e.price >= +refInputTagMinPrice.current.value && +e.price <= +refInputTagMaxPrice.current.value
            ))))
            setGetCurrentCategoryFilter(categoryName)
        }
        setIndexSliceControlled({ start: 0, end: 4 })
        setActiveSpanContralled(0)
    }
    // Set value input  
    const rangePriceMin = (e) => {
        refInputTagMinPrice.current.value = -(e.target.value - (2500 + 60))
    }
    const rangePriceMax = (e) => {
        refInputTagMaxPrice.current.value = e.target.value
    }
    // Filter by price
    const filterByPrice = () => {
        if (getCurrentCategoryFilter === "all") {
            setProductsList(dataProducts.filter((e => (
                +e.price >= +refInputTagMinPrice.current.value && +e.price <= +refInputTagMaxPrice.current.value
            ))))
        } else {
            setProductsList(dataProducts.filter(e => (
                e.category.name.toLowerCase() === getCurrentCategoryFilter.toLowerCase()
            )).filter((e => (
                +e.price >= +refInputTagMinPrice.current.value && +e.price <= +refInputTagMaxPrice.current.value
            ))))
        }
        setIndexSliceControlled({ start: 0, end: 4 })
        setActiveSpanContralled(0)
    }
    // show anf hide menu filter in mobile
    const openMenuFilterMobile = () => {
        setShowMenuFilter(true)
        setInfoBtnFilterPro(false)
    }
    const closeMenuFilterMobile = () => {
        setShowMenuFilter(false)
    }

    const spansControlled = []
    const createSpanControlled = () => {
        for (let i = 1; i <= Math.ceil(productsList.length / countPagnation); i++) {
            spansControlled.push(i)
        }
    }
    createSpanControlled()
    // Span poilte btn 
    const changeViewProducts = (e, i) => {
        setIndexSliceControlled({ start: +e === 1 ? 0 : +e * countPagnation - countPagnation, end: +e === 1 ? countPagnation : +e * countPagnation })
        setActiveSpanContralled(i)
    }
    // Scroll pagnation
    const scrollPagnationNextFunc = () => {
        if (activeSpanContralled >= 1) {
            refPagnationTag.current.scrollLeft += refSpanPolitWidth.current.clientWidth + 1
        }
    }
    // Scroll pagnation
    const scrollPagnationPrevFunc = () => {
        if (activeSpanContralled <= spansControlled.length - 2) {
            refPagnationTag.current.scrollLeft -= refSpanPolitWidth.current.clientWidth + 1
        }
    }
    // Button previous
    const prevPageBtn = () => {
        if (activeSpanContralled > 0) {
            setActiveSpanContralled(prev => prev -= 1)
            setIndexSliceControlled(prev => ({ ...prev, start: +prev.start === 0 ? 0 : +prev.start - countPagnation, end: +prev.end - countPagnation }))
            scrollPagnationPrevFunc()
        }
    }

    // Button next
    const nexPageBtn = () => {
        if (indexSliceControlled.end < productsList.length) {
            setActiveSpanContralled(prev => prev += 1)
            setIndexSliceControlled(prev => ({ ...prev, start: +prev.start + countPagnation, end: +prev.end + countPagnation }))
            scrollPagnationNextFunc()
            refPagnationTag.current.classList.add("anmation")
        }
    }

    return (
        <>
            <HeadPage title={"shopping"} desc={"save more with coupons & up to 70% off!"} />
            <div className='Shop'>
                <div onClick={closeMenuFilterMobile} className={`backdrob ${showMenuFilter ? "active" : ""}`}></div>
                <div className="container">
                    <fieldset className="containerProducts">
                        <legend>our products</legend>
                        {/* Section left */}
                        <section className={`sectionLeft ${showMenuFilter ? "showSectionLeft" : ""}`}>
                            <div className="boxFilter boxFilterCategory">
                                <p className='title'>category</p>
                                <ul>
                                    <li onClick={() => filterByCategory("all")}>
                                        <input ref={refInputCategory} type="radio" id={"all"} name='filter' />
                                        <label htmlFor={"all"}>{"all"}</label>
                                    </li>
                                    {
                                        category.length >= 1 && (
                                            category.map((e, i) => (
                                                <li key={e + i} onClick={() => filterByCategory(e)}>
                                                    <input type="radio" id={e} name='filter' />
                                                    <label htmlFor={e}>{e}</label>
                                                </li>
                                            ))
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="line"></div>
                            <div className="boxFilter boxFilterPrice">
                                <p className='title'>price</p>
                                <div className="inputRange">
                                    <input onChange={rangePriceMin} defaultValue={2500} type="range" min={60} max={2500} />
                                    <input onChange={rangePriceMax} defaultValue={2500} type="range" min={60} max={2500} />
                                </div>
                                <div className="inputRangeVal">
                                    <input ref={refInputTagMinPrice} defaultValue={60} type="number" name="valRange" id="valRangeMin" />
                                    <input ref={refInputTagMaxPrice} defaultValue={2500} type="number" name="valRange" id="valRangeMax" />
                                </div>
                                <button onClick={filterByPrice} type='button'>filter</button>
                            </div>
                        </section>
                        {/* Section left */}
                        {/* Bar Toggale */}
                        <div onClick={openMenuFilterMobile} className={`BtnShowHideFilter ${infoBtnFilterPro ? "active" : ""}`}>
                            <FiMenu />
                            <p className={`desc ${infoBtnFilterPro ? "active" : ""}`}>official for its filter products</p>
                            <span className={`${infoBtnFilterPro ? "active" : ""}`}>
                                <span className="spanRight"></span>
                                <span className="spanBottom"></span>
                            </span>
                        </div>
                        <div className={`overlayBtnShowHideFilter ${infoBtnFilterPro && "active"}`} onClick={() => setInfoBtnFilterPro(false)}></div>
                        {/* Bar Toggale */}
                        {/* Section Right */}
                        <div className='sectionRight'>
                            {
                                productsList.length ? (
                                    <>
                                        <GridProducts>
                                            {
                                                productsList.slice(indexSliceControlled.start, indexSliceControlled.end).map((product, i) => (
                                                    <ProductBox key={product.id} product={product} />
                                                ))
                                            }
                                        </GridProducts>
                                        {
                                            spansControlled.length > 1 && (
                                                <div className="controlles">
                                                    <button onClick={prevPageBtn}><MdKeyboardArrowLeft /></button>
                                                    <div ref={refPagnationTag} className={`pagnation ${spansControlled.length <= 2 ? "smallWidth" : ""}`}>
                                                        {
                                                            spansControlled.map((e, i) => (
                                                                <span ref={refSpanPolitWidth} className={activeSpanContralled === i ? "active" : ""} onClick={() => changeViewProducts(e, i)} key={Math.random()}>{e}</span>
                                                            ))
                                                        }
                                                        <span className="length">{spansControlled.length}</span>
                                                    </div>
                                                    <button onClick={nexPageBtn}><MdKeyboardArrowRight /></button>
                                                </div>
                                            )
                                        }
                                    </>
                                ) : <div className='notFoundProducts'><Error /></div>
                            }
                        </div>
                        {/* Section Right */}
                    </fieldset>
                </div>
            </div>
        </>
    )
}

export default Shop