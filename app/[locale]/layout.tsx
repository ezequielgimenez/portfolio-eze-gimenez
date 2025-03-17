import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Definir el tipo de params como una promesa
type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 'params' ahora es una promesa
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  // Resolvemos 'params' ya que es una promesa
  const { locale } = await params;

  // Verificamos si 'locale' está en la lista de locales válidos
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return <>{children}</>;
}
