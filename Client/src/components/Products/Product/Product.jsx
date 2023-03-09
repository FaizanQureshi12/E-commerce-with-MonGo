import "./Product.scss";
import { useNavigate } from 'react-router-dom'
import prod from '../../../images/products/earbuds-prod-1.webp'
import headphone from '../../../images/products/headphone-prod-1.webp'
import speaker from '../../../images/products/speaker-prod-1.webp'
import watch from '../../../images/products/watch-prod-1.webp'

// for dollar currency &#36; for indian &#8377;
const Product = ({ data, id }) => {
    const navigate = useNavigate();

    return (
        <div className="product-card" id="products"
            onClick={() => navigate('/product/' + id)} >
            <div className="thumbnail">
                {/* <img src={
                process.env.REACT_APP_DEV_URL +
                data.img.data[0].attributes.url
            } alt="" /> */}
                <img src={prod} alt="" />
            </div>

            <div className="thumbnail">
                <img src={headphone} alt="" />
            </div>
            <div className="thumbnail">
                <img src={speaker} alt="" />
            </div>
            <div className="thumbnail">
                <img src={watch} alt="" />
            </div>

            <div className="prod-details">
                <span className="name">
                    {/* {data.title} */}
                    Product Title
                </span>
                <span className="price">&#8360;
                    {/* {data.price} */}
                    &nbsp;789
                </span>
            </div>
        </div>
    );
};

export default Product;
