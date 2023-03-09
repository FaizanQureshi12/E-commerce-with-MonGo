import "./Banner.scss";
import BannerImg from '../../../images/banner-img.png'
import { Link } from "react-scroll";

const Banner = () => {
    return (
        <div className="hero-banner" id="home">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur
                        voluptatibus libero deleniti temporibus expedita? Porro maiores voluptates
                        culpa?
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">
                            <Link spy={true} to='products' smooth={true}>
                                Shop Now
                            </Link>

                        </div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
