const API_URL =
  'https://demo.spreecommerce.org/api/v2/storefront/products?include=images';

const API_URL_SLUG =
  'https://demo.spreecommerce.org/api/v2/storefront/products';

export const getProductList = () =>
  fetch(API_URL).then(response => response.json());

export const getProductListByTag = (productSlug: string) =>
  fetch(`${API_URL_SLUG}/${productSlug}?include=images`).then(response =>
    response.json(),
  );
