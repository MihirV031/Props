/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebookF, FaHandPointRight, FaUniversity, FaTwitter, FaLinkedin, } from 'react-icons/fa';
import { TfiGoogle } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci";
import { TiSocialInstagram } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import './Footer.css'

const Footer = (props) => {
    return (
        <div>
            <footer className="bg_them_blue">
                <div className="top_heder1">
                    {props.footer.map((val) => (
                        <div className="container">
                            <div className="d-flex">
                                <div className="widht">
                                    <div className="img_tag">
                                        <a href="#">
                                            <img src={props.logof}></img>
                                        </a>
                                        <p className="text-justify">{val.footerp}</p>
                                        <h6 className="widget_title font-theme-yellow pt-3">{val.footerh6}</h6>
                                        <ul className="Mihir">
                                            <li><a href="#" target='_blank'><FaFacebookF></FaFacebookF> </a></li>
                                            <li><a href="#" target='_blank'><FaTwitter></FaTwitter> </a></li>
                                            <li><a href="#" target='_blank'><TfiGoogle></TfiGoogle> </a></li>
                                            <li><a href="#" target='_blank'><FaLinkedin></FaLinkedin> </a></li>
                                            <li><a href="#" target='_blank'><TiSocialInstagram></TiSocialInstagram> </a></li>
                                            <li><a href="#" target='_blank'><CiYoutube></CiYoutube> </a></li>
                                            <li><a href="#" target='_blank'><BsWhatsapp></BsWhatsapp> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="details">
                                    <h6 className="Link">{val.footerh61}</h6>
                                    <ul className="about_tex">
                                        <li>
                                            <FaHandPointRight />
                                            <a href="#" className="active">
                                                {val.footerli1}
                                            </a>
                                        </li>
                                        <li>
                                            <FaHandPointRight />
                                            <a href="#">{val.footerli2}</a>
                                        </li>
                                        <li>
                                            <FaHandPointRight />
                                            <a href="#">{val.footerli3}</a>
                                        </li>
                                        <li>
                                            <FaHandPointRight />
                                            <a href="#">{val.footerli4}</a>
                                        </li>
                                        <li>
                                            <FaHandPointRight />
                                            <a href="#">{val.footerli5}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="contex1_ditels">
                                        <h6 className='Link'>{val.footerh62}</h6>
                                        <div className="head_ditels mb-3">
                                            <h6>
                                                <a href="#">{val.footera}</a>
                                            </h6>
                                            <span className="sup1">
                                                <span>
                                                    401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha
                                                </span>
                                                <span>surat.</span>
                                                <p>
                                                    Mo : <a href="#"><span>+91 90333 16003</span></a>
                                                </p>
                                            </span>
                                        </div>
                                        <div className="head_ditels mb-3">
                                            <h6 className="spes">
                                                <a href="#">{val.footerh6a}</a>
                                            </h6>
                                            <ul className="botam">
                                                <li>
                                                    <span>
                                                        <FaUniversity />
                                                    </span>{' '}
                                                    Katargam
                                                </li>
                                                <li>
                                                    <span>
                                                        <FaUniversity />
                                                    </span>{' '}
                                                    Mota Varachha
                                                </li>
                                                <li>
                                                    <span>
                                                        <FaUniversity />
                                                    </span>{' '}
                                                    Adajan
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </footer>
            <div className="footer_bgcolor">
                <div className="container">
                    <div className="footer_tex">
                        <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;