import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Slider.css';
import 'animate.css';
function Slider(props){
    return(
        <>
            <OwlCarousel items='1' loop autoplay autoplayTimeout={3000} animateIn="animate__fadeInDown" animateOut="animate__fadeOutDown" nav>
                {props.owlslider.map((val) =>{
                    return(
                        <div className="slider1">
                            <img src={val.img} alt="" />
                        </div>
                    )
                })}
            </OwlCarousel>
        </>
    )
}


export default Slider;
