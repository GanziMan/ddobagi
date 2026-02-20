import { notFound } from "next/navigation";

import DesktopMain from "../main/components/DesktopMain";
import MobileMain from "../main/components/MobileMain";
import { isLocale } from "../main/components/locales";

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main className="mx-auto w-full overflow-x-hidden bg-white text-[#141414]">
      <div className="hidden md:block">
        <DesktopMain locale={locale} />
      </div>
      <div className="md:hidden">
        <MobileMain locale={locale} />
      </div>
    </main>
  );
}
