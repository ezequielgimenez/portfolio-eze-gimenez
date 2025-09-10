import Image from "next/image";
import { useTranslations } from "next-intl";
export default function AboutMeComp() {
  const t = useTranslations("");
  return (
    <div>
      <div className="py-40 xs:pl-4 sm:pl-8 ">
        <div className="flex xs:justify-center sm:justify-normal">
          <h2
            id="about"
            className="text-[28px] font-[500] drop-shadow-[0px_0px_5px_rgba(197,75,140,1)] sm:pb-2 xl:pb-20"
          >
            {t("titulo-about")}
          </h2>
        </div>

        <div className=" flex xs:flex-col  h-[500px] sm:w-[640px]  sm:items-center lg:w-[1024px] xl:w-[1192px] xl:flex-row">
          <div
            data-aos="fade-up"
            className="flex xs:justify-center xs:w-[360px] xs:pb-4 xs:pt-4  sm:w-[640px] xl:w-auto  xl:pt-[56px] xl:pl-20 xl:pr-[68px] "
          >
            <Image
              className="rounded-[30px]"
              src="/images/me3.png"
              alt="Foto de perfil"
              width={200}
              height={300}
            />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col justify-around  xs:px-8 sm:w-[500px] sm:h-auto sm:justify-center lg:w-[600px]  xl:w-[690px] xl:h-[350px]"
          >
            <h3 className="font-normal xs:pb-8  text-[#F0F0F0] sm:text-[15px]  xl:text-[20px]">
              {t("titulo-hello2")}{" "}
              <span className="text-[#858585]">{t("name")}</span>,
              {t("description")}
              <span className="text-[#858585]">{t("stacks")}</span>
              <br />
              <br />
              {t("about-me")}
            </h3>
            <div>
              <a href="/me/CV-Ezequiel-Gimenez.pdf" target="_blank">
                <button className="font-medium border-[1px] py-[10px] px-4 rounded-[10px] bg-transparent border-white hover:bg-[#bab9b9] transition-color duration-300">
                  Descargar mi CV 🡇
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
