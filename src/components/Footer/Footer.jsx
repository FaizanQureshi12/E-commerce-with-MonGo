import "./Footer.scss";
import React from "react";
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from '../../images/payments.png'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate adipisci
                        voluptatum, beatae officiis, distinctio vitae! Odio soluta minus laboriosam.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Shah Faisal Colony , Karachi , SINDH ,
                            PAKISTAN
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone : 0310-2671820
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email : {''}
                            <a href="https://qfaizan489@gmail.com" target='blank'>
                                qfaizan489@gmail.com
                            </a>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text"
                        onClick={() => navigate('/category/1')} >
                        Headphones
                    </span>
                    <span className="text"
                        onClick={() => navigate('/category/4')}>
                        Smart Watches
                    </span>
                    <span className="text"
                        onClick={() => navigate('/category/3')}>
                        Bluetooth Speakers
                    </span>
                    <span className="text"
                        onClick={() => navigate('/category/2')}>
                        Wireless Earbuds
                    </span>
                    <span className="text">Home Theatre </span>
                    <span className="text">Projectors </span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">
                        <Link spy={true} to='home' smooth={true}>
                            Home
                        </Link>
                    </span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        FAIZANSTORE 2023 CREATED BY FAIZAN QURESHI. PREMIUM E-COMMERCE
                        SOLUTIONS
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
