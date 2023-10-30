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
