import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from "../assets/hero_img.avif";

const Hero = () => {

  const [input, setInput] = useState("");
  const navigate = useNavigate()
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(input) {
      navigate(`/room/${input}`);
      
    }
  }

  return (
    <div className="bg-gray-50">


  <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
        <div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Meet with your Family or Friends</h1>
            <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Start a free conference call with your friends, family or team members. No sign up required</p>

            <div action="#" method="POST" className="mt-8 sm:mt-10">
              <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="" id="" placeholder="Enter Your roomID" className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent" required="" />
                <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                  <button onClick={submitHandler} className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-pink-600 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Join Us Now</button>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
            

            <div className="hidden sm:block">
              <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
              </svg>
            </div>

            
          </div>
        </div>

        <div>
          <img className="w-full" src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Hero
