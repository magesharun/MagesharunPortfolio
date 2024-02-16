import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_01xdp1t', 'template_2ix3s0y', form.current, {
            publicKey: 'zfsJ•••••••••••••••••',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (

   
      <section id="contact">
            <div className="contactme">
                <h1>CONTACT ME</h1>
            </div>

            <div className="para">
                Please Fill Out The Form Below To Discuss Any Work Opportunities
            </div>
           
           <div className="inputbox" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" required  name='your_name'/><br/>
            <input type="text" placeholder="Your Email" required name='your_email'/>
           </div>

           <div className="messagebox">
            <input type="message" name='message' placeholder="Your Message" required />
           </div>

           <div className="submit"  value="Send">
            <button>Submit</button>
           </div>

           <div className="sociallinks">
            <button className="fb">< FaFacebookF/></button>
            <button className="insta"><  FaInstagram /></button>
            <button className="twitter"><  FaTwitter/></button>
            <button className="youtube">< FaYoutube/></button>
           </div>

        </section>
    

  )
}

export default Contact