import React from "react";
import Image from "../assets/img/house-banner.png";

const Banner = () => {
  return (
    <section className="">
      <div className="h-full max-h-[640px] mb-24 col l-10 l-o-1">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
            <div className="">
              <h1 className="text-4xl font-semibold max-w-[480px] leading-none mb-6">
                <span className="text-violet-700">Rent</span> Your Dream House
                With Us.
              </h1>
              <p className=" mb-8 max-w-[480px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                debitis. Laborum sit aperiam quidem. Quos harum saepe ipsa alias
                sapiente consequuntur hic illo inventore?
              </p>
            </div>
          </div>
          <div className="hidden flex-1 lg:flex justify-end items-end">
            <img alt="" src={Image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
