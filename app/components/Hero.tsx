import React from "react";
import Image from "next/image";
import Blue from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilet from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";

const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[286px]">
        <h1 className="text-[32px] font-[500] leading-[40px] text-center lg:text-[64px] lg:leading-[72px] lg:font-[600]">
          Start monitering your <br />
          website like a pro
        </h1>
      </div>

      <div className="py-6 ">
        <p className="font-[400] text-[#36485C] leading-6 px-[20px] lg:px-[286px] text-center">
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work <br className="hidden lg:block" /> process
          with our game-changing feature. Boost productivity and efficiency!
          productivity and efficiency!
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 w-full px-5 ">
        <button className="w-1/2 bg-[#4328EB] px-8 py-4 font-medium text-white rounded-[4px] lg:w-fit">
          Try for free
        </button>
        <button className="w-1/2 flex text-[#4328EB] font-medium gap-3 lg:w-fit lg:text-center">
          View Pricing{" "}
          <span>
            <Image src={Blue} alt="arrow" />
          </span>
        </button>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="-ml-6 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-white text-center lg:text-[18px]">
              Trusted by these companies
            </p>

            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-5 align-middle lg:grid-cols-5">
              <Image src={Google} alt="google" />
              <Image src={Slack} alt="google" />
              <Image src={Trustpilet} alt="google" />
              <Image src={Cnn} alt="google" />
              <Image src={Cluth} alt="google" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
