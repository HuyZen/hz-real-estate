import React from 'react';
import CountryDropdown from './CountryDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';

const Search = () => {
  return <div className=''>
    <h1 className='text-4xl font-semibold max-w-[480px] leading-none mb-6'>
      <span className='text-violet-700'>Rent</span> Your Dream House With Us.
    </h1>
    <CountryDropdown/>
    <PropertyDropdown/>
    <PriceRangeDropdown/>
  </div>;
};

export default Search;
