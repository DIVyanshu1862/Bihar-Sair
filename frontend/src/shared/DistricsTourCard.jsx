import React from "react";
import { Card, CardBody } from "reactstrap";
import {Link} from 'react-router-dom';
import './districs-tour-card.css';

const DistricsTourCard = ({tour}) => {
    const {id, title, city, photo} = tour;
    
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
                        <button className="btn booking__btn">
                            <Link to={`/gayadetails`}>Create package</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>

           
        </div>
    );
};

export default DistricsTourCard;