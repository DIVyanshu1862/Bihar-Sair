import React, {useState , useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";
import Newsletter from '../shared/Newsletter';
import { Container, Row , Col } from "reactstrap";
import CustomePackageCard from "../shared/CustomPackageCard";

//importing food related file
import FoodCard from "../shared/FoodCard";

//importing vechical related file
import VechicalCard from "../shared/VechicalCard";

//importing hotel related file
import HotelCard from "../shared/HotelCard";

import useFetch from '../hooks/useFetch';
import { BASE_URL } from "../utils/config";

const CustomPackage = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const {
        data: tours,
        loading,
        error
        } = useFetch(`${BASE_URL}/customtour?page=${page}`);
    const {data: tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`);

    useEffect(()=>{
        const pages = Math.ceil(tourCount/ 12)
        setPageCount(pages);
        window.scrollTo(0,0);
    },[page, tourCount, tours]);
    
   // fetching fooddata 
    const {
        data: food,
        } = useFetch(`${BASE_URL}/food?page=${page}`);


    //fetching vechical data
    const {
        data: vechical,
        } = useFetch(`${BASE_URL}/vechical?page=${page}`);

    //fetching vechical data
    const {
        data: hotel,
        } = useFetch(`${BASE_URL}/hotel?page=${page}`);

    return (
        <>
            <CommonSection title={"Create your package"} />
            <section className="pt-0 mt-4">
                <div className="headings">
                    <h2 className="text-center m-4">Attractions</h2>
                </div>
                <Container>

                    {loading && <h4 className="text-center pt-5">Loading......</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                   {
                    !loading && !error && 
                    <Row>
                    {
                        tours?.map(tour=>(
                        <Col lg='3' md='6' sm='6' className="mb-4" key={tour._id}>
                            <CustomePackageCard tour={tour} /> 
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
                   }
                </Container>
            </section>
         
            {/* food section */}
            <section className="pt-0 mt-4">
                <div className="headings">
                    <h2 className="text-center m-4">Foods</h2>
                </div>
                <Container>

                    {loading && <h4 className="text-center pt-5">Loading......</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                   {
                    !loading && !error && 
                    <Row>
                    {
                        food?.map(tour=>(
                        <Col lg='3' md='6' sm='6' className="mb-4" key={tour._id}>
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
                   }
                </Container>
            </section>

            {/* vechical section */}
            <section className="pt-0 mt-4">
                <div className="headings">
                    <h2 className="text-center m-4">Vechicals</h2>
                </div>
                <Container>

                    {loading && <h4 className="text-center pt-5">Loading......</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                   {
                    !loading && !error && 
                    <Row>
                    {
                        vechical?.map(tour=>(
                        <Col lg='3' md='6' sm='6' className="mb-4" key={tour._id}>
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
                   }
                </Container>
            </section>

            {/* hotel section */}
            <section className="pt-0 mt-4">
                <div className="headings">
                    <h2 className="text-center m-4">Hotels</h2>
                </div>
                <Container>

                    {loading && <h4 className="text-center pt-5">Loading......</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                   {
                    !loading && !error && 
                    <Row>
                    {
                        hotel?.map(tour=>(
                        <Col lg='3' md='6' sm='6' className="mb-4" key={tour._id}>
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
                   }
                </Container>
            </section>


            <Newsletter />
        </>
    )
};

export default CustomPackage;