const proxyUrl = "https://api.allorigins.win/get?url=";
const api_url = `${proxyUrl}${encodeURIComponent('https://quotes.rest/qod?category=inspire')}`;
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API response data:", data); // Log the raw data

    // Update based on actual response structure
    if (data.contents && data.contents.quotes && data.contents.quotes.length > 0) {
      const quoteData = data.contents.quotes[0];
      quoteElement.innerText = quoteData.quote;
      authorElement.innerText = `— ${quoteData.author}`;
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
