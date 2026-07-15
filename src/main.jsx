import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import servicesImage from './assets/services-image.png';
function Navbar() {
  return(
    <>
     <nav>
      <h1>TechNova</h1>
      <a href="#">Home</a>&nbsp;&nbsp;
      <a href="#">About</a>&nbsp;&nbsp;
      <a href="#">Contact</a>
     </nav>
    </>
  );
}
function Hero(){
  return(
    <>
      <h2>Transform Ideas into Digital Experiences</h2>
      <p>We create modern and responsive websites using innovative web technologies.</p>
      <button>Get Started</button>
    </>
  );
}
function Services() {
  return (
    <>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Web Design</li>
          <li>Frontend Development</li>
          <li>UI/UX design</li>
          <li>Responsive Websites</li>
        </ul>
        <img 
          src={servicesImage} alt="Our Services"/>
      </section>
    </>
  );
}
function Footer(){
  return(
    <>
    <footer>
        <p>© 2026 TechNova. All Rights Reserved.</p>
        <p>Creating innovative digital solutions.</p>
    </footer>    
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Services />
    <Footer />
  </StrictMode>
);