"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ButtonMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState(useLocale());
  const router = useRouter();

  const changeLenguaje = (newLocale: string) => {
    setLocale(newLocale);
    setTimeout(() => {
      router.replace(`/${newLocale}`);
      setIsOpen(false); // Cierra el menú después de cambiar el idioma
    }, 100);
  };

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="cursor-pointer hover:bg-[#C54B8C] w-[56px] h-[35px] opacity-90 rounded-[35px] transition-colors duration-300"
      >
        <div className="flex">
          <Image src="/lang.png" alt="lang" width={24} height={24} />
          <div className="pt-[5px] pl-2">
            <Image src="/images/abajo.png" alt="arrow" width={13} height={13} />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 flex flex-col items-center justify-center w-[56px] h-[70px] rounded-[10px] bg-[#384152]">
          <ul>
            <li className="pb-2 hover:bg-[#777a80] w-[40px] rounded-[5px] transition-colors duration-300">
              <button onClick={() => changeLenguaje("en")}>EN</button>
            </li>
            <li className="pt-1 hover:bg-[#777a80] w-[40px] rounded-[5px] transition-colors duration-300">
              <button onClick={() => changeLenguaje("es")}>ES</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
