import { draftMode } from "next/headers";
import { SiteLocale } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import fetchDato from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";
import RegisterForm from "@/components/RegisterForm";
import { ExtraContentDocument, EventByIdDocument } from "@/graphql/generated";
import DevForm from "@/components/DevForm";

const locale = "it";

export default async function Page({ params, searchParams }: BasicSlugPageProps) {
  const { slug } = params;
  const { id } = searchParams || {};
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;

  const slugData = {};
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <DevForm />
    </Wrapper>
  );
}
