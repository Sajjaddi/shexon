import React from "react";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";
import { container } from "src/utils";
import clsx from "clsx";
import Image from "next/image";
import animateSvg1 from "assets/images/bgAnimate1.svg";
import animateSvg2 from "assets/images/bgAnimate2.svg";
import animateSvg3 from "assets/images/bgAnimate3.svg";

const Index = () => {
  return (
    <>
      {/* <Image
        alt="animate"
        src={animateSvg1}
        className="fixed top-[10%] object-contain left-[50%] max-w-[100px] max-h-xs min-w-[100px] min-h-[100px] animate-background-1"
      />
      <Image
        alt="animate"
        src={animateSvg2}
        className="fixed bottom-[10%] right-0 max-w-xs max-h-xs min-w-[100px] min-h-[100px] animate-background-2"
      />
      <Image
        alt="animate"
        src={animateSvg3}
        className="fixed top-[10%] -right-[5%] max-w-xs max-h-xs min-w-[100px] min-h-[100px] animate-background-3"
      /> */}
      <div
        className={clsx(
          container,
          "md:flex md:flex-row-reverse relative z-10 items-center gap-x-10"
        )}
      >
        <HeroImage />
        <HeroContent />
      </div>
    </>
  );
};

export default Index;
