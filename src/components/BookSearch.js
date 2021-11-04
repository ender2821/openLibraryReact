import React from 'react';
import styled from 'styled-components';

const SearchContain = styled.form`

`;

const SearchInput = styled.input`

`;

const SearchButton = styled.button`

`;

const SearchLabel = styled.label`

`;

const FilterLabel = styled.label`

`;

const SearchFilter = styled.input`

`;

const BookSearch = (props) => {

  return (
    <SearchContain method="get" >
      <SearchLabel htmlFor="search-field">Search for books</SearchLabel>
      <SearchInput
        value={props.bookSearch}
        onChange={props.onSearchHandler}
        type="text"
        placeholder="Search for books"
        name="search"
        id="search-field"
      />
      <SearchButton onClick={props.onSubmitHandler}>Search</SearchButton>
      <FilterLabel>Filter Search</FilterLabel>
      <SearchFilter 
        value={props.filterSearch}
        onChange={props.onFilterHandler}
        type="text"
        placeholder="Filter Search"
        name="Filter"
        id="search-filter"
      />
    </SearchContain>
  )
} 

export default BookSearch