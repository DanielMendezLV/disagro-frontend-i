export const environment = {
  production: false,
  url: 'https://seal-app-r2atc.ondigitalocean.app',
  buildEndpoint: (slug: string, path: Array<string>) => environment.url +`/${slug}/`+ `${path.join('/')}`
};
