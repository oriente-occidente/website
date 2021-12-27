import routes from 'data/routes.json';

export function resolveLinkById(locale, id) {
  const route = routes.find((r) => r.id === id);
  const url = `/${route.slugs[locale].join('/')}`;
  return url;
}

export function getBreadcrumbs(locale, id) {
  const route = routes.find((r) => r.id === id);
  return route.slugs;
}
