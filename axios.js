// AXIOS (The best/easiest way to make requests)
// Axios is a JavaScript Library used to make HTTP requests (not built into browsers. Must include in your files/project)
// Axios also returns a promise that must be consumed
// Axios converts the return data from JSON to JavaScript (NOTE: This is not the case with 'fetch')
// Axios is built on top of fetch (AKA using fetch) and allows for the process of making requests simpler

// Example 1 (consuming the promise with '.then')
// Making the request to the server using Axios
axios
  .get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
  // Consuming the returned Promise ('res' holds the value of the returned response)
  .then((res) => {
    console.log(`Axios Example 1 was successful`);
    console.log(res);
    // With Axios, the data requested is inside the 'data' key of the returned JavaScript object
    console.log(res.data);
    console.log(res.data.quote);
  })
  // Catching error for a failed request in the 'err' parameter
  .catch((err) => {
    console.log(`Axios Example 1 was not successful`);
    console.log(err);
  });

// Example 2 (Using Async-Await)
async function randomQuote1() {
  try {
    // Making the request to the server using Axios
    const quote1 = await axios.get(
      `https://friends-quotes-api.herokuapp.com/quotes/random`
    );
    console.log(`Axios Example 2 was successful`);
    console.log(quote1);
    // Catching error for a failed request in the 'err' parameter
  } catch (err) {
    console.log(`Axios Example 2 was not successful`);
    console.log(err);
  }
}
randomQuote1();

// Example 3 (Using Axios, Async/await, and DOM Manipulation)
const body = document.querySelector(`body`);
const firstH1 = document.createElement(`h1`);
firstH1.innerText = `Example 3`;
const secondH1 = document.createElement(`h4`);
const thirdH1 = document.createElement(`h4`);
body.append(firstH1);
body.append(secondH1);
body.append(thirdH1);

async function displayRandomQuote1() {
  try {
    const quote2 = await axios.get(
      `https://friends-quotes-api.herokuapp.com/quotes/random`
    );
    console.log(`Axios Example 2 was successful`);
    console.log(quote2);
    console.log(quote2.data);
    // Displays the value for the 'character' and adds it into the secondH1 element
    // Displays the value for the 'quote' and adds it into the thirdH1 element
    secondH1.innerText = quote2.data.character;
    thirdH1.innerHTML = quote2.data.quote;
    // Catching error for a failed request in the 'err' parameter
  } catch (err) {
    console.log(`Axios Example 2 was not successful`);
    console.log(err);
  }
}
displayRandomQuote1();

// Example 4 (Using Parameter(s) in a URL/Endpoint)
// NOTE: Using the "body" variable from Example 3
const fourthH1 = document.createElement(`h1`);
fourthH1.innerText = `Example 4`;
body.append(fourthH1);

// Building out Endpoint/URL
const baseURL1 = `https://friends-quotes-api.herokuapp.com`;
const endpoint1 = `/quotes/`;
// The value being set here for num determines the value that is plugged in for the num parameter in the endpoint provided by the API
const num = 5;
// Concatenating values/strings together to build out full endpoint (NOTE: The number value set for "num" will be converted into a string when concatenated to other string values)
const fullEndpoint1 = baseURL1 + endpoint1 + num;
// Same as above
// const fullEndpoint1 = `https://friends-quotes-api.herokuapp.com/quotes/5`;

async function displayRandomQuote2() {
  try {
    // Plugging in the created/built URL/Endpoint into the Axios GET request
    const quote3 = await axios.get(fullEndpoint1);
    console.log(`Axios Example 4 was Successful`);
    // The value for the data key below is an array of objects (AKA Friends Quotes)
    console.log(quote3.data);
    // Accessing the object (AKA Friends Quote) at index of zero in the array that is returned
    console.log(quote3.data[0]);
    // Accessing the values for the keys in the object at index of zero
    console.log(quote3.data[0].character);
    console.log(quote3.data[0].quote);
    // Setting the array of objects/quotes to the arrayOfQuotes variable
    const arrayOfQuotes = quote3.data;
    // Creating the number variable that will be used to display a number next to each quote on the webpage
    let number = 1;
    // Using a for of loop to loop through the array of objects. Also, the value for 'q' each time the code in the loop runs will be an object in the arrayOfQuotes array
    for (q of arrayOfQuotes) {
      console.log(q);
      const newH1 = document.createElement(`h4`);
      // Accessing/using the values inside of the object that is currently being passed in for 'q' to set the innerText on the created h1 element.(NOTE: Accessing the values by referencing the key/property names in the object which are 'character' and 'quote')
      newH1.innerText = `${number}) "${q.quote}" - ${q.character}`;
      fourthH1.insertAdjacentElement('afterend', newH1);
      number++;
    }
  } catch (err) {
    console.log(`Axios Example 4 was NOT Successful`);
    console.log(err);
  }
}
displayRandomQuote2();

// Example 5 (Request with a query string)
// NOTE: Using the "body" variable from Example 3
// USING THE TV MAZE API (https://www.tvmaze.com/api)
const seventhH1 = document.createElement(`h1`);
const eighthH1 = document.createElement(`h1`);
const p = document.createElement(`p`);
body.append(seventhH1);
body.append(eighthH1);
body.append(p);

// Building a URL/Endpoint with a query string
const baseURL2 = `https://api.tvmaze.com`;
const endpoint2 = `/search/shows?q=`;
// The value being set to the query string variable is plugged in for the value of the query string (NOTE: The returned data is determined by what is set as this value)
const queryString = `loki`;
const fullEndpoint2 = baseURL2 + endpoint2 + queryString;
// Same as above
// const fullEndpoint2 = `https://api.tvmaze.com/search/shows?q=loki`;

// Using an arrow function in this example
async function getShow() {
  try {
    // Plugging in the created URL/Endpoint for the Axios request
    const show = await axios.get(fullEndpoint2);
    console.log(`Axios Example 5 was successful`);
    // Setting the innerText value for the seventhH1 element created at the start of this example
    seventhH1.innerText = `Example 5`;
    console.log(show.data);
    // Setting the value of the array of objects/shows to the arrayOfResults variable 
    const arrayOfResults = show.data;
    // Using a For Of loop to access data in each one of the objects/shows in the arrayOfResults array. Also, displaying the data on the webpage for each show.
    for (s of arrayOfResults) {
      console.log(s);
      console.log(s.show.name);
      const h2 = document.createElement(`h2`);
      const div = document.createElement(`div`);
      const image = document.createElement(`img`);
    //   Accessing the value for the 'name' key/property which is a string value
      h2.innerText = s.show.name;
    //   Accessing the value for the 'summary' key/property which is a string of HTML
      div.innerHTML = s.show.summary;
    //   Accessing the value for the 'medium' key/property which is a link to an image
      image.src = s.show.image.medium;
      body.append(h2);
      body.append(div);
      body.append(image);
    }
  } catch (err) {
      console.log(`Axios Example 5 was not successful`);
      console.log(err);
  }
}
getShow();
