import Image from 'next/image';
import React from 'react';

type TProps = {
 data: {
  _id: string;
  title: string;
  des: string;
  img: string;
  liveLink: string;
  githubLink: string;
 }
}

const ProjectCard = ({data}: TProps) => {
  const {title, des, img, liveLink, githubLink} = data
    return (
        <div data-aos="fade-up">
               <div className="p-3 md:p-6 flex flex-col w-80 bg-[#121121] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={img} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
    {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-white">{des}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#55e6a5]">
          <a href={liveLink}>Demo</a>
        </button>
        <button className="md:mt-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#55e6a5]">
        <a href={githubLink}>Source Code</a>
        </button>
      </div>
    </div>
        </div>
    );
};

export default ProjectCard;