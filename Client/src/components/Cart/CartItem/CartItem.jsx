import "./CartItem.scss";
import { MdClose } from 'react-icons/md'
// import prod from '../../../images/products/earbuds-prod-1.webp'
// import { React, useContext } from "react";
// import { Context } from "../../../utils/context";

const CartItem = () => {
    // const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    //     useContext(Context);

    return (
        <div className="cart-products" >
            {/* {cartItems?.map((item) => (
                <div key={item.id} className="search-result-item">
                    <div className="img-container">
                        <img src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn"
                            onClick={() => handleRemoveFromCart(item)} />
                        <div className="quantity-buttons">
                            <span
                                onClick={() => handleCartProductQuantity('desc', item)}>
                                -
                            </span>
                            <span>
                                {item.attributes.quantity}</span>
                            <span
                                onClick={() => handleCartProductQuantity('inc', item)}>
                                +
                            </span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>X</span>
                            <span>{item.attributes.price}</span>
                            {''}=
                            <span className="highlight">
                                &#8360;{item.attributes.price * item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            ))} */}
            
             {/* front hand */}
             <div className="cart-product">
                <div className="img-container">
                    {/* <img src={prod} alt="" /> */}
                </div>
                <div className="prod-details">
                    <span className="name">product name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>X</span>
                        <span className="highlight">&#8360;456</span>
                    </div>
                </div>
            </div>

        </div>);
};

export default CartItem;


