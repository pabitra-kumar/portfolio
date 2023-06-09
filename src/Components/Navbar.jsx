import React from 'react'

import { Link } from 'react-router-dom'

import {FaBars, FaTimes} from "react-icons/fa"

import { useState } from 'react'

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color , setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={" flex justify-between items-center p-[1rem] fixed w-full h-[90px] z-10" + (color ? " bg-[rgba(0,0,0,0.85)] transition duration-[0.5s]" : '')}>
        <h1 className='text-[2rem] md:text-[2.4rem] font-semibold'>
            <Link to="/">
                Portfolio.
            </Link>
        </h1>
        <ul className={(click ? "flex md:flex-row flex-col justify-center items-center w-full h-[100vh] bg-[rgba(0,0,0,0.9)] left-0 absolute top-0 -z-[3] transition-all duration-[0.3s] md:w-auto md:h-auto md:bg-transparent md:relative md:left-0 md:top-0" : "flex md:flex-row flex-col justify-center items-center w-full h-[100vh] bg-[rgba(0,0,0,0.9)] left-[-100%] absolute top-0 -z-[3] transition-all duration-[0.3s] md:w-auto md:h-auto md:bg-transparent md:relative md:left-0 md:top-0")}>
            <li className='md:py-0 md:px-[1rem] px-0 py-[1rem]'>
                <Link to="/" className=' text-[2rem] md:text-[1.2rem] font-bold'> Home </Link>
            </li>
            <li className='md:py-0 md:px-[1rem] px-0 py-[1rem]'>
                <Link to="/About" className=' text-[2rem] md:text-[1.2rem] font-bold'> About </Link>
            </li>
            <li className='md:py-0 md:px-[1rem] px-0 py-[1rem]'>
                <Link to="/Project" className=' text-[2rem] md:text-[1.2rem] font-bold'> Project </Link>
            </li>
            <li className='md:py-0 md:px-[1rem] px-0 py-[1rem]'>
                <Link to="/Contact" className=' text-[2rem] md:text-[1.2rem] font-bold'> Contact </Link>
            </li>
        </ul>
        <div className=' md:hidden' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={ { color: "#fff" }} />)
            : (
                <FaBars size={20} style={ { color: "#fff" }} />
            )}
        </div>
    </div>
  )
}
