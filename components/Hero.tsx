"use client"
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full relative gap-6 px-5 py-6 rounded-xl  ">
  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
    <Image src='/images/profile.png' width={64} height={64} className='object-cover' alt='profile photo'></Image>
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
      <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-white">
        Hi, I’m Fuat 🤘🏼
      </p>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
        
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#a8aebf]">
          Istanbul, Turkey
        </p>
      </div>
    </div>
  </div>
  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
      <div className="flex  flex-grow-0 flex-shrink-0 w-20 h-6 relative">
        <div className='bg-white rounded-full border border-white w-4 h-4'></div>
        <div className='bg-white rounded-full border border-white w-4 h-4'></div>
        <div className='bg-white rounded-full border border-white w-4 h-4'></div>
        <div className='bg-white rounded-full border border-white w-4 h-4'></div>
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#a8aebf]">+200 followers</p>
    </div>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[140px] h-10 relative overflow-hidden gap-2.5 p-2.5 rounded-xl bg-[#fafafc]/5 border border-[#e8eef3]/10">
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white">Follow me</p>
      
    </div>
  </div>
  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-base text-left text-[#737b8b]">
    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-base text-left text-[#737b8b]">
      I am an experienced and creative professional in
    </span>
    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-base font-semibold text-left text-[#737b8b]">
      frontend
    </span>
    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-base text-left text-[#737b8b]">
      
      development. Prioritizing user
    </span>
    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-base font-semibold text-left text-[#737b8b]">
      experience
    </span>
    <span className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-base text-left text-[#737b8b]">
      , I create impressive and user-friendly interfaces using modern technologies
    </span>
  </p>
  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden gap-2.5 p-2.5 rounded-xl bg-gradient-to-b from-[#6a24ff] to-[#4500d6] border border-[#804eff]">
      
    </div>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative overflow-hidden gap-2 px-5 py-2.5 rounded-xl bg-[#fafafc]/5 border border-[#e8eef3]/10">
      
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white">Download CV</p>
    </div>
  </div>
  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
    <div className="flex justify-center items-center flex-grow h-10 relative gap-1 px-2 py-6 rounded-xl bg-white/5 border border-[#e8eef3]/10">
     
      <p className="flex-grow-0 flex-shrink-0 w-[50px] h-[17px] text-sm text-left text-white">
        fuatui
      </p>
    </div>
    <div className="flex justify-center items-center flex-grow h-10 relative gap-1 px-2 py-6 rounded-xl bg-white/5 border border-[#e8eef3]/10">
     
      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">alaui</p>
    </div>
    <div className="flex justify-center items-center flex-grow h-10 relative gap-1 px-2 py-6 rounded-xl bg-white/5 border border-[#e8eef3]/10">
    
      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">alaui</p>
    </div>
    <div className="flex justify-center items-center flex-grow h-10 relative gap-1 px-2 py-6 rounded-xl bg-white/5 border border-[#e8eef3]/10">
      
      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">alaui</p>
    </div>
  </div>
</div>
  )
}

export default Hero