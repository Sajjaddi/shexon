import hero1 from "assets/images/home/hero1.png";
import hero2 from "assets/images/home/hero2.png";
import heroOverlay from "assets/images/home/heroOverlay.svg";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className={"w-[90%] md:w-1/2 md:h-2/3 md mx-auto max-w-sm md:max-w-lg lg:max-w-full lg:w-[60%] relative overflow-hidden"}>
      <Image alt="hero image" className="w-[66.2%] md:w-2/3 ml-auto h-1/2" src={hero1} />
      <Image
        alt="hero overlay"
        className="absolute w-[51vw] md:w-full object-contain h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        src={heroOverlay}
      />
      <Image alt="hero image" className="w-[66.2%] md:w-2/3 mr-auto h-1/2" src={hero2} />
    </div>
  );
};

export default HeroImage;
