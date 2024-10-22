import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react';

interface Props{
 data: {
    _id: string,
    name: string,
    role: string,
    img: string,
    comment: string,
    rating: string
 }
}

const ClientReview = ({data}:Props) => {
    const {name, role, img,comment, rating } = data;
    const ratings = Number(rating)
    return (
        <div className='flex flex-col text-center justify-center'>
            <Image src={img} alt={name} width={100} height={100} objectFit='contain' className='mx-auto mb-[2rem] rounded-full'/>

            <div className='flex items-center mx-auto '>
            {Array(ratings).fill(null).map((_, index) => (
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
      ))}
            </div>
            <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
            <p className='text-[18px] text-white mt-[0.5rem] opacity-75 mb-[1.4rem]'>{role}</p>
            <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>{comment}</p>
        </div>
    );
};

export default ClientReview;