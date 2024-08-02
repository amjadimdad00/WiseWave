const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // CORS proxy
const api_url = `${proxyUrl}https://zenquotes.io/api/random`;
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quoteElement.innerText = data[0].q; // ZenQuotes returns an array with one object
    authorElement.innerText = `— ${data[0].a}`; // Author prefixed with an em dash
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.innerText = "Sorry, couldn't fetch a quote.";
    authorElement.innerText = "";
  }
}

function tweet() {
  const tweetText = encodeURIComponent(`${quoteElement.innerText} ${authorElement.innerText}`);
  window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, 'Tweet Window', 'width=600, height=300');
}

// Fetch a quote when the page loads
getQuote(api_url);
