import React from 'react'
import {Link} from "react-router-dom"
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"

const Checkout = () => {
    return (
        <>
        <Nav1/>
        <Nav2/>
            <div className="position-relative">
                <div className="op2"></div>
                <div className="aui2 d-flex justify-content-center align-items-center">
                    <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Checkout</h1>
                </div>
            </div>
            <section className="plr my-5">
              <h3 className="text-danger fwl py-4">Checkout</h3>
              <div className="row">
                  <div className="col-12 d-flex justify-content-end">
                  <Link to="/cart"><button type="button" className="btn btn-secondary my-4" style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Back To Cart</button></Link>
                  <button type="button" className="btn btn-danger my-4" style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Order Now</button>
                  </div>
              </div>
            </section>
            <Footer/>
        </>
    )
}

export default Checkout
