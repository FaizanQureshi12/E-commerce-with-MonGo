import "./Category.scss";
// import { useNavigate } from 'react-router-dom'
import cat1 from '../../../images/category/cat-1.jpg'
import cat2 from '../../../images/category/cat-2.jpg'

const Category = ({ categories }) => {
    // const navigate = useNavigate();
    return (
        <div className="shop-by-category" id="category">
            <div className="categories">
                {/* {categories?.data?.map((item) => (
                    <div key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}>
                        <img
                            src={process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            } alt="" />
                    </div>
                ))} */}
               <div className="category">
                <img src={cat1} alt="" />
            </div>
            <div className="category">
                <img src={cat2} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Category;
