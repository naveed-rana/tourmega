import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {styles} from './GooglePlaceSearchStyle';
import {googleApiConfig} from '../../config/GoogleSearchApi';

const GooglePlaceSearch = ({setPlaceId}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails={true}
      styles={styles}
      query={googleApiConfig}
      debounce={200}
    />
  );
};

export default GooglePlaceSearch;
