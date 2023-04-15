import React from 'react';
import CountryDropdown from './CountryDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';

const Search = () => {
  return <div>
    <CountryDropdown/>
    <PropertyDropdown/>
    <PriceRangeDropdown/>
  </div>;
};

export default Search;
