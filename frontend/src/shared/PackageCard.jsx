import React,{useContext} from "react";
import { Card, CardBody } from "reactstrap";
import './bihar-details-card.css';
import {AuthContext}  from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const PackageCard = ({tour,id}) => {
    const {title, city, photo, price} = tour;

    const {user} = useContext(AuthContext);

    const handleClick = async e =>{
        e.preventDefault();

        try {
            if(!user || user === undefined || user === null){
                return alert("please sign in");
            }

            const res = await fetch(`${BASE_URL}/package/${id}`,{
                method:"delete",
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
            });

            const result = await res.json();

            if(!res.ok){
                return alert(result.message);
            }
            
        } catch (err) {
            alert(err.message);
        }
        window.location.reload();
    };

    
    return (
        
        <div className="tour_card">
            <Card >
                <div className="tour_img">
                    <img src={photo} alt="tour-img" />
                </div>
                <CardBody>
                    <div className="card_top d-flex align-items-center
                    justify-content-between">
                        <span className="tour_location d-flex align-items-center gap-1">
                            <i class="ri-map-pin-line"></i> {city}
                        </span>
                    </div>
                    <h5 className="tour_title">
                        {title}
                    </h5>
                    <div className="card_bottom d-flex align-items-center
                    justify-content-between mt-3">
                        <h5>
                            ₹{price} <span> /per person</span>
                        </h5>
                        <button className="btn booking__btn" onClick={handleClick}>
                            Remove
                        </button>
                    </div>
                </CardBody>
            </Card>
           
        </div>
    );
};

export default PackageCard;