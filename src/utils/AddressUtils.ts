import {Component} from 'react';
import Geocode from 'react-geocode';
import {GOOGLE_MAP_API} from '@env';

class AddressUtils extends Component {
  static getBillingAddress(orderIncluded: []) {
    const zipcode = orderIncluded[4].attributes.zipcode;
    const countryIso3 = orderIncluded[4].attributes.country_iso3;
    const stateName = orderIncluded[4].attributes.state_name;
    const city = orderIncluded[4].attributes.city;
    const address1 = orderIncluded[4].attributes.address1;
    const address2 = orderIncluded[4].attributes.address2;
    const full: string = `${zipcode}, ${countryIso3}, ${stateName}, ${city}, ${address1}, ${address2}`;
    return full;
  }

  static getBillingCoordinatesByAddress(orderIncluded: []) {
    const zipcode = orderIncluded[4].attributes.zipcode;
    const city = orderIncluded[4].attributes.city;
    const address1 = orderIncluded[4].attributes.address1;
    const address2 = orderIncluded[4].attributes.address2;
    const full: string = `${zipcode}, ${city}, ${address1}, ${address2}`;

    Geocode.setApiKey(GOOGLE_MAP_API);
    Geocode.fromAddress(full).then(response => {
      const {lat, lng} = response.results[0].geometry.location;
      return {
        latitude: lat,
        longitude: lng,
        address: full,
      };
    });
  }
}

export default AddressUtils;
