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

export const onSignIn = (data: {username: string; password: string}) => {
  fetch('https://demo.spreecommerce.org/spree_oauth/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'password',
      username: data.username,
      password: data.password,
    }),
  });
};
