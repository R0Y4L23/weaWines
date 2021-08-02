import React from 'react'
import {Link} from "react-router-dom"
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"

const Cart = () => {
    return (
        <>
            <Nav1 />
            <Nav2 />
            <div className="position-relative">
                <div className="op2"></div>
                <div className="aui2 d-flex justify-content-center align-items-center">
                    <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Cart</h1>
                </div>
            </div>
            <section className="plr my-5">
                <h3 className="text-danger fwl py-4">Cart Items (3)</h3>
                <div className="row">
                    <div className="col-4">
                        <p>Item and Details</p>
                    </div>
                    <div className="col-4 text-center">
                        <p>Quantity</p>
                    </div>
                    <div className="col-4 text-end">
                        <p>Total Price</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-2">
                        <p>Antonie Joboard</p>
                    </div>
                    <div className="col-2">
                        <p>Measurelt 1er belly</p>
                        <p>Vintage : 2018</p>
                        <p>$S 148</p>
                        <p className="text-danger cp"><u>Remove</u></p>
                    </div>
                    <div className="col-4 text-center">
                        - 1 +
                    </div>
                    <div className="col-4 text-end">
                        $S 148
                    </div>
                    <div className="col-2">
                        <p></p>
                    </div>
                    <div className="col-2">
                        <p>Measurelt 1er belly</p>
                        <p>Vintage : 2018</p>
                        <p>$S 148</p>
                        <p className="text-danger cp"><u>Remove</u></p>
                    </div>
                    <div className="col-4 text-center">
                        - 1 +
                    </div>
                    <div className="col-4 text-end">
                        $S 148
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-secondary my-4"
                            style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Continue Shopping</button>
                        <Link to="/checkout"><button type="button" className="btn btn-danger my-4"
                            style={{borderRadius:"25px",width:"200px",margin:"20px"}}>Proceed To Checkout</button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Cart
