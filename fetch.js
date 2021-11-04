// FETCH
// The fetch API/method allows the web browser to make HTTP requests to web servers
// Fetch is built into chrome and other browsers
// Fetch requests return a promise that must be consumed
// NOTE: Fetch is a newer and better process for making requests compared to XHR

// Example 1 (Consuming the Promise with '.then')
// making the request to the server using fetch
fetch(`https://friends-quotes-api.herokuapp.com/quotes/random`)
// Consuming the returned Promise ('res' holds the value of the response for the request)
.then(res => {
    console.log(`Fetch Example 1 was successful`);
    // The data we are requesting is in the res (aka response) object. However, to access it there is one more step.
    console.log(res);
    // Using the json() method which returns a promise that will have the requested data in it that can be accessed when the promise is consumed. Also, the json() method converts the data from JSON format to JavaScript
    return res.json();
})
    // Consuming the return promise from the 'res.json()' (the data parameter has the value of the requested data passed into it)
    .then(data => {
        console.log(data);
    })
// Catching error for a failed request in the err parameter
.catch(err => {
    console.log(`Fetch Example 1 was not successful`);
    console.log(err);
}); // <-- inlcude semi-colon here -- end of chain

// Example 2 (Async-Await)
async function fetchRandomQuote() {
    // Code inside the 'try' runs if the request is successful
    try {
    // Making the request to the server using Fetch
    const quoteResponse = await fetch(`https://friends-quotes-api.herokuapp.com/quotes/random`);
    
    console.log(`Fetch Example 2 was successful`);
    console.log(quoteResponse);
    // Using the .json() method which returns a promise that will have the requested data in it and can be accessed
    const quoteData = await quoteResponse.json();
    console.log(quoteData);
    // Catching the error for a failed request (NOTE: The error is set as the value for the 'err' parameter)
    // Code inside of the 'catch' runs if the request is not successful
    } catch (err) {
        console.log(`Fetch Example 2 was not successful`);
        console.log(err);
    }
}
fetchRandomQuote();