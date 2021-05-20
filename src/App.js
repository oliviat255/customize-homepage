import React, { useState, useEffect } from "react";
import "./App.css";
import Search from './Search';


function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const initialCityState = { city: "", state: "" };
  // const [cityState, setCityState] = useState(initialCityState);
  // const [zipcode, setZipcode] = useState("");

  return (
    <div className="App">
      <h1>City/State Lookup Tool</h1>
      <Search 
         searchQuery={searchQuery}
         setSearchQuery={setSearchQuery}
         />
    </div>
  );
}

export default App;