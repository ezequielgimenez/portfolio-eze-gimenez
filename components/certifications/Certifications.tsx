// components/Certifications.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";

const certifications = [
  {
    title: "Nivel 2 - Software Developer",
    date: "Marzo 2024",
    img: "/images/certificaciones/nivel2.jpg",
  },
  {
    title: "Nivel 3 - Software Developer",
    date: "Diciembre 2024",
    img: "/images/certificaciones/nivel3.jpg",
  },
];

export default function Certifications() {
  const t = useTranslations("");

  return (
    <section className="py-16 px-6 text-white" id="certificaciones">
      <div data-aos="fade-up" className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {t("titulo-certificado")}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <Image
                src={cert.img}
                alt={cert.title}
                width={800}
                height={600}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
