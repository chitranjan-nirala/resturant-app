import React from 'react';
// import { Link } from 'react-router-dom';
import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.jpeg';
import lemondessert from '../assets/lemondessert.jpg';
import cheese from '../assets/cheese.jpg';
import bolognese from "../assets/bolognese.jpeg";
import lasagna from "../assets/lasagna.png";

function Menu() {
  // const handleScrollToTop = () => {
  //   window.scrollTo(0, 0);
  // }
    return (
        <>
        <div className='m4'>
                <div className='card'>
                  <img src={greeksalad} alt="Greek salad" />
                  <h3>Spiced Indian Salad</h3>
                  <h3>₹30</h3>
                  <p>Our renowned Indian salad features a delightful blend of crisp lettuce, vibrant peppers, aromatic spices, and our signature paneer cheese.
                  Topped with a medley of garlic-infused croutons for that perfect crunch.</p>
                  <div className="card-footer">
                    {/* <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link> */}
                  </div>
                </div>
                <div className='card'>
                  <img src={bruchetta} alt="Bruchetta" />
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
                  <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <div className="card-footer">
                    {/* <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link> */}
                  </div>
                </div>
                <div className='card'>
                  <img src={cheese} alt="Turkish Mac n’ Cheese" />
                  <h3>Spiced Bosphorus Macaroni</h3>
                  <h3>₹50</h3>
                  <p>This one-pot Indian-inspired turkey mac and cheese elevates the classic comfort of hamburger helper, offering a matured flavor profile while providing a nutritious alternative to pre-packaged options.</p>
                  <div className="card-footer">
                    {/* <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link> */}
                  </div>
                </div>
                <div className='card'>
                  <img src={bolognese} alt="Bolognese" />
                  <h3>Tandoori Bruschetta</h3>
                  <h3>₹20</h3>
                  <p>Our Tandoori Bruschetta is crafted using freshly baked naan, brushed with fragrant garlic and seasoned with a touch of Indian spices and ghee. </p>
                  <div className="card-footer">
                    {/* <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link> */}
                  </div>
                </div>
                <div className='card'>
                  <img src={lasagna} alt="Lasagna" />
                  <h3>Lemon Dessert</h3>
                  <h3>₹20</h3>
                  <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <div className="card-footer">
                    {/* <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link> */}
                  </div>
                </div>
              </div>
        </>
    )
}

export default Menu