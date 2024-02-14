import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'
import logo from '../../1-assaset/tiger.jpg'

let nameLocation = "shop"

const dataFooterTop = [
    {
        id: 1,
        title: "get know us",
        listItem: [
            {
                id: 1,
                path: "/",
                linkName: "careers"
            },
            {
                id: 2,
                path: "/",
                linkName: "blog"
            },
            {
                id: 3,
                path: "/",
                linkName: "investor relations"
            },
            {
                id: 4,
                path: "/",
                linkName: "shop devices"
            },
            {
                id: 5,
                path: "/",
                linkName: "shop science"
            }
        ]
    },
    {
        id: 2,
        title: "make money with us",
        listItem: [
            {
                id: 1,
                path: "/",
                linkName: "sell products on shop"
            },
            {
                id: 2,
                path: "/",
                linkName: "dell on shop business"
            },
            {
                id: 3,
                path: "/",
                linkName: "sell apps on shop"
            },
            {
                id: 4,
                path: "/",
                linkName: "become an affiliate"
            },
            {
                id: 5,
                path: "/",
                linkName: "advertise your products"
            },
            {
                id: 6,
                path: "/",
                linkName: "sell products with us"
            },
            {
                id: 7,
                path: "/",
                linkName: "host an shop hub"
            },
            {
                id: 8,
                path: "/",
                linkName: "see more make money with us"
            },
        ]
    },
    {
        id: 3,
        title: "shop payment products",
        listItem: [
            {
                id: 1,
                path: "/",
                linkName: "shop business card"
            },
            {
                id: 2,
                path: "/",
                linkName: "shop with points"
            },
            {
                id: 3,
                path: "/",
                linkName: "reload your balance"
            },
            {
                id: 4,
                path: "/",
                linkName: "shop currency converter"
            }
        ]
    },
    {
        id: 4,
        title: "let us help us",
        listItem: [
            {
                id: 1,
                path: "/",
                linkName: "shop and COVID-23"
            },
            {
                id: 2,
                path: "/",
                linkName: "your account"
            },
            {
                id: 3,
                path: "/",
                linkName: "your order"
            },
            {
                id: 4,
                path: "/",
                linkName: "shopping rates & policies"
            },
            {
                id: 5,
                path: "/",
                linkName: "returns & replacements"
            },
            {
                id: 6,
                path: "/",
                linkName: "manage your content and devices"
            },
            {
                id: 7,
                path: "/",
                linkName: "shop assistant"
            },
            {
                id: 8,
                path: "/",
                linkName: "FAQ & help"
            },
        ]
    },
]
const dataFooterBottom = [
    {
        id: 1,
        boxs: [
            {
                id: 1,
                title: `${nameLocation} music`,
                desc: "stream millions of songs"
            },
            {
                id: 2,
                title: `${nameLocation} business`,
                desc: "everything for your business"
            },
            {
                id: 3,
                title: "box office mojo",
                desc: "find movie box office data"
            },
            {
                id: 4,
                title: "kindle direct pubillshing",
                desc: "indie digital & print pubillshing mafe easy"
            },
            {
                id: 5,
                title: "blink",
                desc: "smart security for every home"
            },
        ]
    },

    {
        id: 2,
        boxs: [
            {
                id: 1,
                title: `${nameLocation} advertising`,
                desc: "find, attract, and engage customers"
            },
            {
                id: 2,
                title: `${nameLocation}Global`,
                desc: "ship orders intemationally"
            },
            {
                id: 3,
                title: "comiXology",
                desc: "thousanda of digital comics"
            },
            {
                id: 4,
                title: "prime video direct",
                desc: "video ditribution made esay"
            },
            {
                id: 5,
                title: "neighbors app",
                desc: "real-time crime & safety alerts"
            },
        ]
    },

    {
        id: 3,
        boxs: [
            {
                id: 1,
                title: `${nameLocation} drive`,
                desc: "cloud storage from shop"
            },
            {
                id: 2,
                title: "home services",
                desc: "experienced pros appiness guarantee"
            },
            {
                id: 3,
                title: "DPReview",
                desc: "digital photography"
            },
            {
                id: 4,
                title: "shopbop",
                desc: "design fashion brands"
            },
            {
                id: 5,
                title: `${nameLocation} subscription boxes`,
                desc: "top subscription boxes - right to your doo"
            },
        ]
    },

    {
        id: 4,
        boxs: [
            {
                id: 1,
                title: "6pm",
                desc: "score deals on fashion brands"
            },
            {
                id: 2,
                title: `${nameLocation} lgnite`,
                desc: "sell your original digital education resources"
            },
            {
                id: 3,
                title: "fabric",
                desc: "sewing, quilting & knitting"
            },
            {
                id: 4,
                title: "woot!",
                desc: "deals and shenanigans"
            },
            {
                id: 5,
                title: "pillpack",
                desc: "pharmacy simplified"
            },
        ]
    },

    {
        id: 5,
        boxs: [
            {
                id: 1,
                title: `abeBooks`,
                desc: "books, art & collectibles"
            },
            {
                id: 2,
                title: `${nameLocation} web services`,
                desc: "scaiable cloud computing services"
            },
            {
                id: 3,
                title: "goodreads",
                desc: "book reviews & recommendation"
            },
            {
                id: 4,
                title: "zappos",
                desc: "shoes & clothing"
            },
        ]
    },

    {
        id: 7,
        boxs: [
            {
                id: 1,
                title: "ACX",
                desc: "audiobook puplishing made easy"
            },
            {
                id: 2,
                title: "audible",
                desc: "listen to books & original audio performancess"
            },
            {
                id: 3,
                title: "IMDb",
                desc: "movies TV 7 celebrities"
            },
            {
                id: 4,
                title: "ring",
                desc: "smart home security systems"
            },
        ]
    },

    {
        id: 8,
        boxs: [
            {
                id: 1,
                title: `sell ${nameLocation}`,
                desc: "start a seling account"
            },
            {
                id: 2,
                title: "book depository",
                desc: "books with free delivery worldwide"
            },
            {
                id: 3,
                title: "IMDbpro",
                desc: "get info entertainment"
            },
            {
                id: 4,
                title: "eero WiFi",
                desc: "stream 4K video in every room"
            },
        ]
    },
]
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='SignBar'>
                <img src={""} alt="SignBar_Image" />
                <div className="container">
                    <div className="info">
                        <p>sign up for newslatters</p>
                        <span>get E-main updates about our last shop and <span>special offers.</span></span>
                    </div>
                    <form>
                        <input type="text" placeholder='your email address' />
                        <button type="button">sign up</button>
                    </form>
                </div>
            </div>
            <div className="footerTop">
                <div className="container">
                    {dataFooterTop.map(({ title, listItem, id }) => (
                        <div className="item" key={id}>
                            <p className="title">{title}</p>
                            <ul>
                                {listItem && listItem.map(({ id, path, linkName }) => (
                                    <li key={id}>
                                        <Link to={path}>{linkName}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footerCenterBar">
                <div className="container">
                    <img className="logo" src={logo} alt='logo'></img>
                    <div>
                        <div className="lang lang_1">
                            <select name="lang" id="lang">
                                <option value="english">english</option>
                            </select>
                        </div>
                        <div className="lang lang_2">
                            <select name="lang" id="lang">
                                <option value="bangladesh">🇪🇬 egypt</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="container">
                    <ul className="list">
                        {
                            dataFooterBottom && dataFooterBottom.map(({ id, boxs }) => (
                                <li key={id} className='item'>
                                    {
                                        boxs.map(({ id, title, desc }) => (
                                            <div className="box" key={id}>
                                                <p className="title">{title}</p>
                                                <span className='desc'>{desc}</span>
                                            </div>
                                        ))
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <p className="createdBy">created by MR | mohamed elsayed 👩‍💻</p>
            </div>
        </div>
    )
}
export default Footer