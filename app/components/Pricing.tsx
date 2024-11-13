import Image from "next/image";
import React from "react";
import check from "../../public/assets/check.svg";

const Pricing = () => {
  return (
    <div className="py-[40px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center text-2xl font-medium lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="text-[#36485C] text-center py-4 lg:text-[18px]">No hidden fees!</p>

      {/*----------- Pricing card ------*/}

       {/*--------- card-1  ----------*/}
      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
          <div>
            <h3 className="text-[#4328EB] text-[18px] font-medium lg:text-xl">
              Free Trial
            </h3>
            <p className="text-[#36485C] font-[400] pt-[12px] lg:text-[18px]">
              Perfect for testing the waters
            </p>
            <h1 className="pt-3 text-2xl font-medium lg:text-[32px]">
              0$ <span className="text-[#5F7896]">/mo</span>
            </h1>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" />
                </span>
                Lorem ipsum dolor sit amet
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Strat Trial</button>
        </div>

        {/*--------- card-2  ----------*/}
        <div className="w-full rounded-[8px] bg-[#4328EB] text-white p-6 flex flex-col">
          <div >
            <h3 className=" text-[18px] font-medium lg:text-xl">
            Business
            </h3>
            <p className=" font-[400] pt-[12px] lg:text-[18px]">
            Perfect for small businesses
            </p>
            <h1 className="pt-3 text-2xl font-medium lg:text-[32px]">
              $500 <span className="">/mo</span>
            </h1>

            <ul className="flex flex-col gap-y-2 pt-4 ">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" className="text-white"/>
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" />
                </span>
                Lorem ipsum dolor sit amet
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Get Started</button>
        </div>

          {/*--------- card-3  ----------*/}
          <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
          <div>
            <h3 className="text-[#4328EB] text-[18px] font-medium lg:text-xl">
            Enterprise
            </h3>
            <p className="text-[#36485C] font-[400] pt-[12px] lg:text-[18px]">
            Perfect for big companies
            </p>
            <h1 className="pt-3 text-2xl font-medium lg:text-[32px]">
            Custom  
            </h1>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" />
                </span>
                Lorem ipsum dolor sit amet
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={check} alt="check-icon" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
