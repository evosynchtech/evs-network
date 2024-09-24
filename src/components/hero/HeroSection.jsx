import React from "react";

function HeroSection() {
  return (
    <div className="w-full flex flex-col desktop:flex-row relative">
      <div className="image-container w-full desktop:w-1/2">
        <img src="assets/bright-eyes-conor-oberst-interview.jpg" alt="" />
      </div>
      <div className="bg-slate-200 w-full py-8 px-4 desktop:w-1/2 flex flex-col gap-4 justify-center items-center">
        <div className="">
          <h1 className="desktop:text-5xl text-4xl text-center text-black font-bold">
            Some Heading Here
          </h1>
        </div>
        <div>
          <p className="mb-4 text-lg font-light text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
