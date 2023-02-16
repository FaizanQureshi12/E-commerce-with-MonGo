import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Newsletter from './components/Footer/Newsletter/Newsletter'
import Loginuser from './components/Loginuser/Loginuser'
import Signup from './components/Loginuser/Signup'
import Loginadmin from './components/Loginadmin/Loginadmin'
import Addproduct from "./components/Loginuser/Addproduct/Addproduct";

function App() {
    return (
        <BrowserRouter>
            {/* <AppContext> */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={< Category />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/Loginuser' element={<Loginuser />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Loginadmin' element={<Loginadmin />} />
                <Route path='/Addproduct' element={<Addproduct />} />
            </Routes>
            <Newsletter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
