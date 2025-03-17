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
};

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "500", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function MainLayout({ children, params }: LayoutProps) {
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
