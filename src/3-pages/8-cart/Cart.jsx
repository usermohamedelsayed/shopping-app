import React from 'react'
import "./cart.scss"
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { TableCart } from '../../2-component/index'
import { clearCart } from '../../6-store/cartSlice'
import { addToFavorite } from '../../6-store/favoriteSlice'
const Cart = () => {
    let timerInterval;
    const { dataCart } = useSelector(state => state.cartSlice)
    const dispatch = useDispatch()
    const clearCartFunc = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, clear cart!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleting cart...',
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
                        dispatch(clearCart())
                    }
                })
            }
        })
    }
    const addAlltoFavoriteFunc = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `All items (${dataCart.length}) will be added to the favorite!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Add to favorite '
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Adds to favorite!',
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
                        dataCart.map(e => (
                            dispatch(addToFavorite(e))
                        ))
                        dispatch(clearCart())
                        Swal.fire(
                            'Good job!',
                            'All items have been added to the favorite!',
                            'success'
                        )
                    }
                })
            }
        })

    }
    return (
        <div className='Cart'>
            <div className="container">
                <fieldset className="products">
                    <legend className='caption'>my cart</legend>
                    {
                        <TableCart product={dataCart} />
                    }
                    <div className="order">
                        <p className="title">order</p>
                        <div className="detalisOrder">
                            <div className="head">
                                <div>
                                    <p>selected <span className='lenghtPro'>{dataCart.length}</span> item price</p>
                                    <span>
                                        $<span>
                                            {dataCart.reduce((p, n) => +p + +n.price * +n.amount, 0).toFixed(1)}
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
                                    $<span>{(dataCart.reduce((p, n) => +p + +n.price * +n.amount, 0) + 10).toFixed(1)}</span>
                                </div>
                            </div>
                            {
                                dataCart.length > 0 && (
                                    <button onClick={addAlltoFavoriteFunc} className='addAllToFavorite'>add All To Favorite</button>
                                )
                            }
                            {
                                dataCart.length > 1 && (
                                    <button onClick={clearCartFunc} className='clearCart'>clear cart</button>
                                )
                            }
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Cart