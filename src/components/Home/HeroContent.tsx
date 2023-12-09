"use client";
import React, { FormEvent } from "react";

const HeroContent = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="flex flex-col items-center md:justify-start justify-center mt-7 md:w-1/2 lg:w-[40%]">
      <div className="px-3 md:px-0 text-center md:text-left  flex flex-col gap-y-2 sm:w-2/3 md:w-full">
        <h2 className="text-primary-30 font-sfpro text-5xl lg:text-7xl xl:text-[75px] font-bold w-full">
          Shape Your Future Wisely
        </h2>
        <p className=" xl:text-lg text-neutral-50 leading-5 md:leading font-vazir text-justify">
          {`Unlock the power of personalized insights and real-life experiences to
          guide your academic journey! Shexon revolutionizes decision-making by
          connecting you with current students who've walked your path. Say
          goodbye to uncertainties and unnecessary expenses – subscribe now and
          shape your academic future with confidence!`}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full md:w-[80%] md:mr-auto">
        <div className="w-full mt-10 flex flex-col gap-y-2 md:gap-y-3">
          <div className="text-green w-full">
            <label htmlFor="email" className="font-inter">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-full mt-1 md:mt-2 w-full bg-transparent border-green border px-4 py-2 md:py-3 outline-green"
            />
          </div>
          <button
            type="submit"
            className="bg-green w-fit ml-auto text-white px-6 text-sm py-3 md:py-3.5 md:px-10 lg:px-12 md:text-base rounded-full hover:bg-primary-40 transition-all duration-300"
          >
            Subscribe
          </button>
          <p className="text-neutral-70 text-sm md:text-[15px] md:leading-5 mt-6 text-justify font-vazir">
            We value your inbox and promise not to overwhelm it! Get direct
            access to thrilling product launch updates, and let us tailor our
            services to meet your needs. Opt-out anytime
          </p>
        </div>
      </form>
    </div>
  );
};

export default HeroContent;
