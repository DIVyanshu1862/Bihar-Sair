import React,{useState} from "react";
import { Card, CardBody } from "reactstrap";
import {Link} from 'react-router-dom';
import './bihar-details-card.css';
import { BASE_URL } from "../utils/config";

const VechicalCard = ({tour}) => {
    //const {id, title, photo, price} = tour;

    //destructured properties from tour object
    const {
        photo,
        title,
        desc,
        price,
        } = tour;


    const [PackageTour, setPackagetour] = useState({
        title: title,
        photo: photo,
        desc: desc,
        price: price,
    });

    //send data to the server
    const handleClick =async e =>{
        e.preventDefault()

        console.log(PackageTour);

        try {
            // if(!user || user === undefined || user === null){
            //     return alert("please sign in");
            // }

            const res = await fetch(`${BASE_URL}/package`,{
                method:"post",
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify(PackageTour)
            });

            const result = await res.json();

            if(!res.ok){
                return alert(result.message);
            }
            
        } catch (err) {
            alert(err.message);
        }

    };

    
    return (
        
        <div className="tour_card">
            <Card >
                <div className="tour_img">
                    <img src={photo} alt="tour-img" />
                </div>
                <CardBody>
                    {/* <div className="card_top d-flex align-items-center
                    justify-content-between">
                        <span className="tour_location d-flex align-items-center gap-1">
                            <i class="ri-map-pin-line"></i> {city}
                        </span>
                    </div> */}
                    <h5 className="tour_title">
                        <Link>{title}</Link>
                    </h5>
                    <div className="card_bottom d-flex align-items-center
                    justify-content-between mt-3">
                        <h5>
                            ₹{price} 
                        </h5>
                        <button className="btn booking__btn" onClick={handleClick}>
                            <Link to={`/package`}>Add</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>

           
        </div>
    );
};

export default VechicalCard;