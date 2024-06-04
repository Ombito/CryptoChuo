import React, { useState, useEffect } from 'react';
import "../Markets/style.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../Footer/index.jsx';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { FaSearch } from  'react-icons/fa';
import { FaBackward, FaForward } from  'react-icons/fa';
import WhatsAppChat from '../WhatsAppChat/index.jsx';


const Markets = ({ markets }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const [totalMarketCapData, setTotalMarketCapData] = useState(null);
  

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

  const totalMarketCap = markets.reduce((acc, market) => acc + market.market_cap, 0);
    const averageMarketCap = totalMarketCap / markets.length;

    const highestMarketCapCoin = markets.reduce((prev, current) => {
        return prev.market_cap > current.market_cap ? prev : current;
    });

    const lowestMarketCapCoin = markets.reduce((prev, current) => {
        return prev.market_cap < current.market_cap ? prev : current;
    });

    const highestPriceCoin = markets.reduce((prev, current) => {
        return prev.current_price > current.current_price ? prev : current;
    });

    const lowestPriceCoin = markets.reduce((prev, current) => {
        return prev.current_price < current.current_price ? prev : current;
    });
  
    const isMarketCapIncreased = () => {
      if (totalMarketCapData && totalMarketCapData.marketCapChange > 0) {
        return true;
      }
      return false;
    };

    const chartOptions = {
      scales: {
          x: {
              title: {
                  display: true,
                  text: 'Month'
              },
              grid: {
                  display: false
              }
          },
          y: {
              title: {
                  display: true,
                  text: 'Number of Orders'
              },
              grid: {
                  display: false,
                  beginAtZero: true,
              }
          }
      }
  };

      // Generate chart data
      const chartData = {
        labels: ['Label1', 'Label2', 'Label3'], // Replace with actual labels
        datasets: [
          {
            label: 'Total Market Cap',
            data: [100, 200, 150], // Replace with actual data
            backgroundColor: isMarketCapIncreased() ? 'green' : 'red',
            borderColor: 'transparent',
            borderWidth: 2,
            fill: true,
          },
        ],
      };
  


    
  return (
    <div className="market">
      <div className='market-summary'>
        <div className='market-header'>
          <h3>Today's Cryptocurrency Prices by Market Cap</h3>
          <input className='market-search' type="text" value={searchTerm} onChange={handleSearch} placeholder="Search Tokens, NFT, Categories..."/>
        </div>
        <p>This page displays the latest prices, 24-hour trading volume, price changes, and market capitalizations for all cryptocurrencies on CoinmarketCap.</p>
      </div>
      <div>
        
        {/* {loading || markets.length === 0 ? (
          <div className="loader-container">
            <div class="loader">
              <div class="load1"></div>
              <div class="load2"></div>
              <div class="load3"></div>
              <div class="load4"></div>
              <div class="load5"></div>
              <div class="load6"></div>
              <div class="load7"></div>
              <div class="load8"></div>
              <div class="load9"></div>
            </div>
            <div class="loader">
              <p className="loading">Fetching market data...</p>
            </div>
          </div>
        ) : ( */}
        <div className='market-analytics'>
          <div className='analytics-item'>
            <h3>Total Market Cap</h3>
            <p>${totalMarketCap}</p>
            {totalMarketCapData && (
            <div className="line-chart-container">
              <Line data={chartData} options={chartOptions} />
            </div>
          )}
          </div>
          <div className='analytics-item'>
            <h3>Highest Market Cap Coin</h3>
            <div className='coin-analytics-div'>
              <div className='coin-analytics-summary'>
                <img src={highestMarketCapCoin.image} alt="Coin Image" />
                <p>{highestMarketCapCoin.name}</p>
              </div>
              <p>${highestMarketCapCoin.market_cap}</p>
            </div>
          </div>
          <div className='price-analytics'>
            <div className='analytics-item'>
              <h3>Highest Price Coin</h3>
              <div className='coin-analytics-div'>
                <div className='coin-analytics-summary'>
                  <img src={highestPriceCoin.image} alt="Coin Image" />
                  <p>{highestPriceCoin.name}</p>
                </div>
                <p>${highestPriceCoin.current_price}</p>
              </div>
            </div>
            <div className='analytics-item'>
              <h3>Lowest Price Coin</h3>
              <div className='coin-analytics-div'>
                <div className='coin-analytics-summary'>
                  <img src={lowestPriceCoin.image} alt="Coin Image" />
                  <p>{lowestPriceCoin.name}</p>
                </div>
                <p>${lowestPriceCoin.current_price}</p>
              </div>
            </div>
          </div>
        </div>
          <>
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
            <div id="next-btns" className="pagination">
              <button className="pagination-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
              <span className="pagination-current">{currentPage}</span>
              <button className="pagination-button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === 7}>&gt;</button>
            </div>
          </>
        {/* )} */}
      </div>
      <WhatsAppChat />
    </div>
  );
};

export default Markets;
