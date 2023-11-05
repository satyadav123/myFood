import { useEffect, useState } from 'react';
import './Style/mainproduct.css'
import { useParams } from 'react-router-dom';
export const MainProduct=()=>{
    const [myData, setData] = useState([])
    const {Id}=useParams();
    
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTgxMCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMTItMTlUMTE6MTM6MjQuMDAwWiIsImlhdCI6MTY5OTA3NzI1NiwiZXhwIjoxNzA2MzM0ODU2fQ.bdGB6gYuLIkLiC_reFgp6S0RxjDSs67tf_NEb_fSo00";
    useEffect(() => {
        fetch(`https://staging.fastor.in/v1/m/restaurant?restaurant_id=${Id}`);

        fetch(`https://staging.fastor.in/v1/m/restaurant?restaurant_id=${Id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((resp) => resp.json())
            .then((Data) => {
               
                Data.map((e)=>{
                   
              if(myData.restaurant_id==Id){
                
                setData(e)
              }
                })
            });
    }, []);

    return(
        <>
        <div className="mainProduct">

    <div>

<img className="main-product-img"src="https://b.zmtcdn.com/data/pictures/chains/4/18793824/c6ee3d18909461075ef0f6eab8300913_o2_featured_v2.jpg" alt=""/>
<div ><br/>
                                    <h3>Nick</h3><br/>
                                    <p className="address">{myData.address_complete !== "null" ? myData.address_complete : "cake pastry and pasta connaught place, New Delhi"}</p>
                                    <p className="Offer-box Offer-box-color"><img className="Offer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5Jifpots_JH1S5GiHB23n6QxMppzZdv7RQ&usqp=CAU"/><p>Four Offer Trending</p></p>
                                    <div className="rating-box">
                                        <p className="Offer-box"><img className="Offer" src="https://cdn.pixabay.com/photo/2015/01/17/11/45/star-602148_1280.png"/><p>4</p></p>
                                        <p className="Offer-box"><img className="Offer" src="https://logowik.com/content/uploads/images/dollar3010.jpg"/><p>250</p></p>
                                    </div><br/>
                                    <div className="rating-box1">
                                        <p>Popularity</p>
                                        <p>Cost For Two</p>
                                    </div><br/>
                                    <p>Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache</p>
                                </div>
    </div>

        </div>
        </>
    )
}