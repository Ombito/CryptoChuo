import React from 'react';
import "../Shop/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import tshirt from '../Assets/download.jpeg'
import book from '../Assets/book.jpg'
import hoodie from '../Assets/bitcoinhoodie.jpg'
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';

const Shop = () => {
  return (
    <div>
    <div className='navbar'>
        <Navbar />
    </div>
    <section id="popular">
        <div id="banner">
          <div className="banner-hero">
            <p>Explore our curated selection of sleek wearables and accessories that not only reflect your passion for blockchain but elevate your style to new heights. Embrace the future in style, only at cryptoChuo.</p>
            <input type="text" placeholder="Search for a product" />
          </div>
        </div>
        <div class="container" id="trending-container">
          <h2>Top Deals</h2>
          <div className="trending-div">
            <div className="shop-card">
              <img src={tshirt} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={tshirt} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={tshirt} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={hoodie} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="container" id="accessories">
          <h3>Accessories</h3>
          <div className="trending-div">
            <div className="shop-card">
              <img src={book} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={tshirt} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={tshirt} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={hoodie} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div id="discount-div">
          <h4>Up to 35% off discount</h4>
          <p>SHOP NOW</p>
        </div>
        <div class="container" id="best-sellers">
          <h2>Best sellers</h2>
          <div className="trending-div">
            <div className="shop-card">
              <img src={hoodie} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={tshirt} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={hoodie} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="shop-card">
              <img src={hoodie} height="200" width="200" alt="" />
              <h5>By rubbark</h5>
              <div className="shop-card-amount">
                <h5>$25</h5>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
          

        </div>
      </section>
      <Footer />

    
          
</div>





  
  );
};
  
export default Shop;