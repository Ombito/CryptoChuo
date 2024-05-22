import React, { useState, useEffect } from 'react';
import "../Markets/style.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../Footer/index.jsx';
import { Line } from 'react-chartjs-2';
import { FaSearch } from  'react-icons/fa';
import { FaBackward, FaForward } from  'react-icons/fa';
import WhatsAppChat from '../WhatsAppChat/index.jsx';

const MarketFilter = () => {
  <svg style="position: absolute; width: 0; height: 0;">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
      <feColorMatrix values="0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 0 0 
            0 0 0 48 -7">
      </feColorMatrix>
    </filter>
  </svg>
}

const Markets = () => {
  const [loading, setLoading] = useState(true);
  const [markets, setMarkets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  
  useEffect(() => {
    const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y&locale=en`;
    
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

  const filteredMarkets = markets.filter((market) =>
  market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  market.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(filteredMarkets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredMarkets.slice(startIndex, endIndex);

  return (
    <div id="market">
      <div className='market-summary'>
        <div className='market-header'>
          <h3>Today's Cryptocurrency Prices by Market Cap</h3>
          <input className='market-search' type="text" value={searchTerm} onChange={handleSearch} placeholder="Search Tokens, NFT, Categories..."/>
        </div>
        <p>This page displays the latest prices, 24-hour trading volume, price changes, and market capitalizations for all cryptocurrencies on CoinmarketCap.</p>
      </div>
      <div className="loader-container">
        {loading || markets.length === 0 ? (
          <div>
            <MarketFilter />
            <div class="loader">
              <p className="loading">Fetching market data...</p>
            </div>
          </div>
        ) : (
          <table className="crypto-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>Total Volume</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((i) => (
                <tr key={i.id}>
                  <td>{i.market_cap_rank}</td>
                  <td>
                    <div className="coin-info">
                      <img src={i.image} id="coin_img" alt="Coin Image" />
                      <div className="coin-name">
                        <p>{i.name}</p> 
                        <p>{i.symbol.toUpperCase()}</p>
                      </div>
                    </div>
                  </td>
                  <td>${i.current_price.toFixed(2)}</td>
                  <td className={i.price_change_percentage_1h_in_currency < 0 ? 'negative-change' : 'positive-change'}>
                    {i.price_change_percentage_1h_in_currency.toFixed(2)}%
                  </td>
                  <td className={i.price_change_percentage_24h_in_currency < 0 ? 'negative-change' : 'positive-change'}>
                    {i.price_change_percentage_24h_in_currency.toFixed(2)}%
                  </td>
                  <td className={i.price_change_percentage_7d_in_currency < 0 ? 'negative-change' : 'positive-change'}>
                    {i.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </td>
                  <td>${i.total_volume}</td>
                  <td>${i.market_cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="pagination">
          <button className="pagination-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
          <span className="pagination-current">{currentPage}</span>
          <button className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === 7}>&gt;</button>
        </div>
      </div>
      <WhatsAppChat />
    </div>
  );
};

export default Markets;
