const api_url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data)
  quote.innerText = data.content;
  author.innerText = data.author;
}

function tweet() {
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + '--- by ' + author.innerHTML, 'Tweet Window', 'width=600, height=300')
}

getQuote(api_url);
