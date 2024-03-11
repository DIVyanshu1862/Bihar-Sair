import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.png';
import ava03 from '../../assets/images/ava-3.png';

const Testimonials = () => {
    
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
    
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                "Discovering Bihar was a breeze with Bihar Sair! This website made
                planning our trip a joy, providing insightful guides and seamless booking
                options. From ancient wonders to local gems, Bihar Sair made our travel experience unforgettable."
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Shivam Singh</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    "Bihar Sair turned our travel dreams into reality! The website's 
                    user-friendly interface, coupled with comprehensive travel information, 
                    made exploring Bihar hassle-free. Thanks to Bihar Sair, we had an amazing
                    journey filled with cultural richness and unforgettable memories."
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Abhiraj Yadav</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    "Bihar Sair exceeded our expectations! Navigating through
                    the website was a delight, offering a treasure trove of travel tips
                    and exciting destinations across Bihar. With easy bookings and reliable information, 
                    Bihar Sair made our trip a seamless "
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Raushan Kumar</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    "Bihar Sair turned our travel dreams into reality! The website's 
                    user-friendly interface, coupled with comprehensive travel information, 
                    made exploring Bihar hassle-free. Thanks to Bihar Sair, we had an amazing
                    journey filled with cultural richness and unforgettable memories."
                </p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Abhiraj Yadav</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

        </Slider>
    );
};

export default Testimonials;