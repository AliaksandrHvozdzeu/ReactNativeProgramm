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

export const getProductById = (productSlug: string) =>
  fetch(`${API_URL_SLUG}/${productSlug}?include=images`).then(response =>
    response.json(),
  );

export const getUserData = (token: string, login: string) =>
  fetch(
    `https://demo.spreecommerce.org/api/v2/storefront/account?user=${login}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  ).then(response => response.json());
