import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import clsx from "clsx";
import { container } from "src/utils";
const Footer = () => {
  const socialMedia = [
    {
      icon: <FaTelegramPlane className="text-primary-100" />,
      link: "https://t.me",
    },
    {
      icon: <BsTwitterX className="text-primary-100" />,
      link: "https://twitter.com",
    },
  ];
  return (
    <footer
      className={clsx(
        container,
        "text-green mt-5 flex lg:flex-row max-w-8xl mx-auto lg:justify-between lg:items-center flex-col gap-y-2 py-4 "
      )}
    >
      <div className="flex justify-center lg:items-start md:flex-row-reverse md:gap-x-4 items-center gap-x-2 flex-col mt-9 text-[13px] md:text-sm">
        <strong className=" font-normal lg:text-left">
          Email:{" "}
          <a
            href="mailto:test@shexon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            test@shexon.com
          </a>
        </strong>
        <p>2023 Copyright - All rights reserved</p>
      </div>
      <div className="flex justify-center items-center gap-x-2 mt-1">
        {socialMedia.map((i) => (
          <a
            href={i.link}
            target="_blank"
            rel="noreferrer"
            className="bg-darkGreen text-xl rounded-full p-2 md:text-2xl md:p-2.5"
            key={i.link}
          >
            {i.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
