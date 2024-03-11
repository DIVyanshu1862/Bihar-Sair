import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const serviceData =[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Empowering your plans with precise weather forecasts for seamless travel decision-making",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Your gateway to immersive journeys led by passionate local guides, crafting unforgettable",
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Crafting personalized travel experiences to match your unique preferences, ensuring journey",
    },
];

const ServiceList = () =>{
    return(
        <>
            {
                serviceData.map((item,index)=>(
                    <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
                        <ServiceCard item={item} />
                    </Col>
                ))
            }
        </>
    );
};

export default ServiceList;