import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Nursery from "./components/Nursery";

import Home from "./components/home";

import PlantPopular from "./components/PlantPopular";
import ShoppingCart from "./components/ShoppingCart";
import PlantCantegories from "./components/PlantCantegories";
import OrderHis from "./components/OrderHis";







export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element ={<Login />} />
         <Route path="/landing" element ={<LandingPage />} />
         <Route path="/home" element ={<Home />} />
         <Route path="/nursery" element ={<Nursery />} />
         <Route path="/cante" element ={<PlantCantegories />} />
         <Route path="/shop" element ={<ShoppingCart />} />
         <Route path="/pop" element ={<PlantPopular />} />
         <Route path="/order" element ={<OrderHis />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}
