import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/Introduction/Intro';
import Skills from './components/skills/Skills';
import Works from './works/Works';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './Footer/Footer';

function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <Intro></Intro>
     <Skills></Skills>
     <Works></Works>
     <Clients/>
     <Contact/>
     <Footer/>
    
    </>
  )
}

export default App
