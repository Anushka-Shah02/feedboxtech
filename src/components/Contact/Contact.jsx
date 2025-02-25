import React, { useEffect, useState, useRef } from "react";
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCallOutline } from "react-icons/io5"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdOutlineMail } from "react-icons/md"
import emailjs from '@emailjs/browser'
// import React, { useEffect, useState } from "react";
import './contactHome.css'



// export default function Contact() {
//     const [name, setname] = useState('')
//     const [email, setemail] = useState('')
//     const [contact, setcontact] = useState('')
//     const [message, setmessage] = useState('')
//     const form = useRef();

//     // useEffect(() => {
//     //     AOS.init({
//     //         duration: 100,
//     //         // offset: -250
//     //     })
//     // },[])



//     const [formData1, setFormData1] = useState({
//         name:"",
//         email:"",
//         contact:"",
//         message:""
//     });

//     const getFormData= (event)=>{
//         event.preventDefault();
//         console.log(formData1);
//         //  fetch("http://localhost:5000/contactdata",{
          
//         //     method:'POST',
//         //     headers:{
//         //         "content-type":"application/json",
//         //     },
//         //     body: JSON.stringify(formData1)
//         // })
//         // .then((response)=>{response.json()})
//         // .catch(error=>{
//         //     console.log(`error is : ${error}`)
//         //     // console.log(formData1);
//         // })

//         emailjs.send('service_io91ds2','template_eu8fazo',formData1,'6qGUvnhs40iNBMVST').then((result)=>{
//             console.log(result.text);
//         },(error)=>{
//             console.log(error.text);
//         })
//     }


//     const handleChange=(e)=>{
//         e.preventDefault();
//         setFormData1({...formData1, [e.target.name]:e.target.value});
//         // console.log(e.target.value)
//         // console.log(formData1);
//     }



//     // eslint-disable-next-line turbo/no-undeclared-env-vars
// sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

// const emailHtml = render(<Email url="https://example.com" />);

// const options = {
//   from: 'you@example.com',
//   to: 'user@gmail.com',
//   subject: 'hello world',
//   html: emailHtml,
// };



export default function Contact() {




  return (
    <div className="contact_home_container">
    <div className="adarsh-container">
      <div className="adarsh-form">
        <div className="adarsh-left">
          <div className="adarsh-top">
            <h1 className="adarsh-heading">Let's Work Together </h1>
          </div>


          <div className="adarsh-bottom-main">
            <div className="adarsh-bottom1">
              <iframe className="adarsh-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.013616003008!2d75.8903461146817!3d22.727735285103147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd301f220449%3A0xb2c1e3746c297023!2sFeedBox!5e0!3m2!1sen!2sin!4v1676278750894!5m2!1sen!2sin"

                allowtransparency="true"


              ></iframe>
            </div>
            <div className="adarsh-bottom2">

            </div>

          </div>

        </div>
        <div className="adarsh-right">
          <input className="adarsh-text" type="text" placeholder="Your Name" />
          <input className="adarsh-text" type="email" placeholder="Your e-Mail" />
          <input type='tel' placeholder="Phone" className="adarsh-text" />
          <input
            className="adarsh-text"
            type="text"
            placeholder="Your message to us"
          />
          <br />

          <span className="adarsh-checkSpan">

            <input type="checkbox" className="adarsh-text adarsh-check" />Message

          </span>
          <div className="adarsh-imageDiv">
            <button type="submit" className="adarsh-btnn">
              Send Message <spam></spam>
            </button>


          </div>
        </div>
      </div>
    </div>
    </div>
  )
}