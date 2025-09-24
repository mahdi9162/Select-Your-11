import React from 'react';
import navImg from '../../assets/logo.png';
import coinImg from '../../assets/Currency.png';
const Navbar = ({ availableBalance }) => {
  return (
    <nav className="md:w-[1100px] mx-auto mt-8 px-3 flex items-center font-sora">
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {' '}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
              </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#131313b3]">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <img src={navImg} alt="logo" />
        </div>
      </div>
      <div className="flex gap-8 items-center ">
        <div class="hidden lg:flex">
          <ul class="flex gap-8 px-1 text-[#131313b3]">
            <li className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200">
              <a>Home</a>
            </li>
            <li className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200">
              <a>Fixture</a>
            </li>
            <li className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200">
              <a>Teams</a>
            </li>
            <li className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200">
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div class="flex space-x-1.5 border border-[#1313131a] rounded-xl py-2 px-3 text-center">
          <span className="font-bold text-sm md:text-base">{availableBalance}</span>
          <span className="font-bold text-sm md:text-base">Coin</span>
          <img className="mr-4" src={coinImg} alt="coin" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
