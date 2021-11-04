// XHR (aka XML HTTP REQUEST)
// The old way of making requests
// XMLHttpRequest is based solely on callbacks (no promises)

// Create new request
const request = new XMLHttpRequest();

request.onload = () => {
    // callback function for a successful request (aka resolve)
    console.log(`XHR was successful`);
    // accessing the returned data/response which is in JSON format
    console.log(request.response);
    // converting the returned data from JSON to JavaScript
    const friendsQuote1 = JSON.parse(request.response);
    console.log(friendsQuote1);
    console.log(friendsQuote1.quote);
    console.log(friendsQuote1.character);
}

// callback function for a failed request (aka rejected)
request.onerror = () => {
    console.log(`XHR was NOT successful`);
}

// opens the request (request type/method -- url/endpoint)
request.open(`GET`, `https://friends-quotes-api.herokuapp.com/quotes/random`);

// sends out request 
request.send();