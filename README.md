# Blackbird Interview

I created this project to demonstrate my ability to drive technology for an interview at [Blackbird](https://blackbirdgo.com/) on 5/25/21. 

## Project Purpose 
This project serves as a POC for customizing a homepage to include local favorites. Local favorites are dispensaries nearby a latitude and longtitude coordinate. For the purposes of this POC the longititude and latitude is hardcoded to one near Reno, NV - Blackbird HQ location. The data is retrieved using the google places api and sorted by prominence. In the future, the longititude and latitude coordinates can be converted from user inputted address or zipcode using the geocoder provided by the google maps API. 

## Tech Stack 
Frontend: React, Javascript 
Backend: Google Maps Platform 

## Work Flow
To run this application you will need an API key for google places and enable geocoding. Instructions can be found on the [documentation](https://developers.google.com/maps/documentation/places/web-service/get-api-key). Then you can add that key as an environment variable. Once you have done that you can run the application through `npm i` and `npm start`. 
## Limitations 
If this were to be implemented the backend would need to connect to the Blackbird backend. An example for how I would design such a backend can be found here. 
https://drive.google.com/file/d/1kwdNfnILqK19PM931lZsoVv0seY_74TD/view?usp=sharing
