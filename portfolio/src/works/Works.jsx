import './Works.css';
import img1 from '../../src/assets/portfolio2.jpg';
import img2 from '../../src/assets/portfolio2.jpg';
import img3 from '../../src/assets/portfolio2.jpg';
import img4 from '../../src/assets/portfolio2.jpg';
import img5 from '../../src/assets/portfolio2.jpg';
import img6 from '../../src/assets/portfolio2.jpg';

// import img2 from '../../src/assets/image2.jpg';
// import img3 from '../../src/assets/image3.jpg';
// import img4 from '../../src/assets/image4.jpg';
// import img5 from '../../src/assets/image5.jpg';
// import img6 from '../../src/assets/image6.jpg';



const works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My PortFolio</h2>
        <span className="workDescription">Expertly designed and implemented user interfaces for cross-platform mobile apps using React Native, ensuring a seamless user experience. Collaborated with developers to integrate dynamic features and enhance overall app functionality. Consistently delivered visually appealing designs that align with client specifications and industry best practices.</span>
        <div className="workImages">
            <img src={img1} alt="" className="worksImage" />
            <img src={img2} alt="" className="worksImage" />
            <img src={img3} alt="" className="worksImage" />
            <img src={img4} alt="" className="worksImage" />
            <img src={img5} alt="" className="worksImage" />
            <img src={img6} alt="" className="worksImage" />
        </div>
    </section>
  )
}

export default works