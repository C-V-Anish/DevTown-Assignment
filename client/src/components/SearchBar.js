import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Filters from "./Filters";
import axios from "axios";

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

const AllPhonesButton = styled.button`
  ${tw`mt-2 md:mt-0 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none`}
`;

const SearchResultContainer = styled.div`
  ${tw`mt-4 flex flex-wrap justify-center`}
`;

const SearchBar = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [allPhoneSearch, setallPhoneSearch] = useState(true);

  const handleSearch = (filters) => {
    if (searchText.trim() !== "") {
      axios
        .get(`http://localhost:6001/api/phones/${searchText}`)
        .then((response) => {
          console.log("Received data from the backend:", response.data);
          setSearchResults(response.data.phones);
        })
        .catch((error) => {
          console.error("There was a problem with the axios request:", error);
          setSearchResults([]);
        });
    }
    setSearchPerformed(true);
  };

  const showPhones = () => {
    axios
      .get(`http://localhost:6001/api/phones`)
      .then((response) => {
        console.log("Received data from the backend:", response.data);
        setSearchResults(response.data.phones);
        setallPhoneSearch(true);
      })
      .catch((error) => {
        console.error("There was a problem with the axios request:", error);
        setSearchResults([]);
        setallPhoneSearch(true);
      });
  };

  const handleFiltersChange = (filters) => {
    console.log("Filters changed:", filters);
  };

  const handleFilters = () => {
    console.log("Toggling Filters...");
    setIsFiltersVisible(!isFiltersVisible);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <CenteredContainer>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton onClick={() => handleSearch({})}>Search</SearchButton>
        <FiltersButton onClick={handleFilters}>Filters</FiltersButton>
        <AllPhonesButton onClick={showPhones}>Show All Phones</AllPhonesButton>
      </SearchContainer>
      {isFiltersVisible && <Filters onFilterChange={handleFiltersChange} />}
      {(searchPerformed && searchText.trim() === "") || !allPhoneSearch ? (
        <p>No phone model had been entered.</p>
      ) : searchResults.length > 0 ? (
        <>
          <h2>Search Results:</h2>
          <SearchResultContainer>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "100px",
              }}
            >
              {searchResults.map((phone, index) => (
                <div
                  key={index}
                  style={{
                    margin: "8px",
                    padding: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <p>{phone}</p>
                </div>
              ))}
            </div>
          </SearchResultContainer>
        </>
      ) : (
        searchPerformed && <p>No phones found for the specified search.</p>
      )}
    </CenteredContainer>
  );
};

export default SearchBar;
