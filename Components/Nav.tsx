
import { Bars3Icon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
interface Props {
    openNav: ()=>void;
}

const Nav = ({openNav}:Props) => {
    

    return (
        <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                    CHOW
                    <span className='text-yellow-300'>DHURY</span>
                </h1>
                <Link href="#hero" className='nav-link'>Home</Link>
                <Link href="#services"className='nav-link'>SERVICES</Link>
                <Link href="#about" className='nav-link'>ABOUT</Link>
                <Link href="#projects" className='nav-link'>PROJECT</Link>
                <Link href="#blogs" className='nav-link'>BLOG</Link>
                <Link href='#contact' className='nav-link'>CONTACT</Link>
                
        
                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
                </div>
            </div>
        </div>
    );
};

export default Nav;