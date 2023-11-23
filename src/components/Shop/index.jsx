import React from 'react';
import "../Shop/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import tshirt from '../Assets/download.jpeg'
import book from '../Assets/book.jpg'
import hoodie from '../Assets/bitcoinhoodie.jpg'
import Navbar from '../Navbar/navbar.jsx';

const Shop = () => {
  return (
    <div>
        

    <div className='navbar'>
        <Navbar />
    </div>
    
    <section id="popular" class="popular">
        <h2 className='header'>Shop</h2>

        <div class="bitcoin">
          <div class="bitcoinshirt">
          <img className='tshirt' src={tshirt} width="250" height="250" />
          <div className='buttons'>
            <button className="button" type='submit' >Add to cart</button> <br/>
            <button className="buynowbutton" type='submit' >Buy Now</button>
            </div>
          </div>

          <div class="bitcoinbook">
          <img className='book' src={book} width="250" height="250" />
          <div className='buttons'>
            <button className="bookbutton" type='submit' >Add to cart</button> <br/>
            <button className="bookbuynowbutton" type='submit' >Buy Now</button>
            </div>
          </div>

          <div class="bitcoinhoodie">
          <img className='hoodie' src={hoodie} width="250" height="250" />
          <div className='buttons'>
            <button className="hoodiebutton" type='submit' >Add to cart</button> <br/>
            <button className="hoodiebuynowbutton" type='submit' >Buy Now</button>
            </div>
          </div>
          

        </div>
      </section>

    
          
</div>





  
  );
};
  
export default Shop;