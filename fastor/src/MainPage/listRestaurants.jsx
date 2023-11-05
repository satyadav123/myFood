import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Carousel from "./slider";
import { SingleSlider } from "./singleSlider";
import './Style/listRestraurants.css'
import { Link } from "react-router-dom";
export const ListRetraurants = () => {
    const [myData, setData] = useState([])
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTgxMCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMTItMTlUMTE6MTM6MjQuMDAwWiIsImlhdCI6MTY5OTA3NzI1NiwiZXhwIjoxNzA2MzM0ODU2fQ.bdGB6gYuLIkLiC_reFgp6S0RxjDSs67tf_NEb_fSo00";
    useEffect(() => {
        fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118");

        fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((resp) => resp.json())
            .then((Data) => {
                setData(Data)
                console.log(Data)
            });
    }, []);

    return (
        <>
            <Navbar /><br/>
            <div className="karan-offer">
                <div>
                    <h1>Satendra</h1><br/>
                    <h3>Let's explore this evening</h3>
                </div>
                <div className="offer-wallet">
                
                
                <img   src="data:image/png;base64,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" alt=""/>
                <img className="wallet" src="https://static.vecteezy.com/system/resources/thumbnails/007/739/618/small_2x/special-offer-label-for-promotion-product-free-vector.jpg" alt=''/>
                </div>
            </div><br/>
           
            <div className="Your-Tast">

                <Carousel /><br/><br/>
                <SingleSlider />
            </div><br/>
            <div className="popular-Once">

                {
                    myData.map((e) => (
                        <>
                        <Link to={`/mainproduct/${e.restaurant_id}`}>
                            <div className="container-restaurant" >
                                <div>
                                    <img className='Popular-restra-images' src={e.images[0].url} alt="" />
                                </div>
                                <div >
                                    <h3>{e.restaurant_name}</h3>
                                    <p className="address">{e.address_complete !== "null" ? e.address_complete : "cake pastry and pasta connaught place, New Delhi"}</p>
                                    <p className="Offer-box Offer-box-color"><img className="Offer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5Jifpots_JH1S5GiHB23n6QxMppzZdv7RQ&usqp=CAU"/><p>Four Offer Trending</p></p>
                                    <div className="rating-box">
                                        <p className="Offer-box"><img className="Offer" src="https://cdn.pixabay.com/photo/2015/01/17/11/45/star-602148_1280.png"/><p>{e.rating.restaurant_avg_rating}</p></p>
                                        <p className="Offer-box"><img className="Offer" src="https://logowik.com/content/uploads/images/dollar3010.jpg"/><p>{e.avg_cost_for_two}</p></p>
                                    </div>
                                    <div className="rating-box1">
                                        <p>Popularity</p>
                                        <p>Cost For Two</p>
                                    </div>
                                </div>
                            </div >
                            </Link>
                        </>
                    ))
                }

            </div >
        </>
    )
}