import "./App.css";
import Signin from "./pages/signin"
import  Signup  from "./pages/signup"
import { Route, Routes } from "react-router-dom";

import {AddProduct} from "./pages/addProduct";
import Productlist from "./pages/productlist"
import Orderlist from "./pages/orderlist";
import { AddOrder } from "./pages/addOrder";

import { home as Home } from "./pages/home";
import Supplierlist from "./pages/supplierlist";
import { AddSupplier } from "./pages/addSupplier";
import { Billing } from "./pages/billing";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signup/>} />
        <Route exact path="/signIn" element={<Signin/>} />
        <Route path="/productList" element={<Productlist/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/orderList" element={<Orderlist/>}/>
        <Route path="/addOrder" element={<AddOrder/>}/>
        <Route path="/supplierList" element={<Supplierlist/>}/>
        <Route path="/addSupplier" element={<AddSupplier/>}/>
        <Route path="/billing" element={<Billing/>}/>
      </Routes>
    </>
  );
}

export default App;
