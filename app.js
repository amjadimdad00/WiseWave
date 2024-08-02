const proxyUrl = "https://api.allorigins.win/get?url=";
const api_url = `${proxyUrl}${encodeURIComponent('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')}`;
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const quoteData = JSON.parse(data.contents); // Parse the contents

    console.log("API response data:", quoteData); // Log the data

    // Extract and display the quote and author
    if (quoteData && quoteData.quoteText && quoteData.quoteAuthor) {
      quoteElement.innerText = quoteData.quoteText;
      authorElement.innerText = `— ${quoteData.quoteAuthor}`;
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
