const QUOTEBANK = [
    {
        quote: "If at first you don't succeed, try, try again",
        author: "W. E. Hickson"
    },
    {
        quote: "The only way to do great work is to love what you do",
        author: "Steve Jobs"
    },
    {
        quote: "Be the change that you wish to see in the world",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Life is what happens when you're busy making other plans",
        author: "John Lennon"
    },
    {
        quote: "I don't count the sit-ups. I only start counting when it starts hurting because they're the only ones that count. That's what makes you a champion",
        author: "Muhammad Ali"
    },
    {
        quote: "To be successful you have to be selfish, or else you never achieve. And once you get to your highest level, then you have to be unselfish",
        author: "Michael Jordan"
    },
    {
        quote: "Frankly, my dear, I don't give a damn",
        author: "Rhett Butler"
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration",
        author: "Thomas Edison"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author: "Nelson Mandela"
    },
    {
        quote: "Life is a succession of lessons which must be lived to be understood",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated",
        author: "Maya Angelou"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game",
        author: "Babe Ruth"
    },
    {
        quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not",
        author: "Oscar Wilde"
    },
    {
        quote: "The only impossible journey is the one you never begin",
        author: "Tony Robbins"
    }
]


window.onload = init;
function init () {
    generateQuote();
}


function generateQuote() {
    let quoteIndex = Math.floor(Math.random() * QUOTEBANK.length);
    let quoteFromBank = QUOTEBANK[quoteIndex].quote;
    let authorFromBank = QUOTEBANK[quoteIndex].author;
    let tweetLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22" + quoteFromBank.replace(/ /g, "%20") + " - " + authorFromBank.replace(/ /g, "%20");
    document.getElementById("tweet-quote").href = tweetLink;
    document.getElementById("text").innerText = quoteFromBank;
    document.getElementById("author").innerText = authorFromBank;
    console.log(tweetLink);
}