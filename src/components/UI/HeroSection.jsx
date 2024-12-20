
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const HeroSection = () => {
  return (
          <section className='container grid grid_two--cols hero-section'>
          <div className='hero-content'>
            <h1>Explore The World, One Country at a time.</h1>
            <p>Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
            <NavLink to="/country" style={{all:"unset"}}>
            <button class="button-64" role="button">
              <div>
              Start Exploring 
              </div>
              <div>
              <FaArrowRight />
              </div></button>
            </NavLink>
          </div>
          <div className='hero-image'>
            <img src="world.webp" alt="World image" />
          </div>
          </section>   
  );
}

export default HeroSection;
