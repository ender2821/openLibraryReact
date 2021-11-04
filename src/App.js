import {useState, useEffect} from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

import BookSearch from './components/BookSearch';
import SearchItem from './components/SearchItem';

const Main = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1600px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
`;

const Loading = styled.h2`
  font-size: 1.8rem;
  text-align: center;
`;

const TitleWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 0;
`;

function App() {

  // initial app states
  const [data, setdata] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //book search
  const [bookSearch, setBookSearch] = useState('');
  const [search, setSearch] = useState();
  const onSearchHandler = event => {
    setBookSearch(event.target.value);
  }
  const onSubmitHandler = () => {
    const searchValue = encodeURIComponent(bookSearch.trim()).replace(/ /g, '+');
    setSearch(searchValue);
  }

  useEffect(() => {
    setLoading(true);
    fetch(`http://openlibrary.org/search.json?q=${search}`)
    .then((response) => response.json())
    .then((data) => setdata(data))
    .then(() => setLoading())
    .catch(setError);

  }, [search]);

  let bookData = data.docs;

  // Filter Search Result List
  const [bookFilter, setBookFilter] = useState('');
  const [bookFilterResults, setBookFilterResults] = useState([])
  const onFilterHandler = event => {
    setBookFilter(event.target.value);
    if(bookFilter !== '') {
      const newBookData = bookData.filter((book) => {
        return Object.values(book).join('').toLowerCase().includes(bookFilter.toLowerCase())
      });
      setBookFilterResults(newBookData);
    } else {
      setBookFilterResults(bookData);
    }
  }

  console.log(data);

  if(loading){
    return (
      <Main>
        <GlobalStyle />
        <Loading>Loading...</Loading>
      </Main>
    )
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return (
    <Main>
      <GlobalStyle />
      <Title>Open Books</Title>
      <BookSearch 
        onSearchHandler={onSearchHandler} 
        onSubmitHandler={onSubmitHandler} 
        bookSearch={bookSearch}
        onFilterHandler={onFilterHandler} 
        bookFilter={bookFilter}
      />
      { bookFilter.length < 1 ?
        data ? <TitleWrap>{bookData.map((item, i) => <SearchItem key={i} item={item}/>)}</TitleWrap> : <p>No Data</p> 
        : data ? <TitleWrap>{bookFilterResults.map((item, i) => <SearchItem key={i} item={item}/>)}</TitleWrap> : <p>No Data</p> 
      }
    </Main>
  )
}

export default App;
