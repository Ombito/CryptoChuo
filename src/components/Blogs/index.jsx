import React, { useState } from 'react';
import './style.css';

const initialBlogs = [
    {
        id: 1,
        title: "Understanding Bitcoin and Its Impact",
        excerpt: "Bitcoin is the first and most well-known cryptocurrency...",
        content: "In-depth article about Bitcoin, its history, and its impact on the financial world...",
        image: "https://150",
        link: "#"
      },
      {
        id: 2,
        title: "Getting Started with Ethereum",
        excerpt: "Ethereum is a decentralized platform that runs smart contracts...",
        content: "In-depth article about Ethereum, its uses, and how to get started with it...",
        image: "https:///150",
        link: "#"
      },
      {
        id: 3,
        title: "A Guide to DeFi",
        excerpt: "DeFi, or decentralized finance, is revolutionizing the financial industry...",
        content: "In-depth article about DeFi, its benefits, and risks...",
        image: "https:///150",
        link: "#"
      },
      {
        id: 4,
        title: "Understanding NFTs",
        excerpt: "NFTs, or non-fungible tokens, are unique digital assets...",
        content: "In-depth article about NFTs, how they work, and their impact on the art world...",
        image: "https://150",
        link: "#"
      },
      {
        id: 5,
        title: "Blockchain Technology Explained",
        excerpt: "Blockchain technology is the backbone of cryptocurrencies...",
        content: "In-depth article about blockchain technology, how it works, and its various applications...",
        image: "https:/150",
        link: "#"
      }
];

const initialEvents = [
    {
        id: 1,
        title: "Crypto Conference 2024",
        date: "September 20, 2024",
        location: "Nairobi, Kenya",
        description: "Join us for the annual Crypto Conference where industry experts discuss the latest trends in cryptocurrency.",
        link: "#"
      },
      {
        id: 2,
        title: "Blockchain Expo",
        date: "November 15, 2024",
        location: "Durban, Nairobi",
        description: "A summit for blockchain enthusiasts featuring workshops, talks, and networking opportunities.",
        link: "#"
      },
      {
        id: 3,
        title: "DeFi Summit",
        date: "December 10, 2024",
        location: "Online",
        description: "An online summit covering the latest in decentralized finance and its applications.",
        link: "#"
      }
  ];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredBlogs = initialBlogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredBlogs.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="blogs-container">
      <h2>Blogs</h2>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={handleSearch}
        className="blogs-search"
      />
      <div className="blogs-grid">
        {currentItems.map(blog => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <a href={blog.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
      <div className="events-container">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {initialEvents.map(event => (
            <div className="event-card" key={event.id}>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
                <a href={event.link} className="learn-more">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
