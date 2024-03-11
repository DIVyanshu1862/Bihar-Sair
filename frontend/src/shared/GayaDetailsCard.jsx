import React from "react";
import { Card, CardBody } from "reactstrap";
import {Link} from 'react-router-dom';
import './bihar-details-card.css';

const GayaDetailsCard = ({tour}) => {
    const {id, title, city, photo, price} = tour;
    
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
                        <Link to={`/tours/${id}`}>{title}</Link>
                    </h5>
                    <div className="card_bottom d-flex align-items-center
                    justify-content-between mt-3">
                        <h5>
                            ₹{price} <span> /per person</span>
                        </h5>
                        <button className="btn booking__btn">
                            <Link to={`/tours/${id}`}>Add</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>

           
        </div>
    );
};

export default GayaDetailsCard;