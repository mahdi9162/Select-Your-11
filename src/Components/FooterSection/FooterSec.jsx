import React from 'react';
import logoImg from '../../assets/logo-footer.png';

const FooterSec = () => {
  return (
    <>
      <footer className="bg-[#06091A] relative font-sora">
        <div className="absolute -top-44 md:left-1/2 md:-translate-x-1/2 p-2 md:p-4 border-2 border-white/90 rounded-3xl">
          <div className="flex justify-center items-center bg-gradient-to-r from-[rgba(210,242,255,1)] via-[rgba(255,255,255,1)] to-[rgba(255,231,190,1)] md:w-[1100px] md:h-[384px] py-20 mx-auto border border-[rgba(19,19,19,0.1)] rounded-[24px]">
            <div className="text-center">
              <h2 className="md:text-3xl text-xl font-bold">Subscribe to our Newsletter</h2>
              <p className="text-[#131313b3] text-sm md:text-base mt-1 mb-6">
                Get the latest updates and news <span className="block md:inline">right in your inbox!</span>
              </p>
              <input className="h-10 w-72 rounded-md border mr-2 border-black/10 px-3" placeholder="Enter your email" />
              <button
                className="mt-3 md:mt-0 h-10 rounded-md px-4 font-semibold text-[#131313]
                 bg-gradient-to-r from-[rgba(255,210,140,1)]
                 via-[rgba(255,150,200,1)]
                 to-[rgba(255,210,90,1)] cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-52 md:pt-64 flex justify-center">
          <figure>
            <img src={logoImg} alt="" />
          </figure>
        </div>
        {/* Footer Text */}
        <div className="px-3 font-sora mt-14 md:w-[1100px] space-y-4 md:space-y-0 mx-auto text-white flex flex-col md:flex-row justify-between">
          <div>
            <p className="text-xl font-bold mb-1 md:mb-3">About Us</p>
            <p className="text-[#ffffff99]">
              We are a passionate team <span className="block">dedicated to providing the best</span>{' '}
              <span className="block">services to our customers.</span>
            </p>
          </div>
          <div>
            <p className="text-xl font-bold mb-1 md:mb-3">Quick Links</p>
            <ul className="text-[#ffffff99] list-disc list-inside ps-2 space-y-2 marker:text-white/60">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold mb-1 md:mb-3">Subscribe</p>
            <p className="text-[#ffffff99] mb-4">
              Subscribe to our newsletter for <span className="block">the latest updates.</span>
            </p>
            <div>
              <input
                className="h-10 md:w-72 rounded-md border bg-white text-black mr-2 border-black/10 px-3"
                placeholder="Enter your email"
              />
              <button
                className="mt-3 md:mt-0 h-10 rounded-md px-4 font-semibold text-[#131313]
                 bg-gradient-to-r from-[rgba(255,210,140,1)]
                 via-[rgba(255,150,200,1)]
                 to-[rgba(255,210,90,1)] cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 p-8 text-[#ffffff99] text-center">
          <p>@2025 Select-11 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default FooterSec;
