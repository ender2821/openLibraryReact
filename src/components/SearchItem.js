
import react from 'react';
import styled from 'styled-components';

import defaultBook from './defaultBook.jpeg';

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
font-size: 1.6rem;
margin-top: auto;
padding: 15px 15px 0;
text-align: center;
width: 100%;
`;

const ItemAuthor = styled.p`
  padding: 10px;
  text-align: center;
  font-size: 1.2rem;
`;

const SearchItem = (props) => {
  const item = props.item;
  return (
    <Item>
      <ItemPhoto 
        src={item.hasOwnProperty('isbn') ? `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg` : defaultBook} 
        alt={item.title} 
      />
      <ItemText>{item.title}</ItemText>
      <ItemAuthor>{item.hasOwnProperty('author_name') ? item.author_name.join(' / ') : ''}</ItemAuthor>
    </Item>
  )
}

export default SearchItem;