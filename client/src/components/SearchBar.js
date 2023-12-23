import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Filters from './Filters';

const CenteredContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const SearchContainer = styled.div`
  ${tw`flex flex-col items-center mb-4 md:flex-row md:items-center md:space-x-4`}
`;

const SearchInput = styled.input`
  ${tw`border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500`}
`;

const SearchButton = styled.button`
  ${tw`mt-2 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none`}
`;

const FiltersButton = styled.button`
${tw`mt-2 md:mt-0 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none`}
`;

const SearchBar = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleSearch = () => {
    console.log('Searching...');
  };

  const handleFilters = () => {
    console.log('Toggling Filters...');
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <CenteredContainer>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search..." />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        <FiltersButton onClick={handleFilters}>Filters</FiltersButton>
      </SearchContainer>
      {isFiltersVisible && <Filters />}
    </CenteredContainer>
  );
};

export default SearchBar;