import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/Logo-1.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twiter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

const Footer = () => {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div>
        <div className="flex items-center gap-x-3">
          <Image src={Logo} alt="logo" />
          <p>By Nasim Akhtar</p>
        </div>
        <div className="pt-7">
          <div className="flex flex-wrap gap-x-10 lg:justify-between">
            <ul className="flex flex-col gap-y-5">
              <li>Feature</li>
              <li>Pricing</li>
              <li>Enterprcies</li>
              <li>Careers</li>
            </ul>

            <ul className="flex flex-col gap-y-5">
              <li>Pricing</li>
              <li>Free Trial</li>
              <li>Standard</li>
              <li>Business</li>
            </ul>

            <ul className="flex flex-col gap-y-5">
              <li>Enterprice</li>
              <li>Personalize</li>
              <li>Automation</li>
              <li>Invoicing</li>
            </ul>

            <ul className="hidden lg:flex flex-col gap-y-5">
              <li>Careers</li>
              <li>Pricing</li>
              <li>Open Position</li>
              <li>Conatus</li>
            </ul>

            <ul className="hidden lg:flex flex-col gap-y-5 ">
              <li>Growth</li>
              <li>Sale</li>
              <li>Enterprcies</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-[50px] text-center text-[14px] text-[#5F7896] font-medium">
          © Copyright 2024. Your Site. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
          <Image src={Facebook} alt="facebook" className="cursor-pointer" />
          <Image src={Twiter} alt="twiter" className="cursor-pointer" />
          <Image src={Feed} alt="feed" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
