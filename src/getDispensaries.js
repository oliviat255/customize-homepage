const KEY = process.env.GOOGLE_API_KEY

// todo - stop hardcoding url
const BASE_URI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.60037,-119.77567&radius=16093.4&keyword=dispensary&key=${KEY}&opennow=true&rankby=prominence`

var requestOptions = {
    method: 'GET', 
    redirect: 'follow'
}


export default function getDispensaryByZipcode (zipcode) { 
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.60037,-119.77567&radius=16093.4&keyword=dispensary&key=${KEY}&opennow=true&rankby=prominence`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    // try { 
    //     // const response =  fetch(`${BASE_URI}`, requestOptions); 

    //     // if (!response.ok){ 
    //     //     return {statusCode: response.status, body: response }; 
    //     // }
    //     // const data = response.JSON
    //     // return { 
    //     //     statusCode: 200,git 
    //     //     body: data
    //     // }; 
    // } catch (err) { 
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ msg: err.message }),
    //       };
    // }
};