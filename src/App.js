import {useState, useEffect} from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

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
  const [bookSearch, setBookSearch] = useState('');
  const [data, setdata] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('http://openlibrary.org/search.json?author=brandon%20sanderson')
    .then((response) => response.json())
    .then((data) => setdata(data))
    .then(() => setLoading())
    .catch(setError);

  }, []);

  console.log(data)


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
      {data ? <TitleWrap>{data.docs.map((item, i) => <SearchItem key={i} item={item}/>)}</TitleWrap> : <p>No Data</p> }
    </Main>
  )
}

export default App;
