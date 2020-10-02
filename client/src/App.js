import React from 'react';

import './App.css';
import Row from './Row'
import request from './request'


function App() {
  return (
    <div className="App">
      <Row title="Bingers ORIGINALS" isLargeRow fetchUrl={request.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={request.fetchTrending} />
			<Row title="Top Rated" fetchUrl={request.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
