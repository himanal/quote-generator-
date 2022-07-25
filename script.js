const quoteContainer=document.getElementById('quote-container ')
const quoteText=document.getElementById('quote')
const authorText=document.getElementById('author')
const twitterBtn=document.getElementById('twitter')
const newQuoteBtn=document.getElementById('new-quote')

// show New Quote
function newQuote(){
    // pick a random Quote From ApiQuotes array
    const Quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    if(Quote.author===null){
        
        authorText.textContent="unknown person"
    }else{

        authorText.textContent=Quote.author
    }

    if(Quote.text.length >50 ){

        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')

    }
    quoteText.textContent=Quote.text

}

newQuoteBtn.addEventListener("click",newQuote)

newQuote()

function tweetQuote(){

    const tweetUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(tweetUrl, '_blank')

}

twitterBtn.addEventListener('click',tweetQuote)