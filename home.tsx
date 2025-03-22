import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export default function home() {
    const nurtOpen = useNavigate();
    const gotoNursery = ()=>{
        console.log("hello");
       nurtOpen("/nursery");
    }
    const gotocatogo = ()=>{
      console.log("he");
     nurtOpen("/cante");

    }
    const gotoPopular = ()=>{
      console.log("he");
     nurtOpen("/pop");

    }
    const gotoShopping = ()=>{
      console.log("he...");
     nurtOpen("/shop");

    }
    const gotoOder = ()=>{
      console.log("he.l..");
     nurtOpen("/order");

    }

   
    

  return (
    
         <div> 
          <NavBar />
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img onClick={gotoNursery} src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">NURSERY</h5>
            <p className="card-text">
            The place where you find all the plants with which you can decorate your garden
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img onClick={gotocatogo} src="..." className="card-img-top" alt="..." />
         
          <div className="card-body">
            <h5 className="card-title">PLANT CANTEGORIES</h5>
            <p className="card-text">There are different categries of plants like bonsai, hurbs, shrubs etc...</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img onClick={gotoPopular} src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">POPULAR PLANTS</h5>
            <p className="card-text">Here, you get all the popular plants which is provided by our nursery</p>
          </div>
        </div>
      </div>
     
      <div className="col">
        <div className="card">
        <img onClick={gotoShopping} src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">SHOPPING CART</h5>
            <p className="card-text">The plants which you are willing to buy</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">SEARCH PLANT </h5>
            <p className="card-text">You can search plants according to your interest</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img onClick={gotoOder} src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">ORDER HISTORY</h5>
            <p className="card-text">You can see all the ordered plants which you have ordered...</p>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}


