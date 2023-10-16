/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query layoutQuery {\n  site: _site {\n    locales\n    faviconMetaTags {\n      tag\n      content\n      attributes\n    }\n  }\n  menu: allMenuItems(filter: {parent: {exists: \"false\"}}) {\n    ...menuItemFrag\n    parent {\n      ...menuItemFrag\n      parent {\n        ...menuItemFrag\n      }\n    }\n  }\n  footer {\n    info\n    logo {\n      responsiveImage(imgixParams: {auto: format, maxW: \"600\"}) {\n        src\n      }\n    }\n    socials {\n      id\n      link\n      title\n      image {\n        url(imgixParams: {auto: format, h: \"80\"})\n      }\n    }\n    sections {\n      id\n      links {\n        slugs: _allSlugLocales {\n          locale\n          value\n        }\n        titles: _allTitleLocales {\n          locale\n          value\n        }\n      }\n    }\n  }\n}\n\nfragment menuItemFrag on MenuItemRecord {\n  id\n  titles: _allTitleLocales {\n    locale\n    title: value\n  }\n  slugs: _allSlugLocales {\n    locale\n    slug: value\n  }\n  link {\n    __typename\n    ... on HomeRecord {\n      id\n    }\n    ... on PageRecord {\n      id\n      slug\n      title\n      indexType\n      isIndex\n    }\n  }\n}": types.LayoutQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query layoutQuery {\n  site: _site {\n    locales\n    faviconMetaTags {\n      tag\n      content\n      attributes\n    }\n  }\n  menu: allMenuItems(filter: {parent: {exists: \"false\"}}) {\n    ...menuItemFrag\n    parent {\n      ...menuItemFrag\n      parent {\n        ...menuItemFrag\n      }\n    }\n  }\n  footer {\n    info\n    logo {\n      responsiveImage(imgixParams: {auto: format, maxW: \"600\"}) {\n        src\n      }\n    }\n    socials {\n      id\n      link\n      title\n      image {\n        url(imgixParams: {auto: format, h: \"80\"})\n      }\n    }\n    sections {\n      id\n      links {\n        slugs: _allSlugLocales {\n          locale\n          value\n        }\n        titles: _allTitleLocales {\n          locale\n          value\n        }\n      }\n    }\n  }\n}\n\nfragment menuItemFrag on MenuItemRecord {\n  id\n  titles: _allTitleLocales {\n    locale\n    title: value\n  }\n  slugs: _allSlugLocales {\n    locale\n    slug: value\n  }\n  link {\n    __typename\n    ... on HomeRecord {\n      id\n    }\n    ... on PageRecord {\n      id\n      slug\n      title\n      indexType\n      isIndex\n    }\n  }\n}"): (typeof documents)["query layoutQuery {\n  site: _site {\n    locales\n    faviconMetaTags {\n      tag\n      content\n      attributes\n    }\n  }\n  menu: allMenuItems(filter: {parent: {exists: \"false\"}}) {\n    ...menuItemFrag\n    parent {\n      ...menuItemFrag\n      parent {\n        ...menuItemFrag\n      }\n    }\n  }\n  footer {\n    info\n    logo {\n      responsiveImage(imgixParams: {auto: format, maxW: \"600\"}) {\n        src\n      }\n    }\n    socials {\n      id\n      link\n      title\n      image {\n        url(imgixParams: {auto: format, h: \"80\"})\n      }\n    }\n    sections {\n      id\n      links {\n        slugs: _allSlugLocales {\n          locale\n          value\n        }\n        titles: _allTitleLocales {\n          locale\n          value\n        }\n      }\n    }\n  }\n}\n\nfragment menuItemFrag on MenuItemRecord {\n  id\n  titles: _allTitleLocales {\n    locale\n    title: value\n  }\n  slugs: _allSlugLocales {\n    locale\n    slug: value\n  }\n  link {\n    __typename\n    ... on HomeRecord {\n      id\n    }\n    ... on PageRecord {\n      id\n      slug\n      title\n      indexType\n      isIndex\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;