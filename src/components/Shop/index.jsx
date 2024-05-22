import React, { useState, useEffect } from 'react';
import "../Shop/style.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import tshirt from '../Assets/download.jpeg';
import book from '../Assets/book.jpg';
import hoodie from '../Assets/bitcoinhoodie.jpg';
import Footer from '../Footer/index.jsx';
import WhatsAppChat from '../WhatsAppChat/index.jsx';

const Shop = ({ handleAddToCart, merchandiseItems}) => {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]); 
  const itemsPerPage = 12;

  const filterItemsByCategory = (category) => {
    return merchandiseItems.filter(item => item.category === category);
  };

  const filterItemsByName = () => {
    return merchandiseItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFlashSales = filterItemsByCategory('flash_sales').slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // const handleAddToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  //   console.log(`Item added to cart: ${item.name}`);
  // };


  return (
    <div>
    <section id="popular">
        <div id="banner">
          <div className="banner-hero">
            <p>Explore our curated selection of sleek wearables and accessories that not only reflect your passion for blockchain but elevate your style to new heights. Embrace the future in style, only at cryptoChuo.</p>
            <input type="text" placeholder="Search for a product..." value={searchTerm} onChange={handleSearch}/>
          </div>
        </div>
        <div class="container" id="trending-container">
          <h2>Top Deals</h2>
          <div className="trending-div">
            {filterItemsByCategory('top_deals').map(item => (
              <div className="shop-card" key={item.id}>
                <img src={tshirt} height="200" width="200" alt="" />
                <div className="shop-card-amount">
                  <h5>{item.name}</h5>
                  <div className="shop-card-hero">
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
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>            
              ))}
          </div>  
        </div>
        <div class="container" id="accessories">
          <h2>Accessories</h2>
          <div className="trending-div">
            {filterItemsByCategory('accessories').map(item => (
              <div className="shop-card" key={item.id}>
                <img src={book} height="200" width="200" alt="" />   
                <div className="shop-card-amount">
                  <h5>{item.name}</h5>
                  <div className="shop-card-hero">
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
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}  
          </div>
        </div>
        <div id="discount-div">
          <h4>Up to 35% off discount</h4>
          <p>SHOP NOW</p>
        </div>
        <div class="container" id="best-sellers">
          <h2>Flash sales</h2>
          <div className="trending-div">
            {currentFlashSales.map(item => (
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
              <div className="shop-card" key={item.id}>
                <img src={hoodie} height="200" width="200" alt="" />
                <div className="shop-card-amount">
                  <h5>{item.name}</h5>
                  <div className="shop-card-hero">
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
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
              )
              ))}
          </div>
          <div className="pagination">
            {Array.from({ length: Math.ceil(filterItemsByCategory('flash_sales').length / itemsPerPage) }, (_, index) => (
              <button key={index} className={currentPage === index + 1 ? 'active' : ''} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            ))}
          </div>

        </div>
        <WhatsAppChat />
      </section>    
</div> 
  );
};
  
export default Shop;