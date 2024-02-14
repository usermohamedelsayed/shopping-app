import React, { useEffect } from 'react'
import "./tableFavorite.scss"
import { Player } from '@lottiefiles/react-lottie-player'
import { BsEye, BsFillTrash3Fill } from 'react-icons/bs'
import cartEmpty from "../../7-animation/cartEmpty.json"
import { useDispatch } from 'react-redux'
import { changeAmount, removeProduct, setInputVal } from '../../6-store/favoriteSlice'
import { useNavigate } from 'react-router'
import { upPageScroll } from '../../6-store/producstSlice'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const TableFavorite = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        upPageScroll()
    }, [])
    const handelAmount = (e, val) => {
        dispatch(setInputVal(val.target.value))
        dispatch(changeAmount(e))
    }
    const viewProduct = (product) => {
        navigate("/detailsProduct/" + product.id)
    }
    const deleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeProduct(id))
            }
        })
    }
    return (
        <div className='TableFavorite'>
            {
                product.length ? (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>product</th>
                                    <th>price</th>
                                    <th>qut</th>
                                    <th>
                                        <BsEye />
                                    </th>
                                    <th>
                                        <BsFillTrash3Fill />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.slice().reverse().map((e, i) => (
                                        <tr className='productRow' key={e.id}>
                                            <td className='boxImage'>
                                                <img src={e.images[0]} alt={e.title} />
                                                <div>
                                                    <div className="title">{e.title.slice(0, 14) + ".."}</div>
                                                    <div className="desc">{e.description.slice(0, 13) + ".."}</div>
                                                </div>
                                            </td>
                                            <td className='price'>
                                                <div>
                                                    <span>$ </span>{e.price}
                                                </div>
                                            </td>
                                            <td className='amount'>
                                                <input onChange={(val) => handelAmount(e, val)} type="number" defaultValue={e.amount} />
                                            </td>
                                            <td onClick={() => viewProduct(e)} className="view">
                                                <Link>
                                                    <BsEye />
                                                </Link>
                                            </td>
                                            <td onClick={() => deleteProduct(e.id)} className='remove'>
                                                <i>
                                                    <BsFillTrash3Fill />
                                                </i>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </>
                ) : <Player
                    autoplay
                    loop
                    src={cartEmpty}
                    style={
                        {
                            width: "95%",
                            marginBottom: "20px",
                            height: "60vh",
                            background: "var(--bg-main)",
                            borderRadius: "5px"
                        }
                    }
                >
                </Player>
            }
        </div>
    )
}

export default TableFavorite