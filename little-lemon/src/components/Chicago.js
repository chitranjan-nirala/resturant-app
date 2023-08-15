import React from 'react';
import { Link } from 'react-router-dom';
import MarioAndAdrianA from '../assets/MarioAndAdrianA.jpg';
import MarioAndAdrianB from '../assets/MarioAndAdrianB.jpg'

function Chicago() {
    return (
        <section className='about'>
            <article>
              <h2>Little Lemon</h2>
              <span>India</span>
              <p>Experience the rich flavors of India at our authentic culinary haven.
                Indulge in the exquisite tastes crafted by our skilled chefs, who infuse every dish with tradition and passion.
                 Immerse yourself in a journey of gastronomic delight as you savor the vibrant spices and aromatic herbs that define Indian cuisine.
                  Our restaurant is a haven for those seeking the true essence of India on a plate.
                  Join us to relish the harmony of flavors, where each bite tells a story of heritage and culinary mastery. </p>
              <Link to="/about"><button className='btn3'>See more</button></Link>
            </article>
            <div>
              <img src={MarioAndAdrianA} alt="Mario and Adrian side A" />
              <img src={MarioAndAdrianB} alt="Mario and Adrian side B" />
            </div>
        </section>
    )
}

export default Chicago;