import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
import restauranfood from '../assets/restauranfood.jpg';
import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.jpeg';
import lemondessert from '../assets/lemondessert.jpg';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function Homepage() {

    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    }

  return (
        <main>
          <section className='hero'>
            <article>
              <h2>Little Lemon</h2>
              <span>India</span>
              <p>We are a family-operated Indian restaurant, dedicated to presenting time-honored recipes infused with a contemporary flair.</p>
              <Link to="/reservations"><button className='btn1' onClick={handleScrollToTop}>Reserve a Table</button></Link>
            </article>
            <img src={restauranfood} alt="restauran food" />
          </section>
          <section className='highlights'>
            <article>
              <h2>This week specials!</h2>
              <Link to="/menu"><button onClick={handleScrollToTop}>Online menu</button></Link>
            </article>
              <div className='cards'>
                <div className='card'>
                  <img src={greeksalad} alt="Indian salad" />
                  <h3>Spiced Indian Salad</h3>
                  <h3>₹30</h3>
                  <p>Our renowned Indian salad features a delightful blend of crisp lettuce, vibrant peppers, aromatic spices, and our signature paneer cheese.
                  Topped with a medley of garlic-infused croutons for that perfect crunch.</p>
                  <div className="card-footer">
                    {/* <Link to="/order-online" onClick={handleScrollToTop}><button>Order</button></Link> */}
                  </div>
                </div>
                <div className='card'>
                  <img src={bruchetta} alt="Tandoori Bruchetta" />
                  <h3>Tandoori Bruschetta</h3>
                  <h3>₹20</h3>
                  <p>Our Tandoori Bruschetta is crafted using freshly baked naan, brushed with fragrant garlic and seasoned with a touch of Indian spices and ghee. </p>
                  <div className="card-footer">
                    {/* <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link> */}
                  </div>
                </div>
                <div className='card'>
                  <img src={lemondessert} alt="Lemon dessert" />
                  <h3>Lemon Dessert</h3>
                  <h3>₹30</h3>
                  <p>This recipe is a direct homage to our beloved grandma's culinary legacy, where every single ingredient has been meticulously selected and sourced, ensuring an unparalleled level of authenticity.</p>
                  <div className="card-footer">
                    {/* <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link> */}
                  </div>
                </div>
              </div>
          </section>
          <CustomersSay />
          <Chicago />
        </main>
  )
}

export default Homepage;