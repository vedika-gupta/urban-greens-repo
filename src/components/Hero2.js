import React from 'react';
import { Link } from 'react-router-dom';
import NavBar2 from './Navbar/NavBar2';
import heroImg from '../images/right-img13.jpeg';
import { CiSearch } from "react-icons/ci";
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
    return (
        <div className="container" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '20px'
        }}>
    <div className="hero" id="hero2" style={{ gridColumn: '1 / 2' }}>
        <div>
            <NavBar2/>
        </div>

        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6 flex justify-center items-center" data-aos="fade-up">
    <div id="hero2" className="flex flex-col lg:flex-row py-10 justify-between text-center lg:text-left">
        <div className="lg:w-2/2 flex flex-col justify-center mt-9 align-middle">
            <h1 className=" md:text-5xl text-3xl font-bold text-black mb-10">
                <span style={{color:'#09AD52'}}>AGRI</span><span style={{color:'#115631'}}>CULTURE</span> AT YOUR FINGERTIPS
            </h1>
            <div className="text-[18px] font-light tracking-tight text-black-500 mb-10">Urban Greens revolutionizes urban spaces by converting rooftops into vibrant farms, providing economic opportunities while addressing environmental concerns. Through sustainable agriculture and community involvement, it fosters a greener, healthier future for urban dwellers.</div>
            <div className="space-x-0 md:space-x-2 md:mb-8 mb-10">
            <HashLink id="signupButton" className="text-black border border-solid border-black hover:bg-[#57d08e] inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" smooth to="/buyer">
                Become Buyer
            </HashLink>
            <HashLink id="signupButton" className="text-black border border-solid border-black hover:bg-[#57d08e] inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" smooth to="/buyer">
                Become Landlord
            </HashLink>
            </div>
        </div>
    </div>
</div>

    </div>

    <div className="hero-right relative" id="hero-right" >
    <div className="w-full relative" data-aos-delay="700">
        <img alt="card img" className="rounded-t float-right duration-1000 h-screen rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-3xl py-1 " src={heroImg} />
        
        <img src='neomorph-right.png' className='absolute w-[70px] top-[420px] right-4 backdrop-blur-sm' />
        <img src='neomorph-left.png' className=' absolute w-[241px] top-[420px] right-28 backdrop-blur-sm'  />
        <div>
            <input type="text" name="text" placeholder="search locations.." className="text-[18px] font-light text-black absolute w-[400px] h-[40px] px-3 z-[1000] top-7 right-48 backdrop-blur-3 opacity-50 outline-none rounded-full "/>
            <CiSearch className='absolute w-[40px] h-[40px] mx-[0.2px] px-2 z-[1000] top-7 right-48 backdrop-blur-md outline-none rounded-full'/>
        </div>
    </div>
</div>


</div>

    )
}

export default Hero;