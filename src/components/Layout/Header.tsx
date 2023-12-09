import Image from "next/image";
import React from "react";
import logo from "assets/images/logo.svg";
import clsx from "clsx";
import { container } from "src/utils";

const Header = () => {
  return (
    <header className={clsx(container, 'py-6 md:py-14 md:mb-10 mb-4 flex justify-center items-center md:justify-start')}>
      <Image priority className="w-40 md:w-52" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
