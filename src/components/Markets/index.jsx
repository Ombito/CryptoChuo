import React, { useState, useEffect } from 'react';
import "../Markets/style.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';

const Markets = () => {
  const [loading, setLoading] = useState(true);
  const [markets, setMarkets] = useState([]);
  
  
  useEffect(() => {

    const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d&locale=en`;
    

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMarkets(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  return (
    <div>
    <div className='navbar'>       
      <Navbar />
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th>Market Cap</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
        {markets.map((i) => (
          <tr key={i.id}>
            <td>{i.market_cap_rank}</td>
            <td>
              <img src={i.image} id="coin_img"/>
               {i.name} 
               {i.symbol.toUpperCase()} 
            </td>
            <td>{i.current_price}</td>
            <td>{i.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
            <td>{i.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
            <td>{i.total_volume}</td>
            <td>{i.market_cap}</td>
            <td></td>
          </tr>         
        ))}
        </tbody>
        
      </table>
    </div>
    <Footer />
    
          
</div>





  
  );
};
  
export default Markets;