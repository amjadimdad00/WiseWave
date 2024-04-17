const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerText = data.content;
  author.innerText = data.author;
}

function tweet() {
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + '--- by ' + author.innerHTML, 'Tweet Window', 'width=600, height=300')
}

getQuote(api_url);
