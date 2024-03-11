import React, {useState , useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";
import Newsletter from './../shared/Newsletter';
import { Container, Row , Col } from "reactstrap";
import districstour from "../assets/data/districstour";
import DistricsTourCard from "../shared/DistricsTourCard";

const BookFoodVechical = () => {
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
                <Container>
                    <Row>
                        {
                            districstour?.map(tour=>(
                            <Col lg='3' className="mb-4" key={tour.id}>
                                <DistricsTourCard tour={tour} /> 
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

export default BookFoodVechical;