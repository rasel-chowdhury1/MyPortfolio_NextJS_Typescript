import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1000,
        'Software Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Mern Stack Developer',
        1000,
        'Programmer',
        1000
      ]}
    //   wrapper="span"
      speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
    className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />

    );
};

export default TextEffect;