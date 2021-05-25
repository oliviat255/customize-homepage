const KEY = process.env.REACT_APP_GOOGLE_API_KEY
const URI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.60037,-119.77567&radius=16093.4&keyword=dispensary&opennow=true&rankby=prominence&key=${KEY}`

var requestOptions = {
    method: 'GET', 
    redirect: 'follow',
}
// var geocoder; 
// function getLatLngByZipcode(zipcode) 
// {
//     geocoder = new google.maps.Geocoder();
//     var address = zipcode;
//     geocoder.geocode({ 'address': 'zipcode '+address }, function (results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//             var latitude = results[0].geometry.location.lat();
//             var longitude = results[0].geometry.location.lng();
//             alert("Latitude: " + latitude + "\nLongitude: " + longitude);
//         } else {
//             alert("Request failed.")
//         }
//     });
//     return `${latitude},${longitude}`;
// }

function constructUrl(zipcode) { 
    // convert zipcode to latLong
    // var latLng = getLatLngByZipcode(zipcode)
    var latLng = "39.60037,-119.77567"
    const URI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latLng}&radius=16093.4&keyword=dispensary&opennow=true&rankby=prominence&key=${KEY}`
} 

export default function getDispensaryByZipcode (zipcode) { 
    console.log("zipcode", zipcode)
    constructUrl(zipcode)
    fetch(URI, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};