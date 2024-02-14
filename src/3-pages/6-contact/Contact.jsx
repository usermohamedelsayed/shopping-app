import React from 'react'
import "./contact.scss"
import contactUs from "../../7-animation/contactUs.json"
import { Player } from '@lottiefiles/react-lottie-player'
import { AiFillInstagram, AiFillPhone, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook, BiSolidLocationPlus, BiSolidMessageAltDetail } from 'react-icons/bi'
import { BsArrowRightShort } from 'react-icons/bs'
const Contact = () => {
    return (
        <div className='Contact'>
            <div className="container">
                <div className="row">
                    <div className="colLeft">
                        <div className="boxText">
                            <div className="anamtion">
                                <Player
                                    autoplay
                                    loop
                                    src={contactUs}
                                ></Player>
                            </div>
                            <h2>Contact us</h2>
                            <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, culpa? Sapiente provident ex labore architecto ea? </span>
                        </div>
                        <div className="boxIcons">
                            <ul>
                                <li>
                                    <i><AiFillPhone /></i>
                                    <span>+20 123 456 789</span>
                                </li>
                                <li>
                                    <i><BiSolidMessageAltDetail /></i>
                                    <span>example@gmail.come</span>
                                </li>
                                <li>
                                    <i><BiSolidLocationPlus /></i>
                                    <span>egypt cairo</span>
                                </li>
                            </ul>
                            <div className="sochailmedai">
                                <i><BiLogoFacebook /></i>
                                <i><AiFillInstagram /></i>
                                <i><AiOutlineTwitter /></i>
                            </div>
                        </div>
                    </div>
                    <div className="colRight">
                        <div></div>
                        <div className="box">
                            <div>
                                <input type="text" placeholder='frist name' />
                                <input type="text" placeholder='last name' />
                            </div>
                            <input type="text" placeholder='email address' />
                            <textarea placeholder='your message'></textarea>
                            <button className="btn btn-arrow">send massage <BsArrowRightShort className='arrow' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact