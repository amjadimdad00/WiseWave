const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const api_url = `${proxyUrl}https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerText = data.quoteText;
    author.innerText = data.quoteAuthor;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quote.innerText = "Sorry, couldn't fetch a quote.";
    author.innerText = "";
  }
}

function tweet() {
    const tweetText = encodeURIComponent(`${quote.innerText} --- by ${author.innerText}`);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, 'Tweet Window', 'width=600, height=300');
}

getQuote(api_url);
