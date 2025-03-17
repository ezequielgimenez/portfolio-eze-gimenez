"use client";
import Image from "next/image";
import ButtonMenu from "../button-menu/ButtonMenu";
import { useState } from "react";

export default function HeaderComp() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div>
      <header className="flex items-center justify-between h-[106px] xs:px-5 sm:px-10 lg:px-20 xl:px-32 2xl:px-40">
        <div>
          <Image
            className="cursor-pointer xs:w-[45px] xs:h-[31px] sm:w-[49px]"
            src="/logo.png"
            alt="Logo"
            width={49}
            height={31}
          ></Image>
        </div>
        <div onClick={openNav} className={"block sm:hidden"}>
          <Image
            className="xs:w-[35px] xs:h-[35px]"
            src="/images/burger.png"
            alt="burger"
            width={45}
            height={45}
          ></Image>
        </div>
        <div
          className={` ${
            showNav ? "flex" : "hidden"
          } flex-col items-center fixed  top-0 left-0 w-screen h-screen opacity-85  bg-[#252525] z-50`}
        >
          <div className="flex w-full justify-between px-4 py-4">
            <ButtonMenu></ButtonMenu>
            <div onClick={openNav}>
              <button>✖</button>
            </div>
          </div>

          <a
            className="py-5 text-[25px] font-[500] drop-shadow-[0px_0px_5px_rgba(197,75,140,1)] "
            href="#trabajos"
            onClick={openNav}
          >
            PROJECTS
          </a>
          <a
            className="py-5 text-[25px] font-[500] drop-shadow-[0px_0px_5px_rgba(197,75,140,1)] "
            href="#about"
            onClick={openNav}
          >
            ABOUT
          </a>
          <a
            className="py-5 text-[25px] font-[500] drop-shadow-[0px_0px_5px_rgba(197,75,140,1)] "
            href="#contacto"
            onClick={openNav}
          >
            CONTACT
          </a>
        </div>

        {/* button nav desktop min 690px -->*/}
        <div className="flex items-center w-[289px] h-[49px] xs:hidden sm:flex  sm:gap-x-5 lg:gap-x-8 xl:gap-x-10">
          <a
            className=" text-[13px] font-[500]   hover:text-[#C54B8C] transition-colors duration-300"
            href="#trabajos"
          >
            PROJECTS
          </a>
          <a
            className="text-[13px] font-[500]  hover:text-[#C54B8C] transition-colors duration-300"
            href="#about"
          >
            ABOUT
          </a>
          <a
            className=" text-[13px] font-[500]  hover:text-[#C54B8C] transition-colors duration-300 "
            href="#contacto"
          >
            CONTACT
          </a>
          <ButtonMenu></ButtonMenu>
        </div>
      </header>
    </div>
  );
}
