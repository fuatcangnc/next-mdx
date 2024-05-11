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
        <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 opacity-30"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            opacity="0.3"
            d="M7.548 19.2201C7.35317 19.2201 7.15833 19.1865 6.9635 19.1194C6.7685 19.052 6.59217 18.9479 6.4345 18.8069C5.53717 17.9799 4.69742 17.1282 3.91525 16.2519C3.13325 15.3757 2.4535 14.4998 1.876 13.6241C1.29833 12.7485 0.84125 11.8805 0.50475 11.0204C0.16825 10.16 0 9.32921 0 8.52788C0 6.22021 0.746417 4.35196 2.23925 2.92313C3.73225 1.49429 5.50183 0.779877 7.548 0.779877C9.59417 0.779877 11.3637 1.49429 12.8567 2.92313C14.3496 4.35196 15.096 6.22021 15.096 8.52788C15.096 9.32921 14.9277 10.1584 14.5912 11.0154C14.2547 11.8725 13.7993 12.7405 13.225 13.6194C12.6505 14.4982 11.9722 15.3741 11.1902 16.2471C10.4082 17.1203 9.5685 17.9703 8.671 18.7971C8.51567 18.9381 8.33908 19.0439 8.14125 19.1144C7.94358 19.1849 7.74583 19.2201 7.548 19.2201ZM7.54975 10.1451C8.04725 10.1451 8.47258 9.96796 8.82575 9.61363C9.17908 9.25929 9.35575 8.83338 9.35575 8.33588C9.35575 7.83838 9.17858 7.41296 8.82425 7.05963C8.46992 6.70646 8.04392 6.52988 7.54625 6.52988C7.04875 6.52988 6.62342 6.70704 6.27025 7.06138C5.91692 7.41571 5.74025 7.84171 5.74025 8.33938C5.74025 8.83688 5.91742 9.26221 6.27175 9.61538C6.62608 9.96854 7.05208 10.1451 7.54975 10.1451Z"
            fill="white"
          />
        </svg>
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
      <svg
        width={18}
        height={16}
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0"
        preserveAspectRatio="none"
      >
        <path
          d="M13.6989 0.614868H16.2044L10.7307 6.87174L17.17 15.3851H12.1277L8.17866 10.2221L3.65942 15.3851H1.15251L7.00705 8.6933L0.829956 0.614868H5.99985L9.56946 5.33457L13.6989 0.614868ZM12.8193 13.8854H14.208L5.24584 2.03619H3.75584L12.8193 13.8854Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
  <svg
    width={360}
    height={2}
    viewBox="0 0 360 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0 w-[360px] h-0 relative"
    preserveAspectRatio="none"
  >
    <g opacity="0.3" filter="url(#filter0_d_34_2570)">
      <line
        y1="0.5"
        x2={360}
        y2="0.5"
        stroke="#E8EEF3"
        stroke-opacity="0.1"
        shape-rendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_34_2570"
        x={0}
        y={0}
        width={360}
        height={2}
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feflood flood-opacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feoffset dy={1} />
        <fecomposite in2="hardAlpha" operator="out" />
        <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0" />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_2570" />
        <feblend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_2570" result="shape" />
      </filter>
    </defs>
  </svg>
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
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6"
        preserveAspectRatio="xMidYMid meet"
      >
        <mask
          id="mask0_34_2218"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <rect width={24} height={24} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_34_2218)">
          <path
            d="M4.30775 19.5C3.80258 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30775C2.5 5.80258 2.675 5.375 3.025 5.025C3.375 4.675 3.80258 4.5 4.30775 4.5H19.6923C20.1974 4.5 20.625 4.675 20.975 5.025C21.325 5.375 21.5 5.80258 21.5 6.30775V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.30775ZM20 7.44225L12.4865 12.252C12.4097 12.2955 12.3302 12.3298 12.248 12.3548C12.166 12.3798 12.0833 12.3923 12 12.3923C11.9167 12.3923 11.834 12.3798 11.752 12.3548C11.6698 12.3298 11.5903 12.2955 11.5135 12.252L4 7.44225V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H19.6923C19.7821 18 19.8558 17.9712 19.9135 17.9135C19.9712 17.8558 20 17.7821 20 17.6923V7.44225ZM12 11L19.8463 6H4.15375L12 11ZM4 7.673V6.52975V6.5595V6.52775V7.673Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative overflow-hidden gap-2 px-5 py-2.5 rounded-xl bg-[#fafafc]/5 border border-[#e8eef3]/10">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_34_2222)">
          <path
            d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2076 22.5814 20.278 21.0505 21.7446 19.008C23.2112 16.9656 24 14.5145 24 12C24 5.37 18.63 0 12 0Z"
            fill="white"
          />
        </g>
        <defs>
          <clippath id="clip0_34_2222">
            <rect width={24} height={24} fill="white" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white">Download CV</p>
    </div>
  </div>
  <svg
    width={360}
    height={2}
    viewBox="0 0 360 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0 w-[360px] h-0 relative"
    preserveAspectRatio="none"
  >
    <g opacity="0.3" filter="url(#filter0_d_34_2572)">
      <line
        y1="0.5"
        x2={360}
        y2="0.5"
        stroke="#E8EEF3"
        stroke-opacity="0.1"
        shape-rendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_34_2572"
        x={0}
        y={0}
        width={360}
        height={2}
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feflood flood-opacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feoffset dy={1} />
        <fecomposite in2="hardAlpha" operator="out" />
        <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0" />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_2572" />
        <feblend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_2572" result="shape" />
      </filter>
    </defs>
  </svg>
  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1">
    <div className="flex justify-center items-center flex-grow h-10 relative gap-1 px-2 py-6 rounded-xl bg-white/5 border border-[#e8eef3]/10">
      <svg
        width={21}
        height={20}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clip-path="url(#clip0_34_2228)">
          <path
            d="M6.28335 4.16667C6.28313 4.60869 6.10732 5.03253 5.7946 5.34493C5.48188 5.65734 5.05787 5.83272 4.61585 5.8325C4.17382 5.83228 3.74998 5.65647 3.43758 5.34376C3.12517 5.03104 2.94979 4.60703 2.95001 4.165C2.95023 3.72297 3.12604 3.29914 3.43876 2.98673C3.75147 2.67433 4.17548 2.49895 4.61751 2.49917C5.05954 2.49939 5.48338 2.67519 5.79578 2.98791C6.10818 3.30063 6.28357 3.72464 6.28335 4.16667ZM6.33335 7.06667H3.00001V17.5H6.33335V7.06667ZM11.6 7.06667H8.28335V17.5H11.5667V12.025C11.5667 8.975 15.5417 8.69167 15.5417 12.025V17.5H18.8333V10.8917C18.8333 5.75 12.95 5.94167 11.5667 8.46667L11.6 7.06667Z"
            fill="white"
          />
        </g>
        <defs>
          <clippath id="clip0_34_2228">
            <rect width={20} height={20} fill="white" transform="translate(0.5)" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 w-[50px] h-[17px] text-sm text-left text-white">
        fuatui
      </p>
    </div>
    <div className="flex justify-center items-center flex-grow h-10 relative gap-1 px-2 py-6 rounded-xl bg-white/5 border border-[#e8eef3]/10">
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clip-path="url(#clip0_34_2234)">
          <path
            d="M16.1975 4.95062C15.0219 6.34687 13.5169 7.42875 11.8006 8.08125L11.7269 8.10562C11.9144 8.48812 12.0938 8.875 12.2581 9.26625C12.3206 9.40687 12.375 9.5475 12.43 9.68C13.0094 9.61625 13.6819 9.58 14.3625 9.58C15.6519 9.58 16.9106 9.71 18.1269 9.95812L18.0063 9.9375C17.9938 8.0375 17.3144 6.29937 16.1913 4.94125L16.2019 4.95437L16.1975 4.95062ZM8.12563 2.23062C9.1225 3.57437 10.1106 5.10562 10.9994 6.7L11.1106 6.91687C12.8056 6.34937 14.2288 5.3475 15.2944 4.04187L15.3075 4.02562C13.9031 2.77187 12.04 2.00562 9.99875 2.00562C9.33438 2.00562 8.68875 2.08687 8.07125 2.24L8.12625 2.22875L8.12563 2.23062ZM2.1625 8.37187C4.79938 8.35812 7.34688 8.00312 9.7725 7.34937L9.56438 7.39687C8.53188 5.585 7.55063 4.07312 6.49438 2.61937L6.59625 2.76687C4.34875 3.8425 2.70438 5.87062 2.17313 8.31375L2.16375 8.36687L2.1625 8.37187ZM4.0525 15.3656C5.565 12.9394 7.80875 11.0912 10.4719 10.1106L10.56 10.0825C10.6656 10.0475 10.7706 10.0169 10.8763 9.98875C10.6731 9.53187 10.4544 9.0775 10.2263 8.63C7.79625 9.35125 5.00438 9.76687 2.11563 9.76687C2.07438 9.76687 2.03375 9.76687 1.99313 9.76687H1.99938L1.99625 10.0106C1.99625 10.0125 1.99625 10.0144 1.99625 10.0162C1.99625 12.0769 2.7775 13.955 4.05938 15.3712L4.05313 15.3644L4.0525 15.3656ZM13.1281 17.3806C12.7019 15.0687 12.1094 13.0325 11.3388 11.0869L11.4175 11.3125L11.3663 11.3281C8.67 12.1694 6.475 13.9481 5.115 16.275L5.08688 16.3269C6.4275 17.3819 8.14 18.0187 10.0013 18.0187C11.1294 18.0187 12.2025 17.785 13.175 17.3631L13.1231 17.3831L13.1281 17.3806ZM17.9038 11.2825C16.9219 10.9862 15.7938 10.8156 14.6256 10.8156C14.0231 10.8156 13.4313 10.8612 12.8531 10.9487L12.9181 10.9406C13.5306 12.5431 14.0694 14.4587 14.4406 16.4337L14.4744 16.6487C16.2706 15.4237 17.5325 13.5281 17.9006 11.33L17.9069 11.2831L17.9038 11.2825ZM10 19.3725C4.82375 19.3725 0.627502 15.1762 0.627502 10C0.627502 4.82375 4.82375 0.627499 10 0.627499C15.1763 0.627499 19.3725 4.82375 19.3725 10C19.3656 15.1731 15.1731 19.365 10 19.3725Z"
            fill="white"
          />
        </g>
        <defs>
          <clippath id="clip0_34_2234">
            <rect width={20} height={20} fill="white" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">alaui</p>
    </div>
    <div className="flex justify-center items-center flex-grow h-10 relative gap-1 px-2 py-6 rounded-xl bg-white/5 border border-[#e8eef3]/10">
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clip-path="url(#clip0_34_2238)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7799 5.83584H18.0762V4.31845H12.7799V5.83584ZM14.0346 9.14675C13.6971 9.49014 13.4843 9.95533 13.3973 10.5423H17.5165C17.473 9.91589 17.259 9.44257 16.8803 9.11659C16.497 8.79292 16.0254 8.63167 15.461 8.63167C14.8495 8.63167 14.3721 8.80337 14.0346 9.14675ZM17.6094 7.10963C18.2479 7.39037 18.7736 7.83585 19.1875 8.44374C19.565 8.9797 19.8072 9.60151 19.9177 10.308C19.9824 10.721 20.0083 11.3196 19.9977 12.098H13.3385C13.3785 13.0017 13.6936 13.6363 14.2957 13.9994C14.6602 14.2256 15.0988 14.3393 15.6139 14.3393C16.156 14.3393 16.5993 14.2013 16.9391 13.9263C17.1261 13.7767 17.2907 13.5702 17.4318 13.3057H19.8719C19.8072 13.8393 19.5109 14.3834 18.9864 14.9356C18.168 15.8115 17.0214 16.25 15.548 16.25C14.3309 16.25 13.2573 15.8811 12.3295 15.141C11.397 14.402 10.9337 13.1978 10.9337 11.5319C10.9337 9.96925 11.3535 8.77088 12.1919 7.93678C13.0327 7.10499 14.1205 6.6862 15.4598 6.6862C16.2559 6.6862 16.9721 6.82773 17.6094 7.10963ZM2.46356 10.5748V13.8266H5.4645C6.00072 13.8266 6.41936 13.7546 6.71687 13.6119C7.25897 13.3451 7.52942 12.8393 7.52942 12.0899C7.52942 11.4542 7.26837 11.0191 6.74273 10.7813C6.44875 10.6491 6.03601 10.5795 5.50685 10.5748H2.46356ZM2.46356 5.86717V8.55743H5.46921C6.00425 8.55743 6.44052 8.4565 6.77683 8.25464C7.1108 8.05279 7.27895 7.69547 7.27895 7.18503C7.27895 6.61543 7.05787 6.24072 6.61573 6.05743C6.23238 5.93098 5.74555 5.86717 5.15406 5.86717H2.46356ZM9.17569 5.0493C9.55317 5.56787 9.74251 6.18736 9.74251 6.9101C9.74251 7.65371 9.55319 8.25348 9.17101 8.70591C8.957 8.95881 8.64302 9.19083 8.22792 9.39965C8.85821 9.62703 9.33327 9.9855 9.65665 10.4762C9.9765 10.9658 10.1376 11.5621 10.1376 12.2628C10.1376 12.9855 9.95417 13.634 9.58611 14.2071C9.35327 14.5864 9.06164 14.9066 8.71122 15.1665C8.31728 15.4646 7.85279 15.6676 7.31539 15.779C6.778 15.8892 6.19709 15.9426 5.56915 15.9426H0V3.75H5.97249C7.48002 3.77204 8.54658 4.20476 9.17569 5.0493Z"
            fill="white"
          />
        </g>
        <defs>
          <clippath id="clip0_34_2238">
            <rect width={20} height={20} fill="white" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">alaui</p>
    </div>
    <div className="flex justify-center items-center flex-grow h-10 relative gap-1 px-2 py-6 rounded-xl bg-white/5 border border-[#e8eef3]/10">
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M15 1.25H5C2.92893 1.25 1.25 2.92893 1.25 5V15C1.25 17.0711 2.92893 18.75 5 18.75H15C17.0711 18.75 18.75 17.0711 18.75 15V5C18.75 2.92893 17.0711 1.25 15 1.25Z"
          fill="white"
        />
        <path
          d="M15 1.25H5C2.92893 1.25 1.25 2.92893 1.25 5V15C1.25 17.0711 2.92893 18.75 5 18.75H15C17.0711 18.75 18.75 17.0711 18.75 15V5C18.75 2.92893 17.0711 1.25 15 1.25Z"
          fill="white"
        />
        <path
          d="M15 1.25H5C2.92893 1.25 1.25 2.92893 1.25 5V15C1.25 17.0711 2.92893 18.75 5 18.75H15C17.0711 18.75 18.75 17.0711 18.75 15V5C18.75 2.92893 17.0711 1.25 15 1.25Z"
          fill="white"
        />
        <path
          d="M14.375 6.5625C14.375 7.08025 13.9553 7.5 13.4375 7.5C12.9197 7.5 12.5 7.08025 12.5 6.5625C12.5 6.04473 12.9197 5.625 13.4375 5.625C13.9553 5.625 14.375 6.04473 14.375 6.5625Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27413 11.7259 6.875 10 6.875C8.27412 6.875 6.875 8.27413 6.875 10C6.875 11.7259 8.27412 13.125 10 13.125ZM10 11.875C11.0356 11.875 11.875 11.0356 11.875 10C11.875 8.96444 11.0356 8.125 10 8.125C8.96444 8.125 8.125 8.96444 8.125 10C8.125 11.0356 8.96444 11.875 10 11.875Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.75 9.75C3.75 7.64981 3.75 6.59969 4.15873 5.79754C4.51825 5.09193 5.09193 4.51825 5.79754 4.15873C6.59969 3.75 7.64981 3.75 9.75 3.75H10.25C12.3502 3.75 13.4003 3.75 14.2024 4.15873C14.9081 4.51825 15.4818 5.09193 15.8413 5.79754C16.25 6.59969 16.25 7.64981 16.25 9.75V10.25C16.25 12.3502 16.25 13.4003 15.8413 14.2024C15.4818 14.9081 14.9081 15.4818 14.2024 15.8413C13.4003 16.25 12.3502 16.25 10.25 16.25H9.75C7.64981 16.25 6.59969 16.25 5.79754 15.8413C5.09193 15.4818 4.51825 14.9081 4.15873 14.2024C3.75 13.4003 3.75 12.3502 3.75 10.25V9.75ZM9.75 5H10.25C11.3207 5 12.0486 5.00098 12.6112 5.04694C13.1593 5.09171 13.4395 5.17287 13.635 5.27248C14.1054 5.51217 14.4878 5.89462 14.7275 6.365C14.8271 6.5605 14.9083 6.84075 14.9531 7.38881C14.999 7.95144 15 8.67925 15 9.75V10.25C15 11.3208 14.999 12.0486 14.9531 12.6112C14.9083 13.1593 14.8271 13.4395 14.7275 13.635C14.4878 14.1054 14.1054 14.4878 13.635 14.7275C13.4395 14.8271 13.1593 14.9083 12.6112 14.9531C12.0486 14.999 11.3207 15 10.25 15H9.75C8.67925 15 7.95144 14.999 7.38881 14.9531C6.84075 14.9083 6.5605 14.8271 6.365 14.7275C5.89462 14.4878 5.51217 14.1054 5.27248 13.635C5.17287 13.4395 5.09171 13.1593 5.04694 12.6112C5.00098 12.0486 5 11.3208 5 10.25V9.75C5 8.67925 5.00098 7.95144 5.04694 7.38881C5.09171 6.84075 5.17287 6.5605 5.27248 6.365C5.51217 5.89462 5.89462 5.51217 6.365 5.27248C6.5605 5.17287 6.84075 5.09171 7.38881 5.04694C7.95144 5.00098 8.67925 5 9.75 5Z"
          fill="white"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">alaui</p>
    </div>
  </div>
</div>
  )
}

export default Hero