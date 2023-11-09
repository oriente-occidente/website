import { SeoMetaFragmentFragment, Site } from "@/graphql/generated";

export type BasicSlugPageProps = {
  params: { slug: string };
};
export type LayoutParams = {
  children: React.ReactNode;
};
export type ResolveLinkProps = {
  slug: string;
  _modelApiKey: string;
  locale: string;
  section?: string;
};
export type FooterProps = {
  locale: string;
  data?: any;
  hideNewsletter: boolean;
};
export type NewsletterProps = {
  locale: string;
  data?: any;
};

export type MobileNavProps = {
  data: any;
  locale: string;
  handleClose: () => void;
};

export type GenericCardProps = {
  data: any;
  locale: string;
  categoryTitle?: string;
};

export type GenericPageProps = {
  data: {
    content: any;
    hero: any;
    seo: any;
    sections?: any[];
    relatedContents?: any[];
    otherSections?: any[];
    titles?: LocaleValue;
    slugs?: LocaleValue;
    _modelApiKey: string;
    section?: string;
  };
  locale: string;
};

export type GenericIndexPageProps = {
  data: {
    list: any[];
    seo?: any;
    hero?: any;
    titles?: LocaleValue;
    slugs?: LocaleValue;
    _modelApiKey: string;
  };
  locale: string;
};

export type GenericProps = {
  data: any;
  locale: string;
};

export type AltType = {
  slug: string;
  title: string;
  locale: string;
  _modelApiKey: string;
  section?: string;
};

export type SeoProps = {
  page?: PageSeoProps;
  tags?: SeoMetaFragmentFragment[];
  alts?: AltType[];
};

export type LocaleValue = {
  locale: string;
  value: string;
};

export type AltsProps = {
  slugs?: LocaleValue[];
  titles: LocaleValue[];
  _modelApikey?: string;
  section?: string;
};

export type PageSeoProps = {
  _modelApikey?: string;
  seo?: SeoMetaFragmentFragment[];
  titles?: LocaleValue[];
  slugs?: LocaleValue[];
  section?: string;
};
