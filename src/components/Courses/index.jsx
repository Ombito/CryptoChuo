import React from 'react';
import "../Courses/style.css"
import { NavLink } from 'react-router-dom';
import calendar from "../Images/calendar.png"
import clock from "../Images/wall-clock.png"
const Courses = () => {
  return (
    <div>

    <div className='navbar'>
          <NavLink to='/' id='home'>
            Home
          </NavLink>
          <NavLink to='/about' id='about'>
            About Us
          </NavLink>
          <NavLink to='/courses' id='courses'>
            Courses
          </NavLink>
          <NavLink to='/markets' id='markets'>
            Markets
          </NavLink>
          <NavLink to='/careers' id='careers'>
            Careers
          </NavLink>
          <NavLink to='/shop' id='shop'>
            Shop
          </NavLink>
        
          </div>
          <h2 className='header'>Courses</h2>

          <div className='courses'>
            
            <div className='fundamentals'>
                <h3>Fundamentals of <br/>Bitcoin & Crypto </h3>
                <div className='timeline'>
                    <img src={calendar} width="30" height="30"/>
                    <p className='threeweeks'>3 Weeks</p>
                </div>
                <div className='hourweekly'>
                   <img src={clock} width="30" height="30"/>
                    <p className='hourly'>3-10 hours a week</p>
                </div>

            </div>

            <div className='nft'>
            <h3>NFT's & Web3 <br/> Technologies </h3>
                <div className='nfttimeline'>
                    <img src={calendar} width="30" height="30"/>
                    <p className='fourweeks'>4 Weeks</p>
                </div>
                <div className='nfthourweekly'>
                   <img src={clock} width="30" height="30"/>
                    <p className='nfthourly'>5-12 hours a week</p>

                </div>
            </div>

            <div className='trading'>
            <h3>Trading 101 </h3>
                <div className='tradingtimeline'>
                    <img src={calendar} width="30" height="30"/>
                    <p className='sixweeks'>6 Weeks</p>
                </div>
                <div className='tradinghourweekly'>
                   <img src={clock} width="30" height="30"/>
                    <p className='tradinghourly'>5-12 hours a week</p>

                </div>
            </div>

            <div className='blochchain'>
            <h3>Blockchain Technologies </h3>
                <div className='blockchaintimeline'>
                    <img src={calendar} width="30" height="30"/>
                    <p className='twelveweeks'>12 Weeks</p>
                </div>
                <div className='blockchainhourweekly'>
                   <img src={clock} width="30" height="30"/>
                    <p className='blockchainhourly'>5-12 hours a week</p>

                </div>
            </div>

            <div className='gaming'>
            <h3>Crypto gaming </h3>
                <div className='timeline'>
                    <img src={calendar} width="30" height="30"/>
                    <p className='fourweeks'>4 Weeks</p>
                </div>
                <div className='hourweekly'>
                   <img src={clock} width="30" height="30"/>
                    <p className='hourly'>4 hours a week</p>

                </div>
            </div>

            <div className='investing'>
            <h3>Pro investing </h3>
                <div className='timeline'>
                    <img src={calendar} width="30" height="30"/>
                    <p className='sixweeks'>6 Weeks</p>
                </div>
                <div className='hourweekly'>
                   <img src={clock} width="30" height="30"/>
                    <p className='hourly'>5-12 hours a week</p>

                </div>
            </div>
          </div>

        </div>




  
  );
};
  
export default Courses;