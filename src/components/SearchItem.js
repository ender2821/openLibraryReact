
import react from 'react';
import styled from 'styled-components';

import defaultBook from './defaultBook.jpeg';

const SearchItem = (props) => {
  const item = props.item;

  const Item = styled.li`
    background: #EFEFEF;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    padding: 10px;
  `;

  const ItemPhoto = styled.img`
    display: block;
    width: 100%;
  `;

  const ItemText = styled.h3`
    display: block;
    margin-top: auto;
    padding: 15px;
    text-align: center;
    width: 100%;
  `;

  return (
    <Item>
      <ItemPhoto 
        src={item.hasOwnProperty('isbn') ? `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg` : defaultBook} 
        alt={item.title} 
      />
      <ItemText>{item.title}</ItemText>
    </Item>
  )
}

export default SearchItem;