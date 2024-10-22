
import { DevicePhoneMobileIcon, EnvelopeIcon, FaceFrownIcon, MapIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { BsDiscord } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import { ColorRing } from 'react-loader-spinner';

const Contact = () => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const [done, setDone] = useState(false);
   
   const handleSubmit = (e: any) => {
      setDone(true)
     e.preventDefault();
     const serviceId = "service_fb80wkq";
     const templateId = "template_77fzhdj";
     const publicKey = "2CCIa6rfb6rhZV-d6";
 
     const templateParams = {
       from_name: name,
       from_email: email,
       to_name: "Rasel Chowdhury",
       message: message,
     };
     emailjs
       .send(serviceId, templateId, templateParams, publicKey)
       .then((response) => {
         console.log("Email sent successfully", response);
         alert("Email send successfully... Thank You.")
         setDone(false)
         setName("");
         setEmail("");
         setMessage("");
       })
       .catch((error) => {
         console.log("Error sending email", error);
         toast.error("Error sending email. Please try again.");
       });
   };

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

             <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-2 w-full'>
                <input 
                type="text" 
                name="name" 
                placeholder='Enter your name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' />

                <input 
                type="email" 
                name="email" 
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' />
                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write here details" 
                required
                className='px-4 py-4 w-full border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' name="message" cols={30} rows={5}></textarea>
                <button className='bg-[#55e6a5] flex items-center justify-center gap-2 text-white  px-4 py-3 w-full rounded-lg hover:bg-yellow-400 cursor-pointer'>Submit {done && <ColorRing
  visible={true}
  height="25"
  width="25"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing>}</button>
             </form>
           </div>

           
        </section>
        </>
    );
};

export default Contact;