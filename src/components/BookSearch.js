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

const BookSearch = (props) => {

  return (
    <SearchButton method="get" >
      <SearchLabel htmlFor="search-field"></SearchLabel>
      <SearchInput
        value={props.bookSearch}
        onChange={props.onSearchHandler}
        type="text"
        placeholder="Search for a book"
        name="search"
        id="search-field"
      />
      <SearchButton onClick={props.onSubmitHandler}>Search</SearchButton>
    </SearchButton>
  )
} 

export default BookSearch