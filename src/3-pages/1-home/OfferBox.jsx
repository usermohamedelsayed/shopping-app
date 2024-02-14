import React from 'react'
import img from "../../1-assaset/Upto.jpg"
import imgError from "../../1-assaset/imgError.jpg"
const OfferBox = () => {

    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <div className='OfferBox'>
            <div className="container">
                <div className="boxs">
                    <div className="row1">
                        <div className="box box1">
                            <img onError={handleErrorImg} src={"https://th.bing.com/th/id/OIP.Lqk60-bXQrM9kw8qAJTAkwHaD4?pid=ImgDet&w=1200&h=630&rs=1"} alt={"Image_Offer"} />
                            <div className="details">
                                <span>crazy deals</span>
                                <span>buy 1 get 1 free</span>
                                <span>the best classic dress is on salo at cara</span>
                                <button type="button">learn moro</button>
                            </div>
                        </div>
                        <div className="box box2">
                            <img onError={handleErrorImg} src="https://th.bing.com/th/id/R.99b99f57b719f93bfb2138462d908565?rik=EyNcCpJJHCEEPw&pid=ImgRaw&r=0" alt={"Image_Offer"} />
                            <div className="details">
                                <span>spring/summer</span>
                                <span>upcomming season</span>
                                <span>the best classic dress is on salom at cara</span>
                                <button type="button">learn moro</button>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="box box3">
                            <img onError={handleErrorImg} src={"https://th.bing.com/th/id/R.d48179685391356a5bd91af0693d5822?rik=MfrJWKOKID0geA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-peNTxl_d7tk%2fUxjpK8V5H0I%2fAAAAAAAACL0%2fbg-gUVno43U%2fs1600%2f1958272_10152185885122171_237805298_n.jpg&ehk=Wg8h0DsKeyD0AjdIeL93TIXGuAAyK5v8ivQ4uo%2b13iI%3d&risl=&pid=ImgRaw&r=0"} alt={"Image_Offer"} />
                            <div className="details">
                                <span>seasonal sale</span>
                                <span>winter colletion -50% off</span>
                            </div>
                        </div>
                        <div className="box box4">
                            <img onError={handleErrorImg} src={"https://th.bing.com/th/id/R.c2364d39788c2232ce83d0f6a92e9ca6?rik=5Dhga1Ui7IfBRw&riu=http%3a%2f%2fdressonline.info%2fwp-content%2fuploads%2f2018%2f01%2fHow-to-choose-clothes-for-a-man.jpg&ehk=46AeiTDiT58umj2u%2b3DzokZLucvc%2fHbbkMC4MSr4Sd0%3d&risl=&pid=ImgRaw&r=0"} alt={"Image_Offer"} />
                            <div className="details">
                                <span>new footwera</span>
                                <span>spring/summer 2022</span>
                            </div>
                        </div>
                        <div className="box box5">
                            <img onError={handleErrorImg} src={"https://static.vecteezy.com/system/resources/previews/022/316/941/large_2x/cheerful-woman-near-the-wardrobe-shopaholic-isolated-background-photo.jpg"} alt={"Image_Offer"} />
                            <div className="details">
                                <span>t-shirts</span>
                                <span>new trendy prints</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferBox