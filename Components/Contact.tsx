
import { FaceFrownIcon } from '@heroicons/react/20/solid';
import React from 'react';
const Contact = () => {
    return (
        <>
        <section id='contact' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center'>

           <div className='flex justify-center items-center w-full lg:3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20'>
             <div className='flex justify-center items-start flex-col gap-4 w-full'>
                <h1 className='text-green-600 font-bold text-[35px]'>Contact Info</h1>

                <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
                   <span className='bg-green-400 p-3 rounded-full '></span>+8801855-859847
                </div>

                <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
                   <span className='bg-green-400 p-3 rounded-full '></span>chowdhuryrasel040@gmail.com
                </div>

                <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>
                   <span className='bg-green-400 p-3 rounded-full '></span>Chittagong,Bangledesh
                </div>

                <div className='flex justify-center items-center gap-4 mt-10'>
                    <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'><FaceFrownIcon/></span>

                    <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'><FaceFrownIcon/></span>

                    <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'><FaceFrownIcon/></span>

                    <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'><FaceFrownIcon/></span>
                </div>


             </div>
           </div>

           <div className='flex flex-col justify-center items-center gap-2 w-full'>
            <input type="text" name="" placeholder='Enter your name' className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' />
            <input type="email" name="" placeholder='Enter your email' className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' />
            <textarea className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' name="" cols={30} rows={5}></textarea>
           </div>
        </section>
        </>
    );
};

export default Contact;