import React from 'react';
import heroImg from '../../assets/banner-main.png';

const HeroSec = () => {
  return (
    <section className="md:w-[1100px] mx-auto px-3">
      <div className="font-sora bg-img mt-6 py-8 md:py-16 flex flex-col items-center">
        <figure>
          <img className="mx-auto w-32 md:w-52" src={heroImg} alt="" />
        </figure>
        <h1 className="mt-5 text-white font-bold text-lg text-center md:text-4xl">Assemble Your <span className='block md:inline'>Ultimate Dream 11 Cricket Team</span></h1>
        <p className="text-[#ffffffb3] text-sm md:text-base mt-3">Beyond Boundaries Beyond Limits</p>
        <div className="hover:border-yellow-100 transition-all duration-500 cursor-pointer inline-block rounded-3xl border-2 border-yellow-400 p-0.5 mt-5 bg-black">
          <button className="cursor-pointer bg-[#e7fe29] hover:hover:shadow-lg hover:border-yellow-200 transition-all duration-500 px-2 py-1 md:px-3 md:py-2 rounded-3xl border-2 text-sm">
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
