import React from "react";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import Image from "next/image";

const navLink = [
    {name : "Features"},
    {name : "Pricing"},
    {name : "Enterprice"},
    {name : "Careers"},
];

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center w-full px-[20px] py-[16px] lg:px-[80px] lg:container lg:mx-auto">
        {/*------ Logo ----*/}
        <div className="flex items-center">
          <Image src={Logo} className="cursor-pointer" alt="Logo image" />

          <div className="hidden lg:flex pl-[74px] gap-x-[56px] cursor-pointer">
            {navLink.map((item,index) => {
                return <p className="font-medium text-[#36485C]" key={index} >
                    {item.name}
                </p>
            })}
          </div>
        </div>

        {/*------ User and Bar Icon ----*/}
        <div>
          <div className="flex items-center gap-4">
<p className=" hidden lg:block font-medium text-[#36485C] pr-[56px] ">Open an account</p>

            <Image src={User} alt="User proflie" className="cursor-pointer"/>{" "}
            <span className="text-[#36485C] font-medium hidden sm:block cursor-pointer text-[16px]">
              Sign In
            </span>
            <Image src={Menu} alt="Menu Button" className="sm:hidden" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
