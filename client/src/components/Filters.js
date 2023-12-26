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
              <option value="Oppo">Oppo</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Sony">Sony</option>
              <option value="Huawei">Huawei</option>
              <option value="Realme">Realme</option>
              <option value="Nothing">Nothing</option>
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
              <option value="Snapdragon 888">Snapdragon 888</option>
              <option value="A14 Bionic">A14 Bionic</option>
              <option value="Exynos 2100">Exynos 2100</option>
              <option value="Kirin 9000">Kirin 9000</option>
              <option value="MediaTek Dimensity 1200">MediaTek Dimensity 1200</option>
              <option value="Apple A14 Bionic">Apple A14 Bionic</option>
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
              <option value="10,000">Less than Rs.10,000</option>
              <option value="20,000">Rs.10,000 - Rs.20,000</option>
              <option value="30,000">Rs.20,000 - Rs.30,000</option>
              <option value="35,000">Greater than Rs.30,000</option>
            </FilterOption>
          </FilterRow>
        </FilterSection>
  
        <ApplyFiltersButton onClick={handleFilterChange}>Apply Filters</ApplyFiltersButton>
      </FiltersContainer>
    );
  };
  
  export default Filters;
