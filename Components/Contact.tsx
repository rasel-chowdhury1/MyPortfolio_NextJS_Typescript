
import { DevicePhoneMobileIcon, EnvelopeIcon, FaceFrownIcon, MapIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { BsDiscord } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
const Contact = () => {
    const handleGithub = () => {
      window.open('https://github.com/rasel-chowdhury1', '_blank');
    }

    const handleLinkedin = () => {
      window.open('https://www.linkedin.com/in/rasel-chowdhury-4a27a220a', '_blank');
    }

    const handleDiscord = () => {
      window.open('https://discord.com/users/RaselChy#3939', '_blank');
    }

    const handleFacebook = () => {
      window.open('https://www.facebook.com/rasel.chyjoyntu/', '_blank');
    }
    return (
        <>
        <section id='contact' className='w-full bg-[#02050a] flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center'>

           <div className='flex justify-center items-center w-full lg:3/4 flex-col lg:flex-row bg-[#121121]  rounded-lg px-8 py-12 gap-10 z-20'>
             <div className='flex justify-center items-start flex-col gap-4 w-full'>
                <h1 className='text-green-400 font-bold text-[35px]'>Contact Info</h1>

                <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
                   <span className='bg-[#55e6a5] p-3 rounded-full '><DevicePhoneMobileIcon className='md:w-[2rem] md:h-[2rem] w-[1.5rem] h-[1.5rem] text-black'/></span>+8801855-859847
                </div>

                <div id='email' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
                   <span className='bg-[#55e6a5] p-3 rounded-full '><EnvelopeIcon className='md:w-[2rem] md:h-[2rem] w-[1.5rem] h-[1.5rem] text-black'/></span>chowdhuryrasel040@gmail.com
                </div>

                <div id='location' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
                   <span className='bg-[#55e6a5] p-3 rounded-full '><MapIcon className='md:w-[2rem] md:h-[2rem] w-[1.5rem] h-[1.5rem] text-black'/></span>Chittagong,Bangledesh
                </div>

                <div className='flex justify-center items-center gap-4 mt-10'>
                    <span className='bg-[#55e6a5] p-3 rounded-full cursor-pointer hover:bg-yellow-400' onClick={handleGithub}><FaGithub/></span>

                    <span className='bg-[#55e6a5] p-3 rounded-full cursor-pointer hover:bg-yellow-400' onClick={handleLinkedin}><FaLinkedinIn /></span>

                    <span className='bg-[#55e6a5] p-3 rounded-full cursor-pointer hover:bg-yellow-400' onClick={handleDiscord}><BsDiscord /></span>

                    <span className='bg-[#55e6a5] p-3 rounded-full cursor-pointer hover:bg-yellow-400' onClick={handleFacebook}><FaFacebookF/></span>
                </div>


             </div>

             <div className='flex flex-col justify-center items-center gap-2 w-full'>
                <input type="text" name="" placeholder='Enter your name' className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' />
                <input type="email" name="" placeholder='Enter your email' className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' />
                <textarea className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' name="" cols={30} rows={5}></textarea>
                <button className='bg-[#55e6a5] text-white  px-4 py-3 w-full rounded-lg hover:bg-yellow-400 cursor-pointer'>Submit</button>
             </div>
           </div>

           
        </section>
        </>
    );
};

export default Contact;