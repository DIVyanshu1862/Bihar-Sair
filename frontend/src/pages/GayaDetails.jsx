import React, {useState , useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";
import Newsletter from './../shared/Newsletter';
import { Container, Row , Col } from "reactstrap";
import gayadata from "../assets/data/gayadata";
import GayaDetailsCard from "../shared/GayaDetailsCard";

//importing food related file
import fooddata from '../assets/data/fooddata';
import FoodCard from "../shared/FoodCard";

//importing vechical related file
import vechicaldata from "../assets/data/vechicaldata";
import VechicalCard from "../shared/VechicalCard";

//importing hotel related file
import hoteldata from "../assets/data/hoteldata";
import HotelCard from "../shared/HotelCard";

const GayaDetails = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(()=>{
        const pages = Math.ceil(5/ 4)
        setPageCount(pages);
    },[page]);

    return (
        <>
            <CommonSection title={"Create your package"} />
            <section className="pt-0 mt-4">
                <div className="headings">
                    <h2 className="text-center m-4">Attractions</h2>
                </div>
                <Container>
                    <Row>
                        {
                            gayadata?.map(tour=>(
                            <Col lg='3' className="mb-4" key={tour.id}>
                                <GayaDetailsCard tour={tour} /> 
                            </Col>))
                        }
                        <Col lg='12'>
                            <div className="pagination d-flex align-items-center
                            justify-content-center mt-4 gap-3">
                                {
                                    [...Array(pageCount).keys()].map(number=>(
                                        <span key={number} onClick={()=> setPage(number)}
                                        className={page===number?"active_page":""}>
                                            {number+1}
                                        </span>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
         
            {/* food section */}
            <section className="pt-0 mt-4">
                <div className="headings">
                    <h2 className="text-center m-4">Foods</h2>
                </div>
                <Container>
                    <Row>
                        {
                            fooddata?.map(tour=>(
                            <Col lg='3' className="mb-4" key={tour.id}>
                                <FoodCard tour={tour} /> 
                            </Col>))
                        }
                        <Col lg='12'>
                            <div className="pagination d-flex align-items-center
                            justify-content-center mt-4 gap-3">
                                {
                                    [...Array(pageCount).keys()].map(number=>(
                                        <span key={number} onClick={()=> setPage(number)}
                                        className={page===number?"active_page":""}>
                                            {number+1}
                                        </span>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* vechical section */}
            <section className="pt-0 mt-4">
                <div className="headings">
                    <h2 className="text-center m-4">Vechicals</h2>
                </div>
                <Container>
                    <Row>
                        {
                            vechicaldata?.map(tour=>(
                            <Col lg='3' className="mb-4" key={tour.id}>
                                <VechicalCard tour={tour} /> 
                            </Col>))
                        }
                        <Col lg='12'>
                            <div className="pagination d-flex align-items-center
                            justify-content-center mt-4 gap-3">
                                {
                                    [...Array(pageCount).keys()].map(number=>(
                                        <span key={number} onClick={()=> setPage(number)}
                                        className={page===number?"active_page":""}>
                                            {number+1}
                                        </span>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* hotel section */}
            <section className="pt-0 mt-4">
                <div className="headings">
                    <h2 className="text-center m-4">Hotels</h2>
                </div>
                <Container>
                    <Row>
                        {
                            hoteldata?.map(tour=>(
                            <Col lg='3' className="mb-4" key={tour.id}>
                                <HotelCard tour={tour} /> 
                            </Col>))
                        }
                        <Col lg='12'>
                            <div className="pagination d-flex align-items-center
                            justify-content-center mt-4 gap-3">
                                {
                                    [...Array(pageCount).keys()].map(number=>(
                                        <span key={number} onClick={()=> setPage(number)}
                                        className={page===number?"active_page":""}>
                                            {number+1}
                                        </span>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <Newsletter />
        </>
    )
};

export default GayaDetails;