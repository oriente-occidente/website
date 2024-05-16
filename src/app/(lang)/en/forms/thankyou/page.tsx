import { draftMode } from "next/headers";
import { SiteLocale } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import fetchDato from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";
import RegisterForm from "@/components/RegisterForm";
import ThankYou from "@/components/ThankYou";
import { ExtraContentDocument, EventByIdDocument } from "@/graphql/generated";

const locale = 'en';

export default async function Page({ params, searchParams }: BasicSlugPageProps) {
  const { slug } = params;
  const { id, cp } = searchParams || {};
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;

  const data = await fetchDato(
    ExtraContentDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const payload = await fetchDato(
    EventByIdDocument,
    { locale: siteLocale, id },
    isEnabled
  );

  const choiche = payload?.event?.paymentSettings?.find((p) => p.id === cp);
  const thankyouMessage = data?.extraContent;

  const slugData = {};
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <ThankYou
        choiche={choiche || {}}
        thankyouMessage={thankyouMessage}
        locale={locale}
      />
    </Wrapper>
  );
}
