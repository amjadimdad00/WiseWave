const proxyUrl = "https://api.allorigins.win/get?url=";
const api_url = `${proxyUrl}${encodeURIComponent('https://quotes.rest/qod?category=life')}`;
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Parse the response data
    const quoteData = JSON.parse(data.contents);
    if (quoteData.contents && quoteData.contents.quotes && quoteData.contents.quotes.length > 0) {
      const quote = quoteData.contents.quotes[0];
      quoteElement.innerText = quote.quote;
      authorElement.innerText = `— ${quote.author}`;
    } else {
      throw new Error('Unexpected data format');
    }
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
