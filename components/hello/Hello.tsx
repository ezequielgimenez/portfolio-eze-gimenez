import { useTranslations } from "next-intl";

export default function HelloComp() {
  const t = useTranslations("");
  return (
    <div>
      <div className="flex items-center justify-center my-10 xs:min-h-full xs:px-4 xs:py-10  sm:px-10 sm:h-[400px] md:h-[450px]">
        <div>
          <h1
            className="font-[600] text-center animate-bounce motion-safe:animate-[bounce_3s_infinite] drop-shadow-[0px_0px_5px_rgba(148,137,143,1)] xs:text-[35px] sm:text-[60px] md:text-[70px] "
            style={{
              WebkitTextStroke: "1px #ff4bab",
              backgroundImage:
                "radial-gradient(circle farthest-corner at center center, #cfcfcf17 0%, #0000002d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("titulo-hello1")} <br></br>
            {t("titulo-hello2")}
            <span className="text-[white]">{t("titulo-hello3")}.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
