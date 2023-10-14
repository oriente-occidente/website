export type BasicSlugPageProps = {
  params: { slug: string };
  preview: boolean;
  locale: string;
};
export type LayoutParams = {
  children: React.ReactNode;
  params: {
    locale: "string";
  };
};
