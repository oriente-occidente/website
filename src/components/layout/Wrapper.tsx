import Header from "./Header";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { LayoutDocument } from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";

export default async function Wrapper({ slugData, locale, children }: any) {
  const { isEnabled } = draftMode();
  const layoutData = await fetchDato(LayoutDocument, { locale }, isEnabled);
  if (!layoutData) notFound();
  return (
    <>
      <Header locale={locale} data={layoutData.menu} slugData={slugData} />
      <div className="min-h-[50vh] pt-[70px] md:pt-[80px] lg:pt-[110px]">
        <div>{children}</div>
      </div>
    </>
  );
}
