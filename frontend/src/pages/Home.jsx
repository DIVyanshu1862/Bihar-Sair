import React from "react";
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from "../shared/Subtitle";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return (
     <>
        {/* ===== hero section start ===== */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero_content">
                            <div className="hero_subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know before You go'}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling Opens the door to creating 
                                <span className="highlight"> memories</span>
                            </h1>
                            <p>
                                "Discover Bihar: Where Traveling Opens the Door to Timeless Memories!"
                                "Explore Bihar with Us: Where Every Journey Unlocks Cherished Memories!"
                                "Bihar Travel Adventures: Crafting Unforgettable Memories One Destination at a Time!"
                                "Journey Through Bihar: Where Traveling Becomes the Gateway to Lasting Memories!"
                            </p>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero_image-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero_image-box hero_video-box mt-4">
                            <video src={heroVideo} alt="" loop muted autoPlay/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero_image-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>

                    <SearchBar/>
                </Row>
            </Container>
        </section>
        {/* ===== hero section end ===== */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services_subtitle">What we serve</h5>
                        <h2 className="services_title">We offer our best services</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>

        {/* ===== features tour section start ===== */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={'Explore'}/>
                        <h2 className="featured_tour-title">Our featured tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>
        {/* ===== features tour section end ===== */}

        {/* ===== experience section start ===== */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience_content">
                            <Subtitle subtitle={'Experience'}/>
                            <h2>
                                With our all experience <br/> We will serve you
                            </h2>
                            <p>
                            Drawing from a wealth of expertise, we're dedicated to delivering 
                            unparalleled service. Trust us to elevate your journey with our seasoned 
                            knowledge and unwavering commitment to your travel satisfaction."
                            </p>
                        </div>

                        <div className="counter_wrapper d-flex align-items-center gap-5">
                            <div className="counter_box">
                                <span>12k+</span>
                                <h6>Successful trip</h6>
                            </div>
                            <div className="counter_box">
                                <span>2k+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter_box">
                                <span>15</span>
                                <h6>years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience_img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ===== experience section end =====*/}

        {/* ====== gallery section start ======*/}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Gallery'} />
                        <h2 className="gallery_title">
                            visit our customers tour gallery
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ====== gallery section end ======*/}

        {/* ===== testimonial section start ===== */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'} />
                        <h2 className="testimonial_title">
                            What our fans say about us
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ===== testimonial section end ===== */}
        <Newsletter/>
     </>
    );
};
    
export default Home;