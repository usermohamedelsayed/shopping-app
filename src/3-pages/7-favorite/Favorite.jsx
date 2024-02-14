import React from 'react'
import "./favorite.scss"
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { TableFavorite } from '../../2-component/index'
import { clearFavorite } from '../../6-store/favoriteSlice'
import { setDataCart } from '../../6-store/cartSlice'
const Favorite = () => {
    const dispatch = useDispatch()
    const { dataFavorite } = useSelector(state => state.favoriteSlice)
    const clearFavoriteFunc = () => {
        let timerInterval;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, clear favorite!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleting favorite...',
                    html: 'I will delet in <b></b> milliseconds.',
                    timer: 700,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        dataFavorite.map(e => (
                            dispatch(clearFavorite())
                        ))
                    }
                })
            }
        })
    }
    const addAllToCartFunc = () => {
        let timerInterval
        Swal.fire({
            title: 'Are you sure?',
            text: `All items (${dataFavorite.length}) will be added to the cart!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Add to cart '
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Adds to cart!',
                    html: 'I will add in <b></b> milliseconds.',
                    timer: 700,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        dataFavorite.map(e => (
                            dispatch(setDataCart(e))
                        ))
                        Swal.fire(
                            'Good job!',
                            'All items have been added to the cart!',
                            'success'
                        )
                    }
                })
            }
        })
    }
    return (
        <div className='Favorite'>
            <div className="container">
                <fieldset className="products">
                    <legend className="caption">my Favorite</legend>
                    {
                        <TableFavorite product={dataFavorite} />
                    }
                    <div className="order">
                        <p className="title">details</p>
                        <div className="detalisOrder">
                            <div className="head">
                                <div>
                                    <p>selected <span className='lenghtPro'>{dataFavorite.length}</span> item price</p>
                                    <span>
                                        $<span>
                                            {dataFavorite.reduce((p, n) => +p + +n.price * +n.amount, 0).toFixed(1)}
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <p>discount</p>
                                    <span>
                                        -$<span>
                                            0.00
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <p>delivery cost</p>
                                    <span>
                                        +$<span>
                                            10.00
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="grandTotal">
                                <p>grand total &gt;</p>
                                <div>
                                    $<span>{(dataFavorite.reduce((p, n) => +p + +n.price * +n.amount, 0) + 10).toFixed(1)}</span>
                                </div>
                            </div>
                            {
                                dataFavorite.length > 0 && (
                                    <button onClick={addAllToCartFunc} className='addToCart'>add all to cart</button>
                                )
                            }
                            {
                                dataFavorite.length > 1 && (
                                    <button onClick={clearFavoriteFunc} className='clearFavorite'>clear favorite</button>
                                )
                            }
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Favorite