import React from 'react';
import styled from 'styled-components';

const SearchContain = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  border: 1px solid #878787;
  border-radius: 0;
  margin-right: 10px;
  padding: 6px 8px 6px 8px;
`;

const SearchButton = styled.button`
  background: #EFEFEF;
  border: 1px solid #878787;
  border-radius: 0;
  cursor: pointer;
  padding: 6px 8px 6px 8px;
  transition: background 125ms ease;

  &:hover {
    background: #adadad;
  }
`;

const SearchFilter = styled.input`
  border: 1px solid #878787;
  border-radius: 0;
  margin-left: auto;
  padding: 6px 8px 6px 8px;
`;

const SearchLabel = styled.label`
  left: -9999px;
  position: absolute;
  visibility: hidden;
`;

const FilterLabel = styled.label`
  left: -9999px;
  position: absolute;
  visibility: hidden;
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