
import { TbBrandWalmart } from "react-icons/tb";
import { SiAdobe } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import './Clients.css'
const Clients = () => {
  return (
   <section id="clients">
    <div className="content">
        <div className="myclients">
          <h2>My Ambitious Companies</h2>
        </div>
        <div className="para">
           <p>I want opportunity to work with my dream Companies which i had mentioned below</p>
        </div>
        <div className="button">
             <button className="walmart"><TbBrandWalmart/>Walmart</button>
             <button className="adobe"><SiAdobe/>adobe</button>
             <button className="microsoft"><FaMicrosoft/>microsoft</button>
             <button className="facebook"><FaFacebookF />facebook</button>
             
        </div>
    </div>
   </section>
  )
}

export default Clients