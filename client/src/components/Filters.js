// src/components/Filters.js

import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const FiltersContainer = styled.div`
  ${tw`p-4 border border-gray-300 rounded-md`}
`;

const FilterSection = styled.div`
  ${tw`mb-4`}
`;

const FilterRow = styled.div`
  ${tw`flex flex-col md:flex-row md:items-center `}
`;

const FilterHeading = styled.h2`
  ${tw`text-lg font-semibold mb-1 md:mb-0 md:mr-4`}
`;

const FilterOption = styled.select`
  ${tw`w-full md:w-auto p-2 border border-gray-300 rounded-md mt-4`}
`;

const ApplyFiltersButton = styled.button`
  ${tw`mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none`}
`;

const Filters = ({ onFilterChange }) => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedOS, setSelectedOS] = useState('');
    const [selectedProcessor, setSelectedProcessor] = useState('');
    const [selectedRAM, setSelectedRAM] = useState('');
    const [selectedInternalMemory, setSelectedInternalMemory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
  
    const handleFilterChange = () => {
      // Pass the selected filters to the parent component
      onFilterChange({
        brand: selectedBrand,
        os: selectedOS,
        processor: selectedProcessor,
        ram: selectedRAM,
        internalMemory: selectedInternalMemory,
        priceRange: selectedPriceRange,
      });
    };
  
    return (
      <FiltersContainer>
        <FilterSection>
          <FilterRow>
            <FilterHeading>Brand</FilterHeading>
            <FilterOption
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">All Brands</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Google">Google</option>
              {/* Add more brands as needed */}
            </FilterOption>
          </FilterRow>
        </FilterSection>
  
        <FilterSection>
          <FilterRow>
            <FilterHeading>Operating System</FilterHeading>
            <FilterOption
              value={selectedOS}
              onChange={(e) => setSelectedOS(e.target.value)}
            >
              <option value="">All OS</option>
              <option value="iOS">iOS</option>
              <option value="Android">Android</option>
              <option value="Other">Other</option>
              {/* Add more OS options as needed */}
            </FilterOption>
          </FilterRow>
        </FilterSection>
  
        <FilterSection>
          <FilterRow>
            <FilterHeading>Processor</FilterHeading>
            <FilterOption
              value={selectedProcessor}
              onChange={(e) => setSelectedProcessor(e.target.value)}
            >
              <option value="">All Processors</option>
              <option value="Snapdragon 865">Snapdragon 865</option>
              <option value="A14 Bionic">A14 Bionic</option>
              <option value="Exynos 990">Exynos 990</option>
              {/* Add more processor options as needed */}
            </FilterOption>
          </FilterRow>
        </FilterSection>
  
        <FilterSection>
          <FilterRow>
            <FilterHeading>RAM</FilterHeading>
            <FilterOption
              value={selectedRAM}
              onChange={(e) => setSelectedRAM(e.target.value)}
            >
              <option value="">All RAM Sizes</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              <option value="8GB">8GB</option>
              <option value="12GB">12GB</option>
              {/* Add more RAM options as needed */}
            </FilterOption>
          </FilterRow>
        </FilterSection>
  
        <FilterSection>
          <FilterRow>
            <FilterHeading>Internal Memory</FilterHeading>
            <FilterOption
              value={selectedInternalMemory}
              onChange={(e) => setSelectedInternalMemory(e.target.value)}
            >
              <option value="">All Internal Memory Sizes</option>
              <option value="16GB">16GB</option>
              <option value="32GB">32GB</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
              {/* Add more internal memory options as needed */}
            </FilterOption>
          </FilterRow>
        </FilterSection>
  
        <FilterSection>
          <FilterRow>
            <FilterHeading>Price Range</FilterHeading>
            <FilterOption
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="0-500">$0 - $500</option>
              <option value="501-1000">$501 - $1000</option>
              <option value="1001-2000">$1001 - $2000</option>
              {/* Add more price ranges as needed */}
            </FilterOption>
          </FilterRow>
        </FilterSection>
  
        <ApplyFiltersButton onClick={handleFilterChange}>Apply Filters</ApplyFiltersButton>
      </FiltersContainer>
    );
  };
  
  export default Filters;
