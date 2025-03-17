import SocialComp from "../socials/Socials";
import { useTranslations } from "next-intl";

export default function ContactComp() {
  const t = useTranslations("");
  return (
    <div
      id="contacto"
      className="xs:h-[670px] xs:pt-40 xs:pl-4 sm:pt-[170px] sm:pl-8 sm:pb-32 xl:pt-16 xl:h-[640px]"
    >
      <div className="flex xs:justify-center sm:justify-normal">
        <h2 className="text-[28px] font-[500] drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]">
          {t("titulo-contact")}
        </h2>
      </div>
      <div data-aos="zoom-in-right">
        <div className="flex items-center justify-center h-[150px] pt-1">
          <h3 className="text-[20px] font-normal  text-[#F0F0F0]">
            {t("contact")}
          </h3>
        </div>
        <div className="pt-16">
          <SocialComp></SocialComp>
        </div>
      </div>
    </div>
  );
}
