import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = params; // Aquí también eliminamos Promise.resolve

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return <>{children}</>;
}
