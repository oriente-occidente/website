import { SeoMetaFragmentFragment, Site } from "@/graphql/generated";

export type BasicIdPageProps = {
  params: {
    id: string;
  };
};
export type BasicSlugPageProps = {
  params: {
    slug: string;
  };
};
export type LayoutParams = {
  children: React.ReactNode;
};
export type ResolveLinkProps = {
  slug: string;
  slugs: any | undefined;
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

export type FestivalProgramPageProps = {
  data: {
    page: any;
    hero: any;
    seo: any;
    list: any[];
  };
  locale: string;
};

export type GenericIndexPageProps = {
  data: {
    list: any[];
    hero?: any;
    page: PageSeoProps;
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
  _modelApiKey?: string;
  section?: string;
};

export type PageSeoProps = {
  _modelApiKey?: string;
  seo?: SeoMetaFragmentFragment[];
  titles?: LocaleValue[];
  slugs?: LocaleValue[];
  section?: string;
  sections?: any;
  content?: any;
};

export type GenericSearchProps = {
  data: any;
  locale: string;
  children: React.ReactNode;
};

export type SearchPropsType = {
  locale: string;
};
