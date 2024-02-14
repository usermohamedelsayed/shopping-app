import React, { useEffect } from 'react'
import "./tableCart.scss"
import { useDispatch } from 'react-redux'
import { deletProduct, getInputVal, setHandleAmount } from '../../6-store/cartSlice'
import { BsEye, BsFillTrash3Fill } from 'react-icons/bs'
import { Player } from '@lottiefiles/react-lottie-player'
import { useNavigate } from 'react-router'
import { upPageScroll } from '../../6-store/producstSlice'
import { Link } from 'react-router-dom'
import cartEmpty from "../../7-animation/cartEmpty.json"
import Swal from 'sweetalert2'
const TableCart = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        upPageScroll()
    }, [])
    const handelAmount = (val, e) => {
        dispatch(getInputVal(val.target.value))
        dispatch(setHandleAmount(e))
    }
    const removeProduct = (id) => {
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
                dispatch(deletProduct(id))
            }
        })
    }
    const viewProduct = (product) => {
        navigate("/detailsProduct/" + product.id)
    }
    return (
        <div className='TableCart'>
            {
                product.length ? (
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
                                product.slice().reverse().map((e) => (
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
                                            <input onChange={(val) => handelAmount(val, e)} type="number" defaultValue={e.amount} />
                                        </td>
                                        <td onClick={() => viewProduct(e)} className="view">
                                            <Link>
                                                <BsEye />
                                            </Link>
                                        </td>
                                        <td onClick={() => removeProduct(e.id)} className='remove'>
                                            <i>
                                                <BsFillTrash3Fill />
                                            </i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
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

export default TableCart