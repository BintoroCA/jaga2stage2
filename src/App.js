import './Pages/AllStyle.css';

import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Homepage from "./Pages/Homepage"
import DetailProduct from "./Pages/DetailProduct"
import Profile from "./Pages/Profile"
import Category from "./Pages/Category"
import Product from "./Pages/Product"
import Complain from "./Pages/Complain"
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <div className='App'> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/complain" element={<Complain />} />
     </Routes>
    {/* </div> */}
    {/* <Login/> */}
    </>
  );
}

export default App;
