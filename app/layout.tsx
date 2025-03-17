import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import BackgroundComp from "@/components/background/Background";
import ClientComponent from "./clientComponent";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ezequiel Gimenez",
  icons: {
    icon: "/icono.ico",
  },
};

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "500", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // params ahora es una promesa
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} className={workSans.className}>
      <body>
        <ClientComponent />
        <BackgroundComp>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </BackgroundComp>
      </body>
    </html>
  );
}
