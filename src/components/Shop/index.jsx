import React, { useState, useEffect } from 'react';
import "../Shop/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import tshirt from '../Assets/download.jpeg'
import book from '../Assets/book.jpg'
import hoodie from '../Assets/bitcoinhoodie.jpg'
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';

const Shop = () => {
  const [merchandiseItems, setMerchandiseItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const filterItemsByCategory = (category) => {
    return merchandiseItems.filter(item => item.category === category);
  };


  useEffect(() => {
    const apiUrl = `http://127.0.0.1:5555/merchandises`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMerchandiseItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [refresh]);


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
            {filterItemsByCategory('top_deals').map(item => (
              <div className="shop-card" key={item.id}>
                <img src={tshirt} height="200" width="200" alt="" />
                <h5>{item.name}</h5>
                <div className="shop-card-amount">
                  <h5>${item.price}</h5>
                  <p className="rating">
                    {Array.from({ length: Math.round(item.rating) }, (_, index) => (
                      <span key={index} className="star">&#9733;</span>
                    ))}
                    {Array.from({ length: 5 - Math.round(item.rating) }, (_, index) => (
                      <span key={index} className="star">&#9734;</span>
                    ))}
                  </p>
                </div>
                <button>Add to Cart</button>
              </div>              
              ))}
          </div>  
        </div>
        <div class="container" id="accessories">
          <h3>Accessories</h3>
          <div className="trending-div">
            {filterItemsByCategory('accessories').map(item => (
              <div className="shop-card" key={item.id}>
                <img src={book} height="200" width="200" alt="" />
                <h5>{item.name}</h5>
                <div className="shop-card-amount">
                  <h5>${item.price}</h5>
                  <p className="rating">
                    {Array.from({ length: Math.round(item.rating) }, (_, index) => (
                      <span key={index} className="star">&#9733;</span>
                    ))}
                    {Array.from({ length: 5 - Math.round(item.rating) }, (_, index) => (
                      <span key={index} className="star">&#9734;</span>
                    ))}
                  </p>
                </div>
                <button>Add to Cart</button>
              </div>
            ))}  
          </div>
        </div>
        <div id="discount-div">
          <h4>Up to 35% off discount</h4>
          <p>SHOP NOW</p>
        </div>
        <div class="container" id="best-sellers">
          <h2>Best sellers</h2>
          <div className="trending-div">
            {filterItemsByCategory('flash_sales').map(item => (
              <div className="shop-card" key={item.id}>
                <img src={hoodie} height="200" width="200" alt="" />
                <h5>{item.name}</h5>
                <div className="shop-card-amount">
                  <h5>${item.price}</h5>
                  <p className="rating">
                    {Array.from({ length: Math.round(item.rating) }, (_, index) => (
                      <span key={index} className="star">&#9733;</span>
                    ))}
                    {Array.from({ length: 5 - Math.round(item.rating) }, (_, index) => (
                      <span key={index} className="star">&#9734;</span>
                    ))}
                  </p>
                </div>
                <button>Add to Cart</button>
              </div>
              ))}
          </div>
          

        </div>
      </section>
      <Footer />

    
          
</div>





  
  );
};
  
export default Shop;