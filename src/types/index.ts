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
  };
  locale: string;
};

export type GenericIndexPageProps = {
  data: {
    list: any[];
    seo?: any;
    hero?: any;
  };
  locale: string;
};

export type GenericProps = {
  data: any;
  locale: string;
};
