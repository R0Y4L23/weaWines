import React , { useState } from 'react'
import Nav1 from "../Components/Nav1.js"
import Nav2 from "../Components/Nav2"
import Footer from "../Components/Footer"
import emailjs from 'emailjs-com';
import { message } from 'antd';

const ContactUs = () => {
    const [fullName, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

    const handleContact = async () => {
		if(fullName === "" ||email === ""|| phone=== ""||message === ""){
                 setError("*All fields are required.")
          }
          else{
           let templateParams = {
            from_name: 'WeaWines',
            to_name: `${fullName}`,
            subject: 'Message',
            message: message,
            email:email,
            number: phone
           }
           emailjs.send(
            // 'service_otleyib',
            // 'template_zwe258l',
            //  templateParams,
            // 'user_l8u0Ud4sjZ6UmlchcDqpV',
           ).then(res => {
            setError("")

            message.success({
              content: 'Message Sent',
              className: 'custom-class',
              style: {
                marginTop: '10vh',
              },
            });
            console.log(res,"sent")
           
          })
          // Email Failed to send Error alert
          .catch(err => {
            console.log(err,"Failed")
            message.error({
              content: 'Failed to Sent',
              className: 'custom-class',
              style: {
                marginTop: '10vh',
              },
            });
            
          })
           resetForm()
        } 
	};

    const resetForm = () => {
             setFullname('')
             setEmail('')
             setPhone('')
             setMessage('')
        }
      

    return (
        <>
        <Nav1/>
        <Nav2/>
            <div className="position-relative">
                <div className="op"></div>
                <div className="aui d-flex justify-content-center align-items-center">
                    <h1 className="text-uppercase text-light fwl" style={{zIndex:5}}>Contact</h1>
                </div>
            </div>
            <section className="plr my-5 fwl">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-danger">Lets Connect</h3>
                        <input type="text" className="form-control my-4" 									
                        value={fullName}
						onChange={(e) => setFullname(e.target.value)} 
                        placeholder="Full Name"></input>
                        <input type="email" className="form-control my-4"
                        value={email}
						onChange={(e) => setEmail(e.target.value)} 
                         placeholder="Email"></input>
                        <input type="number" className="form-control my-4"
                        value={phone}
						onChange={(e) => setPhone(e.target.value)} 
                         placeholder="Contact Number"></input>
                        <textarea className="form-control my-4" rows="8" 
                           value={message}
						onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Tell us your comments"
                            style={{resize:"none"}}></textarea>
                            <p className="text-danger">{error}</p>
                        <button type="button" className="btn btn-danger my-4"
                         	onClick={handleContact} style={{borderRadius:"25px",width:"40%"}}>Send</button>
                    </div>
                    <div className="col-md-6 fwl p-5">
                        <p><i className="fas fa-map-marker-alt fs-3 my-3"></i> Blk 341, Le Bon Funk, 29 Club Street
                            Singapore 069414</p>
                        <p><i className="fas fa-phone-alt fs-3 my-3"></i> +65 7865 7679</p>
                        <p><i className="fas fa-envelope fs-3 my-3"></i> info@weawines.com.sg</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default ContactUs