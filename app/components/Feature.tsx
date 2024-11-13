import React from "react";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import BlueArrow from "../../public/assets/blue-button.svg";
import GreenArrow from "../../public/assets/green-button.svg";
import PinkArrow from "../../public/assets/pink-button.svg";
import Check from "../../public/assets/check.svg";
import Image from "next/image";

const Feature = () => {
  return (
    <>
    {/*-------- Feature-1 -------*/}
      <div className="flex flex-c gap-y-[56px] pt-[56px] lg:py-[120px] lg:gap-y-[80px] ">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
          <Image
            src={Feature1}
            alt="Feature-1"
            className="hidden w-1/2 sm:block"
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
            <h3 className="text-[#0085FF] font-medium text-[16px] lg:text-[18px] py-2">
              Sales Monitouring
            </h3>
            <h2 className="text-[#172026] text-[24px] leadind-[36px] font-medium lg:text-[42px] leading-[58px] mb-5">
              Simplify your sales monitoring
            </h2>

            <Image
              src={Feature1}
              alt="Feature imge"
              className="py-[24px] sm:hidden"
            />

            <p className="text-[#36485C] lg:text-[18px ]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard.{" "}
            </p>

            <ul className="flex flex-col gap-y-3 pt-[24px] lg:text-[18px]">
              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Lorem ipsum dolor sit amet
              </li>

              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Consectetur adipiscing elit
              </li>

              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>

            <p className="flex items-center gap-3 pt-[24px] text-[#0085FF] font-medium lg:pt-10 lg:text-[18px]">
              Learn More{" "}
              <span>
                <Image src={BlueArrow} alt="blue-arrow" />
              </span>
            </p>
          </div>
        </div>
      </div>

{/*-------- Feature-2 -------*/}
      <div className="flex flex-c gap-y-[56px] pt-[56px] lg:py-[120px] lg:gap-y-[80px] ">
        <div className="flex flex-col gap-x-6 sm:flex-row">
          <Image
            src={Feature2}
            alt="Feature-1"
            className="hidden w-1/2 sm:block"
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
            <h3 className="text-[#00A424] font-medium text-[16px] lg:text-[18px] py-2">
              Customer Support
            </h3>
            <h2 className="text-[#172026] text-[24px] leadind-[36px] font-medium lg:text-[42px] lg:leading-[58px] leading-[36px] mb-5">
              Get in touch with your customers
            </h2>

            <Image
              src={Feature2}
              alt="Feature imge"
              className="py-[24px] sm:hidden"
            />

            <p className="text-[#36485C] lg:text-[18px ]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard. Stay on top of things and revamp your work process with
              our game-changing feature. Get a bird's eye view with our
              customizable dashboard.
            </p>

            <ul className="flex flex-col gap-y-3 pt-[24px] lg:text-[18px]">
              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Lorem ipsum dolor sit amet
              </li>

              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Consectetur adipiscing elit
              </li>

              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>

            <p className="flex items-center gap-3 pt-[24px] text-[#00A424] font-medium lg:pt-10 lg:text-[18px]">
              Learn More{" "}
              <span>
                <Image src={GreenArrow} alt="blue-arrow" />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*-------- Feature-3 -------*/}
      <div className="flex flex-c gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
          <Image
            src={Feature3}
            alt="Feature-1"
            className="hidden w-1/2 sm:block"
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
            <h3 className="text-[#EB2891] font-medium text-[16px] lg:text-[18px] py-2">
            Growth Monitoring
            </h3>
            <h2 className="text-[#172026] text-[24px] leadind-[36px] font-medium lg:text-[42px] lg:leading-[58px] leading-[36px] mb-5">
            Monitor your site’s new subscribers 
            </h2>

            <Image
              src={Feature3}
              alt="Feature imge"
              className="py-[24px] sm:hidden"
            />

            <p className="text-[#36485C] lg:text-[18px ]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard.{" "}
            </p>

            <ul className="flex flex-col gap-y-3 pt-[24px] lg:text-[18px]">
              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Lorem ipsum dolor sit amet
              </li>

              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Consectetur adipiscing elit
              </li>

              <li className="flex items-center gap-4">
                <span>
                  <Image src={Check} alt="check-img" />
                </span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>

            <p className="flex items-center gap-3 pt-[24px] text-[#EB2891] font-medium lg:pt-10 lg:text-[18px]">
              Learn More{" "}
              <span>
                <Image src={PinkArrow} alt="blue-arrow" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
