const quoteContainer = document.querySelector(".quote");
const getQuoteBtn = document.querySelector(".generateQuote");
const loader = document.querySelector('.loader')
const author = document.querySelector('.author')
loader.classList.add('hidden')

async function getResponse() {
    loader.classList.remove('hidden')
    getQuoteBtn.classList.add('hidden')
  const response = await fetch("https://type.fit/api/quotes", {
    headers: {
      Accept: 'application/json'
    }
  });

const data = await response.json()
loader.classList.add('hidden')
getQuoteBtn.classList.remove('hidden')
return data ;

}


async function clickForQuote(){
    const data = await getResponse();
    const index = Math.floor(Math.random()*data.length);
const quote = data[index].text;
const authorName = data[index].author;
    quoteContainer.innerHTML= quote;
    author.innerHTML= ": "+authorName;
    if(authorName ==null){
        author.innerHTML = "Anonymous";
    }
}

getQuoteBtn.addEventListener('click', clickForQuote)