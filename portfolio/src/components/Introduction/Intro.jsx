import './Intro.css'
import bg from '../../assets/magesh.png'
import { Link } from 'react-scroll'
import { FaShoppingBag } from "react-icons/fa";


const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span><br/>
            <span className="introText">I'm <span className="introName">Magesh</span><br/>Website Designer</span>
            <p className="intropara">I am  a Skilled and passionate webdesigner in creating visually appealing and <br/>userfriendly websites</p>
            <Link><button className='btn'><FaShoppingBag className='bag'/>hire me</button></Link>

        </div>
       <img src={bg} alt="profile" className='bg' />
    </section>
  )
}

export default intro