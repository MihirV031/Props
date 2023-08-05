import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Slider2.css';
function Slider2(props) {
    return (
        <>
            <div className="container">
                    <div>
                        <div class="text-center a">
                            <div class="sub_heading">
                            <span >STUDENT PLACEMENT</span>
                            </div>
                            <h1>OUR RECRUITMENT <br /> PARTNERS</h1>
                        </div>
                    </div>
                <div className="row">
                    <OwlCarousel items='6' loop autoplay autoplayTimeout={3000}>
                        {props.owlslider2.map((vel) => {
                            return (
                                <div className="slider2">
                                    <img src={vel.img} alt="" />
                                </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
export default Slider2;