import Image from "next/image";
import { useTranslations } from "next-intl";

import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function MyProjectsComp() {
  const t = useTranslations("");
  return (
    <div>
      <div
        id="trabajos"
        className="xs:flex xs:pt-24  xs:justify-center sm:justify-normal sm:pl-8 sm:pt-5 "
      >
        <h2 className="text-[28px] font-[500] drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]">
          {t("titulo-work")}
        </h2>
      </div>

      <div className="flex xs:flex-col sm:w-full sm:h-auto sm:container mx-auto px-4 lg:items-center xl:flex-row xl:items-start xl:w-[1250px] xl:h-[421px] xl:pt-[65px]">
        <div
          data-aos="fade-up"
          className="xs:pl-4 xs:pt-8 sm:pl-[100px] sm:pt-[50px] sm:pr-[30px] relative sm:w-[600px] sm:h-[370px]"
        >
          {/* Contenedor con límites de la imagen */}
          <a
            href="https://github.com/ezequielgimenez/ecommerce-modakelar"
            target="_blank"
            className="relative w-full h-full rounded-[20px] overflow-hidden cursor-pointer"
          >
            <Image
              className="border-transparent transition-all duration-300 ease-in-out xs:w-[375px] sm:w-[600px]"
              src="/images/work1.png"
              alt="work 1"
              width={600}
              height={370}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 rounded-[15px] transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <h3
                className={`${righteous.className} text-white text-xl font-semibold`}
              >
                Ecommerce - FullStack
              </h3>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col  xs:w-[360px] xs:px-6  sm:w-[640px] sm:h-auto sm:justify-center sm:items-center md:w-[740px] 
           xl:h-full  "
        >
          <p
            className="xs:text-[13px] text-[#BCB4B4] font-[500] pt-[27px] pb-[27px] sm:w-[550px] sm:px-8 sm:text-[15px] sm:text-start 
          xl:w-full xl:text-[20px]"
          >
            {t("work-1")}
          </p>

          <div className="flex xs:gap-x-2 sm:gap-x-8 sm:justify-center xl:justify-normal xl:px-8  xl:w-full">
            <button className="border-[1px] text-[12px] bg-white text-black rounded w-[71px]  xs:h-[30px] sm:h-[25px] flex items-center justify-center cursor-default">
              Next.js
            </button>
            <button className="border-[1px] text-[12px] bg-[#336791] text-white rounded w-[71px] xs:h-[30px] sm:h-[25px] flex items-center justify-center cursor-default">
              PostgreSQL
            </button>
            <button className="border-[1px] text-[12px] bg-[#52b0e6] text-white rounded w-[71px] xs:h-[30px] sm:h-[25px] flex items-center justify-center cursor-default">
              Sequelize
            </button>
            <button className="border-[1px] text-[12px] bg-[#db7093] text-white rounded xs:w-[140px] xs:h-[30px] sm:h-[25px] sm:w-[115px] flex items-center justify-center cursor-default">
              Style components
            </button>
          </div>
        </div>
      </div>

      {/* ///////////////// */}

      <div className="flex xs:flex-col xs:pt-10 sm:w-full sm:h-auto sm:container mx-auto px-4 lg:items-center xl:flex-row xl:items-start xl:w-[1250px] xl:h-[421px] xl:pt-[65px]">
        <div
          data-aos="fade-up"
          className="xs:pl-4 pt-8 sm:pl-[100px] sm:pt-[50px] sm:pr-[30px] relative sm:w-[600px] sm:h-[370px] "
        >
          {/* Contenedor con límites de la imagen */}
          <a
            href="https://vitality-diary.vercel.app/"
            target="_blank"
            className="relative w-full h-full rounded-[20px] overflow-hidden cursor-pointer"
          >
            <Image
              className="border-transparent transition-all duration-300 ease-in-out xs:w-[375px]"
              src="/images/work2.png"
              alt="work 2"
              width={600}
              height={370}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 rounded-[15px] hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <h3
                className={`${righteous.className} text-white text-xl font-semibold`}
              >
                Vitality Diary - Corriendo un sprint
              </h3>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col xs:w-[360px] xs:px-6  sm:w-[640px] sm:h-auto sm:justify-center sm:items-center md:w-[740px] 
         xl:h-full "
        >
          <p
            className="xs:text-[13px] text-[#BCB4B4] font-[500] pt-[27px] pb-[27px] sm:w-[550px] sm:px-8 sm:text-[15px] sm:text-start 
          xl:w-full xl:text-[20px]"
          >
            {t("work-2")}
          </p>
          <div className="flex xs:gap-x-2 sm:gap-x-8 sm:justify-center xl:justify-normal xl:px-8  xl:w-full">
            <button className="border-[10px] border-white text-[12px] bg-white text-[black] rounded w-[71px] xs:h-[30px] sm:h-[25px] flex items-center justify-center cursor-default">
              Next.js
            </button>
            <button className="border-[1px] border-white text-[12px] bg-green-500 text-white rounded w-[71px] xs:h-[30px] sm:h-[25px] flex items-center justify-center cursor-default">
              Scrum
            </button>

            <button className="border-[1px] border-white text-[12px] bg-yellow-500 text-black rounded xs:w-[170px] xs:h-[30px] sm:w-[125px] sm:h-[25px] flex items-center justify-center cursor-default">
              Metodologías Agiles
            </button>
            <button className="border-[1px] text-[12px] bg-[#db7093] text-white rounded xs:w-[140px] xs:h-[30px] sm:w-[115px] sm:h-[25px] flex items-center justify-center cursor-default">
              Style components
            </button>
          </div>
        </div>
      </div>

      {/* ///////////////// */}

      <div className="flex xs:flex-col xs:pt-10 sm:w-full sm:h-auto sm:container mx-auto px-4 lg:items-center xl:flex-row xl:items-start xl:w-[1250px] xl:h-[421px] xl:pt-[65px]">
        <div
          data-aos="fade-up"
          className="xs:pl-4 xs:pt-8 sm:pl-[100px] sm:pt-[50px] sm:pr-[30px] relative sm:w-[600px] sm:h-[370px]"
        >
          {/* Contenedor con límites de la imagen */}
          <a
            href="https://github.com/ezequielgimenez/frontend-pet-finder"
            target="_blank"
            className="relative w-full h-full rounded-[20px] overflow-hidden"
          >
            <Image
              className="border-transparent transition-all duration-300 ease-in-out"
              src="/images/work3.png"
              alt="work 3"
              width={1000}
              height={370}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 rounded-[15px] hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <h3
                className={`${righteous.className} text-white text-xl font-semibold`}
              >
                Pet Finder - React
              </h3>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col justify-start xs:w-[360px] xs:px-6  sm:w-[640px] sm:h-auto sm:justify-center sm:items-center md:w-[740px] 
          xl:h-full"
        >
          <p
            className="xs:w-full xs:pb-[17px] xs:text-[13px] text-[#BCB4B4] font-[500] pt-[27px] sm:pb-[27px] sm:w-[550px] sm:px-8 sm:text-[15px] sm:text-start
          xl:w-full xl:text-[20px]"
          >
            {t("work-3")}
          </p>
          <div className="flex px-8 xs:gap-x-2  sm:hidden ">
            <button className="border-[1px] text-[12px] bg-[#61dafb] text-[#222222] rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              React
            </button>
            <button className="border-[1px] text-[12px] bg-[#68A063] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              Express.js
            </button>
            <button className="border-[1px] text-[12px] bg-[#336791] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              PostgreSQL
            </button>
          </div>
          <div className="flex px-8 pt-2 xs:gap-x-2  sm:hidden ">
            <button className="border-[1px] text-[12px] bg-[#52b0e6] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              Sequelize
            </button>
            <button className="border-[1px] text-[12px] bg-[#4CAF50] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              MapBox
            </button>
            <button className="border-[1px] py-3 px-3 text-[10px] bg-[#007acc] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default xl:text-[12px] xl:w-[110px]">
              CSS Modules
            </button>
          </div>

          <div className="xs:hidden sm:flex gap-x-8 sm:justify-center sm:w-[520px] xl:w-full ">
            <button className="border-[1px] text-[12px] bg-[#61dafb] text-[#222222] rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              React
            </button>
            <button className="border-[1px] text-[12px] bg-[#68A063] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              Express.js
            </button>
            <button className="border-[1px] text-[12px] bg-[#336791] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              PostgreSQL
            </button>
            <button className="border-[1px] text-[12px] bg-[#52b0e6] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              Sequelize
            </button>
            <button className="border-[1px] text-[12px] bg-[#4CAF50] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default">
              MapBox
            </button>
            <button className="border-[1px] py-3 px-3 text-[10px] bg-[#007acc] text-white rounded w-[71px] h-[25px] flex items-center justify-center cursor-default xl:text-[12px] xl:w-[110px]">
              CSS Modules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
