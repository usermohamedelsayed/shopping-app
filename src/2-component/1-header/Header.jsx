import React, { useEffect } from 'react'
import "./header.scss"
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import { useLocation } from 'react-router'
const Header = () => {
    const { pathname } = useLocation()
    const showHideHeader = () => {
        let prevScroll = window.scrollY;
        window.addEventListener("scroll", () => {
            let nextScroll = window.scrollY;
            if (window.scrollY >= 100) {
                if (prevScroll < nextScroll) {
                    document.querySelector(".Header").classList.add("hide");
                    if (document.querySelector(".containerProducts .sectionLeft")) {
                        document
                            .querySelector(".containerProducts .sectionLeft")
                            .classList.add("decraceTop");
                        document
                            .querySelector(".containerProducts .BtnShowHideFilter")
                            .classList.add("decraceTop");
                    }
                } else {
                    document.querySelector(".Header").classList.remove("hide");
                    if (document.querySelector(".containerProducts .sectionLeft")) {
                        document
                            .querySelector(".containerProducts .sectionLeft")
                            .classList.remove("decraceTop");
                        document
                            .querySelector(".containerProducts .BtnShowHideFilter")
                            .classList.remove("decraceTop");
                    }
                }
            }
            prevScroll = nextScroll;
        });
    };
    const removeActiveHeader = () => {
        document.querySelectorAll("a").forEach((e) =>
            e.addEventListener("click", () => {
                document.querySelector(".Header").classList.remove("hide");
            })
        );
    };
    useEffect(() => {
        showHideHeader();
        removeActiveHeader();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [pathname]);
    return (
        <div className='Header'>
            <HeaderTop />
            <HeaderBottom />
        </div>
    )
}

export default Header