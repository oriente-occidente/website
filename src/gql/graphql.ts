/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents `true` or `false` values. */
  BooleanType: { input: any; output: any; }
  CustomData: { input: any; output: any; }
  /** A ISO 8601 compliant date value */
  Date: { input: any; output: any; }
  /** A ISO 8601 compliant datetime value */
  DateTime: { input: any; output: any; }
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: { input: any; output: any; }
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: { input: any; output: any; }
  ItemId: { input: any; output: any; }
  JsonField: { input: any; output: any; }
  MetaTagAttributes: { input: any; output: any; }
  UploadId: { input: any; output: any; }
};

/** Record of type Archivio Attività (activities_archive) */
export type ActivitiesArchiveRecord = RecordInterface & {
  __typename?: 'ActivitiesArchiveRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Archivio Attività (activities_archive) */
export type ActivitiesArchiveRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Attività (activities_archive) */
export type ActivitiesArchiveRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Attività (activities_archive) */
export type ActivitiesArchiveRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AltTitleFileField = FileFieldInterface & {
  __typename?: 'AltTitleFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt: Scalars['String']['output'];
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type AltTitleFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type AltTitleFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type AltTitleFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type AltTitleFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type AltTitleFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type AltTitleFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type AltTitleFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type AnchorBlockModelBodyBlocksField = GalleryRecord | ImageBlockRecord | PartnerBlockRecord | PromozioniBlockRecord | VideoBlockRecord | WorkshopCategoriesBlockRecord;

export type AnchorBlockModelBodyField = {
  __typename?: 'AnchorBlockModelBodyField';
  blocks: Array<AnchorBlockModelBodyBlocksField>;
  links: Array<AnchorBlockModelBodyLinksField>;
  value: Scalars['JsonField']['output'];
};

export type AnchorBlockModelBodyLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

export type AnchorBlockModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AnchorBlockModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AnchorBlockModelFilter>>>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
};

/** Block of type Paragrafo con Titolo (anchor_block) */
export type AnchorBlockRecord = RecordInterface & {
  __typename?: 'AnchorBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<AnchorBlockModelBodyField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Paragrafo con Titolo (anchor_block) */
export type AnchorBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type AnchorBlockRecordListListNonNullMultiLocaleField = {
  __typename?: 'AnchorBlockRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<AnchorBlockRecord>;
};

export type ArtistModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type ArtistModelContentField = {
  __typename?: 'ArtistModelContentField';
  blocks: Array<ArtistModelContentBlocksField>;
  links: Array<ArtistModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type ArtistModelContentFieldMultiLocaleField = {
  __typename?: 'ArtistModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ArtistModelContentField>;
};

export type ArtistModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum ArtistModelFieldsReferencingArtistModel {
  ArtistContent = 'artist_content',
  ArtistRelatedContents = 'artist_relatedContents',
  ArtistSections = 'artist_sections',
  ArtistSectionsAnchorBlockBody = 'artist_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistModelFieldsReferencingEventModel {
  ArtistContent = 'artist_content',
  ArtistRelatedContents = 'artist_relatedContents',
  ArtistSections = 'artist_sections',
  ArtistSectionsAnchorBlockBody = 'artist_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistModelFieldsReferencingNetworkModel {
  ArtistContent = 'artist_content',
  ArtistSections = 'artist_sections',
  ArtistSectionsAnchorBlockBody = 'artist_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistModelFieldsReferencingNewsModel {
  ArtistContent = 'artist_content',
  ArtistRelatedContents = 'artist_relatedContents',
  ArtistSections = 'artist_sections',
  ArtistSectionsAnchorBlockBody = 'artist_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistModelFieldsReferencingProjectModel {
  ArtistContent = 'artist_content',
  ArtistRelatedContents = 'artist_relatedContents',
  ArtistSections = 'artist_sections',
  ArtistSectionsAnchorBlockBody = 'artist_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistModelFieldsReferencingWorkshopModel {
  ArtistContent = 'artist_content',
  ArtistRelatedContents = 'artist_relatedContents',
  ArtistSections = 'artist_sections',
  ArtistSectionsAnchorBlockBody = 'artist_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistModelFieldsReferencingYearModel {
  ArtistArtisticResidence = 'artist_artisticResidence',
  ArtistYears = 'artist_years'
}

export type ArtistModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArtistModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArtistModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidence?: InputMaybe<LinksFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  countries?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  relatedContents?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  showInWebsite?: InputMaybe<BooleanFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum ArtistModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ShowInWebsiteAsc = 'showInWebsite_ASC',
  ShowInWebsiteDesc = 'showInWebsite_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ArtistModelRelatedContentsField = ArtistRecord | EventRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Record of type Artista (artist) */
export type ArtistRecord = RecordInterface & {
  __typename?: 'ArtistRecord';
  _allContentLocales?: Maybe<Array<ArtistModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingArtisticResidecies: Array<ArtisticResidecyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResideciesMeta: CollectionMetadata;
  _allReferencingArtisticResidenciesIndices: Array<ArtisticResidenciesIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResidenciesIndicesMeta: CollectionMetadata;
  _allReferencingArtists: Array<ArtistRecord>;
  _allReferencingArtistsIndices: Array<ArtistsIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsIndicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsMeta: CollectionMetadata;
  _allReferencingCompanies: Array<CompanyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCompaniesMeta: CollectionMetadata;
  _allReferencingEducationPages: Array<EducationPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEducationPagesMeta: CollectionMetadata;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingHomes: Array<HomeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata;
  _allReferencingLandings: Array<LandingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingLandingsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNetworks: Array<NetworkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNetworksMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allReferencingPartners: Array<PartnerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPartnersMeta: CollectionMetadata;
  _allReferencingProjects: Array<ProjectRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProjectsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidence: Array<YearRecord>;
  content?: Maybe<ArtistModelContentField>;
  countries: Array<CountryRecord>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero: FileField;
  relatedContents: Array<ArtistModelRelatedContentsField>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  showInWebsite?: Maybe<Scalars['BooleanType']['output']>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  years: Array<YearRecord>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingArtisticResideciesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingArtisticResideciesMetaArgs = {
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingArtisticResidenciesIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidenciesIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingArtisticResidenciesIndicesMetaArgs = {
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingArtistsIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistsIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingArtistsIndicesMetaArgs = {
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingArtistsMetaArgs = {
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingCompaniesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingCompaniesMetaArgs = {
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingEducationPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EducationPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EducationPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingEducationPagesMetaArgs = {
  filter?: InputMaybe<EducationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingLandingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LandingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingLandingsMetaArgs = {
  filter?: InputMaybe<LandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingNetworksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingNetworksMetaArgs = {
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingPartnersMetaArgs = {
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndArtist>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artista (artist) */
export type ArtistRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum ArtisticResidecyModelFieldsReferencingArtistModel {
  ArtisticResidecyArtists = 'artisticResidecy_artists',
  ArtisticResidecySections = 'artisticResidecy_sections',
  ArtisticResidecySectionsAnchorBlockBody = 'artisticResidecy_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidecyModelFieldsReferencingEventModel {
  ArtisticResidecySections = 'artisticResidecy_sections',
  ArtisticResidecySectionsAnchorBlockBody = 'artisticResidecy_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidecyModelFieldsReferencingNetworkModel {
  ArtisticResidecySections = 'artisticResidecy_sections',
  ArtisticResidecySectionsAnchorBlockBody = 'artisticResidecy_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidecyModelFieldsReferencingNewsModel {
  ArtisticResidecySections = 'artisticResidecy_sections',
  ArtisticResidecySectionsAnchorBlockBody = 'artisticResidecy_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidecyModelFieldsReferencingProjectModel {
  ArtisticResidecyProjects = 'artisticResidecy_projects',
  ArtisticResidecySections = 'artisticResidecy_sections',
  ArtisticResidecySectionsAnchorBlockBody = 'artisticResidecy_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidecyModelFieldsReferencingWorkshopModel {
  ArtisticResidecySections = 'artisticResidecy_sections',
  ArtisticResidecySectionsAnchorBlockBody = 'artisticResidecy_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidecyModelFieldsReferencingYearModel {
  ArtisticResidecyYears = 'artisticResidecy_years'
}

export type ArtisticResidecyModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artists?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  projects?: InputMaybe<LinksFilter>;
  sections?: InputMaybe<ArtisticResidecyModelSectionsFieldFilter>;
  seo?: InputMaybe<SeoFilter>;
  showInWebsite?: InputMaybe<BooleanFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum ArtisticResidecyModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  ShowInWebsiteAsc = 'showInWebsite_ASC',
  ShowInWebsiteDesc = 'showInWebsite_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Specify nested blocks fields conditions */
export type ArtisticResidecyModelSectionsFieldBlocksConditions = {
  anchorBlock?: InputMaybe<AnchorBlockModelFilter>;
};

/** Specify nested blocks types presence */
export type ArtisticResidecyModelSectionsFieldBlocksPresence = {
  anchorBlock?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specify how to filter this specific Modular Content field instance */
export type ArtisticResidecyModelSectionsFieldFilter = {
  /** Filter records containing at least one block matching the specified conditions */
  any?: InputMaybe<ArtisticResidecyModelSectionsFieldBlocksConditions>;
  /** Filter records containing at least one block of specified type or not */
  containsAny?: InputMaybe<ArtisticResidecyModelSectionsFieldBlocksPresence>;
  /** Filter records containing at least one block of any kind or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord = RecordInterface & {
  __typename?: 'ArtisticResidecyRecord';
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artists: Array<ArtistRecord>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<ImageFileField>;
  position?: Maybe<Scalars['IntType']['output']>;
  projects: Array<ProjectRecord>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  showInWebsite?: Maybe<Scalars['BooleanType']['output']>;
  slideshowHero: Array<ImageFileField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  years: Array<YearRecord>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndArtisticResidecy>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Residenza Artistica (artistic_residecy) */
export type ArtisticResidecyRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ArtisticResidenciesIndexModelContentBlocksField = GalleryRecord | ImageBlockRecord | PartnerBlockRecord | PromozioniBlockRecord | VideoBlockRecord | WorkshopCategoriesBlockRecord;

export type ArtisticResidenciesIndexModelContentField = {
  __typename?: 'ArtisticResidenciesIndexModelContentField';
  blocks: Array<ArtisticResidenciesIndexModelContentBlocksField>;
  links: Array<ArtisticResidenciesIndexModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type ArtisticResidenciesIndexModelContentFieldMultiLocaleField = {
  __typename?: 'ArtisticResidenciesIndexModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ArtisticResidenciesIndexModelContentField>;
};

export type ArtisticResidenciesIndexModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum ArtisticResidenciesIndexModelFieldsReferencingArtistModel {
  ArtisticResidenciesIndexContent = 'artisticResidenciesIndex_content',
  ArtisticResidenciesIndexSections = 'artisticResidenciesIndex_sections',
  ArtisticResidenciesIndexSectionsAnchorBlockBody = 'artisticResidenciesIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidenciesIndexModelFieldsReferencingEventModel {
  ArtisticResidenciesIndexContent = 'artisticResidenciesIndex_content',
  ArtisticResidenciesIndexSections = 'artisticResidenciesIndex_sections',
  ArtisticResidenciesIndexSectionsAnchorBlockBody = 'artisticResidenciesIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidenciesIndexModelFieldsReferencingNetworkModel {
  ArtisticResidenciesIndexContent = 'artisticResidenciesIndex_content',
  ArtisticResidenciesIndexSections = 'artisticResidenciesIndex_sections',
  ArtisticResidenciesIndexSectionsAnchorBlockBody = 'artisticResidenciesIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidenciesIndexModelFieldsReferencingNewsModel {
  ArtisticResidenciesIndexContent = 'artisticResidenciesIndex_content',
  ArtisticResidenciesIndexSections = 'artisticResidenciesIndex_sections',
  ArtisticResidenciesIndexSectionsAnchorBlockBody = 'artisticResidenciesIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidenciesIndexModelFieldsReferencingProjectModel {
  ArtisticResidenciesIndexContent = 'artisticResidenciesIndex_content',
  ArtisticResidenciesIndexSections = 'artisticResidenciesIndex_sections',
  ArtisticResidenciesIndexSectionsAnchorBlockBody = 'artisticResidenciesIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtisticResidenciesIndexModelFieldsReferencingWorkshopModel {
  ArtisticResidenciesIndexContent = 'artisticResidenciesIndex_content',
  ArtisticResidenciesIndexSections = 'artisticResidenciesIndex_sections',
  ArtisticResidenciesIndexSectionsAnchorBlockBody = 'artisticResidenciesIndex_sections__anchorBlock_body'
}

export type ArtisticResidenciesIndexModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArtisticResidenciesIndexModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArtisticResidenciesIndexModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ArtisticResidenciesIndexModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecord = RecordInterface & {
  __typename?: 'ArtisticResidenciesIndexRecord';
  _allContentLocales?: Maybe<Array<ArtisticResidenciesIndexModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<ArtisticResidenciesIndexModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<FileField>;
  layoutHero: Scalars['String']['output'];
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  slideshowHero: Array<FileField>;
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Residenze Artistiche (artistic_residencies_index) */
export type ArtisticResidenciesIndexRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Archivio Artisti e Compagnie (artists_companies_archive) */
export type ArtistsCompaniesArchiveRecord = RecordInterface & {
  __typename?: 'ArtistsCompaniesArchiveRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Archivio Artisti e Compagnie (artists_companies_archive) */
export type ArtistsCompaniesArchiveRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Artisti e Compagnie (artists_companies_archive) */
export type ArtistsCompaniesArchiveRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Artisti e Compagnie (artists_companies_archive) */
export type ArtistsCompaniesArchiveRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ArtistsIndexModelContentBlocksField = GalleryRecord | ImageBlockRecord | PartnerBlockRecord | PromozioniBlockRecord | VideoBlockRecord | WorkshopCategoriesBlockRecord;

export type ArtistsIndexModelContentField = {
  __typename?: 'ArtistsIndexModelContentField';
  blocks: Array<ArtistsIndexModelContentBlocksField>;
  links: Array<ArtistsIndexModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type ArtistsIndexModelContentFieldMultiLocaleField = {
  __typename?: 'ArtistsIndexModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ArtistsIndexModelContentField>;
};

export type ArtistsIndexModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum ArtistsIndexModelFieldsReferencingArtistModel {
  ArtistsIndexContent = 'artistsIndex_content',
  ArtistsIndexSections = 'artistsIndex_sections',
  ArtistsIndexSectionsAnchorBlockBody = 'artistsIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistsIndexModelFieldsReferencingEventModel {
  ArtistsIndexContent = 'artistsIndex_content',
  ArtistsIndexSections = 'artistsIndex_sections',
  ArtistsIndexSectionsAnchorBlockBody = 'artistsIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistsIndexModelFieldsReferencingNetworkModel {
  ArtistsIndexContent = 'artistsIndex_content',
  ArtistsIndexSections = 'artistsIndex_sections',
  ArtistsIndexSectionsAnchorBlockBody = 'artistsIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistsIndexModelFieldsReferencingNewsModel {
  ArtistsIndexContent = 'artistsIndex_content',
  ArtistsIndexSections = 'artistsIndex_sections',
  ArtistsIndexSectionsAnchorBlockBody = 'artistsIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistsIndexModelFieldsReferencingProjectModel {
  ArtistsIndexContent = 'artistsIndex_content',
  ArtistsIndexSections = 'artistsIndex_sections',
  ArtistsIndexSectionsAnchorBlockBody = 'artistsIndex_sections__anchorBlock_body'
}

/** Linking fields */
export enum ArtistsIndexModelFieldsReferencingWorkshopModel {
  ArtistsIndexContent = 'artistsIndex_content',
  ArtistsIndexSections = 'artistsIndex_sections',
  ArtistsIndexSectionsAnchorBlockBody = 'artistsIndex_sections__anchorBlock_body'
}

export type ArtistsIndexModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArtistsIndexModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArtistsIndexModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ArtistsIndexModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecord = RecordInterface & {
  __typename?: 'ArtistsIndexRecord';
  _allContentLocales?: Maybe<Array<ArtistsIndexModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<ArtistsIndexModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<FileField>;
  layoutHero: Scalars['String']['output'];
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  slideshowHero: Array<FileField>;
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Artisti (artists_index) */
export type ArtistsIndexRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Indice Audio (audios_index) */
export type AudiosIndexRecord = RecordInterface & {
  __typename?: 'AudiosIndexRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Indice Audio (audios_index) */
export type AudiosIndexRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Audio (audios_index) */
export type AudiosIndexRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Audio (audios_index) */
export type AudiosIndexRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Linking fields */
export enum CompanyModelFieldsReferencingArtistModel {
  CompanyArtists = 'company_artists',
  CompanySections = 'company_sections',
  CompanySectionsAnchorBlockBody = 'company_sections__anchorBlock_body'
}

/** Linking fields */
export enum CompanyModelFieldsReferencingEventModel {
  CompanySections = 'company_sections',
  CompanySectionsAnchorBlockBody = 'company_sections__anchorBlock_body'
}

/** Linking fields */
export enum CompanyModelFieldsReferencingNetworkModel {
  CompanySections = 'company_sections',
  CompanySectionsAnchorBlockBody = 'company_sections__anchorBlock_body'
}

/** Linking fields */
export enum CompanyModelFieldsReferencingNewsModel {
  CompanySections = 'company_sections',
  CompanySectionsAnchorBlockBody = 'company_sections__anchorBlock_body'
}

/** Linking fields */
export enum CompanyModelFieldsReferencingProjectModel {
  CompanySections = 'company_sections',
  CompanySectionsAnchorBlockBody = 'company_sections__anchorBlock_body'
}

/** Linking fields */
export enum CompanyModelFieldsReferencingWorkshopModel {
  CompanySections = 'company_sections',
  CompanySectionsAnchorBlockBody = 'company_sections__anchorBlock_body'
}

export type CompanyModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CompanyModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CompanyModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artists?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  nation?: InputMaybe<LinksFilter>;
  position?: InputMaybe<PositionFilter>;
  sections?: InputMaybe<CompanyModelSectionsFieldFilter>;
  seo?: InputMaybe<SeoFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CompanyModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Specify nested blocks fields conditions */
export type CompanyModelSectionsFieldBlocksConditions = {
  anchorBlock?: InputMaybe<AnchorBlockModelFilter>;
};

/** Specify nested blocks types presence */
export type CompanyModelSectionsFieldBlocksPresence = {
  anchorBlock?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specify how to filter this specific Modular Content field instance */
export type CompanyModelSectionsFieldFilter = {
  /** Filter records containing at least one block matching the specified conditions */
  any?: InputMaybe<CompanyModelSectionsFieldBlocksConditions>;
  /** Filter records containing at least one block of specified type or not */
  containsAny?: InputMaybe<CompanyModelSectionsFieldBlocksPresence>;
  /** Filter records containing at least one block of any kind or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Record of type Compagnia (company) */
export type CompanyRecord = RecordInterface & {
  __typename?: 'CompanyRecord';
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artists: Array<ArtistRecord>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<ImageFileField>;
  nation: Array<CountryRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  slideshowHero: Array<ImageFileField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndCompany>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Compagnia (company) */
export type CompanyRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type CountryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CountryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CountryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Paese (country) */
export type CountryRecord = RecordInterface & {
  __typename?: 'CountryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Paese (country) */
export type CountryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type EducationPageModelContentBlocksField = GalleryRecord | ImageBlockRecord | PartnerBlockRecord | PromozioniBlockRecord | VideoBlockRecord | WorkshopCategoriesBlockRecord;

export type EducationPageModelContentField = {
  __typename?: 'EducationPageModelContentField';
  blocks: Array<EducationPageModelContentBlocksField>;
  links: Array<EducationPageModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type EducationPageModelContentFieldMultiLocaleField = {
  __typename?: 'EducationPageModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<EducationPageModelContentField>;
};

export type EducationPageModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum EducationPageModelFieldsReferencingArtistModel {
  EducationPageContent = 'educationPage_content',
  EducationPageSections = 'educationPage_sections',
  EducationPageSectionsAnchorBlockBody = 'educationPage_sections__anchorBlock_body'
}

/** Linking fields */
export enum EducationPageModelFieldsReferencingEventModel {
  EducationPageContent = 'educationPage_content',
  EducationPageSections = 'educationPage_sections',
  EducationPageSectionsAnchorBlockBody = 'educationPage_sections__anchorBlock_body'
}

/** Linking fields */
export enum EducationPageModelFieldsReferencingNetworkModel {
  EducationPageContent = 'educationPage_content',
  EducationPageSections = 'educationPage_sections',
  EducationPageSectionsAnchorBlockBody = 'educationPage_sections__anchorBlock_body'
}

/** Linking fields */
export enum EducationPageModelFieldsReferencingNewsModel {
  EducationPageContent = 'educationPage_content',
  EducationPageSections = 'educationPage_sections',
  EducationPageSectionsAnchorBlockBody = 'educationPage_sections__anchorBlock_body'
}

/** Linking fields */
export enum EducationPageModelFieldsReferencingProjectModel {
  EducationPageContent = 'educationPage_content',
  EducationPageSections = 'educationPage_sections',
  EducationPageSectionsAnchorBlockBody = 'educationPage_sections__anchorBlock_body'
}

/** Linking fields */
export enum EducationPageModelFieldsReferencingWorkshopModel {
  EducationPageContent = 'educationPage_content',
  EducationPageSections = 'educationPage_sections',
  EducationPageSectionsAnchorBlockBody = 'educationPage_sections__anchorBlock_body'
}

export type EducationPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<EducationPageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EducationPageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum EducationPageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Formazione (education_page) */
export type EducationPageRecord = RecordInterface & {
  __typename?: 'EducationPageRecord';
  _allContentLocales?: Maybe<Array<EducationPageModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<EducationPageModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<FileField>;
  layoutHero: Scalars['String']['output'];
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  slideshowHero: Array<FileField>;
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Formazione (education_page) */
export type EducationPageRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Formazione (education_page) */
export type EducationPageRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Data Evento (event_date) */
export type EventDateRecord = RecordInterface & {
  __typename?: 'EventDateRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  endTime?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ItemId']['output'];
  isDaily?: Maybe<Scalars['BooleanType']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Data Evento (event_date) */
export type EventDateRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type EventModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type EventModelContentField = {
  __typename?: 'EventModelContentField';
  blocks: Array<EventModelContentBlocksField>;
  links: Array<EventModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type EventModelContentFieldMultiLocaleField = {
  __typename?: 'EventModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<EventModelContentField>;
};

export type EventModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum EventModelFieldsReferencingArtistModel {
  EventArtists = 'event_artists',
  EventContent = 'event_content',
  EventRelatedContents = 'event_relatedContents',
  EventSections = 'event_sections',
  EventSectionsAnchorBlockBody = 'event_sections__anchorBlock_body'
}

/** Linking fields */
export enum EventModelFieldsReferencingArtisticResidecyModel {
  EventArtisticResidecies = 'event_artisticResidecies'
}

/** Linking fields */
export enum EventModelFieldsReferencingCompanyModel {
  EventCompanies = 'event_companies'
}

/** Linking fields */
export enum EventModelFieldsReferencingEventModel {
  EventContent = 'event_content',
  EventRelatedContents = 'event_relatedContents',
  EventSections = 'event_sections',
  EventSectionsAnchorBlockBody = 'event_sections__anchorBlock_body'
}

/** Linking fields */
export enum EventModelFieldsReferencingFestivalEditionModel {
  EventFestivalEditions = 'event_festivalEditions'
}

/** Linking fields */
export enum EventModelFieldsReferencingNetworkModel {
  EventContent = 'event_content',
  EventSections = 'event_sections',
  EventSectionsAnchorBlockBody = 'event_sections__anchorBlock_body'
}

/** Linking fields */
export enum EventModelFieldsReferencingNewsModel {
  EventContent = 'event_content',
  EventRelatedContents = 'event_relatedContents',
  EventSections = 'event_sections',
  EventSectionsAnchorBlockBody = 'event_sections__anchorBlock_body'
}

/** Linking fields */
export enum EventModelFieldsReferencingProjectModel {
  EventContent = 'event_content',
  EventProjects = 'event_projects',
  EventRelatedContents = 'event_relatedContents',
  EventSections = 'event_sections',
  EventSectionsAnchorBlockBody = 'event_sections__anchorBlock_body'
}

/** Linking fields */
export enum EventModelFieldsReferencingWorkshopModel {
  EventContent = 'event_content',
  EventRelatedContents = 'event_relatedContents',
  EventSections = 'event_sections',
  EventSectionsAnchorBlockBody = 'event_sections__anchorBlock_body',
  EventWorkhops = 'event_workhops'
}

/** Linking fields */
export enum EventModelFieldsReferencingYearModel {
  EventYears = 'event_years'
}

export type EventModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidecies?: InputMaybe<LinksFilter>;
  artists?: InputMaybe<LinksFilter>;
  authors?: InputMaybe<StringFilter>;
  companies?: InputMaybe<LinksFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  festivalEditions?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  isCoProduction?: InputMaybe<BooleanFilter>;
  isFestival?: InputMaybe<BooleanFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  projects?: InputMaybe<LinksFilter>;
  relatedContents?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  showInWebsite?: InputMaybe<BooleanFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  tags?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  workhops?: InputMaybe<LinksFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum EventModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AuthorsAsc = 'authors_ASC',
  AuthorsDesc = 'authors_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsCoProductionAsc = 'isCoProduction_ASC',
  IsCoProductionDesc = 'isCoProduction_DESC',
  IsFestivalAsc = 'isFestival_ASC',
  IsFestivalDesc = 'isFestival_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  ShowInWebsiteAsc = 'showInWebsite_ASC',
  ShowInWebsiteDesc = 'showInWebsite_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventModelRelatedContentsField = ArtistRecord | EventRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

export type EventModelRelatedContentsFieldListListNonNullMultiLocaleField = {
  __typename?: 'EventModelRelatedContentsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<EventModelRelatedContentsField>;
};

/** Record of type Evento (event) */
export type EventRecord = RecordInterface & {
  __typename?: 'EventRecord';
  _allAuthorsLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allContentLocales?: Maybe<Array<EventModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLocationLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPaymentSettingsLocales?: Maybe<Array<PriceRecordListListNonNullMultiLocaleField>>;
  _allReferencingArtisticResidecies: Array<ArtisticResidecyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResideciesMeta: CollectionMetadata;
  _allReferencingArtisticResidenciesIndices: Array<ArtisticResidenciesIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResidenciesIndicesMeta: CollectionMetadata;
  _allReferencingArtists: Array<ArtistRecord>;
  _allReferencingArtistsIndices: Array<ArtistsIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsIndicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsMeta: CollectionMetadata;
  _allReferencingCompanies: Array<CompanyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCompaniesMeta: CollectionMetadata;
  _allReferencingEducationPages: Array<EducationPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEducationPagesMeta: CollectionMetadata;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingHomes: Array<HomeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata;
  _allReferencingLandings: Array<LandingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingLandingsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNetworks: Array<NetworkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNetworksMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allReferencingPartners: Array<PartnerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPartnersMeta: CollectionMetadata;
  _allReferencingProjects: Array<ProjectRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProjectsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allRelatedContentsLocales?: Maybe<Array<EventModelRelatedContentsFieldListListNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidecies: Array<ArtisticResidecyRecord>;
  artists: Array<ArtistRecord>;
  authors?: Maybe<Scalars['String']['output']>;
  companies: Array<CompanyRecord>;
  content?: Maybe<EventModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  dates: Array<EventDateRecord>;
  descriptionHero?: Maybe<Scalars['String']['output']>;
  festivalEditions: Array<FestivalEditionRecord>;
  id: Scalars['ItemId']['output'];
  imageHero: FileField;
  isCoProduction?: Maybe<Scalars['BooleanType']['output']>;
  isFestival?: Maybe<Scalars['BooleanType']['output']>;
  layoutHero: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  paymentSettings: Array<PriceRecord>;
  projects: Array<ProjectRecord>;
  relatedContents: Array<EventModelRelatedContentsField>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  showInWebsite?: Maybe<Scalars['BooleanType']['output']>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  tags: Array<TagRecord>;
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workhops: Array<WorkshopRecord>;
  years: Array<YearRecord>;
};


/** Record of type Evento (event) */
export type EventRecord_AllAuthorsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllLocationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllPaymentSettingsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingArtisticResideciesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingArtisticResideciesMetaArgs = {
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingArtisticResidenciesIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidenciesIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingArtisticResidenciesIndicesMetaArgs = {
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingArtistsIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistsIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingArtistsIndicesMetaArgs = {
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingArtistsMetaArgs = {
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingCompaniesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingCompaniesMetaArgs = {
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingEducationPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EducationPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EducationPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingEducationPagesMetaArgs = {
  filter?: InputMaybe<EducationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingLandingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LandingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingLandingsMetaArgs = {
  filter?: InputMaybe<LandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingNetworksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingNetworksMetaArgs = {
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingPartnersMetaArgs = {
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndEvent>;
};


/** Record of type Evento (event) */
export type EventRecord_AllRelatedContentsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordAuthorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordLocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordPaymentSettingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordRelatedContentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Evento (event) */
export type EventRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Indice Eventi (events_index) */
export type EventsIndexRecord = RecordInterface & {
  __typename?: 'EventsIndexRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Indice Eventi (events_index) */
export type EventsIndexRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Eventi (events_index) */
export type EventsIndexRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Eventi (events_index) */
export type EventsIndexRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Contenuti extra (extra_content) */
export type ExtraContentRecord = RecordInterface & {
  __typename?: 'ExtraContentRecord';
  _allTextPrivacyLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTextThanksLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleThanksLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  textPrivacy?: Maybe<Scalars['String']['output']>;
  textThanks?: Maybe<Scalars['String']['output']>;
  titleThanks?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Contenuti extra (extra_content) */
export type ExtraContentRecord_AllTextPrivacyLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Contenuti extra (extra_content) */
export type ExtraContentRecord_AllTextThanksLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Contenuti extra (extra_content) */
export type ExtraContentRecord_AllTitleThanksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Contenuti extra (extra_content) */
export type ExtraContentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Contenuti extra (extra_content) */
export type ExtraContentRecordTextPrivacyArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Contenuti extra (extra_content) */
export type ExtraContentRecordTextThanksArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Contenuti extra (extra_content) */
export type ExtraContentRecordTitleThanksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

export type FestivalEditionModelContentField = {
  __typename?: 'FestivalEditionModelContentField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Specify how to filter this specific Structured Text field instance */
export type FestivalEditionModelContentFieldFilter = {
  /** Filter records based on this field value */
  value?: InputMaybe<StructuredTextFilter>;
};

export type FestivalEditionModelContentFieldMultiLocaleField = {
  __typename?: 'FestivalEditionModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<FestivalEditionModelContentField>;
};

/** Linking fields */
export enum FestivalEditionModelFieldsReferencingMediaDocumentModel {
  FestivalEditionPoster = 'festivalEdition_poster'
}

/** Linking fields */
export enum FestivalEditionModelFieldsReferencingYearModel {
  FestivalEditionYear = 'festivalEdition_year'
}

export type FestivalEditionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FestivalEditionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FestivalEditionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<FestivalEditionModelContentFieldFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  endDate?: InputMaybe<DateFilter>;
  festivalType?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  poster?: InputMaybe<LinkFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  theme?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  year?: InputMaybe<LinkFilter>;
};

export enum FestivalEditionModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  FestivalTypeAsc = 'festivalType_ASC',
  FestivalTypeDesc = 'festivalType_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  ThemeAsc = 'theme_ASC',
  ThemeDesc = 'theme_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord = RecordInterface & {
  __typename?: 'FestivalEditionRecord';
  _allContentLocales?: Maybe<Array<FestivalEditionModelContentFieldMultiLocaleField>>;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allThemeLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<FestivalEditionModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  endDate: Scalars['Date']['output'];
  festivalType: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<ImageFileField>;
  position?: Maybe<Scalars['IntType']['output']>;
  poster?: Maybe<MediaDocumentRecord>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  theme?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  year: YearRecord;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndFestivalEdition>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllThemeLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecordThemeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Edizione Festival (festival_edition) */
export type FestivalEditionRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Archivio Festival (festival_editions_archive) */
export type FestivalEditionsArchiveRecord = RecordInterface & {
  __typename?: 'FestivalEditionsArchiveRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Archivio Festival (festival_editions_archive) */
export type FestivalEditionsArchiveRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Festival (festival_editions_archive) */
export type FestivalEditionsArchiveRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Festival (festival_editions_archive) */
export type FestivalEditionsArchiveRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Festival period (festival_period) */
export type FestivalPeriodRecord = RecordInterface & {
  __typename?: 'FestivalPeriodRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  active?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  endDate: Scalars['Date']['output'];
  id: Scalars['ItemId']['output'];
  startDate: Scalars['Date']['output'];
  updatedAt: Scalars['DateTime']['output'];
  year: Scalars['IntType']['output'];
};


/** Block of type Festival period (festival_period) */
export type FestivalPeriodRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Date Festival  (festival_year) */
export type FestivalYearRecord = RecordInterface & {
  __typename?: 'FestivalYearRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  datesOfYear: Array<FestivalPeriodRecord>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Date Festival  (festival_year) */
export type FestivalYearRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldNonNullMultiLocaleField = {
  __typename?: 'FileFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: FileField;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Record of type Footer (footer) */
export type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord';
  _allNewsletterSubscriptionMessageLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<FooterSectionRecordListListNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  info?: Maybe<Scalars['String']['output']>;
  links: Array<PageRecord>;
  logo?: Maybe<FileField>;
  newsletterListUrl?: Maybe<Scalars['String']['output']>;
  newsletterSubscriptionMessage?: Maybe<Scalars['String']['output']>;
  sections: Array<FooterSectionRecord>;
  socials: Array<SocialLinkRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Footer (footer) */
export type FooterRecord_AllNewsletterSubscriptionMessageLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Footer (footer) */
export type FooterRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Footer (footer) */
export type FooterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Footer (footer) */
export type FooterRecordInfoArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Footer (footer) */
export type FooterRecordNewsletterSubscriptionMessageArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Footer (footer) */
export type FooterRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Footer Section (footer_section) */
export type FooterSectionRecord = RecordInterface & {
  __typename?: 'FooterSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  links: Array<PageRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Footer Section (footer_section) */
export type FooterSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FooterSectionRecordListListNonNullMultiLocaleField = {
  __typename?: 'FooterSectionRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<FooterSectionRecord>;
};

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Block of type Galleria (gallery) */
export type GalleryRecord = RecordInterface & {
  __typename?: 'GalleryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  images: Array<FileField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Galleria (gallery) */
export type GalleryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Linking fields */
export enum HomeModelFieldsReferencingArtistModel {
  HomeHomeSections = 'home_homeSections',
  HomeHomeSectionsHomeSectionSectionLink = 'home_homeSections__homeSection_sectionLink',
  HomeHomeSectionsHomeSectionSlides = 'home_homeSections__homeSection_slides'
}

/** Linking fields */
export enum HomeModelFieldsReferencingEventModel {
  HomeHomeSections = 'home_homeSections',
  HomeHomeSectionsHomeSectionSectionLink = 'home_homeSections__homeSection_sectionLink',
  HomeHomeSectionsHomeSectionSlides = 'home_homeSections__homeSection_slides'
}

/** Linking fields */
export enum HomeModelFieldsReferencingNetworkModel {
  HomeHomeSections = 'home_homeSections',
  HomeHomeSectionsHomeSectionSectionLink = 'home_homeSections__homeSection_sectionLink'
}

/** Linking fields */
export enum HomeModelFieldsReferencingNewsModel {
  HomeHomeSections = 'home_homeSections',
  HomeHomeSectionsHomeSectionSectionLink = 'home_homeSections__homeSection_sectionLink',
  HomeHomeSectionsHomeSectionSlides = 'home_homeSections__homeSection_slides'
}

/** Linking fields */
export enum HomeModelFieldsReferencingProjectModel {
  HomeHomeSections = 'home_homeSections',
  HomeHomeSectionsHomeSectionSectionLink = 'home_homeSections__homeSection_sectionLink',
  HomeHomeSectionsHomeSectionSlides = 'home_homeSections__homeSection_slides'
}

/** Linking fields */
export enum HomeModelFieldsReferencingWorkshopModel {
  HomeHomeSections = 'home_homeSections',
  HomeHomeSectionsHomeSectionSectionLink = 'home_homeSections__homeSection_sectionLink',
  HomeHomeSectionsHomeSectionSlides = 'home_homeSections__homeSection_slides'
}

export type HomeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum HomeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Homepage (home) */
export type HomeRecord = RecordInterface & {
  __typename?: 'HomeRecord';
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHomeSectionsLocales?: Maybe<Array<HomeSectionRecordListListNonNullMultiLocaleField>>;
  _allHomeSlideshowLocales?: Maybe<Array<SlideRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  homeSections: Array<HomeSectionRecord>;
  homeSlideshow: Array<SlideRecord>;
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<AltTitleFileField>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Homepage (home) */
export type HomeRecord_AllDescriptionHeroLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Homepage (home) */
export type HomeRecord_AllHomeSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecord_AllHomeSlideshowLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecordDescriptionHeroArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Homepage (home) */
export type HomeRecordHomeSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecordHomeSlideshowArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Homepage (home) */
export type HomeRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type HomeSectionModelSectionLinkField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

export type HomeSectionModelSlidesField = ArtistRecord | EventRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Block of type Home Section (home_section) */
export type HomeSectionRecord = RecordInterface & {
  __typename?: 'HomeSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  layout: Scalars['String']['output'];
  sectionLink: HomeSectionModelSectionLinkField;
  sectionLinkLabel: Scalars['String']['output'];
  slides: Array<HomeSectionModelSlidesField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Home Section (home_section) */
export type HomeSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type HomeSectionRecordListListNonNullMultiLocaleField = {
  __typename?: 'HomeSectionRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<HomeSectionRecord>;
};

export type ImageAltTitleFileField = FileFieldInterface & {
  __typename?: 'ImageAltTitleFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt: Scalars['String']['output'];
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint: FocalPoint;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType']['output'];
};


export type ImageAltTitleFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageAltTitleFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type ImageAltTitleFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageAltTitleFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageAltTitleFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type ImageAltTitleFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageAltTitleFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Block of type Blocco immagine (image_block) */
export type ImageBlockRecord = RecordInterface & {
  __typename?: 'ImageBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Blocco immagine (image_block) */
export type ImageBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint: FocalPoint;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType']['output'];
};


export type ImageFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type ImageFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type ImageFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidecyAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidecyAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidecyAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidecyAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidecyAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidecyAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidecyAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidecyModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtisticResidenciesIndexModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistsIndexAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistsIndexAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistsIndexAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistsIndexAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistsIndexAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtistsIndexAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtistsIndexModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCompanyAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CompanyModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CompanyModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCompanyAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CompanyModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CompanyModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCompanyAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CompanyModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CompanyModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCompanyAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CompanyModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CompanyModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCompanyAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CompanyModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CompanyModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCompanyAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CompanyModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CompanyModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEducationPageAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EducationPageModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EducationPageModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEducationPageAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EducationPageModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EducationPageModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEducationPageAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EducationPageModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EducationPageModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEducationPageAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EducationPageModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EducationPageModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEducationPageAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EducationPageModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EducationPageModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEducationPageAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EducationPageModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EducationPageModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndArtisticResidecy = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingArtisticResidecyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingArtisticResidecyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndCompany = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingCompanyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingCompanyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndFestivalEdition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingFestivalEditionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingFestivalEditionModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenEventAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<EventModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<EventModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenFestivalEditionAndMediaDocument = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<FestivalEditionModelFieldsReferencingMediaDocumentModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<FestivalEditionModelFieldsReferencingMediaDocumentModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenFestivalEditionAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<FestivalEditionModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<FestivalEditionModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenLandingAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<LandingModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<LandingModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenLandingAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<LandingModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<LandingModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenLandingAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<LandingModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<LandingModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenLandingAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<LandingModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<LandingModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenLandingAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<LandingModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<LandingModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenLandingAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<LandingModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<LandingModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndArtisticResidecy = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingArtisticResidecyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingArtisticResidecyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndCompany = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingCompanyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingCompanyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndFestivalEdition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingFestivalEditionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingFestivalEditionModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndMediaAuthor = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingMediaAuthorModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingMediaAuthorModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndPublication = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingPublicationModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingPublicationModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaAudioAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaAudioModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndArtisticResidecy = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingArtisticResidecyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingArtisticResidecyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndCompany = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingCompanyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingCompanyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndFestivalEdition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingFestivalEditionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingFestivalEditionModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndMediaAuthor = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingMediaAuthorModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingMediaAuthorModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndPublication = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingPublicationModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingPublicationModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaDocumentAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaDocumentModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndArtisticResidecy = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingArtisticResidecyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingArtisticResidecyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndCompany = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingCompanyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingCompanyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndFestivalEdition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingFestivalEditionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingFestivalEditionModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndMediaAuthor = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingMediaAuthorModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingMediaAuthorModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndMediaPhotoCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingMediaPhotoCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingMediaPhotoCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndPublication = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingPublicationModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingPublicationModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaPhotoAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaPhotoModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndArtisticResidecy = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingArtisticResidecyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingArtisticResidecyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndCompany = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingCompanyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingCompanyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndFestivalEdition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingFestivalEditionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingFestivalEditionModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndMediaAuthor = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingMediaAuthorModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingMediaAuthorModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndMediaVideo = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingMediaVideoModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingMediaVideoModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndPublication = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingPublicationModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingPublicationModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenMediaVideoAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<MediaVideoModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNetworkAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NetworkModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NetworkModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNetworkAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NetworkModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NetworkModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNetworkAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NetworkModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NetworkModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNetworkAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NetworkModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NetworkModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNetworkAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NetworkModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NetworkModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNetworkAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NetworkModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NetworkModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNetworkAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NetworkModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NetworkModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndArtisticResidecy = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingArtisticResidecyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingArtisticResidecyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndCompany = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingCompanyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingCompanyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndFestivalEdition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingFestivalEditionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingFestivalEditionModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNewsAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NewsModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NewsModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPartnerAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PartnerModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PartnerModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPartnerAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PartnerModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PartnerModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPartnerAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PartnerModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PartnerModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPartnerAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PartnerModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PartnerModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPartnerAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PartnerModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PartnerModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPartnerAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PartnerModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PartnerModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPartnerAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PartnerModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PartnerModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProjectAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProjectModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProjectModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProjectAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProjectModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProjectModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProjectAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProjectModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProjectModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProjectAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProjectModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProjectModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProjectAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProjectModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProjectModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProjectAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProjectModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProjectModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProjectAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProjectModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProjectModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndArtisticResidecy = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingArtisticResidecyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingArtisticResidecyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndCompany = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingCompanyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingCompanyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndFestivalEdition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingFestivalEditionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingFestivalEditionModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndMediaAuthor = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingMediaAuthorModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingMediaAuthorModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPublicationAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PublicationModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PublicationModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndArtist = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingArtistModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingArtistModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndArtisticResidecy = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingArtisticResidecyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingArtisticResidecyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndCompany = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingCompanyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingCompanyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndEvent = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingEventModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingEventModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndFestivalEdition = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingFestivalEditionModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingFestivalEditionModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndNetwork = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingNetworkModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingNetworkModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndNews = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingNewsModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingNewsModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndProject = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingProjectModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingProjectModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndWorkshop = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingWorkshopModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingWorkshopModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenWorkshopAndYear = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<WorkshopModelFieldsReferencingYearModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<WorkshopModelFieldsReferencingYearModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenYearAndMediaPhotoCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<YearModelFieldsReferencingMediaPhotoCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<YearModelFieldsReferencingMediaPhotoCategoryModel>>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidecyAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidecyAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidecyAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidecyAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidecyAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidecyAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidecyAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidecyAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidecyAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidecyAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidecyAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidecyAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidecyAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidecyAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidenciesIndexAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidenciesIndexAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidenciesIndexAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidenciesIndexAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidenciesIndexAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtisticResidenciesIndexAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtisticResidenciesIndexAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistsIndexAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistsIndexAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistsIndexAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistsIndexAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistsIndexAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistsIndexAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistsIndexAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistsIndexAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistsIndexAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistsIndexAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtistsIndexAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtistsIndexAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCompanyAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCompanyAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCompanyAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCompanyAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCompanyAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCompanyAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCompanyAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCompanyAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCompanyAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCompanyAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCompanyAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCompanyAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEducationPageAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEducationPageAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEducationPageAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEducationPageAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEducationPageAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEducationPageAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEducationPageAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEducationPageAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEducationPageAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEducationPageAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEducationPageAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEducationPageAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndArtisticResidecy = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndArtisticResidecy>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndCompany = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndCompany>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndFestivalEdition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndFestivalEdition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenEventAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenEventAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenFestivalEditionAndMediaDocument = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenFestivalEditionAndMediaDocument>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenFestivalEditionAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenFestivalEditionAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenLandingAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenLandingAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenLandingAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenLandingAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenLandingAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenLandingAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenLandingAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenLandingAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenLandingAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenLandingAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenLandingAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenLandingAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndArtisticResidecy = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndArtisticResidecy>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndCompany = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndCompany>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndFestivalEdition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndFestivalEdition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndMediaAuthor = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndMediaAuthor>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndPublication = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndPublication>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaAudioAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaAudioAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndArtisticResidecy = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndArtisticResidecy>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndCompany = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndCompany>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndFestivalEdition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndFestivalEdition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndMediaAuthor = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndMediaAuthor>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndPublication = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndPublication>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaDocumentAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaDocumentAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndArtisticResidecy = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndArtisticResidecy>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndCompany = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndCompany>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndFestivalEdition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndFestivalEdition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndMediaAuthor = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndMediaAuthor>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndMediaPhotoCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndMediaPhotoCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndPublication = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndPublication>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaPhotoAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaPhotoAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndArtisticResidecy = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndArtisticResidecy>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndCompany = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndCompany>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndFestivalEdition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndFestivalEdition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndMediaAuthor = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndMediaAuthor>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndMediaVideo = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndMediaVideo>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndPublication = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndPublication>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenMediaVideoAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenMediaVideoAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNetworkAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNetworkAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNetworkAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNetworkAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNetworkAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNetworkAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNetworkAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNetworkAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNetworkAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNetworkAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNetworkAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNetworkAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNetworkAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNetworkAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndArtisticResidecy = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndArtisticResidecy>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndCompany = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndCompany>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndFestivalEdition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndFestivalEdition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNewsAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNewsAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPartnerAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPartnerAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPartnerAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPartnerAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPartnerAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPartnerAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPartnerAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPartnerAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPartnerAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPartnerAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPartnerAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPartnerAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPartnerAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPartnerAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProjectAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProjectAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProjectAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProjectAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProjectAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProjectAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProjectAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProjectAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProjectAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProjectAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProjectAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProjectAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProjectAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProjectAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndArtisticResidecy = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndArtisticResidecy>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndCompany = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndCompany>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndFestivalEdition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndFestivalEdition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndMediaAuthor = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndMediaAuthor>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPublicationAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPublicationAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndArtist = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndArtist>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndArtisticResidecy = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndArtisticResidecy>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndCompany = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndCompany>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndEvent = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndEvent>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndFestivalEdition = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndFestivalEdition>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndNetwork = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndNetwork>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndNews = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndNews>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndProject = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndProject>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndWorkshop = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndWorkshop>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenWorkshopAndYear = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenWorkshopAndYear>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenYearAndMediaPhotoCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenYearAndMediaPhotoCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

export type LandingModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type LandingModelContentField = {
  __typename?: 'LandingModelContentField';
  blocks: Array<LandingModelContentBlocksField>;
  links: Array<LandingModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type LandingModelContentFieldMultiLocaleField = {
  __typename?: 'LandingModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<LandingModelContentField>;
};

export type LandingModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum LandingModelFieldsReferencingArtistModel {
  LandingContent = 'landing_content',
  LandingRelatedContents = 'landing_relatedContents',
  LandingSections = 'landing_sections',
  LandingSectionsAnchorBlockBody = 'landing_sections__anchorBlock_body'
}

/** Linking fields */
export enum LandingModelFieldsReferencingEventModel {
  LandingContent = 'landing_content',
  LandingRelatedContents = 'landing_relatedContents',
  LandingSections = 'landing_sections',
  LandingSectionsAnchorBlockBody = 'landing_sections__anchorBlock_body'
}

/** Linking fields */
export enum LandingModelFieldsReferencingNetworkModel {
  LandingContent = 'landing_content',
  LandingSections = 'landing_sections',
  LandingSectionsAnchorBlockBody = 'landing_sections__anchorBlock_body'
}

/** Linking fields */
export enum LandingModelFieldsReferencingNewsModel {
  LandingContent = 'landing_content',
  LandingRelatedContents = 'landing_relatedContents',
  LandingSections = 'landing_sections',
  LandingSectionsAnchorBlockBody = 'landing_sections__anchorBlock_body'
}

/** Linking fields */
export enum LandingModelFieldsReferencingProjectModel {
  LandingContent = 'landing_content',
  LandingRelatedContents = 'landing_relatedContents',
  LandingSections = 'landing_sections',
  LandingSectionsAnchorBlockBody = 'landing_sections__anchorBlock_body'
}

/** Linking fields */
export enum LandingModelFieldsReferencingWorkshopModel {
  LandingContent = 'landing_content',
  LandingRelatedContents = 'landing_relatedContents',
  LandingSections = 'landing_sections',
  LandingSectionsAnchorBlockBody = 'landing_sections__anchorBlock_body'
}

export type LandingModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LandingModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  relatedContents?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum LandingModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LandingModelOtherSectionsField = PartnerBlockRecord | TeamRecord;

export type LandingModelOtherSectionsFieldListListNonNullMultiLocaleField = {
  __typename?: 'LandingModelOtherSectionsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<LandingModelOtherSectionsField>;
};

export type LandingModelRelatedContentsField = ArtistRecord | EventRecord | MenuItemRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

export type LandingModelRelatedContentsFieldListListNonNullMultiLocaleField = {
  __typename?: 'LandingModelRelatedContentsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<LandingModelRelatedContentsField>;
};

/** Record of type Landing (landing) */
export type LandingRecord = RecordInterface & {
  __typename?: 'LandingRecord';
  _allContentLocales?: Maybe<Array<LandingModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allOtherSectionsLocales?: Maybe<Array<LandingModelOtherSectionsFieldListListNonNullMultiLocaleField>>;
  _allRelatedContentsLocales?: Maybe<Array<LandingModelRelatedContentsFieldListListNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<LandingModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<FileField>;
  layoutHero: Scalars['String']['output'];
  otherSections: Array<LandingModelOtherSectionsField>;
  position?: Maybe<Scalars['IntType']['output']>;
  relatedContents: Array<LandingModelRelatedContentsField>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Landing (landing) */
export type LandingRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_AllOtherSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_AllRelatedContentsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordOtherSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordRelatedContentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Landing (landing) */
export type LandingRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Linking locales */
export enum LinkingLocale {
  NonLocalized = '_nonLocalized',
  En = 'en',
  It = 'it'
}

/** Specifies how to filter by linking locales */
export type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>;
};

/** Record of type Archivio Media (media_archive) */
export type MediaArchiveRecord = RecordInterface & {
  __typename?: 'MediaArchiveRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Archivio Media (media_archive) */
export type MediaArchiveRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Media (media_archive) */
export type MediaArchiveRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Media (media_archive) */
export type MediaArchiveRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type MediaAudioCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaAudioCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaAudioCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum MediaAudioCategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Categoria Media Audio (media_audio_category) */
export type MediaAudioCategoryRecord = RecordInterface & {
  __typename?: 'MediaAudioCategoryRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Categoria Media Audio (media_audio_category) */
export type MediaAudioCategoryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Media Audio (media_audio_category) */
export type MediaAudioCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Media Audio (media_audio_category) */
export type MediaAudioCategoryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum MediaAudioModelFieldsReferencingArtistModel {
  MediaAudioArtists = 'mediaAudio_artists'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingArtisticResidecyModel {
  MediaAudioArtisticResidencies = 'mediaAudio_artisticResidencies'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingCompanyModel {
  MediaAudioComoanies = 'mediaAudio_comoanies'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingEventModel {
  MediaAudioEvents = 'mediaAudio_events'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingFestivalEditionModel {
  MediaAudioFestivalEditions = 'mediaAudio_festivalEditions'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingMediaAuthorModel {
  MediaAudioMediaAuthor = 'mediaAudio_mediaAuthor'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingNewsModel {
  MediaAudioNews = 'mediaAudio_news'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingProjectModel {
  MediaAudioProjects = 'mediaAudio_projects'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingPublicationModel {
  MediaAudioPublications = 'mediaAudio_publications'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingWorkshopModel {
  MediaAudioWorkhops = 'mediaAudio_workhops'
}

/** Linking fields */
export enum MediaAudioModelFieldsReferencingYearModel {
  MediaAudioYears = 'mediaAudio_years'
}

export type MediaAudioModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaAudioModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaAudioModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidencies?: InputMaybe<LinksFilter>;
  artists?: InputMaybe<LinksFilter>;
  audioFiles?: InputMaybe<GalleryFilter>;
  category?: InputMaybe<LinkFilter>;
  comoanies?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<LinksFilter>;
  festivalEditions?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  mediaAuthor?: InputMaybe<LinksFilter>;
  news?: InputMaybe<LinksFilter>;
  projects?: InputMaybe<LinksFilter>;
  publications?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  showInWebsite?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  sprekerEmbedCode?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  workhops?: InputMaybe<LinksFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum MediaAudioModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ShowInWebsiteAsc = 'showInWebsite_ASC',
  ShowInWebsiteDesc = 'showInWebsite_DESC',
  SprekerEmbedCodeAsc = 'sprekerEmbedCode_ASC',
  SprekerEmbedCodeDesc = 'sprekerEmbedCode_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Media Audio (media_audio) */
export type MediaAudioRecord = RecordInterface & {
  __typename?: 'MediaAudioRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidencies: Array<ArtisticResidecyRecord>;
  artists: Array<ArtistRecord>;
  audioFiles: Array<FileField>;
  category?: Maybe<MediaAudioCategoryRecord>;
  comoanies: Array<CompanyRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  events: Array<EventRecord>;
  festivalEditions: Array<FestivalEditionRecord>;
  id: Scalars['ItemId']['output'];
  mediaAuthor: Array<MediaAuthorRecord>;
  news: Array<NewsRecord>;
  projects: Array<ProjectRecord>;
  publications: Array<PublicationRecord>;
  seo?: Maybe<SeoField>;
  showInWebsite?: Maybe<Scalars['BooleanType']['output']>;
  slug: Scalars['String']['output'];
  sprekerEmbedCode?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workhops: Array<WorkshopRecord>;
  years: Array<YearRecord>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Audio (media_audio) */
export type MediaAudioRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type MediaAuthorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaAuthorModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaAuthorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum MediaAuthorModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord = RecordInterface & {
  __typename?: 'MediaAuthorRecord';
  _allContentLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allFullNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllFullNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndMediaAuthor>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Autore Media (media_author) */
export type MediaAuthorRecordFullNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type MediaDocumentCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaDocumentCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaDocumentCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum MediaDocumentCategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Categoria Media Documento  (media_document_category) */
export type MediaDocumentCategoryRecord = RecordInterface & {
  __typename?: 'MediaDocumentCategoryRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Categoria Media Documento  (media_document_category) */
export type MediaDocumentCategoryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Media Documento  (media_document_category) */
export type MediaDocumentCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Media Documento  (media_document_category) */
export type MediaDocumentCategoryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingArtistModel {
  MediaDocumentArtists = 'mediaDocument_artists'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingArtisticResidecyModel {
  MediaDocumentArtisticResidencies = 'mediaDocument_artisticResidencies'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingCompanyModel {
  MediaDocumentComoanies = 'mediaDocument_comoanies'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingEventModel {
  MediaDocumentEvents = 'mediaDocument_events'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingFestivalEditionModel {
  MediaDocumentFestivalEditions = 'mediaDocument_festivalEditions'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingMediaAuthorModel {
  MediaDocumentMediaAuthor = 'mediaDocument_mediaAuthor'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingNewsModel {
  MediaDocumentNews = 'mediaDocument_news'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingProjectModel {
  MediaDocumentProjects = 'mediaDocument_projects'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingPublicationModel {
  MediaDocumentPublications = 'mediaDocument_publications'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingWorkshopModel {
  MediaDocumentWorkhops = 'mediaDocument_workhops'
}

/** Linking fields */
export enum MediaDocumentModelFieldsReferencingYearModel {
  MediaDocumentYears = 'mediaDocument_years'
}

export type MediaDocumentModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaDocumentModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaDocumentModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidencies?: InputMaybe<LinksFilter>;
  artists?: InputMaybe<LinksFilter>;
  attachment?: InputMaybe<FileFilter>;
  category?: InputMaybe<LinkFilter>;
  comoanies?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<LinksFilter>;
  festivalEditions?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  mediaAuthor?: InputMaybe<LinksFilter>;
  news?: InputMaybe<LinksFilter>;
  projects?: InputMaybe<LinksFilter>;
  publications?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  workhops?: InputMaybe<LinksFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum MediaDocumentModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord = RecordInterface & {
  __typename?: 'MediaDocumentRecord';
  _allAttachmentLocales?: Maybe<Array<FileFieldNonNullMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingFestivalEditions: Array<FestivalEditionRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingFestivalEditionsMeta: CollectionMetadata;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidencies: Array<ArtisticResidecyRecord>;
  artists: Array<ArtistRecord>;
  attachment: FileField;
  category?: Maybe<MediaDocumentCategoryRecord>;
  comoanies: Array<CompanyRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  events: Array<EventRecord>;
  festivalEditions: Array<FestivalEditionRecord>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<ImageFileField>;
  mediaAuthor: Array<MediaAuthorRecord>;
  news: Array<NewsRecord>;
  projects: Array<ProjectRecord>;
  publications: Array<PublicationRecord>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workhops: Array<WorkshopRecord>;
  years: Array<YearRecord>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord_AllAttachmentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord_AllReferencingFestivalEditionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FestivalEditionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FestivalEditionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenFestivalEditionAndMediaDocument>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord_AllReferencingFestivalEditionsMetaArgs = {
  filter?: InputMaybe<FestivalEditionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenFestivalEditionAndMediaDocument>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecordAttachmentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Documento (media_document) */
export type MediaDocumentRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type MediaPhotoCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaPhotoCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaPhotoCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum MediaPhotoCategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Categoria Media Foto (media_photo_category) */
export type MediaPhotoCategoryRecord = RecordInterface & {
  __typename?: 'MediaPhotoCategoryRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingYears: Array<YearRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingYearsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Categoria Media Foto (media_photo_category) */
export type MediaPhotoCategoryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Media Foto (media_photo_category) */
export type MediaPhotoCategoryRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndMediaPhotoCategory>;
};


/** Record of type Categoria Media Foto (media_photo_category) */
export type MediaPhotoCategoryRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndMediaPhotoCategory>;
};


/** Record of type Categoria Media Foto (media_photo_category) */
export type MediaPhotoCategoryRecord_AllReferencingYearsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<YearModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<YearModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenYearAndMediaPhotoCategory>;
};


/** Record of type Categoria Media Foto (media_photo_category) */
export type MediaPhotoCategoryRecord_AllReferencingYearsMetaArgs = {
  filter?: InputMaybe<YearModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenYearAndMediaPhotoCategory>;
};


/** Record of type Categoria Media Foto (media_photo_category) */
export type MediaPhotoCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Media Foto (media_photo_category) */
export type MediaPhotoCategoryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingArtistModel {
  MediaPhotoArtists = 'mediaPhoto_artists'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingArtisticResidecyModel {
  MediaPhotoArtisticResidencies = 'mediaPhoto_artisticResidencies'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingCompanyModel {
  MediaPhotoComoanies = 'mediaPhoto_comoanies'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingEventModel {
  MediaPhotoEvents = 'mediaPhoto_events'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingFestivalEditionModel {
  MediaPhotoFestivalEditions = 'mediaPhoto_festivalEditions'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingMediaAuthorModel {
  MediaPhotoMediaAuthor = 'mediaPhoto_mediaAuthor'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingMediaPhotoCategoryModel {
  MediaPhotoCategory = 'mediaPhoto_category'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingNewsModel {
  MediaPhotoNews = 'mediaPhoto_news'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingProjectModel {
  MediaPhotoProjects = 'mediaPhoto_projects'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingPublicationModel {
  MediaPhotoPublications = 'mediaPhoto_publications'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingWorkshopModel {
  MediaPhotoWorkhops = 'mediaPhoto_workhops'
}

/** Linking fields */
export enum MediaPhotoModelFieldsReferencingYearModel {
  MediaPhotoYears = 'mediaPhoto_years'
}

export type MediaPhotoModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaPhotoModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaPhotoModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidencies?: InputMaybe<LinksFilter>;
  artists?: InputMaybe<LinksFilter>;
  category?: InputMaybe<LinkFilter>;
  comoanies?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<LinksFilter>;
  festivalEditions?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  mediaAuthor?: InputMaybe<LinksFilter>;
  news?: InputMaybe<LinksFilter>;
  projects?: InputMaybe<LinksFilter>;
  publications?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  workhops?: InputMaybe<LinksFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum MediaPhotoModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Media Foto (media_photo) */
export type MediaPhotoRecord = RecordInterface & {
  __typename?: 'MediaPhotoRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidencies: Array<ArtisticResidecyRecord>;
  artists: Array<ArtistRecord>;
  category?: Maybe<MediaPhotoCategoryRecord>;
  comoanies: Array<CompanyRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  events: Array<EventRecord>;
  festivalEditions: Array<FestivalEditionRecord>;
  id: Scalars['ItemId']['output'];
  image: ImageAltTitleFileField;
  mediaAuthor: Array<MediaAuthorRecord>;
  news: Array<NewsRecord>;
  projects: Array<ProjectRecord>;
  publications: Array<PublicationRecord>;
  seo?: Maybe<SeoField>;
  updatedAt: Scalars['DateTime']['output'];
  workhops: Array<WorkshopRecord>;
  years: Array<YearRecord>;
};


/** Record of type Media Foto (media_photo) */
export type MediaPhotoRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Foto (media_photo) */
export type MediaPhotoRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Foto (media_photo) */
export type MediaPhotoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Foto (media_photo) */
export type MediaPhotoRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Foto (media_photo) */
export type MediaPhotoRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type MediaVideoCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaVideoCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaVideoCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum MediaVideoCategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Categoria Media Video (media_video_category) */
export type MediaVideoCategoryRecord = RecordInterface & {
  __typename?: 'MediaVideoCategoryRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Categoria Media Video (media_video_category) */
export type MediaVideoCategoryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Media Video (media_video_category) */
export type MediaVideoCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Media Video (media_video_category) */
export type MediaVideoCategoryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum MediaVideoModelFieldsReferencingArtistModel {
  MediaVideoArtists = 'mediaVideo_artists'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingArtisticResidecyModel {
  MediaVideoArtisticResidencies = 'mediaVideo_artisticResidencies'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingCompanyModel {
  MediaVideoComoanies = 'mediaVideo_comoanies'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingEventModel {
  MediaVideoEvents = 'mediaVideo_events'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingFestivalEditionModel {
  MediaVideoFestivalEditions = 'mediaVideo_festivalEditions'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingMediaAuthorModel {
  MediaVideoMediaAuthor = 'mediaVideo_mediaAuthor'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingMediaVideoModel {
  MediaVideoRelatedVideos = 'mediaVideo_relatedVideos'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingNewsModel {
  MediaVideoNews = 'mediaVideo_news'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingProjectModel {
  MediaVideoProjects = 'mediaVideo_projects'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingPublicationModel {
  MediaVideoPublications = 'mediaVideo_publications'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingWorkshopModel {
  MediaVideoWorkhops = 'mediaVideo_workhops'
}

/** Linking fields */
export enum MediaVideoModelFieldsReferencingYearModel {
  MediaVideoYears = 'mediaVideo_years'
}

export type MediaVideoModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaVideoModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaVideoModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidencies?: InputMaybe<LinksFilter>;
  artists?: InputMaybe<LinksFilter>;
  category?: InputMaybe<LinkFilter>;
  comoanies?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<LinksFilter>;
  festivalEditions?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  isReserved?: InputMaybe<BooleanFilter>;
  mediaAuthor?: InputMaybe<LinksFilter>;
  news?: InputMaybe<LinkFilter>;
  projects?: InputMaybe<LinksFilter>;
  publications?: InputMaybe<LinksFilter>;
  relatedVideos?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  showInWebsite?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  video?: InputMaybe<VideoFilter>;
  workhops?: InputMaybe<LinksFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum MediaVideoModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsReservedAsc = 'isReserved_ASC',
  IsReservedDesc = 'isReserved_DESC',
  ShowInWebsiteAsc = 'showInWebsite_ASC',
  ShowInWebsiteDesc = 'showInWebsite_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Media Video (media_video) */
export type MediaVideoRecord = RecordInterface & {
  __typename?: 'MediaVideoRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allVideoLocales?: Maybe<Array<VideoFieldNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidencies: Array<ArtisticResidecyRecord>;
  artists: Array<ArtistRecord>;
  category?: Maybe<MediaVideoCategoryRecord>;
  comoanies: Array<CompanyRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  events: Array<EventRecord>;
  festivalEditions: Array<FestivalEditionRecord>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<ImageFileField>;
  isReserved?: Maybe<Scalars['BooleanType']['output']>;
  mediaAuthor: Array<MediaAuthorRecord>;
  news?: Maybe<NewsRecord>;
  projects: Array<ProjectRecord>;
  publications: Array<PublicationRecord>;
  relatedVideos: Array<MediaVideoRecord>;
  seo?: Maybe<SeoField>;
  showInWebsite?: Maybe<Scalars['BooleanType']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  video: VideoField;
  workhops: Array<WorkshopRecord>;
  years: Array<YearRecord>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndMediaVideo>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndMediaVideo>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecord_AllVideoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Media Video (media_video) */
export type MediaVideoRecordVideoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type MenuItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  link?: InputMaybe<LinkFilter>;
  parent?: InputMaybe<ParentFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export type MenuItemModelLinkField = HomeRecord | PageRecord;

export enum MenuItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Menu Item (menu_item) */
export type MenuItemRecord = RecordInterface & {
  __typename?: 'MenuItemRecord';
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  children?: Maybe<Array<Maybe<MenuItemRecord>>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  link?: Maybe<MenuItemModelLinkField>;
  parent?: Maybe<MenuItemRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Menu Item (menu_item) */
export type MenuItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Menu Item (menu_item) */
export type MenuItemRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Menu Item (menu_item) */
export type MenuItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Menu Item (menu_item) */
export type MenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Menu Item (menu_item) */
export type MenuItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Menu Item (menu_item) */
export type MenuItemRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Menu Item (menu_item) */
export type MenuItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

export type NetworkModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type NetworkModelContentField = {
  __typename?: 'NetworkModelContentField';
  blocks: Array<NetworkModelContentBlocksField>;
  links: Array<NetworkModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type NetworkModelContentFieldMultiLocaleField = {
  __typename?: 'NetworkModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<NetworkModelContentField>;
};

export type NetworkModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum NetworkModelFieldsReferencingArtistModel {
  NetworkContent = 'network_content',
  NetworkRelatedContents = 'network_relatedContents',
  NetworkSections = 'network_sections',
  NetworkSectionsAnchorBlockBody = 'network_sections__anchorBlock_body'
}

/** Linking fields */
export enum NetworkModelFieldsReferencingEventModel {
  NetworkContent = 'network_content',
  NetworkRelatedContents = 'network_relatedContents',
  NetworkSections = 'network_sections',
  NetworkSectionsAnchorBlockBody = 'network_sections__anchorBlock_body'
}

/** Linking fields */
export enum NetworkModelFieldsReferencingNetworkModel {
  NetworkContent = 'network_content',
  NetworkSections = 'network_sections',
  NetworkSectionsAnchorBlockBody = 'network_sections__anchorBlock_body'
}

/** Linking fields */
export enum NetworkModelFieldsReferencingNewsModel {
  NetworkContent = 'network_content',
  NetworkRelatedContents = 'network_relatedContents',
  NetworkSections = 'network_sections',
  NetworkSectionsAnchorBlockBody = 'network_sections__anchorBlock_body'
}

/** Linking fields */
export enum NetworkModelFieldsReferencingProjectModel {
  NetworkContent = 'network_content',
  NetworkRelatedContents = 'network_relatedContents',
  NetworkSections = 'network_sections',
  NetworkSectionsAnchorBlockBody = 'network_sections__anchorBlock_body'
}

/** Linking fields */
export enum NetworkModelFieldsReferencingWorkshopModel {
  NetworkContent = 'network_content',
  NetworkRelatedContents = 'network_relatedContents',
  NetworkSections = 'network_sections',
  NetworkSectionsAnchorBlockBody = 'network_sections__anchorBlock_body'
}

/** Linking fields */
export enum NetworkModelFieldsReferencingYearModel {
  NetworkYears = 'network_years'
}

export type NetworkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NetworkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NetworkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  authors?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  relatedContents?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  showInWebsite?: InputMaybe<BooleanFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  tags?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum NetworkModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AuthorsAsc = 'authors_ASC',
  AuthorsDesc = 'authors_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  ShowInWebsiteAsc = 'showInWebsite_ASC',
  ShowInWebsiteDesc = 'showInWebsite_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NetworkModelRelatedContentsField = ArtistRecord | EventRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

export type NetworkModelRelatedContentsFieldListListNonNullMultiLocaleField = {
  __typename?: 'NetworkModelRelatedContentsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<NetworkModelRelatedContentsField>;
};

/** Record of type Rete (network) */
export type NetworkRecord = RecordInterface & {
  __typename?: 'NetworkRecord';
  _allContentLocales?: Maybe<Array<NetworkModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLocationLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPaymentSettingsLocales?: Maybe<Array<PriceRecordListListNonNullMultiLocaleField>>;
  _allReferencingArtisticResidecies: Array<ArtisticResidecyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResideciesMeta: CollectionMetadata;
  _allReferencingArtisticResidenciesIndices: Array<ArtisticResidenciesIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResidenciesIndicesMeta: CollectionMetadata;
  _allReferencingArtists: Array<ArtistRecord>;
  _allReferencingArtistsIndices: Array<ArtistsIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsIndicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsMeta: CollectionMetadata;
  _allReferencingCompanies: Array<CompanyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCompaniesMeta: CollectionMetadata;
  _allReferencingEducationPages: Array<EducationPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEducationPagesMeta: CollectionMetadata;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingHomes: Array<HomeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata;
  _allReferencingLandings: Array<LandingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingLandingsMeta: CollectionMetadata;
  _allReferencingNetworks: Array<NetworkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNetworksMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allReferencingPartners: Array<PartnerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPartnersMeta: CollectionMetadata;
  _allReferencingProjects: Array<ProjectRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProjectsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allRelatedContentsLocales?: Maybe<Array<NetworkModelRelatedContentsFieldListListNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  authors?: Maybe<Scalars['String']['output']>;
  content?: Maybe<NetworkModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  dates: Array<EventDateRecord>;
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero: FileField;
  layoutHero: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  paymentSettings: Array<PriceRecord>;
  relatedContents: Array<NetworkModelRelatedContentsField>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  showInWebsite?: Maybe<Scalars['BooleanType']['output']>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  tags: Array<TagRecord>;
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  years: Array<YearRecord>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllLocationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllPaymentSettingsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingArtisticResideciesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingArtisticResideciesMetaArgs = {
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingArtisticResidenciesIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidenciesIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingArtisticResidenciesIndicesMetaArgs = {
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingArtistsIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistsIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingArtistsIndicesMetaArgs = {
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingArtistsMetaArgs = {
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingCompaniesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingCompaniesMetaArgs = {
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingEducationPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EducationPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EducationPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingEducationPagesMetaArgs = {
  filter?: InputMaybe<EducationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingLandingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LandingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingLandingsMetaArgs = {
  filter?: InputMaybe<LandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingNetworksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingNetworksMetaArgs = {
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingPartnersMetaArgs = {
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndNetwork>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllRelatedContentsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordLocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordPaymentSettingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordRelatedContentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rete (network) */
export type NetworkRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Indice Network (networks_index) */
export type NetworksIndexRecord = RecordInterface & {
  __typename?: 'NetworksIndexRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Indice Network (networks_index) */
export type NetworksIndexRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Network (networks_index) */
export type NetworksIndexRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Network (networks_index) */
export type NetworksIndexRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Indice News (news_index) */
export type NewsIndexRecord = RecordInterface & {
  __typename?: 'NewsIndexRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Indice News (news_index) */
export type NewsIndexRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice News (news_index) */
export type NewsIndexRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice News (news_index) */
export type NewsIndexRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type NewsModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type NewsModelContentField = {
  __typename?: 'NewsModelContentField';
  blocks: Array<NewsModelContentBlocksField>;
  links: Array<NewsModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type NewsModelContentFieldMultiLocaleField = {
  __typename?: 'NewsModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<NewsModelContentField>;
};

export type NewsModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum NewsModelFieldsReferencingArtistModel {
  NewsArtists = 'news_artists',
  NewsContent = 'news_content'
}

/** Linking fields */
export enum NewsModelFieldsReferencingArtisticResidecyModel {
  NewsArtisticResidencies = 'news_artisticResidencies'
}

/** Linking fields */
export enum NewsModelFieldsReferencingCompanyModel {
  NewsComoanies = 'news_comoanies'
}

/** Linking fields */
export enum NewsModelFieldsReferencingEventModel {
  NewsContent = 'news_content',
  NewsEvents = 'news_events'
}

/** Linking fields */
export enum NewsModelFieldsReferencingFestivalEditionModel {
  NewsFestivalEditions = 'news_festivalEditions'
}

/** Linking fields */
export enum NewsModelFieldsReferencingNetworkModel {
  NewsContent = 'news_content'
}

/** Linking fields */
export enum NewsModelFieldsReferencingNewsModel {
  NewsContent = 'news_content'
}

/** Linking fields */
export enum NewsModelFieldsReferencingProjectModel {
  NewsContent = 'news_content'
}

/** Linking fields */
export enum NewsModelFieldsReferencingWorkshopModel {
  NewsContent = 'news_content',
  NewsWorkhops = 'news_workhops'
}

/** Linking fields */
export enum NewsModelFieldsReferencingYearModel {
  NewsYears = 'news_years'
}

export type NewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidencies?: InputMaybe<LinksFilter>;
  artists?: InputMaybe<LinksFilter>;
  comoanies?: InputMaybe<LinksFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  events?: InputMaybe<LinksFilter>;
  festivalEditions?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  showInArchive?: InputMaybe<BooleanFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  tags?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  workhops?: InputMaybe<LinksFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum NewsModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  ShowInArchiveAsc = 'showInArchive_ASC',
  ShowInArchiveDesc = 'showInArchive_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Archivio News e Pubblicazioni (news_publications_archive) */
export type NewsPublicationsArchiveRecord = RecordInterface & {
  __typename?: 'NewsPublicationsArchiveRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Archivio News e Pubblicazioni (news_publications_archive) */
export type NewsPublicationsArchiveRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio News e Pubblicazioni (news_publications_archive) */
export type NewsPublicationsArchiveRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio News e Pubblicazioni (news_publications_archive) */
export type NewsPublicationsArchiveRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type News (news) */
export type NewsRecord = RecordInterface & {
  __typename?: 'NewsRecord';
  _allContentLocales?: Maybe<Array<NewsModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingArtisticResidecies: Array<ArtisticResidecyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResideciesMeta: CollectionMetadata;
  _allReferencingArtisticResidenciesIndices: Array<ArtisticResidenciesIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResidenciesIndicesMeta: CollectionMetadata;
  _allReferencingArtists: Array<ArtistRecord>;
  _allReferencingArtistsIndices: Array<ArtistsIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsIndicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsMeta: CollectionMetadata;
  _allReferencingCompanies: Array<CompanyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCompaniesMeta: CollectionMetadata;
  _allReferencingEducationPages: Array<EducationPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEducationPagesMeta: CollectionMetadata;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingHomes: Array<HomeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata;
  _allReferencingLandings: Array<LandingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingLandingsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNetworks: Array<NetworkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNetworksMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allReferencingPartners: Array<PartnerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPartnersMeta: CollectionMetadata;
  _allReferencingProjects: Array<ProjectRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProjectsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidencies: Array<ArtisticResidecyRecord>;
  artists: Array<ArtistRecord>;
  comoanies: Array<CompanyRecord>;
  content?: Maybe<NewsModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  events: Array<EventRecord>;
  festivalEditions: Array<FestivalEditionRecord>;
  id: Scalars['ItemId']['output'];
  imageHero: FileField;
  layoutHero: Scalars['String']['output'];
  seo?: Maybe<SeoField>;
  showInArchive?: Maybe<Scalars['BooleanType']['output']>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  tags: Array<TagRecord>;
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workhops: Array<WorkshopRecord>;
  years: Array<YearRecord>;
};


/** Record of type News (news) */
export type NewsRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingArtisticResideciesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingArtisticResideciesMetaArgs = {
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingArtisticResidenciesIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidenciesIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingArtisticResidenciesIndicesMetaArgs = {
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingArtistsIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistsIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingArtistsIndicesMetaArgs = {
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingArtistsMetaArgs = {
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingCompaniesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingCompaniesMetaArgs = {
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingEducationPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EducationPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EducationPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingEducationPagesMetaArgs = {
  filter?: InputMaybe<EducationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingLandingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LandingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingLandingsMetaArgs = {
  filter?: InputMaybe<LandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingNetworksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingNetworksMetaArgs = {
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingPartnersMetaArgs = {
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndNews>;
};


/** Record of type News (news) */
export type NewsRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type News (news) */
export type NewsRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

export type PageModelContentBlocksField = GalleryRecord | ImageBlockRecord | PartnerBlockRecord | PromozioniBlockRecord | VideoBlockRecord | WorkshopCategoriesBlockRecord;

export type PageModelContentField = {
  __typename?: 'PageModelContentField';
  blocks: Array<PageModelContentBlocksField>;
  links: Array<PageModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type PageModelContentFieldMultiLocaleField = {
  __typename?: 'PageModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<PageModelContentField>;
};

export type PageModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum PageModelFieldsReferencingArtistModel {
  PageContent = 'page_content',
  PageRelatedContents = 'page_relatedContents',
  PageSections = 'page_sections',
  PageSectionsAnchorBlockBody = 'page_sections__anchorBlock_body'
}

/** Linking fields */
export enum PageModelFieldsReferencingEventModel {
  PageContent = 'page_content',
  PageRelatedContents = 'page_relatedContents',
  PageSections = 'page_sections',
  PageSectionsAnchorBlockBody = 'page_sections__anchorBlock_body'
}

/** Linking fields */
export enum PageModelFieldsReferencingNetworkModel {
  PageContent = 'page_content',
  PageSections = 'page_sections',
  PageSectionsAnchorBlockBody = 'page_sections__anchorBlock_body'
}

/** Linking fields */
export enum PageModelFieldsReferencingNewsModel {
  PageContent = 'page_content',
  PageRelatedContents = 'page_relatedContents',
  PageSections = 'page_sections',
  PageSectionsAnchorBlockBody = 'page_sections__anchorBlock_body'
}

/** Linking fields */
export enum PageModelFieldsReferencingProjectModel {
  PageContent = 'page_content',
  PageRelatedContents = 'page_relatedContents',
  PageSections = 'page_sections',
  PageSectionsAnchorBlockBody = 'page_sections__anchorBlock_body'
}

/** Linking fields */
export enum PageModelFieldsReferencingWorkshopModel {
  PageContent = 'page_content',
  PageRelatedContents = 'page_relatedContents',
  PageSections = 'page_sections',
  PageSectionsAnchorBlockBody = 'page_sections__anchorBlock_body'
}

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  indexType?: InputMaybe<StringFilter>;
  isIndex?: InputMaybe<BooleanFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  relatedContents?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexTypeAsc = 'indexType_ASC',
  IndexTypeDesc = 'indexType_DESC',
  IsIndexAsc = 'isIndex_ASC',
  IsIndexDesc = 'isIndex_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageModelOtherSectionsField = PartnerBlockRecord | TeamRecord;

export type PageModelOtherSectionsFieldListListNonNullMultiLocaleField = {
  __typename?: 'PageModelOtherSectionsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PageModelOtherSectionsField>;
};

export type PageModelRelatedContentsField = ArtistRecord | EventRecord | MenuItemRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

export type PageModelRelatedContentsFieldListListNonNullMultiLocaleField = {
  __typename?: 'PageModelRelatedContentsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PageModelRelatedContentsField>;
};

/** Record of type Pagina (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord';
  _allContentLocales?: Maybe<Array<PageModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allOtherSectionsLocales?: Maybe<Array<PageModelOtherSectionsFieldListListNonNullMultiLocaleField>>;
  _allRelatedContentsLocales?: Maybe<Array<PageModelRelatedContentsFieldListListNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<PageModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero?: Maybe<FileField>;
  indexType?: Maybe<Scalars['String']['output']>;
  isIndex?: Maybe<Scalars['BooleanType']['output']>;
  layoutHero: Scalars['String']['output'];
  otherSections: Array<PageModelOtherSectionsField>;
  position?: Maybe<Scalars['IntType']['output']>;
  relatedContents: Array<PageModelRelatedContentsField>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Pagina (page) */
export type PageRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_AllOtherSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_AllRelatedContentsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordOtherSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordRelatedContentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagina (page) */
export type PageRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by parent (tree-like collections only) */
export type ParentFilter = {
  /** Filter records children of the specified record. Value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with a parent record or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Partner (partner_block) */
export type PartnerBlockRecord = RecordInterface & {
  __typename?: 'PartnerBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type Partner (partner_block) */
export type PartnerBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PartnerModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type PartnerModelContentField = {
  __typename?: 'PartnerModelContentField';
  blocks: Array<PartnerModelContentBlocksField>;
  links: Array<PartnerModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type PartnerModelContentFieldMultiLocaleField = {
  __typename?: 'PartnerModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<PartnerModelContentField>;
};

export type PartnerModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum PartnerModelFieldsReferencingArtistModel {
  PartnerContent = 'partner_content',
  PartnerSections = 'partner_sections',
  PartnerSectionsAnchorBlockBody = 'partner_sections__anchorBlock_body'
}

/** Linking fields */
export enum PartnerModelFieldsReferencingEventModel {
  PartnerContent = 'partner_content',
  PartnerSections = 'partner_sections',
  PartnerSectionsAnchorBlockBody = 'partner_sections__anchorBlock_body'
}

/** Linking fields */
export enum PartnerModelFieldsReferencingNetworkModel {
  PartnerContent = 'partner_content',
  PartnerSections = 'partner_sections',
  PartnerSectionsAnchorBlockBody = 'partner_sections__anchorBlock_body'
}

/** Linking fields */
export enum PartnerModelFieldsReferencingNewsModel {
  PartnerContent = 'partner_content',
  PartnerSections = 'partner_sections',
  PartnerSectionsAnchorBlockBody = 'partner_sections__anchorBlock_body'
}

/** Linking fields */
export enum PartnerModelFieldsReferencingProjectModel {
  PartnerContent = 'partner_content',
  PartnerSections = 'partner_sections',
  PartnerSectionsAnchorBlockBody = 'partner_sections__anchorBlock_body'
}

/** Linking fields */
export enum PartnerModelFieldsReferencingWorkshopModel {
  PartnerContent = 'partner_content',
  PartnerSections = 'partner_sections',
  PartnerSectionsAnchorBlockBody = 'partner_sections__anchorBlock_body'
}

/** Linking fields */
export enum PartnerModelFieldsReferencingYearModel {
  PartnerYears = 'partner_years'
}

export type PartnerModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PartnerModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PartnerModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  seo?: InputMaybe<SeoFilter>;
  siteUrl?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum PartnerModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SiteUrlAsc = 'siteUrl_ASC',
  SiteUrlDesc = 'siteUrl_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Partner Model (partner) */
export type PartnerRecord = RecordInterface & {
  __typename?: 'PartnerRecord';
  _allContentLocales?: Maybe<Array<PartnerModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content?: Maybe<PartnerModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  logo: FileField;
  position?: Maybe<Scalars['IntType']['output']>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  siteUrl?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titleHero?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  years: Array<YearRecord>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Partner Model (partner) */
export type PartnerRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Archivio Partner e Reti (pertners_networks_archive) */
export type PertnersNetworksArchiveRecord = RecordInterface & {
  __typename?: 'PertnersNetworksArchiveRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Archivio Partner e Reti (pertners_networks_archive) */
export type PertnersNetworksArchiveRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Partner e Reti (pertners_networks_archive) */
export type PertnersNetworksArchiveRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Partner e Reti (pertners_networks_archive) */
export type PertnersNetworksArchiveRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type Prezzo (price) */
export type PriceRecord = RecordInterface & {
  __typename?: 'PriceRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  amount?: Maybe<Scalars['FloatType']['output']>;
  bookable?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ItemId']['output'];
  paymentLink?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Prezzo (price) */
export type PriceRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PriceRecordListListNonNullMultiLocaleField = {
  __typename?: 'PriceRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PriceRecord>;
};

export type ProjectModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type ProjectModelContentField = {
  __typename?: 'ProjectModelContentField';
  blocks: Array<ProjectModelContentBlocksField>;
  links: Array<ProjectModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type ProjectModelContentFieldMultiLocaleField = {
  __typename?: 'ProjectModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectModelContentField>;
};

export type ProjectModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum ProjectModelFieldsReferencingArtistModel {
  ProjectContent = 'project_content',
  ProjectRelatedContents = 'project_relatedContents',
  ProjectSections = 'project_sections',
  ProjectSectionsAnchorBlockBody = 'project_sections__anchorBlock_body'
}

/** Linking fields */
export enum ProjectModelFieldsReferencingEventModel {
  ProjectContent = 'project_content',
  ProjectRelatedContents = 'project_relatedContents',
  ProjectSections = 'project_sections',
  ProjectSectionsAnchorBlockBody = 'project_sections__anchorBlock_body'
}

/** Linking fields */
export enum ProjectModelFieldsReferencingNetworkModel {
  ProjectContent = 'project_content',
  ProjectNetworks = 'project_networks',
  ProjectSections = 'project_sections',
  ProjectSectionsAnchorBlockBody = 'project_sections__anchorBlock_body'
}

/** Linking fields */
export enum ProjectModelFieldsReferencingNewsModel {
  ProjectContent = 'project_content',
  ProjectRelatedContents = 'project_relatedContents',
  ProjectSections = 'project_sections',
  ProjectSectionsAnchorBlockBody = 'project_sections__anchorBlock_body'
}

/** Linking fields */
export enum ProjectModelFieldsReferencingProjectModel {
  ProjectContent = 'project_content',
  ProjectRelatedContents = 'project_relatedContents',
  ProjectSections = 'project_sections',
  ProjectSectionsAnchorBlockBody = 'project_sections__anchorBlock_body'
}

/** Linking fields */
export enum ProjectModelFieldsReferencingWorkshopModel {
  ProjectContent = 'project_content',
  ProjectRelatedContents = 'project_relatedContents',
  ProjectSections = 'project_sections',
  ProjectSectionsAnchorBlockBody = 'project_sections__anchorBlock_body'
}

/** Linking fields */
export enum ProjectModelFieldsReferencingYearModel {
  ProjectYears = 'project_years'
}

export type ProjectModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  authors?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  networks?: InputMaybe<LinksFilter>;
  position?: InputMaybe<PositionFilter>;
  relatedContents?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  tags?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum ProjectModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AuthorsAsc = 'authors_ASC',
  AuthorsDesc = 'authors_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectModelRelatedContentsField = ArtistRecord | EventRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

export type ProjectModelRelatedContentsFieldListListNonNullMultiLocaleField = {
  __typename?: 'ProjectModelRelatedContentsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<ProjectModelRelatedContentsField>;
};

/** Record of type Progetto (project) */
export type ProjectRecord = RecordInterface & {
  __typename?: 'ProjectRecord';
  _allContentLocales?: Maybe<Array<ProjectModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLocationLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPaymentSettingsLocales?: Maybe<Array<PriceRecordListListNonNullMultiLocaleField>>;
  _allReferencingArtisticResidecies: Array<ArtisticResidecyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResideciesMeta: CollectionMetadata;
  _allReferencingArtisticResidenciesIndices: Array<ArtisticResidenciesIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResidenciesIndicesMeta: CollectionMetadata;
  _allReferencingArtists: Array<ArtistRecord>;
  _allReferencingArtistsIndices: Array<ArtistsIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsIndicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsMeta: CollectionMetadata;
  _allReferencingCompanies: Array<CompanyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCompaniesMeta: CollectionMetadata;
  _allReferencingEducationPages: Array<EducationPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEducationPagesMeta: CollectionMetadata;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingHomes: Array<HomeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata;
  _allReferencingLandings: Array<LandingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingLandingsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNetworks: Array<NetworkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNetworksMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allReferencingPartners: Array<PartnerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPartnersMeta: CollectionMetadata;
  _allReferencingProjects: Array<ProjectRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProjectsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allRelatedContentsLocales?: Maybe<Array<ProjectModelRelatedContentsFieldListListNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  authors?: Maybe<Scalars['String']['output']>;
  content?: Maybe<ProjectModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  dates: Array<EventDateRecord>;
  descriptionHero?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageHero: FileField;
  layoutHero: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  networks: Array<NetworkRecord>;
  paymentSettings: Array<PriceRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  relatedContents: Array<ProjectModelRelatedContentsField>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  tags: Array<TagRecord>;
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  years: Array<YearRecord>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllLocationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllPaymentSettingsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingArtisticResideciesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingArtisticResideciesMetaArgs = {
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingArtisticResidenciesIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidenciesIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingArtisticResidenciesIndicesMetaArgs = {
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingArtistsIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistsIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingArtistsIndicesMetaArgs = {
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingArtistsMetaArgs = {
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingCompaniesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingCompaniesMetaArgs = {
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingEducationPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EducationPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EducationPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingEducationPagesMetaArgs = {
  filter?: InputMaybe<EducationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingLandingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LandingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingLandingsMetaArgs = {
  filter?: InputMaybe<LandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingNetworksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingNetworksMetaArgs = {
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingPartnersMetaArgs = {
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndProject>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllRelatedContentsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordLocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordPaymentSettingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordRelatedContentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Progetto (project) */
export type ProjectRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Indice Progetti (projects_index) */
export type ProjectsIndexRecord = RecordInterface & {
  __typename?: 'ProjectsIndexRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Indice Progetti (projects_index) */
export type ProjectsIndexRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Progetti (projects_index) */
export type ProjectsIndexRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Progetti (projects_index) */
export type ProjectsIndexRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type PromoboxModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PromoboxModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PromoboxModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  headerColor?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  link?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum PromoboxModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeaderColorAsc = 'headerColor_ASC',
  HeaderColorDesc = 'headerColor_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Promobox (promobox) */
export type PromoboxRecord = RecordInterface & {
  __typename?: 'PromoboxRecord';
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  headerColor?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  link?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Promobox (promobox) */
export type PromoboxRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Promobox (promobox) */
export type PromoboxRecord_AllTextLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Promobox (promobox) */
export type PromoboxRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Promobox (promobox) */
export type PromoboxRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Promobox (promobox) */
export type PromoboxRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Promobox (promobox) */
export type PromoboxRecordTextArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Promobox (promobox) */
export type PromoboxRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Promozioni (promozioni_block) */
export type PromozioniBlockRecord = RecordInterface & {
  __typename?: 'PromozioniBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  promozione: Array<PromoboxRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Promozioni (promozioni_block) */
export type PromozioniBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PublicationModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type PublicationModelContentField = {
  __typename?: 'PublicationModelContentField';
  blocks: Array<PublicationModelContentBlocksField>;
  links: Array<PublicationModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type PublicationModelContentFieldMultiLocaleField = {
  __typename?: 'PublicationModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<PublicationModelContentField>;
};

export type PublicationModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum PublicationModelFieldsReferencingArtistModel {
  PublicationArtists = 'publication_artists',
  PublicationContent = 'publication_content'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingArtisticResidecyModel {
  PublicationArtisticResidencies = 'publication_artisticResidencies'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingCompanyModel {
  PublicationComoanies = 'publication_comoanies'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingEventModel {
  PublicationContent = 'publication_content',
  PublicationEvents = 'publication_events'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingFestivalEditionModel {
  PublicationFestivalEditions = 'publication_festivalEditions'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingMediaAuthorModel {
  PublicationMediaAuthor = 'publication_mediaAuthor'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingNetworkModel {
  PublicationContent = 'publication_content'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingNewsModel {
  PublicationContent = 'publication_content'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingProjectModel {
  PublicationContent = 'publication_content',
  PublicationProjects = 'publication_projects'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingWorkshopModel {
  PublicationContent = 'publication_content',
  PublicationWorkhops = 'publication_workhops'
}

/** Linking fields */
export enum PublicationModelFieldsReferencingYearModel {
  PublicationYears = 'publication_years'
}

export type PublicationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PublicationModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PublicationModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidencies?: InputMaybe<LinksFilter>;
  artists?: InputMaybe<LinksFilter>;
  comoanies?: InputMaybe<LinksFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  events?: InputMaybe<LinksFilter>;
  festivalEditions?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  mediaAuthor?: InputMaybe<LinksFilter>;
  projects?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  workhops?: InputMaybe<LinksFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum PublicationModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Pubblicazione (publication) */
export type PublicationRecord = RecordInterface & {
  __typename?: 'PublicationRecord';
  _allContentLocales?: Maybe<Array<PublicationModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidencies: Array<ArtisticResidecyRecord>;
  artists: Array<ArtistRecord>;
  comoanies: Array<CompanyRecord>;
  content?: Maybe<PublicationModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  descriptionHero?: Maybe<Scalars['String']['output']>;
  events: Array<EventRecord>;
  festivalEditions: Array<FestivalEditionRecord>;
  id: Scalars['ItemId']['output'];
  imageHero: FileField;
  layoutHero: Scalars['String']['output'];
  mediaAuthor: Array<MediaAuthorRecord>;
  projects: Array<ProjectRecord>;
  seo?: Maybe<SeoField>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workhops: Array<WorkshopRecord>;
  years: Array<YearRecord>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndPublication>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndPublication>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndPublication>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndPublication>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndPublication>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndPublication>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndPublication>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndPublication>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pubblicazione (publication) */
export type PublicationRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allArtisticResideciesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allArtistsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCompaniesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCountriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allEventsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFestivalEditionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLandingsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaAudioCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaAudiosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaAuthorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaDocumentCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaDocumentsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaPhotoCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaPhotosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaVideoCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMediaVideosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMenuItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNetworksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPartnersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPromoboxesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPublicationsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSchemaMigrationsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTagsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allWorkshopCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allWorkshopsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allYearsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns the single instance record */
  activitiesArchive?: Maybe<ActivitiesArchiveRecord>;
  /** Returns a collection of records */
  allArtisticResidecies: Array<ArtisticResidecyRecord>;
  /** Returns a collection of records */
  allArtists: Array<ArtistRecord>;
  /** Returns a collection of records */
  allCompanies: Array<CompanyRecord>;
  /** Returns a collection of records */
  allCountries: Array<CountryRecord>;
  /** Returns a collection of records */
  allEvents: Array<EventRecord>;
  /** Returns a collection of records */
  allFestivalEditions: Array<FestivalEditionRecord>;
  /** Returns a collection of records */
  allLandings: Array<LandingRecord>;
  /** Returns a collection of records */
  allMediaAudioCategories: Array<MediaAudioCategoryRecord>;
  /** Returns a collection of records */
  allMediaAudios: Array<MediaAudioRecord>;
  /** Returns a collection of records */
  allMediaAuthors: Array<MediaAuthorRecord>;
  /** Returns a collection of records */
  allMediaDocumentCategories: Array<MediaDocumentCategoryRecord>;
  /** Returns a collection of records */
  allMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns a collection of records */
  allMediaPhotoCategories: Array<MediaPhotoCategoryRecord>;
  /** Returns a collection of records */
  allMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns a collection of records */
  allMediaVideoCategories: Array<MediaVideoCategoryRecord>;
  /** Returns a collection of records */
  allMediaVideos: Array<MediaVideoRecord>;
  /** Returns a collection of records */
  allMenuItems: Array<MenuItemRecord>;
  /** Returns a collection of records */
  allNetworks: Array<NetworkRecord>;
  /** Returns a collection of records */
  allNews: Array<NewsRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allPartners: Array<PartnerRecord>;
  /** Returns a collection of records */
  allProjects: Array<ProjectRecord>;
  /** Returns a collection of records */
  allPromoboxes: Array<PromoboxRecord>;
  /** Returns a collection of records */
  allPublications: Array<PublicationRecord>;
  /** Returns a collection of records */
  allSchemaMigrations: Array<SchemaMigrationRecord>;
  /** Returns a collection of records */
  allTags: Array<TagRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allWorkshopCategories: Array<WorkshopCategoryRecord>;
  /** Returns a collection of records */
  allWorkshops: Array<WorkshopRecord>;
  /** Returns a collection of records */
  allYears: Array<YearRecord>;
  /** Returns a specific record */
  artist?: Maybe<ArtistRecord>;
  /** Returns a specific record */
  artisticResidecy?: Maybe<ArtisticResidecyRecord>;
  /** Returns the single instance record */
  artisticResidenciesIndex?: Maybe<ArtisticResidenciesIndexRecord>;
  /** Returns the single instance record */
  artistsCompaniesArchive?: Maybe<ArtistsCompaniesArchiveRecord>;
  /** Returns the single instance record */
  artistsIndex?: Maybe<ArtistsIndexRecord>;
  /** Returns the single instance record */
  audiosIndex?: Maybe<AudiosIndexRecord>;
  /** Returns a specific record */
  company?: Maybe<CompanyRecord>;
  /** Returns a specific record */
  country?: Maybe<CountryRecord>;
  /** Returns the single instance record */
  educationPage?: Maybe<EducationPageRecord>;
  /** Returns a specific record */
  event?: Maybe<EventRecord>;
  /** Returns the single instance record */
  eventsIndex?: Maybe<EventsIndexRecord>;
  /** Returns the single instance record */
  extraContent?: Maybe<ExtraContentRecord>;
  /** Returns a specific record */
  festivalEdition?: Maybe<FestivalEditionRecord>;
  /** Returns the single instance record */
  festivalEditionsArchive?: Maybe<FestivalEditionsArchiveRecord>;
  /** Returns the single instance record */
  festivalYear?: Maybe<FestivalYearRecord>;
  /** Returns the single instance record */
  footer?: Maybe<FooterRecord>;
  /** Returns the single instance record */
  home?: Maybe<HomeRecord>;
  /** Returns a specific record */
  landing?: Maybe<LandingRecord>;
  /** Returns the single instance record */
  mediaArchive?: Maybe<MediaArchiveRecord>;
  /** Returns a specific record */
  mediaAudio?: Maybe<MediaAudioRecord>;
  /** Returns a specific record */
  mediaAudioCategory?: Maybe<MediaAudioCategoryRecord>;
  /** Returns a specific record */
  mediaAuthor?: Maybe<MediaAuthorRecord>;
  /** Returns a specific record */
  mediaDocument?: Maybe<MediaDocumentRecord>;
  /** Returns a specific record */
  mediaDocumentCategory?: Maybe<MediaDocumentCategoryRecord>;
  /** Returns a specific record */
  mediaPhoto?: Maybe<MediaPhotoRecord>;
  /** Returns a specific record */
  mediaPhotoCategory?: Maybe<MediaPhotoCategoryRecord>;
  /** Returns a specific record */
  mediaVideo?: Maybe<MediaVideoRecord>;
  /** Returns a specific record */
  mediaVideoCategory?: Maybe<MediaVideoCategoryRecord>;
  /** Returns a specific record */
  menuItem?: Maybe<MenuItemRecord>;
  /** Returns a specific record */
  network?: Maybe<NetworkRecord>;
  /** Returns the single instance record */
  networksIndex?: Maybe<NetworksIndexRecord>;
  /** Returns a specific record */
  news?: Maybe<NewsRecord>;
  /** Returns the single instance record */
  newsIndex?: Maybe<NewsIndexRecord>;
  /** Returns the single instance record */
  newsPublicationsArchive?: Maybe<NewsPublicationsArchiveRecord>;
  /** Returns a specific record */
  page?: Maybe<PageRecord>;
  /** Returns a specific record */
  partner?: Maybe<PartnerRecord>;
  /** Returns the single instance record */
  pertnersNetworksArchive?: Maybe<PertnersNetworksArchiveRecord>;
  /** Returns a specific record */
  project?: Maybe<ProjectRecord>;
  /** Returns the single instance record */
  projectsIndex?: Maybe<ProjectsIndexRecord>;
  /** Returns a specific record */
  promobox?: Maybe<PromoboxRecord>;
  /** Returns a specific record */
  publication?: Maybe<PublicationRecord>;
  /** Returns a specific record */
  schemaMigration?: Maybe<SchemaMigrationRecord>;
  /** Returns a specific record */
  tag?: Maybe<TagRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns the single instance record */
  videosIndex?: Maybe<VideosIndexRecord>;
  /** Returns a specific record */
  workshop?: Maybe<WorkshopRecord>;
  /** Returns a specific record */
  workshopCategory?: Maybe<WorkshopCategoryRecord>;
  /** Returns a specific record */
  year?: Maybe<YearRecord>;
  /** Returns the single instance record */
  yearsArchive?: Maybe<YearsArchiveRecord>;
};


/** The query root for this schema */
export type Query_AllArtisticResideciesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllArtistsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCompaniesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCountriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllEventsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFestivalEditionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FestivalEditionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllLandingsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaAudioCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaAudiosMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaAuthorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaDocumentCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaDocumentsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaPhotoCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaPhotosMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaVideoCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMediaVideosMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMenuItemsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MenuItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllNetworksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllNewsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPartnersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProjectsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPromoboxesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PromoboxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPublicationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSchemaMigrationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SchemaMigrationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTagsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllWorkshopCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllWorkshopsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllYearsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<YearModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryActivitiesArchiveArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllArtisticResideciesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCompaniesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCountriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllFestivalEditionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FestivalEditionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FestivalEditionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllLandingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LandingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaAudioCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaAuthorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAuthorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAuthorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaDocumentCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaPhotoCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaVideoCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMenuItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MenuItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MenuItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllNetworksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPromoboxesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PromoboxModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PromoboxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSchemaMigrationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SchemaMigrationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SchemaMigrationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllWorkshopCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllYearsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<YearModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<YearModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryArtistArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryArtisticResidecyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryArtisticResidenciesIndexArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryArtistsCompaniesArchiveArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryArtistsIndexArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAudiosIndexArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryCompanyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCountryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryEducationPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryEventArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryEventsIndexArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryExtraContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryFestivalEditionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FestivalEditionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FestivalEditionModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFestivalEditionsArchiveArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryFestivalYearArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryHomeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryLandingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LandingModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaArchiveArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryMediaAudioArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaAudioCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaAuthorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAuthorModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaDocumentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaDocumentCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaPhotoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaPhotoCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaVideoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMediaVideoCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMenuItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MenuItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MenuItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNetworkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNetworksIndexArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNewsIndexArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryNewsPublicationsArchiveArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPartnerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPertnersNetworksArchiveArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryProjectArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProjectsIndexArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPromoboxArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PromoboxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PromoboxModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPublicationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySchemaMigrationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SchemaMigrationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SchemaMigrationModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};


/** The query root for this schema */
export type QueryVideosIndexArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryWorkshopArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryWorkshopCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryYearArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<YearModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<YearModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryYearsArchiveArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

export type SchemaMigrationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SchemaMigrationModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SchemaMigrationModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum SchemaMigrationModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Schema migration (schema_migration) */
export type SchemaMigrationRecord = RecordInterface & {
  __typename?: 'SchemaMigrationRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Schema migration (schema_migration) */
export type SchemaMigrationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<SeoField>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  En = 'en',
  It = 'it'
}

/** Block of type Slide (slide) */
export type SlideRecord = RecordInterface & {
  __typename?: 'SlideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Slide (slide) */
export type SlideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SlideRecordListListNonNullMultiLocaleField = {
  __typename?: 'SlideRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<SlideRecord>;
};

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Block of type Social link (social_link) */
export type SocialLinkRecord = RecordInterface & {
  __typename?: 'SocialLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Social link (social_link) */
export type SocialLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']['output']>;
};

export type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Scalars['String']['output'];
};

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

export type TagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum TagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Tag (tag) */
export type TagRecord = RecordInterface & {
  __typename?: 'TagRecord';
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Tag (tag) */
export type TagRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tag (tag) */
export type TagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tag (tag) */
export type TagRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Team (team) */
export type TeamRecord = RecordInterface & {
  __typename?: 'TeamRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  linkedin?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Team (team) */
export type TeamRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type Blocco video (video_block) */
export type VideoBlockRecord = RecordInterface & {
  __typename?: 'VideoBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  autoPlay?: Maybe<Scalars['BooleanType']['output']>;
  controls?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  externalVideo?: Maybe<VideoField>;
  id: Scalars['ItemId']['output'];
  internalVideo?: Maybe<FileField>;
  loop?: Maybe<Scalars['BooleanType']['output']>;
  muted?: Maybe<Scalars['BooleanType']['output']>;
  poster?: Maybe<FileField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Blocco video (video_block) */
export type VideoBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType']['output'];
  provider: Scalars['String']['output'];
  providerUid: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

export type VideoFieldNonNullMultiLocaleField = {
  __typename?: 'VideoFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: VideoField;
};

/** Specifies how to filter Video fields */
export type VideoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

/** Record of type Indice Video (videos_index) */
export type VideosIndexRecord = RecordInterface & {
  __typename?: 'VideosIndexRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Indice Video (videos_index) */
export type VideosIndexRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Video (videos_index) */
export type VideosIndexRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Indice Video (videos_index) */
export type VideosIndexRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Blocco Categorie Workshop (workshop_categories_block) */
export type WorkshopCategoriesBlockRecord = RecordInterface & {
  __typename?: 'WorkshopCategoriesBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category: Array<WorkshopCategoryRecord>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Blocco Categorie Workshop (workshop_categories_block) */
export type WorkshopCategoriesBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type WorkshopCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<WorkshopCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WorkshopCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  hoverImage?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum WorkshopCategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecord = RecordInterface & {
  __typename?: 'WorkshopCategoryRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hoverImage: ImageFileField;
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categoria Workshop (workshop_category) */
export type WorkshopCategoryRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type WorkshopModelContentBlocksField = GalleryRecord | ImageBlockRecord | VideoBlockRecord;

export type WorkshopModelContentField = {
  __typename?: 'WorkshopModelContentField';
  blocks: Array<WorkshopModelContentBlocksField>;
  links: Array<WorkshopModelContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type WorkshopModelContentFieldMultiLocaleField = {
  __typename?: 'WorkshopModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<WorkshopModelContentField>;
};

export type WorkshopModelContentLinksField = ArtistRecord | EventRecord | NetworkRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

/** Linking fields */
export enum WorkshopModelFieldsReferencingArtistModel {
  WorkshopArtists = 'workshop_artists',
  WorkshopContent = 'workshop_content',
  WorkshopRelatedContents = 'workshop_relatedContents',
  WorkshopSections = 'workshop_sections',
  WorkshopSectionsAnchorBlockBody = 'workshop_sections__anchorBlock_body'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingArtisticResidecyModel {
  WorkshopArtisticResidecies = 'workshop_artisticResidecies'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingCompanyModel {
  WorkshopCompanies = 'workshop_companies'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingEventModel {
  WorkshopContent = 'workshop_content',
  WorkshopRelatedContents = 'workshop_relatedContents',
  WorkshopSections = 'workshop_sections',
  WorkshopSectionsAnchorBlockBody = 'workshop_sections__anchorBlock_body'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingFestivalEditionModel {
  WorkshopFestivalEditions = 'workshop_festivalEditions'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingNetworkModel {
  WorkshopContent = 'workshop_content',
  WorkshopSections = 'workshop_sections',
  WorkshopSectionsAnchorBlockBody = 'workshop_sections__anchorBlock_body'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingNewsModel {
  WorkshopContent = 'workshop_content',
  WorkshopRelatedContents = 'workshop_relatedContents',
  WorkshopSections = 'workshop_sections',
  WorkshopSectionsAnchorBlockBody = 'workshop_sections__anchorBlock_body'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingProjectModel {
  WorkshopContent = 'workshop_content',
  WorkshopProjects = 'workshop_projects',
  WorkshopRelatedContents = 'workshop_relatedContents',
  WorkshopSections = 'workshop_sections',
  WorkshopSectionsAnchorBlockBody = 'workshop_sections__anchorBlock_body'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingWorkshopModel {
  WorkshopContent = 'workshop_content',
  WorkshopRelatedContents = 'workshop_relatedContents',
  WorkshopSections = 'workshop_sections',
  WorkshopSectionsAnchorBlockBody = 'workshop_sections__anchorBlock_body',
  WorkshopWorkhops = 'workshop_workhops'
}

/** Linking fields */
export enum WorkshopModelFieldsReferencingYearModel {
  WorkshopYears = 'workshop_years'
}

export type WorkshopModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<WorkshopModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WorkshopModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artisticResidecies?: InputMaybe<LinksFilter>;
  artists?: InputMaybe<LinksFilter>;
  authors?: InputMaybe<StringFilter>;
  companies?: InputMaybe<LinksFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionHero?: InputMaybe<StringFilter>;
  festivalEditions?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageHero?: InputMaybe<FileFilter>;
  isWorkshop?: InputMaybe<BooleanFilter>;
  layoutHero?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  projects?: InputMaybe<LinksFilter>;
  relatedContents?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  showInWebsite?: InputMaybe<BooleanFilter>;
  slideshowHero?: InputMaybe<GalleryFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DateFilter>;
  subtitlePreview?: InputMaybe<StringFilter>;
  tags?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  titleHero?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  workhops?: InputMaybe<LinksFilter>;
  workshopCategories?: InputMaybe<LinksFilter>;
  years?: InputMaybe<LinksFilter>;
};

export enum WorkshopModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AuthorsAsc = 'authors_ASC',
  AuthorsDesc = 'authors_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionHeroAsc = 'descriptionHero_ASC',
  DescriptionHeroDesc = 'descriptionHero_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsWorkshopAsc = 'isWorkshop_ASC',
  IsWorkshopDesc = 'isWorkshop_DESC',
  LayoutHeroAsc = 'layoutHero_ASC',
  LayoutHeroDesc = 'layoutHero_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  ShowInWebsiteAsc = 'showInWebsite_ASC',
  ShowInWebsiteDesc = 'showInWebsite_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SubtitlePreviewAsc = 'subtitlePreview_ASC',
  SubtitlePreviewDesc = 'subtitlePreview_DESC',
  TitleHeroAsc = 'titleHero_ASC',
  TitleHeroDesc = 'titleHero_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WorkshopModelRelatedContentsField = ArtistRecord | EventRecord | NewsRecord | PageRecord | ProjectRecord | WorkshopRecord;

export type WorkshopModelRelatedContentsFieldListListNonNullMultiLocaleField = {
  __typename?: 'WorkshopModelRelatedContentsFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<WorkshopModelRelatedContentsField>;
};

/** Record of type Workshop (workshop) */
export type WorkshopRecord = RecordInterface & {
  __typename?: 'WorkshopRecord';
  _allAuthorsLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allContentLocales?: Maybe<Array<WorkshopModelContentFieldMultiLocaleField>>;
  _allDescriptionHeroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLocationLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPaymentSettingsLocales?: Maybe<Array<PriceRecordListListNonNullMultiLocaleField>>;
  _allReferencingArtisticResidecies: Array<ArtisticResidecyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResideciesMeta: CollectionMetadata;
  _allReferencingArtisticResidenciesIndices: Array<ArtisticResidenciesIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResidenciesIndicesMeta: CollectionMetadata;
  _allReferencingArtists: Array<ArtistRecord>;
  _allReferencingArtistsIndices: Array<ArtistsIndexRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsIndicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsMeta: CollectionMetadata;
  _allReferencingCompanies: Array<CompanyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCompaniesMeta: CollectionMetadata;
  _allReferencingEducationPages: Array<EducationPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEducationPagesMeta: CollectionMetadata;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingHomes: Array<HomeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata;
  _allReferencingLandings: Array<LandingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingLandingsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNetworks: Array<NetworkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNetworksMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allReferencingPartners: Array<PartnerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPartnersMeta: CollectionMetadata;
  _allReferencingProjects: Array<ProjectRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProjectsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _allRelatedContentsLocales?: Maybe<Array<WorkshopModelRelatedContentsFieldListListNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<AnchorBlockRecordListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allSubtitlePreviewLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleHeroLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  artisticResidecies: Array<ArtisticResidecyRecord>;
  artists: Array<ArtistRecord>;
  authors?: Maybe<Scalars['String']['output']>;
  companies: Array<CompanyRecord>;
  content?: Maybe<WorkshopModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  dates: Array<EventDateRecord>;
  descriptionHero?: Maybe<Scalars['String']['output']>;
  festivalEditions: Array<FestivalEditionRecord>;
  id: Scalars['ItemId']['output'];
  imageHero: FileField;
  isWorkshop?: Maybe<Scalars['BooleanType']['output']>;
  layoutHero: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  paymentSettings: Array<PriceRecord>;
  projects: Array<ProjectRecord>;
  relatedContents: Array<WorkshopModelRelatedContentsField>;
  sections: Array<AnchorBlockRecord>;
  seo?: Maybe<SeoField>;
  showInWebsite?: Maybe<Scalars['BooleanType']['output']>;
  slideshowHero: Array<FileField>;
  slug: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  subtitlePreview?: Maybe<Scalars['String']['output']>;
  tags: Array<TagRecord>;
  title: Scalars['String']['output'];
  titleHero: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workhops: Array<WorkshopRecord>;
  workshopCategories: Array<WorkshopCategoryRecord>;
  years: Array<YearRecord>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllAuthorsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllDescriptionHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllLocationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllPaymentSettingsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingArtisticResideciesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingArtisticResideciesMetaArgs = {
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingArtisticResidenciesIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidenciesIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingArtisticResidenciesIndicesMetaArgs = {
  filter?: InputMaybe<ArtisticResidenciesIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidenciesIndexAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingArtistsIndicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistsIndexModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingArtistsIndicesMetaArgs = {
  filter?: InputMaybe<ArtistsIndexModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistsIndexAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingArtistsMetaArgs = {
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingCompaniesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingCompaniesMetaArgs = {
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCompanyAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingEducationPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EducationPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EducationPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingEducationPagesMetaArgs = {
  filter?: InputMaybe<EducationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEducationPageAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingLandingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LandingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LandingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingLandingsMetaArgs = {
  filter?: InputMaybe<LandingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenLandingAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingNetworksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingNetworksMetaArgs = {
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingPartnersMetaArgs = {
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndWorkshop>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllRelatedContentsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllSubtitlePreviewLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllTitleHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordAuthorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordDescriptionHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordLocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordPaymentSettingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordRelatedContentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordSubtitlePreviewArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Workshop (workshop) */
export type WorkshopRecordTitleHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum YearModelFieldsReferencingMediaPhotoCategoryModel {
  YearImages = 'year_images'
}

export type YearModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<YearModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<YearModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  images?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  year?: InputMaybe<IntegerFilter>;
};

export enum YearModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC'
}

/** Record of type Anno (year) */
export type YearRecord = RecordInterface & {
  __typename?: 'YearRecord';
  _allReferencingArtisticResidecies: Array<ArtisticResidecyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtisticResideciesMeta: CollectionMetadata;
  _allReferencingArtists: Array<ArtistRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtistsMeta: CollectionMetadata;
  _allReferencingEvents: Array<EventRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingEventsMeta: CollectionMetadata;
  _allReferencingFestivalEditions: Array<FestivalEditionRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingFestivalEditionsMeta: CollectionMetadata;
  _allReferencingMediaAudios: Array<MediaAudioRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaAudiosMeta: CollectionMetadata;
  _allReferencingMediaDocuments: Array<MediaDocumentRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaDocumentsMeta: CollectionMetadata;
  _allReferencingMediaPhotos: Array<MediaPhotoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaPhotosMeta: CollectionMetadata;
  _allReferencingMediaVideos: Array<MediaVideoRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingMediaVideosMeta: CollectionMetadata;
  _allReferencingNetworks: Array<NetworkRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNetworksMeta: CollectionMetadata;
  _allReferencingNews: Array<NewsRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNewsMeta: CollectionMetadata;
  _allReferencingPartners: Array<PartnerRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPartnersMeta: CollectionMetadata;
  _allReferencingProjects: Array<ProjectRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProjectsMeta: CollectionMetadata;
  _allReferencingPublications: Array<PublicationRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPublicationsMeta: CollectionMetadata;
  _allReferencingWorkshops: Array<WorkshopRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingWorkshopsMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  images: Array<MediaPhotoCategoryRecord>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  year: Scalars['IntType']['output'];
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingArtisticResideciesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtisticResidecyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingArtisticResideciesMetaArgs = {
  filter?: InputMaybe<ArtisticResidecyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtisticResidecyAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingArtistsMetaArgs = {
  filter?: InputMaybe<ArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtistAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingEventsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingEventsMetaArgs = {
  filter?: InputMaybe<EventModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenEventAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingFestivalEditionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FestivalEditionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FestivalEditionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenFestivalEditionAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingFestivalEditionsMetaArgs = {
  filter?: InputMaybe<FestivalEditionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenFestivalEditionAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingMediaAudiosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaAudioModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaAudioModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingMediaAudiosMetaArgs = {
  filter?: InputMaybe<MediaAudioModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaAudioAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingMediaDocumentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaDocumentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaDocumentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingMediaDocumentsMetaArgs = {
  filter?: InputMaybe<MediaDocumentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaDocumentAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingMediaPhotosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaPhotoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaPhotoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingMediaPhotosMetaArgs = {
  filter?: InputMaybe<MediaPhotoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaPhotoAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingMediaVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MediaVideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MediaVideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingMediaVideosMetaArgs = {
  filter?: InputMaybe<MediaVideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenMediaVideoAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingNetworksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NetworkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NetworkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingNetworksMetaArgs = {
  filter?: InputMaybe<NetworkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNetworkAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingNewsMetaArgs = {
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNewsAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingPartnersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PartnerModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PartnerModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingPartnersMetaArgs = {
  filter?: InputMaybe<PartnerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPartnerAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingProjectsMetaArgs = {
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProjectAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingPublicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingPublicationsMetaArgs = {
  filter?: InputMaybe<PublicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPublicationAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingWorkshopsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkshopModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkshopModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_AllReferencingWorkshopsMetaArgs = {
  filter?: InputMaybe<WorkshopModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenWorkshopAndYear>;
};


/** Record of type Anno (year) */
export type YearRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Archivio Anni (years_archive) */
export type YearsArchiveRecord = RecordInterface & {
  __typename?: 'YearsArchiveRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Archivio Anni (years_archive) */
export type YearsArchiveRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Anni (years_archive) */
export type YearsArchiveRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Archivio Anni (years_archive) */
export type YearsArchiveRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

export type LayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQueryQuery = { __typename?: 'Query', site: { __typename?: 'Site', locales: Array<SiteLocale>, faviconMetaTags: Array<{ __typename?: 'Tag', tag: string, content?: string | null, attributes?: any | null }> }, menu: Array<(
    { __typename?: 'MenuItemRecord', parent?: (
      { __typename?: 'MenuItemRecord', parent?: (
        { __typename?: 'MenuItemRecord' }
        & { ' $fragmentRefs'?: { 'MenuItemFragFragment': MenuItemFragFragment } }
      ) | null }
      & { ' $fragmentRefs'?: { 'MenuItemFragFragment': MenuItemFragFragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'MenuItemFragFragment': MenuItemFragFragment } }
  )>, footer?: { __typename?: 'FooterRecord', info?: string | null, logo?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', src: string } | null } | null, socials: Array<{ __typename?: 'SocialLinkRecord', id: any, link: string, title: string, image: { __typename?: 'FileField', url: string } }>, sections: Array<{ __typename?: 'FooterSectionRecord', id: any, links: Array<{ __typename?: 'PageRecord', slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, titles?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null }> }> } | null };

export type MenuItemFragFragment = { __typename?: 'MenuItemRecord', id: any, titles?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, title: string }> | null, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, slug: string }> | null, link?: { __typename: 'HomeRecord', id: any } | { __typename: 'PageRecord', id: any, slug: string, title: string, indexType?: string | null, isIndex?: any | null } | null } & { ' $fragmentName'?: 'MenuItemFragFragment' };

export const MenuItemFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"menuItemFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"titles"},"name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"indexType"}},{"kind":"Field","name":{"kind":"Name","value":"isIndex"}}]}}]}}]}}]} as unknown as DocumentNode<MenuItemFragFragment, unknown>;
export const LayoutQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"layoutQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"site"},"name":{"kind":"Name","value":"_site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locales"}},{"kind":"Field","name":{"kind":"Name","value":"faviconMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menu"},"name":{"kind":"Name","value":"allMenuItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exists"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"menuItemFrag"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"menuItemFrag"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"menuItemFrag"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"maxW"},"value":{"kind":"StringValue","value":"600","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"socials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"StringValue","value":"80","block":false}}]}}]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"titles"},"name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"menuItemFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"titles"},"name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomeRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"indexType"}},{"kind":"Field","name":{"kind":"Name","value":"isIndex"}}]}}]}}]}}]} as unknown as DocumentNode<LayoutQueryQuery, LayoutQueryQueryVariables>;