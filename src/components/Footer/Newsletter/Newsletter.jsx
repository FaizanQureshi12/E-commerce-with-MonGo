import "./Newsletter.scss";
import React from "react";
import {
    FaFacebookF, FaTwitter,
     FaInstagram, FaLinkedinIn
} from 'react-icons/fa'

const Newsletter = () => {
    
    return (
        <div className="newsletter-section" id="newsLetter">
            <div className="newsletter-content">
                <span className="small-text">NewsLetter</span>
                <span className="big-text">Sign Up For Latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordance with our Privacy Policy</div>
                <div className="socail-icons">
                    <div className="icon">
                        <a href="https://web.facebook.com/FaizanDynamicEarth123" target='blank'>
                            <FaFacebookF size={17} style={{ color: "white" }} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.instagram.com/faizan4949/" target='blank'>
                            <FaInstagram size={17} style={{ color: "white" }} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/faizan-qureshi-5a667a244/" target='blank'>
                            <FaLinkedinIn size={17} style={{ color: "white" }} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.twitter.com" target="blank">
                            <FaTwitter size={16} style={{ color: "white" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
