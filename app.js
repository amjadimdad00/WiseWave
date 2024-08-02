const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerText = data.content;
    author.innerText = data.author;
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
