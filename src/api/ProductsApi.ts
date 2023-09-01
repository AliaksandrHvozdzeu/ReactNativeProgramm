const API_URL =
  'https://demo.spreecommerce.org/api/v2/storefront/products?include=images';

const API_URL_SLUG =
  'https://demo.spreecommerce.org/api/v2/storefront/products';

export const getProductList = () =>
  fetch(API_URL).then(response => response.json());

export const getFilteredProductList = (value: string) =>
  fetch(`${API_URL}&filter[name]=${value}`).then(response => response.json());

export const getProductListByTag = (productSlug: string) =>
  fetch(`${API_URL_SLUG}/${productSlug}?include=images`).then(response =>
    response.json(),
  );

export const getProductListByTagWithFullIncludes = (productSlug: string) =>
  fetch(`${API_URL_SLUG}/${productSlug}?include=variants`).then(response =>
    response.json(),
  );

export const getProductById = (productId: string) =>
  fetch(
    'https://demo.spreecommerce.org/api/v2/storefront/products/' +
      productId +
      '?include=default_variant%2Cvariants%2Coption_types%2Cproduct_properties%2Ctaxons%2Cimages%2Cprimary_variant',
  ).then(response => response.json());

export const getCartsData = (token: string) =>
  fetch(
    'https://demo.spreecommerce.org/api/v2/storefront/cart?include=line_items,variants,variants.images,billing_address,shipping_address,user,payments,shipments,promotions',
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: 'Bearer ' + token,
      },
    },
  ).then(response => response.json());

export const getXSpreeToken = (token: string) =>
  fetch('https://demo.spreecommerce.org/api/v2/storefront/cart', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: 'Bearer ' + token,
    },
  }).then(response => response.json());

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
