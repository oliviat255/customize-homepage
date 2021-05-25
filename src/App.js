import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
const KEY = process.env.REACT_APP_GOOGLE_API_KEY
const URI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.60037,-119.77567&radius=16093.4&keyword=dispensary&opennow=true&rankby=prominence&key=${KEY}`

var requestOptions = {
  method: 'GET', 
  redirect: 'follow',
}

export default function App() {
  const [dispensaries, setDispensaries] = useState(null);
  const fetchData = fetch(URI, requestOptions)
  .then(response => response.text())
  .then(result => JSON.parse(result))
  .then(json => setDispensaries(json.results))
  .catch(error => console.log('error', error));

  return (
    <div className="App">
      <h1>Local Favorites</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {dispensaries &&
          dispensaries.map((dispensary, index) => {
            // const cleanedDate = new Date(dispensary.released).toDateString();
            // const authors = dispensary.authors.join(', ')
            return (
              <div className="book">
                <h3>{dispensary.name}</h3>
                <div className="details">
                  <p>Rating: {dispensary.rating}</p>

                </div>
              </div>
            );
          })}
      </div>
      
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
