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
      <form name="devtest" method="POST" data-netlify="true">
        {/* <input type="hidden" name="form-name" value="devtest" /> */}
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Wrapper>
  );
}
