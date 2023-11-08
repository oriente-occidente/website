import { draftMode } from "next/headers";
import { NetworksIndexDocument, NetworksDocument } from "@/graphql/generated";
import HeroEmpty from "@/components/hero/HeroEmpty";
import { SiteLocale } from "@/graphql/generated";
import Breadcrumbs from "@/components/Breadcrumbs";
import fetchDato from "@/lib/fetchDato";

const locale = 'en';
export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const page = await fetchDato(NetworksIndexDocument, { locale: siteLocale }, isEnabled);
  const res = await fetchDato(NetworksDocument, { locale: siteLocale }, isEnabled);
  let list: any = [];

  if (res.networks) {
    list = [...res.networks];
  }

  const heroData = {
    titleHero: page?.networksIndex?.title || "",
    descriptionHero: page?.networksIndex?.description || "",
  };
  const dummyPaths = [
    {
      name: page?.networksIndex?.title || "",
      href: "#",
      current: false,
    },
  ];
  return (
    <div>
      <Breadcrumbs
        // id="#main-content"
        background="gray"
        paths={dummyPaths}
        locale={locale}
      />
      <HeroEmpty data={heroData} />
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
}
