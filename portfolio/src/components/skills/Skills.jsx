import './Skills.css'
import  uiux  from "../../assets/uiuxlogo.jpg";
import  webdev  from "../../assets/webdev.png";
import mobile from "../../assets/mobile.jpg";


const Skills = () => {
  return (
   <section id="skills">
       
        <div className="skillBars">
        <span className="skillTitle">WHAT I DO?</span><br/>
        <span className="skillDesc">I AM A SKILLED AND PASSIONATE WEB DESIGNER</span>
            <div className="skillBar">
                <img src={ uiux} alt="simaterial" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>UI/UX DESIGN</h2>
                    <p>Dedicated UI/UX designer with a keen eye for intuitive and visually appealing user interfaces. Strives to enhance user experiences through thoughtful design and seamless interactions. Adept at combining creativity with user-centric principles to craft digital solutions that resonate with both aesthetics and functionality</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webdev} alt="" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>WEB DESIGN</h2>
                    <p>Passionate web designer with a flair for creating visually stunning beautiful and user-friendly websites. Specialized in blending creativity with functionality to deliver unique  websites and engaging online experiences and functionality. Committed to transforming ideas into captivating digital realities that leave a lasting impression.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ mobile} alt="" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>MOBILE APP DESIGN</h2>
                    <p>
Innovative mobile app designer specializing in React Native, and with a focus on responsiveness and optimal user experience. Proficient in translating concepts into sleek, high-performance interfaces that seamlessly integrate with native functionalities. Committed to delivering visually captivating and intuitively navigable apps that elevate user engagement and satisfaction.</p>
                </div>
            </div>
        </div>

   </section>
  )
}

export default Skills