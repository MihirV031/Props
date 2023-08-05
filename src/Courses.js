/* eslint-disable jsx-a11y/anchor-is-valid */
import './Courses.css'
import { BiRightArrowAlt } from "react-icons/bi";
function Courses(props) {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="text-center">
                        <span className="sub-heading">
                            Creative Course
                        </span>
                        <span className="main-heading">
                            <h2>
                                Offered Courses
                            </h2>
                        </span>
                    </div>
                    <div className="slider1">
                        {props.coursescosse.map((val) => {
                            return (
                                <div className='choose'>
                                    <li key={val.id}>
                                        <div className="choose_img">
                                            <img src={val.img} alt="" />
                                        </div>
                                        <div className="choose_text">
                                            <h2>{val.COURSES}</h2>
                                        </div>
                                        <div className="star">
                                            <span>{val.star}</span>
                                            <a href="#">{val.button}</a>
                                        </div>
                                    </li>
                                </div>
                            )
                        })}
                    </div>
                    <div className='batan'>
                        <div className='medium_divider'></div>
                        <a href="#" className='btn-default btn'>View All Courses <span><BiRightArrowAlt></BiRightArrowAlt></span></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;