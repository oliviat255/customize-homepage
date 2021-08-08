import React, { useState } from "react";

const PLACES_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY
const GEOCODE_KEY = process.env.REACT_APP_GEOCODE_API_KEY
const getOptions = {
    method: 'GET', 
    redirect: 'follow',
}
const postOptions = { 
  method: 'POST', 
  redirect: 'follow'
}


/**
 * Function that tests user inputted zipcode to see if it is a valid US zipcode. 
 * @param {*} zipcode User inputted zipcpde 
 * @returns {boolean} Boolean to tell zipcode is valid.
 */
function isValidUSZip(zipcode) { 
  // Regex from https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation?answertab=votes#tab-top
  let re = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/); 
  return re.test(zipcode);
}


function Form(props) {
  const [zip, setZip] = useState('');
  const [dispensaries, setDispensaries] = useState(null);
  

  function handleSubmit(e) {
    e.preventDefault();
    // Validate zipcode 
    if (!isValidUSZip(zip)) {
      // TODO: make error handling better here 
      return; 
    }
    setZip(zip);
    
    // Convert zipcode to latitude and longtitude coordinates 
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${GEOCODE_KEY}`, postOptions)
      .then(function(response) { 
        return response.text(); 
      }).then(function (data){
        let resp = JSON.parse(data); 
        let lat = resp.results[0].geometry.location.lat
        let lng = resp.results[0].geometry.location.lng
        let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=16093.4&keyword=dispensary&opennow=true&rankby=prominence&key=${PLACES_KEY}`
        return fetch(url, getOptions); 
      }).then(function (response){
        setDispensaries(response.results)
        console.log("response", response.json()); 
        return response; 
      }).catch(function(error){ 
        // TODO: make error handling better here
        console.log("error", error);
      });
  }

  function handleChange(e) {
    setZip(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={zip}
        onChange={handleChange}
      />
      <button type="submit" >
        Search
      </button>
    </form>
  );
}

export default Form;