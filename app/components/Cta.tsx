import Image from "next/image";
import React from "react";
import Arrow from "../../public/assets/arrow.png"

const Cta = () => {
  return (
    <div className="w-full rounded-[16px] py-[56px] px-[32px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-[32px] leading-[40px] text-center text-white font-medium lg:text-[56px] lg:leading-[64px]">
        Monitor your website like a pro
      </h1>
      <p className="text-center text-white py-6 lg:pt-[40px] lg:text-[18px]">Join over 800+ happy site owners boosting productivity and efficiency!</p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="bg-white px-8 py-4 text-[#EB2891] font-medium rounded-[4px] lg:w-fit">Try For Free</button>

        <button className="flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0">Contact Sales <span><Image src={Arrow} alt="right-arrow"/></span></button>
      </div>
    </div>
  );
};

export default Cta;
